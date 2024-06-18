"use client";

import Hero from "@/components/Hero";
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleRounded } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Img from "../../../assets/img/vendor-relation.jpg";
import CustomButton from "@/components/UI/CustomButton";
import Link from "next/link";

import { vendorpoints1 } from "@/assets/data/data";
import { vendorpoints2 } from "@/assets/data/data";

const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Vendor Relations"} />
			<Grid container mt={4} spacing={2}>
				<Grid item md={6} xs={12}>
					<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
						<Image src={Img} alt="About image" style={{ maxWidth: "100%", height: "auto" }} />
					</Box>
				</Grid>
				<Grid item md={6} xs={12}>
					<Box display={"flex"} flexDirection={"column"} width={"80%"} alignItems={"center"} sx={{ pl: { xs: 4 } }}>
						<Typography variant="body2">BECOME A TRUSTED HOMETEAM VENDOR</Typography>
						<Typography variant="body1" my={1.5}>
							We are continually seeking out qualified, professional vendors to fulfill goods or maintenance contracts for our residential and
							commercial properties. Maintenance includes landscaping, pool care, exterminating, painting, construction and more.
						</Typography>
						<Typography variant="body1" my={1.5}>
							As a representative for communities, associations, and properties, we seek only those vendors/contractors who provide exceptional goods
							and services.
						</Typography>
						<Typography variant="body1" my={1.5}>
							If you’d like to be added to our preferred vendor list, please review our{" "}
							<Link href={"/about/vendors#requirements"} style={{ color: "#FB8800" }}>
								Vendor Application Requirements
							</Link>{" "}
							before submitting an application.
						</Typography>

						<CustomButton sx={{ mt: 4 }} onClick={() => router.push("/vendors#application")}>
							SUBMIT AN APPLICATION
						</CustomButton>
					</Box>
				</Grid>

				<Grid container spacing={2} sx={{ backgroundColor: "#F2F4F6", padding: 8 }} mt={10}>
					<Grid item xs={12} md={6}>
						<Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
							<Typography variant="body2" fontWeight={"bold"} color={"#053149"}>
								VENDOR APPLICATION
							</Typography>
							<Typography variant="body2" fontWeight={"bold"} color={"#FB8800"} ml={1}>
								REQUIREMENTS
							</Typography>
						</Box>
						<List>
							{vendorpoints1.map((text, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<CheckCircleRounded style={{ color: "#FB8800" }} />
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
							<Typography variant="body2" fontWeight={"bold"} color={"#053149"}>
								VENDOR APPLICATION
							</Typography>
							<Typography variant="body2" fontWeight={"bold"} color={"#FB8800"} ml={1}>
								EXPECTATIONS
							</Typography>
						</Box>

						<List>
							{vendorpoints2.map((text, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<CheckCircleRounded style={{ color: "#FB8800" }} />
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default page;
