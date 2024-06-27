import nodemailer from "nodemailer";

export const transportEmail = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "hometeampmemail@gmail.com",
		pass: "msdstaoyxsspvapl",
	},
});
