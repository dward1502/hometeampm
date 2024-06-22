"use client";
import React from "react";
import { Box, Typography, Button, TextField, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import styles from "../../styles/style.module.css";
import { styled } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomButton from "../UI/CustomButton";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	resume: FileList;
	message: string;
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
const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});
const GetQuote = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			message: "",
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};
	return (
		<div className={styles.quote}>
			<Grid container spacing={2} sx={{ padding: { xs: 2, md: "6rem" } }} display={"flex"}>
				<Grid item xs={12} md={6}>
					<Box>
						<Typography variant="body2" color={"#FFF"}>
							LOOKING FOR A ROLE MORE SUITED TO YOUR UNIQUE TALENTS?
						</Typography>
						<Typography variant="body1" color={"#FFF"} my={2}>
							Don’t see any available openings? We’re growing and always on the lookout for top performers. Send your resume and a brief note about
							the type of role you’re looking for to HR@hometeampm.com. We’ll keep it on file in case something opens up.
						</Typography>
						<Typography variant="body2" color={"secondary"}>
							OUR OFFICE
						</Typography>
						<Typography variant="body1" fontWeight={"bold"} color={"#FFF"}>
							San Diego Office
						</Typography>
						<Typography variant="body1" color={"#FFF"}>
							821 Bowsprit Road Chula Vista, CA 91914
						</Typography>
						<Typography variant="body2" color={"secondary"}>
							PHONE
						</Typography>
						<Typography variant="body1" color={"#FFF"}>
							(619) 872-7368 | (855) 450-7368
						</Typography>
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
							<Box display="flex" gap={4}>
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
							{/* <Typography variant="body1" color={"#FFF"}>
								Attach Resume
							</Typography> */}
							<Controller
								name="resume"
								control={control}
								// defaultValue={null}
								render={({ field }) => (
									<Button
										{...field}
										sx={{ width: "15rem", backgroundColor: "#FB8800" }}
										component="label"
										role={undefined}
										variant="contained"
										tabIndex={-1}
										startIcon={<CloudUploadIcon />}
									>
										Upload Resume
										<VisuallyHiddenInput type="file" />
									</Button>
								)}
							/>
							<Controller
								name="message"
								control={control}
								render={({ field }) => <StyledTextField {...field} variant="outlined" label="Message" multiline rows={4} fullWidth />}
							/>

							<CustomButton type="submit">Apply Now</CustomButton>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default GetQuote;
