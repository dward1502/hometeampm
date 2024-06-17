"use client";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";
import Image1 from "../../../assets/img/vendor-selection.jpg";
import Image2 from '../../../assets/img/responsiveness.jpg'
import CustomButton from "@/components/UI/CustomButton";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Maintenance Services"} />
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
						<Typography variant="h4">VENDOR SELECTION</Typography>
						<Typography mt={2} variant="body1">
							We set exceptionally high standards for every vendor we are associated with. Being in business for over 20 years, we have established
							strong relationships with experienced vendors and contractors who provide quality, professional service at a discounted rate for us.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={10} display={"flex"} sx={{ backgroundColor: "#F2F4F6" }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="h4" color={"#053149"} fontWeight={"bold"} my={2}>
							RESPONSIVENESS
						</Typography>

						<Typography mt={2} variant="body1">
							Maintenance requests are responded to right away. Not only does this ensure a happy tenant, this prevents minor maintenance issues from
							becoming a high-cost repair down the road.
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
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"} paddingX={10}>
						<Typography variant="h4" color={"#053149"} fontWeight={"bold"} my={2}>
							TENANT ACCESS
						</Typography>
						<Typography mt={2} variant="body1">
							Tenants are given multiple options for submitting maintenance requests. They can either visit or call our office directly, or submit a
							maintenance request online via the tenant portal. Regardless of their method of contact, our responsiveness is the same: quick and
							efficient.
						</Typography>
						<CustomButton onClick={() => router.push("/management-services/quote")} sx={{ mt: 6 }}>
							TENANT PORTAL
						</CustomButton>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"} paddingX={10}>
						<Typography variant="h4" color={"#053149"} fontWeight={"bold"} my={2}>
							EMERGENCY SERVICES
						</Typography>
						<Typography mt={2} variant="body1">
							Our property managers are available to reach 24/7. If a tenant contacts us in an event of an emergency, rest easy knowing that we are
							prepared to take care of the issue immediately.
						</Typography>
						<CustomButton onClick={() => router.push("/about/connect")} sx={{ mt: 6 }}>
							CONTACT US
						</CustomButton>{" "}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
