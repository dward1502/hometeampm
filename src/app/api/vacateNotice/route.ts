import { NextRequest, NextResponse } from "next/server";
import { Dayjs } from "dayjs";
import { transportEmail } from "@/lib/nodemail";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	city: string;
	state: string;
	zipcode: string;
	forwardAddress: boolean;
	moveOutDate: Dayjs | null | undefined;
}

function generateHTML(data: FormValues) {
	return `<h1>Quote Request</h1>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone Number:</strong> ${data.phoneNumber || "N/A"}</p>
    <p><strong>City:</strong> ${data.city}</p>
		<p><strong>State:</strong> ${data.state}</p>
		<p><strong>Zipcode:</strong> ${data.zipcode}</p>
    <p><strong>Move Out Date:</strong> ${data.moveOutDate}</p>`;
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
