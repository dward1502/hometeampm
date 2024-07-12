import Hero from "@/components/Hero";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import Image1 from "../../assets/img/how-our-referral-program-works.jpg";
import SVG1 from "../../assets/icon-reffer-a-client-to-us.svg";
import SVG2 from "../../assets/icon-we-contact-the-client.svg";
import SVG3 from "../../assets/icon-we-pay-you.svg";
import AgentReferal from "@/components/Forms/AgentReferal";

const page = () => {
	return (
		<>
			<Hero title={"Start Referring Clients to Us"} />
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"} sx={{ paddingLeft: "4rem !important" }}>
						<Typography variant="body2" my={2}>
							HOW OUR REFERRAL PROGRAM WORKS
						</Typography>
						<Typography variant="body1" mt={2}>
							Real estate agents can benefit from our referral program. As one of our partners, we can help your investor client-owners needing
							property management services. We can also manage properties for homeowners who choose to rent out homes that are slow to sell until the
							market becomes more favorable.
						</Typography>
						<Typography variant="body1" my={1}>
							Earn a referral bonus and keep your clients! Learn more below.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box
				zIndex={1000}
				width={"100%"}
				display={"flex"}
				sx={{ justifyContent: { xs: "center", md: "flex-end" }, mt: { lg: "-10rem" }, position: "relative" }}
				flexWrap={"wrap"}
			>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "20rem", height: "18rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG1 />
					</Box>

					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						REFER A CLIENT TO US
					</Typography>
					<Typography variant="body1">
						It is easy to send us a client. Complete the form on this page and we&aposll review your submission shortly.
					</Typography>
				</Box>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "20rem", height: "18rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG2 />
					</Box>

					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						WE CONTACT THE CLIENT
					</Typography>
					<Typography variant="body1">We will get in touch with the customer and help them explore the management solutions available.</Typography>
				</Box>
				<Box
					sx={{ boxShadow: "0 .3rem 3.2rem #00000029", width: "20rem", height: "18rem", backgroundColor: "#FFF", padding: 4, margin: "1.5rem" }}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box>
						<SVG3 />
					</Box>

					<Typography variant="body2" fontSize={"1.3rem"} my={2}>
						WE PAY YOU
					</Typography>
					<Typography variant="body1">
						After the property is signed up and a tenant is placed, then you will receive a $250 referral bonus.
					</Typography>
				</Box>
			</Box>
			<AgentReferal/>
		</>
	);
};

export default page;
