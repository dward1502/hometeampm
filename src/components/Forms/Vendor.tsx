"use client";
import React from "react";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	MenuItem,
	Checkbox,
	FormControlLabel,
	Grid,
	Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import styles from "../../styles/style.module.css";
import { styled } from "@mui/system";
import Checkcircle from "../../assets/check-circle.svg";
import CustomButton from "../UI/CustomButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
const options = [
	{ label: "San Diego", value: "San Diego" },
	{ label: "Riverside", value: "Riverside" },
	{ label: "Orange", value: "Orange" },
	{ label: "Los Angeles", value: "Los Angeles" },
];

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
			mobileNumber: "",
			company: "",
			city: "",
			address: "",
			state: "",
			trade: "",
			serviceArea: "",
			info: "",
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};
	return (
		<div className={styles.quote}>
			<Grid container spacing={2} sx={{ padding: { xs: 2, md: "6rem" } }} display={"flex"}>
				<Grid item xs={12} md={6}>
					<Box width={"34rem"}>
						<Typography variant="body2" color={"#FFF"}>
							VENDOR APPLICATION FORM
						</Typography>
						<Typography variant="body1" color={"#FFF"} my={2}>
							Thank you for your interest in becoming a part of our preferred vendor list.
						</Typography>
						<Typography variant="body1" color={"#FFF"} my={2}>
							Please note that submitting an application does not guarantee work from HomeTeam Property Management or any of its agents or managers.{" "}
						</Typography>
						<Typography variant="body2" color={"secondary"} my={8}>
							Important Information
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Services provided are frequently inspected for quality. Property owners and tenants will be surveyed for satisfaction with your
										goods and/or services.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Services may be suspended, terminated, or no longer considered for future retention if any deficiencies or complaints are noted.{" "}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Checkcircle />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1" color={"#FFF"}>
										Review Vendor FAQs for commonly asked questions or If you have additional questions, please email vendors@hometeampm.com or
										contact our main office at (619) 872-7368.{" "}
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
							<Controller
								name="mobileNumber"
								control={control}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Mobile phone Number<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.phoneNumber}
										helperText={errors.phoneNumber ? "Mobile Phone number is required" : ""}
										fullWidth
									/>
								)}
							/>
							<Box display="flex" gap={2}>
								<Controller
									name="phoneNumber"
									control={control}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													Phone Number<RedStar>*</RedStar>
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
													Email<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.email}
											helperText={errors.email ? "Valid email is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<Box display="flex" gap={2}>
								<Controller
									name="company"
									control={control}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													Company name<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.company}
											helperText={errors.company ? "Phone number is required" : ""}
											fullWidth
										/>
									)}
								/>
								<Controller
									name="address"
									control={control}
									rules={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i }}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													Street Address<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.address}
											helperText={errors.address ? "Valid address is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<Box display="flex" gap={2}>
								<Controller
									name="city"
									control={control}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													Phone Number<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.city}
											helperText={errors.city ? "Phone number is required" : ""}
											fullWidth
										/>
									)}
								/>
								<Controller
									name="state"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<StyledTextField
											{...field}
											variant="outlined"
											label={
												<Typography>
													State/Region<RedStar>*</RedStar>
												</Typography>
											}
											error={!!errors.state}
											helperText={errors.state ? "State/Region is required" : ""}
											fullWidth
										/>
									)}
								/>
							</Box>
							<Controller
								name="trade"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										select
										variant="outlined"
										label={
											<Typography>
												Trade<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.trade}
										helperText={errors.trade ? "Trade is required" : ""}
										fullWidth
									>
										<MenuItem value="Handyman">Handyman</MenuItem>
										<MenuItem value="General Contractor">General Contractor</MenuItem>
										<MenuItem value="Landscaper">Landscaper</MenuItem>
										<MenuItem value="Roofer">Roofer</MenuItem>
										<MenuItem value="Plumber">Plumber</MenuItem>
										<MenuItem value="Electrician">Electrician</MenuItem>
										<MenuItem value="Appliance">Appliance</MenuItem>
										<MenuItem value="Ac/Heat">Ac/Heat</MenuItem>
										<MenuItem value="House Cleaning">House Cleaning</MenuItem>
										<MenuItem value="Carpet Cleaning">Carpet Cleaning</MenuItem>
										<MenuItem value="Other">Other</MenuItem>
									</StyledTextField>
								)}
							/>
							<Typography variant="h6" color={"#FFF"}>
								Service Area (County)
							</Typography>
							{options.map((option) => (
								<Controller
									key={option.value}
									name={`selectedOptions.${option.value}`}
									control={control}
									defaultValue={false}
									render={({ field }) => (
										<FormControlLabel
											control={<Checkbox sx={{ color: "white", "&.Mui-checked": { color: "orange" } }} {...field} checked={field.value} />}
											label={
												<Typography variant="body1" color={"white"}>
													{option.label}
												</Typography>
											}
										/>
									)}
								/>
							))}
							<Controller
								name="info"
								control={control}
								render={({ field }) => <StyledTextField {...field} variant="outlined" label="Additional Information:" multiline rows={4} fullWidth />}
							/>
							<Typography variant="body1" color={"#FFF"}>
								Completed W-9 Form{" "}
							</Typography>
							<Controller
								name="w9form"
								control={control}
								// defaultValue={null}
								rules={{ required: "W9 Form is required" }}
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
										Upload file
										<VisuallyHiddenInput type="file" />
									</Button>
								)}
							/>
							<Typography variant="body1" color={"#FFF"}>
								Proof of Workers Compensation
							</Typography>
							<Controller
								name="workersComp"
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
										Upload file
										<VisuallyHiddenInput type="file" />
									</Button>
								)}
							/>
							<Typography variant="body1" color={"#FFF"}>
								Proof of General Liability Insurance
							</Typography>
							<Controller
								name="insurance"
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
										Upload file
										<VisuallyHiddenInput type="file" />
									</Button>
								)}
							/>

							<CustomButton type="submit">Submit</CustomButton>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default GetQuote;
