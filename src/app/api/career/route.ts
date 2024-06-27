import { NextRequest, NextResponse } from "next/server";
import { transportEmail } from "@/lib/nodemail";
import multer from "multer";
import { IncomingMessage } from "http";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	resume: Express.MulterFile;
	message: string;
}

function generateHTML(data: FormValues) {
	return `<h1>Quote Request</h1>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone Number:</strong> ${data.phoneNumber || "N/A"}</p>    
    <p><strong>Message:</strong> ${data.message}</p>`;
}
const multerMiddleware = multer().single("resume");
function runMiddleware(req: IncomingMessage, res: any, fn: any) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}
			return resolve(result);
		});
	});
}

export async function POST(request: NextRequest) {
	try {
		const req = request as any;
		const data: FormValues = await request.json();
		await runMiddleware(req, {}, multerMiddleware);
		const responseData = {
			message: "Form Submitted successfuly",
		};

		const emailHTML = generateHTML(data);
		const attachments = data.resume
			? [
					{
						filename: data.resume.originalname,
						content: data.resume.buffer,
					},
			  ]
			: [];
		await transportEmail.sendMail({
			from: "hometeampmemail@gmail.com",
			to: "dward1502@gmail.com",
			subject: "Career Request",
			html: emailHTML,
			attachments
		});
		return NextResponse.json(responseData);
	} catch (err) {
		console.error("Error processing request", err);
		return NextResponse.json({ message: "Error processing request", err }, { status: 500 });
	}
}
