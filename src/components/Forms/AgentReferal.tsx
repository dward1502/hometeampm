"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, TextField, Grid } from "@mui/material";
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
	company: string;
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

const AgentReferal = () => {
	const {
		handleSubmit,
		control,reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			company: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		try {
			const res = await fetch("/api/agentReferal", {
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
							STARTING A PARTNERSHIP
						</Typography>
						<Typography variant="body1" color={"#FFF"} mt={2} mb={5}>
							Earn a one-time $250 payment per referral that signs up with Hometeam property management{" "}
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Keep your clients.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Help sellers generate revenue when homes do not sell quickly.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Build better relationships with real estate investors when you connect them with San Diego&aposs best property managers.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Earn a referral bonus for every client that utilizes our property management services.
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
						<Box display="flex" flexDirection="column" gap={4}>
							<Box display="flex" gap={4}>
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
													Referring Agent First Name<RedStar>*</RedStar>
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
													Referring Agent Last Name<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.lastName}
											helperText={errors.lastName ? "Last name is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<Controller
								name="company"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Referring Agent Last Name<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.company}
										helperText={errors.company ? "Company name is required" : ""}
										fullWidth
									/>
								)}
							/>
							<Box display="flex" gap={4}>
								<Controller
									name="phoneNumber"
									control={control}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													Referring Agent Phone Number<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.phoneNumber}
											helperText={errors.phoneNumber ? "Phone number is required" : ""}
											fullWidth
										/>
									)}
								/>
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
													Referring Agent Email<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.email}
											helperText={errors.email ? "Valid email is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<CustomButton type="submit">Submit</CustomButton>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default AgentReferal;
