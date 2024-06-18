import Hero from "@/components/Hero";
import { Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import CheckCircle from "../../../assets/check-circle.svg";

import Image1 from "../../../assets/img/financial-reporting.jpg";
import Image2 from "../../../assets/img/accounting.jpg";
const page = () => {
	return (
		<>
			<Hero title={"Accounting Services"} />
			<Box padding={5} textAlign={"center"}>
				<Typography variant="body1">
					HomeTeam Property Management specializes in complete financial services for our property owners and we offer the following services:
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
						<Typography variant="body2" my={2}>
							FINANCIAL REPORTING
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									{" "}
									Payment of all property related expenses including property debts, taxes, utilities and contractor invoices and bills.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									{" "}
									Management of rent collection and security deposits in compliance with State Trust Fund holding and record keeping requirements.{" "}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Rental market and economics of rent rate increases and local trends.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									Complete electronic accounting and record keeping with monthly statements sent to the owner via mail or electronic copy.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									Year end 1099 Tax Reporting Statement that you can provide your accounting professional for your property.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							ACCOUNTING SERVICES
						</Typography>
						<Typography variant="body1" mt={2}>
							All property related bills and invoices are paid through the Trust Account, assuring no commingling of client and corporate funds. This
							includes all mortage payments, Incurance and any other property related costs such repair invoices.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
