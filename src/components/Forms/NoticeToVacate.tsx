"use client";
import { Controller, useForm } from "react-hook-form";
import { Grid, Typography, Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CustomButton from "../UI/CustomButton";
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
const RedStar = styled("span")({
	color: "red",
});
const StyledTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "20px",
		backgroundColor: "white",
	},
});
const NoticeToVacate = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,
	} = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			address: "",
			state: "string",
			zipcode: "string",
			forwardAddress: false,
			moveOutDate: null,
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};
	return (
		<Grid container spacing={2} my={5}>
			<Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"35rem"}>
					<Typography variant="body2" my={2}>
						SUBMIT YOUR 30-DAY NOTICE TO VACATE
					</Typography>
					<Typography variant="body1">
						Tenants must provide at least 30-Days notice in writing to move out of a property and avoid penalties. Use the form to the right to
						deliver the information we need to process your notice appropriately and start the move-out process.
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
					<Box display="flex" flexDirection="column" gap={2} padding={4}>
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
												Phone Number<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.phoneNumber}
										helperText={errors.phoneNumber ? "Phone number is required" : ""}
										fullWidth
									/>
								)}
							/>
						</Box>
						<Controller
							name="address"
							control={control}
							rules={{ required: true }}
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
									helperText={errors.address ? "Street Address is required" : ""}
									fullWidth
								/>
							)}
						/>
						<Box display={"flex"} gap={2}>
							<Controller
								name="city"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												City<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.city}
										helperText={errors.city ? "City is required" : ""}
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
							<Controller
								name="zipcode"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<StyledTextField
										{...field}
										variant="outlined"
										label={
											<Typography>
												Postal Code<RedStar>*</RedStar>
											</Typography>
										}
										error={!!errors.zipcode}
										helperText={errors.zipcode ? "Postal Code is required" : ""}
										fullWidth
									/>
								)}
							/>
						</Box>
						<Typography variant="body1" my={1}>
							Do you have a forwarding address?
						</Typography>
						<Controller
							name="forwardAddress"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<FormControlLabel
									control={<Checkbox {...field} color="secondary" />}
									label={<Typography fontSize={"1.1rem"}>I have a forwarding address and it is listed below.</Typography>}
								/>
							)}
						/>
						<Typography variant="body1" my={1}>
							This letter constitutes my written 30 day notice that I will be moving out of the property I reside at on:
						</Typography>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Controller
								control={control}
								name="moveOutDate"
								rules={{ required: true }}
								render={({ field }) => {
									return (
										<DateTimePicker
											label="Move Out Date"
											value={field.value}
											inputRef={field.ref}
											onChange={(date) => {
												field.onChange(date);
											}}
										/>
									);
								}}
							/>
						</LocalizationProvider>

						<CustomButton type="submit">Submit</CustomButton>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default NoticeToVacate;
