"use client";
import React from "react";
import { Box, Typography, TextField, Checkbox, FormControlLabel, Grid, FormControl, InputLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { styled } from "@mui/system";
import CustomButton from "../UI/CustomButton";
import { showToast } from "@/lib/toasthelper";

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

const RedStar = styled("span")({
	color: "red",
});
const StyledTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "20px",
		backgroundColor: "white",
	},
});

const GetQuote = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,reset,
	} = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			user: "",
			phoneNumber: "",
			message: "",
			terms: false,
			reason: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		try {
			const res = await fetch("/api/quote", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (res.ok) {
				showToast("success", "Form submitted successfully!");
				reset();
			} else {
				const result = await res.json();
				showToast("error", "Error submitting form");
				console.error("Error submitting form", result);
			}
		} catch (error) {
			showToast("error", "Error submitting form");
			console.error("Error submitting form", error);
		}
	};
	return (
		<Grid container spacing={2} sx={{ padding: { xs: 2, md: "6rem" } }} display={"flex"}>
			<Grid item xs={12} md={6}>
				<Box>
					<Typography variant="body2">WE’D LOVE TO HEAR FROM YOU!</Typography>
					<Typography variant="body1" color="secondary" my={2} fontWeight={"bold"}>
						Our Office
					</Typography>
					<Typography variant="body1" fontWeight={"bold"}>
						San Diego Office
					</Typography>
					<Typography variant="body1">821 Bowsprit Road Chula Vista, CA 91914</Typography>
					<Typography variant="body1" color="secondary" my={2} fontWeight={"bold"}>
						Phone
					</Typography>
					<Typography variant="body1">
						<strong>Main:</strong>&nbsp; (619) 872-7368
					</Typography>
					<Typography variant="body1">
						<strong>Toll Free:</strong>&nbsp; (855) 450-7368
					</Typography>
					<Typography variant="body1">
						<strong>Maintenance:</strong>&nbsp; (619) 866-5923
					</Typography>
					<Typography variant="body1" color="secondary" my={2} fontWeight={"bold"}>
						Email
					</Typography>
					<Typography variant="body1">info@hometeampm.com</Typography>
					<Typography variant="body1" color="secondary" my={2} fontWeight={"bold"}>
						Office Hours
					</Typography>
					<Typography variant="body1">
						<strong>Monday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>Tuesday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>Wednesday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>Thursday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>Friday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>Saturday</strong>&nbsp; 9:00 - 5:00 PM
					</Typography>
					<Typography variant="body1">
						<strong>PM Sunday Closed</strong>&nbsp; - By appointment only
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
					<Box display="flex" flexDirection="column" gap={2}>
						<Box display="flex" gap={2}>
							<Controller
								name="firstName"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												First Name<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.firstName}
										helperText={errors.firstName ? "First name is required" : ""}
										fullWidth
									/>
								)}
							/>
							<Controller
								name="lastName"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Last Name<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.lastName}
										helperText={errors.lastName ? "Last name is required" : ""}
										fullWidth
									/>
								)}
							/>
						</Box>
						<Box display="flex" gap={2}>
							<Controller
								name="email"
								control={control}
								rules={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Email<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.email}
										helperText={errors.email ? "Valid email is required" : ""}
										fullWidth
									/>
								)}
							/>
							<Controller
								name="phoneNumber"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Phone number<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.phoneNumber}
										helperText={errors.phoneNumber ? "Phone number is required" : ""}
										fullWidth
									/>
								)}
							/>
						</Box>
						<Typography variant="body1">
							I am a:<RedStar>*</RedStar>
						</Typography>
						<Controller
							name="user"
							control={control}
							defaultValue=""
							rules={{ required: "This is required" }}
							render={({ field }) => (
								<RadioGroup {...field}>
									<FormControlLabel value="owner looking for service" control={<Radio />} label="Property Owner Looking for Management Services" />
									<FormControlLabel value="owner who is a client" control={<Radio />} label="Property Owner Who Is Already a Client" />
									<FormControlLabel value="tenant" control={<Radio />} label="Current or Future Tenant" />
									<FormControlLabel value="realtor" control={<Radio />} label="Realtor" />
									<FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
									<FormControlLabel value="other" control={<Radio />} label="Other" />
								</RadioGroup>
							)}
						/>
						<Typography variant="body1">Reason for inquiry</Typography>
						<Controller
							name="reason"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RadioGroup {...field}>
									<FormControlLabel value="appointment" control={<Radio />} label="Appointment Request" />
									<FormControlLabel
										value="question regarding property"
										control={<Radio />}
										label="Question Regarding Property (Please Specify Below)"
									/>
									<FormControlLabel value="application status" control={<Radio />} label="Application Status" />
								</RadioGroup>
							)}
						/>
						<Controller
							name="message"
							control={control}
							rules={{ required: true }}
							render={({ field }) => <StyledTextField {...field} variant="outlined" label="Message" multiline rows={4} fullWidth />}
						/>
						<Controller
							name="terms"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<FormControlLabel
									control={<Checkbox {...field} color="secondary" />}
									label={
										<Typography fontSize={"1.1rem"}>
											By providing HomeTeam with your telephone number, you agree to recieve calls and text messages from HomeTeam. HomeTeam may use
											automated phone dialing systems, automated text and/or electronic mail messaging systems. You may opt out at any time.
											<RedStar>*</RedStar>
										</Typography>
									}
								/>
							)}
						/>
						<Typography fontSize={"1rem"} my={2}>
							*Message and data rates may apply. Reply HELP for help. Reply STOP to unsubscribe from SMS messages. Up to 5 messages per month. View
							Privacy Policy.
						</Typography>
						<CustomButton type="submit" disabled={!watch("terms")}>
							Submit
						</CustomButton>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} mt={10}>
				<Typography variant="body1" color={"secondary"} fontWeight={"bold"}>
					Property Emergencies
				</Typography>
				<Typography variant="body1">
					Contact our 24/7 Maintenance Center at (619) 866-5923. Property managers are also available 24/7 for property emergencies – please see
					tenant notices below
				</Typography>
				<Typography variant="body2" mt={8}>
					TENANT NOTICES
				</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant="body1" color={"secondary"} fontWeight={"bold"}>
						Rent is Due on the 1st of Month:
					</Typography>
					<Typography variant="body1">Remember you can pay rent online, by mail, or drop it off at any of our branch locations.</Typography>
					<Typography variant="body1" color={"secondary"} fontWeight={"bold"}>
						Make Maintenance Requests:
					</Typography>
					<Typography variant="body1">
						Use the online rent pay portal under request maintenance, or contact our 24/7 line at (619) 866-5923.
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body1" color={"secondary"} fontWeight={"bold"}>
					To Pay Online:
				</Typography>
				<Typography variant="body1">
					You must contact the accounting department and register to pay online. Allow up to 2 business days to register with our department before
					making online payments.
				</Typography>
				<Typography variant="body1" color={"secondary"} fontWeight={"bold"}>
					Property Emergencies:
				</Typography>
				<Typography variant="body1">Contact are 24/7 maintenance line at (619)866-5923 as well as your property manager.</Typography>
			</Grid>
		</Grid>
	);
};

export default GetQuote;
