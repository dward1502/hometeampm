import nodemailer from "nodemailer";

export const transportEmail = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.NODEMAIL_EMAIL,
		pass: process.env.NODEMAIL_PASSWORD,
	},
});
