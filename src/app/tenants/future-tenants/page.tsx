import Hero from "@/components/Hero";
import { Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircle from "../../../assets/check-circle.svg";
import Image from "next/image";

import Img1 from "../../../assets/img/credit-employment-and-prior-residency-verification.jpg";
import Img2 from "../../../assets/img/application-acceptance-and-lease-signing.jpg";

const page = () => {
	return (
		<>
			<Hero title={"Future Tenants"} />
			<Box padding={5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
				<Typography variant="body1">
					Thank you for your interest in a HomeTeam Property Management managed property. Please review the following before submitting a rental
					application.
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<CheckCircle />
						</ListItemIcon>
						<ListItemText>
							All rental applications are submitted electronically. You will find the Rental Application link in the Properties section under your
							desired rental property.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<CheckCircle />
						</ListItemIcon>
						<ListItemText>
							Each Adult applicant (18+ years of age) and / or applicant contributing to the monthly rent must complete a separate application.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<CheckCircle />
						</ListItemIcon>
						<ListItemText>
							Co-Signers (guarantors) must also complete an application. A valid driver’s license, State ID, passport or other photo ID is required.
						</ListItemText>
					</ListItem>
				</List>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={10} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Img1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} flexDirection={"column"}>
						<Typography variant="body2">
							CREDIT, EMPLOYMENT AND PRIOR RESIDENCY VERIFICATION
						</Typography>
						<Typography variant="body1">
							HomeTeam Property Management must be able to verify your employment, income and previous rental history. Here are a few tips for a
							smooth application process.
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Make sure the phone numbers you provide are accurate and include the area code.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>A current pay stub with year-to-date information is best for income verification. </ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									If you are self-employed, an independent contractor or hold company ownership, a copy of your most recent tax return and current
									bank statements will be required.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={10} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
						<Typography variant="body2">
							APPLICATION ACCEPTANCE AND LEASE SIGNING
						</Typography>
						<Typography variant="body1">
							Upon approval of your application, the security deposit / holding deposit and first month’s rent must be paid in full with a Cashier’s
							check or Money Order only. Personal checks and online payments will only be accepted beginning on the second month’s rent.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Img2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
