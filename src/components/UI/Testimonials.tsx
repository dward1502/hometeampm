import React from "react";
import { Box, Typography, Rating, Grid } from "@mui/material";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { ArrowRight } from "@mui/icons-material";
const Testimonials = () => {
	return (
		<Box width={"100%"} sx={{ backgroundColor: "#FFF", padding: {xs:0,md:10} }} display={"flex"} flexDirection={"column"} mt={10}>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={'center'} sx={{flexDirection:{xs:'column', md:'row'}}}>
				<Typography variant="body2">
					CLIENT TESTIMONIALS
				</Typography>
				<Link href={"/about/testimonials"}>
					<Typography variant="body1" color={"secondary"}>
						View All Testimonials 
					</Typography>
				</Link>
			</Box>
			<Box display={"flex"} padding={5}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Box
							sx={{ backgroundColor: "#FFF", boxShadow: "0px 2px 26px 3px rgba(102,102,102,1)", padding: 4 }}
							display={"flex"}
							flexDirection={"column"}
						>
							<Rating name="simple-controlled" value={5} />
							<Typography variant="body1" my={2}>
								Home Team Property Management is a great company! They have great customer service and they always take care of any questions or
								concerns that I have. This company is professional and trustworthy.
							</Typography>
							<Box display={"flex"}>
								<Typography variant="body1" color={"secondary"}>
									Liz G. |
								</Typography>{" "}
								<Typography variant="body1" color={"secondary"} ml={1}>
									Bonita, CA
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{ backgroundColor: "#FFF", boxShadow: "0px 2px 26px 3px rgba(102,102,102,1)", padding: 4 }}
							display={"flex"}
							flexDirection={"column"}
						>
							<Rating name="simple-controlled" value={5} />
							<Typography variant="body1" my={2}>
								A wonderful team of professionals! They’ve always taken care of us and handle everything quickly and efficiently. I give their number
								to everyone I know, renters and property owners alike!
							</Typography>
							<Box display={"flex"}>
								<Typography variant="body1" color={"secondary"}>
									Tammy D. |
								</Typography>{" "}
								<Typography variant="body1" color={"secondary"} ml={1}>
									Chula Vista, CA
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
				<CustomButton sx={{ width: 300, marginTop: 10 }}>SHARE YOUR EXPERIENCE</CustomButton>
			</Box>
		</Box>
	);
};

export default Testimonials;
