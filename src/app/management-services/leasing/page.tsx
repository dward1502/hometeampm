"use client";
import Hero from "@/components/Hero";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Image1 from "../../../assets/img/marketing-plan.jpg";
import Image2 from "../../../assets/img/leasing-department.jpg";
import Image3 from "../../../assets/img/tenant-screening.jpg";

import CustomButton from "@/components/UI/CustomButton";
import { useRouter } from "next/navigation";
const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Leasing Services"} />
			<Box padding={5} textAlign={"center"} mt={2}>
				<Typography variant="body1">
					Property maintenance is one of the most important aspects in maximizing your investment. Routine maintenance and services will all be
					managed for you.
				</Typography>
			</Box>

			<Box width={"100%"} padding={10} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="h4">COMPREHENSIVE MARKETING PLAN</Typography>
						<Typography mt={2} variant="body1">
							In collaboration with our leasing department, our marketing department consistently looks at methods and assists in the development of
							new ways of marketing our rental units. Whether through video, print or social marketing, our company provides the maximum exposure of
							your property to the tenants that are looking for a property to rent. See some of our marketing methods in the marketing section.
						</Typography>
						<CustomButton onClick={() => router.push("/about/connect")} sx={{ mt: 6, width:450 }}>
							LEARN MORE ABOUT MARKETING SERVICES
						</CustomButton>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={10} display={"flex"} sx={{ backgroundColor: "#F2F4F6" }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="h4" color={"#053149"} fontWeight={"bold"} my={2}>
							FULL-TIME LEASING DEPARTMENT
						</Typography>

						<Typography mt={2} variant="body1">
							Our company employs full time leasing managers and agents. Our agents can and will show properties 7 days a week. Our experience and our
							own company’s data has shown that prospect tenants have a limited ability to schedule appointments during normal office hours. Our
							commitment to leasing your property in a prompt, efficent and thorough manner requires us to show properties when most companies may be
							closed or during non-office hours.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Box width={"100%"} padding={10} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="h4">STRICT TENANT SCREENING</Typography>
						<Typography mt={2} variant="body1">
							Our company has established a rigorous and thorough tenant screening process. This includes credit, employment and prior residency
							verification. We also follow all federal and state guidelines and have established audit and compliance procedures when dealing with our
							tenant screening and data handling.
						</Typography>
						<Typography mt={2} variant="body1">
							We are so confident in our thorough tenant screening process that we have a No-Eviction Guarantee. If there is an eviction due to the
							quality of the tenant we placed, we will cover the cost of the eviction up to $1000.00. Terms do apply so contact us today for details.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
