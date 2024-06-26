import { NextRequest, NextResponse } from "next/server";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	company: string;
}

export async function POST(request: NextRequest) {
	try {
		const data: FormValues = await request.json();
		const responseData = {
			message: "Form Submitted successfuly",
			data: data,
		};
		console.log(responseData);
		return NextResponse.json(responseData);
	} catch (err) {
		console.error("Error processing request", err);
		return NextResponse.json({ message: "Error processing request", err }, { status: 500 });
	}
}
