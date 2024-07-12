import Hero from "@/components/Hero";
import { Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import CheckCircle from "../../../assets/check-circle.svg";

import Image1 from "../../../assets/img/best-approach.jpg";
import Image2 from "../../../assets/img/maintenance-techniques.jpg";
import GetQuote from "@/components/Forms/GetQuote";
import RentalAnalysis from "@/components/UI/RentalAnalysis";
const page = () => {
	return (
		<>
			<Hero title={"Maintaining Your Property"} />
			<Box sx={{ backgroundColor: "#F2F4F6",padding:{xs:3,md:8} }} width={"100%"} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body1">
							The best approach to maintenance is preventative maintenance, and this is HomeTeam Property Management policy.
						</Typography>
						<Typography variant="body1">First, we begin with educating tenants by:</Typography>
						<List>
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
									Each Adult applicant (18+ years of age) and / or applicant contributing to the monthly rent must complete a separate application.
								</ListItemText>
							</ListItem>
						</List>

						<Typography variant="body1">
							It’s been said that no news is good news; however, this can be the opposite. Delayed news can become very bad news. What is worse than
							finding out that dry rot or discoloration of the linoleum could have been prevented if the tenant had just reported the leaking toilet
							in the bathroom? Avoiding major maintenance costs are certainly more favorable in such cases. That is why it is important for the
							tenants to understand from the very beginning of their tenancy that they are expected to care for the property and they are required to
							report maintenance issues.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} sx={{padding:{xs:3,md:8}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body1">
							Next, we use preventive maintenance techniques when work is required and utilize competent contractors. Often times, the minor
							expenditures save the most money such as doorstops, new filters, checking appliances, testing smoke alarms, adjusting doors, window
							latches, dead bolts, and more. Many small repair items can prevent maintenance that will become costly in the long run.
						</Typography>
						<Typography variant="body1">
							Learn more about our maintenance services here. If you have additional questions or if you’d like to find out more about the quality of
							our property management services, please contact us today by completing our contact form, or by calling our office at (619) 872-7368. We
							look forward to hearing from you!
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<RentalAnalysis/>
			<GetQuote/>
		</>
	);
};

export default page;
