"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, TextField, MenuItem, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import styles from "../../styles/style.module.css";
import { styled } from "@mui/system";
import Checkcircle from "../../assets/check-circle.svg";
import CustomButton from "../UI/CustomButton";
import { showToast } from "@/lib/toasthelper";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	interest: string;
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
		watch,
		reset,
	} = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			interest: "",
			message: "",
			terms: false,
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
		<div className={styles.quote}>
			<Grid container spacing={2} sx={{ padding: { xs: 2, md: "6rem" } }} display={"flex"}>
				<Grid item xs={12} md={6}>
					<Box>
						<Typography variant="body2" color={"#FFF"}>
							GET A QUOTE
						</Typography>
						<Typography variant="body1" color={"#FFF"} mt={2} mb={5}>
							Ready to learn more about how we can serve you? Fill in the information on the form to the right, and we'll get back to you right away.
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										The success of your property and your investment is our priority!
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										The success of your property and your investment is our priority!
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										The success of your property and your investment is our priority!
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										The success of your property and your investment is our priority!
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
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
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label="Phone Number"
											error={!!errors.phoneNumber}
											helperText={errors.phoneNumber ? "Phone number is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<Controller
								name="interest"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										select
										variant="outlined"
										label={
											<Typography>
												Interested in the Following<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.interest}
										helperText={errors.interest ? "Interest is required" : ""}
										fullWidth
									>
										<MenuItem value="Property Management for property">Property Management for property</MenuItem>
										<MenuItem value="A rental application">A rental application</MenuItem>
										<MenuItem value="Schedule a showing">Schedule a showing</MenuItem>
									</StyledTextField>
								)}
							/>
							<Controller
								name="message"
								control={control}
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
											<Typography color={"#FFF"} fontSize={"1.1rem"}>
												By providing HomeTeam with your telephone number, you agree to recieve calls and text messages from HomeTeam. HomeTeam may use
												automated phone dialing systems, automated text and/or electronic mail messaging systems. You may opt out at any time.
												<RedStar>*</RedStar>
											</Typography>
										}
									/>
								)}
							/>
							<Typography fontSize={"1rem"} color={"#FFF"} my={2}>
								*Message and data rates may apply. Reply HELP for help. Reply STOP to unsubscribe from SMS messages. Up to 5 messages per month. View
								Privacy Policy.
							</Typography>
							<CustomButton type="submit" disabled={!watch("terms")}>
								Get My Free Quote
							</CustomButton>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default GetQuote;
