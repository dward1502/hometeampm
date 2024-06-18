import Hero from "@/components/Hero";
import { Typography, Box, Grid, ListItem, ListItemIcon, List, ListItemText } from "@mui/material";
import Image from "next/image";
import CheckCircle from "../../../assets/check-circle.svg";
import Image1 from "../../../assets/img/different-from-other-companies.jpg";
import Image2 from "../../../assets/img/leasing-and-marketing.jpg";
import Image3 from "../../../assets/img/no-eviction-guarantee.jpg";

const page = () => {
	return (
		<>
			<Hero title={"Residential Services"} />
			<Box padding={5} textAlign={"center"}>
				<Typography variant="body1">
					HomeTeam Property Management works to achieve the highest level of professionalism in the property management industry. It is our mission to
					give you, the owner, peace of mind. Let us handle the work while you relax and watch your investment make you money each month.
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
							HOW IS HOMETEAM DIFFERENT FROM OTHER COMPANIES?
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>All Managers are provided with continuous training.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>We only provide property management services; no sales, loans or escrow.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>View our Property Management Comparison Chart here.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>In-house services include:</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							LEASING AND MARKETING
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Professionally designed “For Rent” signage placed on your property.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Photos and a video tour which showcase your property at its best.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Increased visibility by utilizing the following online platforms: </ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									Strict tenant screening process which requires all applicants to undergo a thorough background check. This includes credit,
									criminal, work and resident history.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							ACCOUNTING
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>No management fees are paid until rent is collected.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Monthly disbursement of rent funds, either through ACH or by check.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Comprehensive monthly and year-end financial statements.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Funds are held in state-compliant trust accounts.</ListItemText>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							MAINTENANCE
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Maintenance requests and services are all managed for you.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Strong partnership with experienced vendors that provide quality services at a discounted rate.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Quality assurance and quality control for work that is completed.</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image3} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							NO-EVICTION GUARANTEE
						</Typography>
						<Typography variant="body1" mt={2}>
							We are so confident in our comprehensive tenant screening process that we offer a No-Eviction Guarantee, and this comes standard with
							our property management services. In the unlikely event that there is an eviction due to the quality of the tenant we placed, you are
							covered for the cost of the eviction for up to $1,000.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
