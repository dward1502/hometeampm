import { NextRequest, NextResponse } from "next/server";
import { transportEmail } from "@/lib/nodemail";
import multer from "multer";
import { IncomingMessage } from "http";
interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	mobileNumber: string;
	company: string;
	city: string;
	address: string;
	state: string;
	trade: string;
	serviceArea: string;
	info: string;
	w9form: Express.MulterFile;
	workersComp: Express.MulterFile;
	insurance: Express.MulterFile;
	selectedOptions: { [key: string]: boolean };
}

function generateHTML(data: FormValues) {
	return `<h1>Quote Request</h1>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone Number:</strong> ${data.phoneNumber || "N/A"}</p>
    <p><strong>City:</strong> ${data.city}</p>
		<p><strong>State:</strong> ${data.state}</p>
		<p><strong>Address:</strong> ${data.address}</p>
		<p><strong>Trade:</strong> ${data.trade}</p>
		<p><strong>Service Area:</strong> ${data.serviceArea}</p>
    <p><strong>Info:</strong> ${data.info}</p>`;
}
const multerMiddleware = multer().fields([
	{ name: "w9form", maxCount: 1 },
	{ name: "workersComp", maxCount: 1 },
	{ name: "insurance", maxCount: 1 },
]);
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
		const attachments = [
			data.w9form && { filename: data.w9form.originalname, content: data.w9form.buffer },
			data.workersComp && { filename: data.workersComp.originalname, content: data.workersComp.buffer },
			data.insurance && { filename: data.insurance.originalname, content: data.insurance.buffer },
		].filter(Boolean);

		await transportEmail.sendMail({
			from: "hometeampmemail@gmail.com",
			to: "info@hometeampm.com",
			subject: "Vendor Application",
			html: emailHTML,
			attachments,
		});
		return NextResponse.json(responseData);
	} catch (err) {
		console.error("Error processing request", err);
		return NextResponse.json({ message: "Error processing request", err }, { status: 500 });
	}
}
