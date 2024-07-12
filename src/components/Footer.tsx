"use client";
import { Box, Typography, Grid, TextField } from "@mui/material";
import CustomButton from "./UI/CustomButton";
import { useForm, Controller } from "react-hook-form";
import LogoDark from "../assets/hometeam-logoDark.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";
import Link from "next/link";
interface FormValues {
	email: string;
}
const Footer = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data.email);
	};

	return (
		<Box sx={{ backgroundColor: "#F2F4F6", padding: 4 }} display={"flex"} flexDirection={"column"}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Box my={3}>
						<LogoDark />
					</Box>
					<Typography variant="body1" mb={4}>
						In 1992, HomeTeam Property Management started with a simple goal: &nbsp;
						<strong>To provide clients with quality property management services to maintain their investment.</strong>
					</Typography>
					<Box display={"flex"} mb={3}>
						<Box mr={1}>
							<Facebook />
						</Box>
						<Box mr={1}>
							<Twitter />
						</Box>
						<Box mr={1}>
							<Youtube />
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Typography variant="body2">NAVIGATION</Typography>
					<Link href={"/about/company"}>
						<Typography variant="body1" mt={1}>
							About
						</Typography>
					</Link>
					<Link href={"/management-services/residential"}>
						<Typography variant="body1" mt={1}>
							Management Services
						</Typography>
					</Link>
					<Link href={"/owners/marketing-your-property"}>
						<Typography variant="body1" mt={1}>
							Owners
						</Typography>
					</Link>
					<Link href={"/tenants/future-tenants"}>
						<Typography variant="body1" mt={1}>
							Tenants
						</Typography>
					</Link>
					<Link href={"https://app.tenantturner.com/listings/hometeampropertymanagement"}>
						<Typography variant="body1" mt={1}>
							Properties
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Typography variant="body2">CONTACT US</Typography>
					<Typography variant="body1" fontWeight={"bold"}>
						San Diego Office
					</Typography>
					<Typography>821 Bowsprit Road</Typography>
					<Typography>Chula Vista, CA 91914</Typography>
					<Typography variant="body1" fontWeight={"bold"}>
						Phone:
					</Typography>
					<Typography>(619) 872-7368</Typography>
					<Typography>(858) 450-7368</Typography>
				</Grid>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Typography variant="body2">SUBSCRIBE TO OUR BLOG</Typography>
					<Typography my={2} variant="body1">
						Stay in the know with the latest news form the leaders in property management
					</Typography>
					<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
						<Box display="flex" flexDirection="column" gap={2} mb={3}>
							<Controller
								name="email"
								control={control}
								rules={{
									required: "Email is required",
									pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: "Invalid email address" },
								}}
								render={({ field }) => (
									<TextField
										{...field}
										variant="outlined"
										label="Email"
										error={!!errors.email}
										helperText={errors.email ? errors.email.message : ""}
										fullWidth
									/>
								)}
							/>
							<CustomButton fullWidth type="submit">
								Subscribe
							</CustomButton>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Box display={"flex"} flexDirection={"column"} borderTop={"solid 1px #000"}>
				<Box display={"flex"} mt={3} sx={{ flexDirection: { xs: "column", md: "row" } }}>
					<Typography variant="body1">
						&copy; 2022 <strong>Hometeam Property Management.&nbsp;</strong>All Rights Reserved.
					</Typography>
					|
					<Link href={"/#"}>
						<Typography variant="body1">Privacy Policy</Typography>
					</Link>
				</Box>
				<Typography variant="body1" my={2} fontSize={".8rem"}>
					Hometeam Property Management is committed to ensuring compliance with the Americans with Disabilities Act, Including incorporating the Web
					Content Accessibility Guidelines (WCAG) 2.1 (https://www.w3.org/TR/WCAG21/) and applying Level A Success Criteria and conformance
					Requirements.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
