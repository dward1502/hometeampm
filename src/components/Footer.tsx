import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomButton from "./UI/CustomButton";

import LogoDark from "../assets/hometeam-logoDark.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";
import Link from "next/link";
const Footer = () => {
	return (
		<Box sx={{ backgroundColor: "#F2F4F6", padding: 4 }} display={"flex"} flexDirection={"column"} mt={20}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Box my={3}>
						<LogoDark />
					</Box>
					<Typography variant="body1" mb={4}>
						In 1992, HomeTeam Property Management started with a simple goal:
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
					<Typography fontWeight={"bold"} variant="h4" color={"#053149"}>
						NAVIGATION
					</Typography>
					<Link href={"/#"}>
						<Typography variant="body1" mt={1}>
							About
						</Typography>
					</Link>
					<Link href={"/#"}>
						<Typography variant="body1" mt={1}>
							Management Services
						</Typography>
					</Link>
					<Link href={"/#"}>
						<Typography variant="body1" mt={1}>
							Owners
						</Typography>
					</Link>
					<Link href={"/#"}>
						<Typography variant="body1" mt={1}>
							Tenants
						</Typography>
					</Link>
					<Link href={"/#"}>
						<Typography variant="body1" mt={1}>
							Properties
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
					<Typography fontWeight={"bold"} variant="h4" color={"#053149"}>
						CONTACT US
					</Typography>
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
				<Grid item xs={12} md={3} display={"flex"} flexDirection={"column"} justifyContent={'center'}>
					<Typography fontWeight={"bold"} variant="h4" color={"#053149"}>
						SUBSCRIBE TO OUR BLOG
					</Typography>
					<Typography>Stay in the know with the latest news form the leaders in property management</Typography>
				</Grid>
			</Grid>
			<Box display={"flex"} flexDirection={"column"} borderTop={"solid 1px #000"}>
				<Box display={"flex"} mt={3}>
					<Typography variant="body1">
						&copy; 2022 <strong>Hometeam Property Management.</strong>All Rights Reserved.
					</Typography>
					|
					<Link href={"/#"}>
						<Typography variant="body1">Privacy Policy</Typography>
					</Link>
				</Box>
				<Typography variant="body1" my={2}>
					Hometeam Property Management is committed to ensuring compliance with the Americans with Disabilities Act, Including incorporating the Web
					Content Accessibility Guidelines (WCAG) 2.1 (https://www.w3.org/TR/WCAG21/) and applying Level A Success Criteria and conformance
					Requirements.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
