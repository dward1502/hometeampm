import { Box, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import Image from "next/image";
import { CheckCircle } from "@mui/icons-material";
import Image1 from "../../assets/img/Group 5447.png";
import SVG1 from "../../assets/icon-cash-flow.svg";
import SVG2 from "../../assets/icon-crucial-insight.svg";
import SVG3 from "../../assets/icon-optimize-rental-value.svg";

const RentalAnalysis = () => {
	return (
		<>
			<Box width={"100%"} sx={{padding:{xs:3,md:8}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"} sx={{ paddingLeft: "3rem !important" }}>
						<Typography variant="body2" my={2}>
							How Much Will My Home Rent For?
						</Typography>
						<Typography variant="body1" mt={2}>
							The success of your investment property means we're doing our jobs well. Part of delivering our top-rated services for your success is
							ensuring that your property rents at the most competitive rates. Whether residential or commercial, our experienced leasing team
							conducts a thorough comparative market analysis to help maximize your investment income.F
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle color="secondary" />
								</ListItemIcon>
								<ListItemText>You could be at risk of selling yourself short with a rate that's too low!</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle color="secondary" />
								</ListItemIcon>
								<ListItemText>Our market analysis helps identify the ideal rental rate for your property.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle color="secondary" />
								</ListItemIcon>
								<ListItemText>
									With the best rate for your property, you find tenants faster and generate the income you need to maximize your investment.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box
				zIndex={1000}
				width={"100%"}
				display={"flex"}
				sx={{ justifyContent: { xs: "center", md: "flex-end" }, position: "relative" }}
				flexWrap={"wrap"}
        mb={8}
			>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "22rem", height: "13rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG1 />
					</Box>
					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						Get Optimized Rental Value for Your Property
					</Typography>
				</Box>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "22rem", height: "13rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG2 />
					</Box>
					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						Gain Crucial Insight Into Current Market Conditions
					</Typography>
				</Box>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "22rem", height: "13rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG3 />
					</Box>
					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						Determine Your Cash Flow From Monthly Rental Value
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default RentalAnalysis;
