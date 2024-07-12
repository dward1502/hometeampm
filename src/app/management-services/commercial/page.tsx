import Hero from "@/components/Hero";
import { Typography, Box, Grid, ListItem, ListItemIcon, List, ListItemText } from "@mui/material";
import Image from "next/image";
import CheckCircle from "../../../assets/check-circle.svg";
import Image1 from "../../../assets/img/leasing-and-tenant-screening-services.jpg";
import Image2 from "../../../assets/img/financial-reporting.jpg";
import Image3 from "../../../assets/img/tenant-relation-program.jpg";
import Image4 from "../../../assets/img/construction-management.jpg";
import Image5 from "../../../assets/img/brand-management.jpg";
import GetQuote from "@/components/Forms/GetQuote";

const page = () => {
	return (
		<>
			<Hero title={"Commercial Services"} />
			<Box padding={5} textAlign={"center"}>
				<Typography variant="body1">
					HomeTeam Property Management’s commercial division is comprised of commercial managers with years of experience. Our staff understand the
					requirements and steps necessary with successfully managing commercial properties and can provide a custom management plan to meet your
					needs. As an added benefit, our management team ensures that your investment follows the management plan that is established to minimize
					liability, protect the asset and maintain and grow your investment.
				</Typography>
			</Box>
			<Box width={"100%"} sx={{padding:{xs:3,md:10}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							LEASING & TENANT SCREENING SERVICES
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									<Typography color={"secondary"} fontWeight={"bold"}>
										{" "}
										In-house leasing department
									</Typography>
									<Typography>
										All of our tenant screening is done in-house and does not rely on third party leasing or tenant screening services when securing
										tenants for your property.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									We cooperate with all Real Estate Brokers and Real Estate Office. We believe in always putting the clients interests first. We work
									with all real estate brokers and list all property in the MLS as well as LoopNet.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6", padding:{xs:3,md:8} }} width={"100%"}  display={"flex"}>
				<Grid container spacing={2}>
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
									We work with you, the owner, to set up a firm financial plan and budget for your property. HomeTeam Property Management also
									provides a number of different financial reports that we provide every owner. We also provide a market analysis and forecast for
									each owner as well.
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

			<Box width={"100%"} sx={{padding:{xs:3,md:8}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image3} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							TENANT RELATION PROGRAM{" "}
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									<Typography color={"secondary"} fontWeight={"bold"}>
										{" "}
										Proactive approach to property management
									</Typography>
									<Typography>
										Our tenant relations program focuses on outreach and communication with tenants to reduce liability and to provide excellent
										customer service to your tenants.
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} sx={{padding:{xs:3,md:8}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							MONTHLY MANAGEMENT REPORTS
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									<Typography>
										A report on leasing, vacancy status, accounting and any other issues that require owner attention. Specialized reports allow for
										the owner to be informed with events that pertain to their property.
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							VENDOR SELECTION
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									<Typography color={"secondary"} fontWeight={"bold"}>
										Screening process for all vendors{" "}
									</Typography>
									<Typography>
										Our tenant relations program focuses on outreach and communication with tenants to reduce liability and to provide excellent
										customer service to your tenants.
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ backgroundColor: "#F2F4F6",padding:{xs:3,md:8} }} width={"100%"} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							CONSTRUCTION MANAGEMENT
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>Experienced in supervising projects to ensure that they remain on schedule and on budget.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CheckCircle />
								</ListItemIcon>
								<ListItemText>
									Detailed and custom-made plan based on owner objectives, budget and potential for each and every property.
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image4} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} sx={{padding:{xs:3,md:8}}} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image5} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body2" my={2}>
							BRAND MANAGEMENT
						</Typography>

						<Typography variant="body1">
							All retail and commercial properties have a “brand.” HomeTeam Property Management understands that good management is not only
							restricted to the physical property but also to its name recognition and reputation. We employ our own in-house marketing and
							advertising team in making sure your property is presented in the best way possible.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<GetQuote/>
		</>
	);
};

export default page;
