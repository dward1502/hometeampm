"use client";
import Hero from "@/components/Hero";
import { Box, Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import ArrRight from "../../../assets/arrow-right.svg";
import CustomButton from "@/components/UI/CustomButton";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();

	return (
		<>
			<Hero title={"Pay Your Rent"} />
			<Grid container spacing={2} padding={4} mt={10}>
				<Grid item xs={12} md={6} padding={3} display={"flex"} flexDirection={"column"}>
					<Typography variant="body2" my={2}>PAYING RENT</Typography>
					<Typography variant="body1">Click on the Tenant Portal button to pay your rent online</Typography>
					<List>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>Rent is due on the 1st of each month.</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>Additional fees will be applied for late payments, as stated in your lease agreement.</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>
								If you are utilizing electronic bill pay options from your financial institution or a similar electronic payment method, include your
								rental street address and unit (if applicable) in the ‘memo’ section.
							</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>
								If you are paying by check, remember to include your rental street address and unit (if applicable) on the face of the check or memo
								line.
							</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>Please make your checks out to: HomeTeam Property Management</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<ArrRight />
							</ListItemIcon>
							<Typography>821 Bowsprit Road, Chula Vista, CA 91914 Now you can pay by card! Check out the details here.</Typography>
						</ListItem>
					</List>
					<CustomButton onClick={() => router.push("https://hometeam.appfolio.com/oportal/users/log_in")}>TENANT PORTAL</CustomButton>
				</Grid>
				<Grid item xs={12} md={6} padding={3} display={"flex"} flexDirection={"column"}>
					<Typography variant="body2" my={2}>
						LATE FEES
					</Typography>
					<Typography variant="body1">
						Our office is open Monday-Friday 9:00 am-5:00 pm. Rent payments must be received by 5:00 pm on the last day of your grace period,
						otherwise a late fee will be charged. Late fees will be applied to checks received after the last day of the grace period, regardless of
						the date the check is posted as. Remember, <strong>rent is due by the 1st of each month</strong> –the grace period accounts for the time
						it takes for the check to be received by mail. If you feel that your check will not be received by the last day of your grace period,
						please bring your check in person to our office before the end of the business day.
					</Typography>
					<Typography variant="body2" my={2}>
						PAYING RENT ON TIME HAS NEVER BEEN EASIER!
					</Typography>
					<Typography variant="body1">Set up recurring rent payments online so you never have to worry about paying rent on time again.</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Page;
