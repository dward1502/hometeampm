import { NextRequest, NextResponse } from "next/server";
import { Dayjs } from "dayjs";

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

export async function POST(request: NextRequest) {
  try {
		const data: FormValues = await request.json();
		const responseData = {
			message:"Form Submitted successfuly",
			data:data
		}
		console.log(responseData)
		return NextResponse.json(responseData);
	} catch(err) {
		console.error("Error processing request", err)
		return NextResponse.json({ message: 'Error processing request', err }, { status: 500 });
	}
}