import { NextRequest, NextResponse } from "next/server";
import { transportEmail } from "@/lib/nodemail";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	user: string;
	reason: string;
	message: string;
	terms: boolean;
}

function generateHTML(data: FormValues) {
	return `<h1>Quote Request</h1>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone Number:</strong> ${data.phoneNumber || "N/A"}</p>
    <p><strong>User:</strong> ${data.user}</p>
		<p><strong>Reason:</strong> ${data.reason}</p>
    <p><strong>Message:</strong> ${data.message}</p>`;
}

export async function POST(request: NextRequest) {
	try {
		const data: FormValues = await request.json();
		const responseData = {
			message: "Form Submitted successfuly",
		};

		const emailHTML = generateHTML(data);
		await transportEmail.sendMail({
			from: "hometeampmemail@gmail.com",
			to: "info@hometeampm.com",
			subject: "Contact Us",
			html: emailHTML,
		});
		return NextResponse.json(responseData);
	} catch (err) {
		console.error("Error processing request", err);
		return NextResponse.json({ message: "Error processing request", err }, { status: 500 });
	}
}
