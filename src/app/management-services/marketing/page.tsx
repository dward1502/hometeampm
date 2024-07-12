"use client";
import Hero from "@/components/Hero";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/UI/CustomButton";
import Image1 from "../../../assets/img/local-realtors-1.jpg";
import { useRouter } from "next/navigation";

import SVG3 from "../../../assets/for-rent-signs.svg";
import SVG2 from "../../../assets/lockboxes.svg";
import SVG1 from "../../../assets/rental-hotsheet.svg";
import GetQuote from "@/components/Forms/GetQuote";
const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Marketing Services"} />
			<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ padding: { xs: 3, md: 8 } }}>
				<Typography variant="body1" textAlign={"center"} mb={2}>
					Your property will be advertised in the most comprehensive and proven ways the rental market offers. Below are just some of the ways in
					which we market your property to prospective tenants.
				</Typography>
				<Typography variant="body1" textAlign={"center"}>
					All of our vacant properties are listed on our website and available 24 hours a day, seven days as week. We include a customized search
					engine and mapping features for ease of use in identifying suitable properties, and prospective tenants also have the ability to apply for
					the rental online in a secure, convenient method. Our website includes other valuable assistance for our clients and residents including
					information on maintenance requests, payments, local area links and frequently asked questions.
				</Typography>
				<CustomButton
					sx={{ marginTop: 3, width: 275 }}
					onClick={() => router.push("https://app.tenantturner.com/listings/hometeampropertymanagement")}
				>
					VIEW RENTAL LISTINGS
				</CustomButton>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6", padding: { xs: 3, md: 8 } }} width={"100%"} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							LOCAL REALTORS
						</Typography>
						<Typography variant="body1">
							All of our vacant properties are listed on the Multiple Listing Service, which allows local REALTORS access to our properties. This
							enables all REALTORS to assist qualified tenants in locating our properties.
						</Typography>
						<Typography variant="body2" color={"#FB8800"} my={2}>
							REFERRALS
						</Typography>
						<Typography typography={"body1"}>
							As an established management company we have long standing relationships with local REALTORS and with other professionals who may have
							clients in need of housing.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} sx={{ padding: { xs: 3, md: 8 } }} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							YOUTUBE
						</Typography>
						<Typography variant="body1">
							From our experience, many prospective tenants may reside in another state or in a location where the property is not easily accessible.
							When applicable, we place video tours of the property online, adding one more method to view a prospective property. Feel free to view
							any of our current properties on our HomeTeam Property Management YouTube Site.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							PROFESSIONAL PHOTOGRAPHY
						</Typography>
						<Typography variant="body1">
							Custom interior photographs are taken for your property so they can be marketed to their maximum potential and their interior features
							can shine. These photographs are placed on our website and different online marketplaces like
							<strong>Craigslist, HotPads and Zillow</strong> .
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box display={"flex"} flexWrap={"wrap"} sx={{ backgroundColor: "#F2F4F6", padding: { xs: 3, md: 5 } }}>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG1 />
					<Typography variant="body2" mt={3} textAlign={"center"}>
						Rental Hotsheet
					</Typography>
					<Typography variant="body1" mt={4}>
						We place all our marketed properties on the rental hotsheet so that both agents and potential renters know about your property.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG2 />{" "}
					<Typography variant="body2" textAlign={"center"} mt={3}>
						Lockboxes
					</Typography>
					<Typography variant="body1" mt={4}>
						Lockboxes are placed on all of our vacant properties so that all local REALTORS can show our vacant properties to their clients in a
						timely manner.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG3 />
					<Typography variant="body2" mt={3} textAlign={"center"}>
						For Rent Signs
					</Typography>
					<Typography variant="body1" mt={4}>
						Our signs are among the most recognized in the business. They are the perfect supplement to our extensive online marketing strategies.
					</Typography>
				</Box>
			</Box>
			<GetQuote />
		</>
	);
};

export default page;
