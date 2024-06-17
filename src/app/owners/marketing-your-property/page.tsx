import Hero from "@/components/Hero";
import { Typography, Box } from "@mui/material";
import SVG1 from "../../../assets/internet.svg";
import SVG2 from "../../../assets/professional-photography.svg";
import SVG3 from "../../../assets/showings-and-applications.svg";
import SVG4 from "../../../assets/signage.svg";

const page = () => {
	return (
		<>
			<Hero title={"Marketing Your Property"} />
			<Box padding={4}>
				<Typography variant="body1" textAlign={"center"} my={8}>
					HomeTeam Property Management understands that a comprehensive marketing plan is essential to ensure the maximum exposure to qualified buyers
					in the market for a rental. Once your property is ready we leverage multiple online platforms and traditional marketing methods, which
					convert leads into applicants, then applicants into tenants.
				</Typography>
				<Typography variant="h4" fontWeight={"bold"} color={"#053149"} textAlign={"center"}>
					WHAT DO WE USE?
				</Typography>
			</Box>

			<Box display={"flex"} flexWrap={"wrap"} padding={5}>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG1 />
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" mt={3} textAlign={"center"} >
						INTERNET
					</Typography>
					<Typography variant="body1" mt={4}>
						In today’s market a strong online presence is the best way to reach the thousands of active property hunters in our market. A full
						property description, photo gallery, viewing request, and application link are all available on our website, in the “Properties” area. In
						addition, your property will appear on dozens of popular listing sights such as Zillow, Trulia, Craigslist, and AHRN.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG2 />{" "}
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" textAlign={"center"} mt={3}>
						PROFESSIONAL PHOTOGRAPHY
					</Typography>
					<Typography variant="body1" mt={4}>
						We have a professional photographer create a portfolio we use to make the best possible 1st impression for renters. We may also recommend
						a 3D virtual tour if we believe it will help your property stand out from similar units, or to reach those too far away to visit the
						property in person.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG3 />{" "}
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" mt={3} textAlign={"center"} >
						SIGNAGE
					</Typography>
					<Typography variant="body1" mt={4}>
						Professionally designed ‘For Rent’ signs are placed prominently on your property to draw attention and promote phoned-in inquiries from
						drive-by traffic.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 3.5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG4 />{" "}
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" mt={3}>
						SHOWINGS &amp; APPLICATIONS
					</Typography>
					<Typography variant="body1" mt={4}>
						Showings are available 365 days a year for vacant residential units. Applications can be submitted online 24/7, and our staff is available
						to answer questions concerning the property and gather feedback during office hours. We follow up on every showing and process as many
						applications as it takes to find qualified candidates, screen them, and execute a lease prior to the move-in date.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default page;
