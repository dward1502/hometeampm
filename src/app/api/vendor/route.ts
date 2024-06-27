import { NextRequest, NextResponse } from "next/server";
import { transportEmail } from "@/lib/nodemail";

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
	w9form: FileList;
	workersComp: File;
	insurance: File;
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

export async function POST(request: NextRequest) {
	try {
		const data: FormValues = await request.json();
		const responseData = {
			message: "Form Submitted successfuly",
		};

		const emailHTML = generateHTML(data);
		await transportEmail.sendMail({
			from: "hometeampmemail@gmail.com",
			to: "dward1502@gmail.com",
			subject: "Requesting Quote",
			html: emailHTML,
		});
		return NextResponse.json(responseData);
	} catch (err) {
		console.error("Error processing request", err);
		return NextResponse.json({ message: "Error processing request", err }, { status: 500 });
	}
}
