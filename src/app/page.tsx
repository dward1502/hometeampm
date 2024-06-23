import CustomButton from "@/components/UI/CustomButton";
import styles from "./page.module.css";
import { Typography, Box, Grid } from "@mui/material";
import { Metadata } from "next";
import CustomCardComponent from "@/components/UI/CustomCard";

import SVG1 from "../assets/service-icon-1.svg";
import SVG2 from "../assets/service-icon-2.svg";
import SVG3 from "../assets/service-icon-3.svg";
import SVG4 from "../assets/service-icon-4.svg";
import SVG5 from "../assets/service-icon-5.svg";
import SVG6 from "../assets/icon-properties.svg";
import SVG7 from "../assets/icon-employees.svg";
import SVG8 from "../assets/icon-tenants.svg";
import SVG9 from "../assets/service-icon-7.svg";
import SVG10 from "../assets/service-icon-8.svg";
import SVG11 from "../assets/service-icon-6.svg";
import Testimonials from "@/components/UI/Testimonials";

export const metadata: Metadata = {
	title: "San Diego Real Estate Management",
	description:
		"We specialize in full-service residential and commercial property management in San Diego County, tailored to fit your individual needs.",
	keywords: ["Real Estate"],
	openGraph: {
		url: "https://hometeampm.com",
		type: "website",
		description:
			"At FilamentDB, we are committed to becoming the authoritative source of information on 3D printing filaments. Our mission is to empower makers, engineers, and enthusiasts with comprehensive data and insights to make informed decisions about their 3D printing projects.",
		images: [
			{
				url: "https://hometeampm.com/assets/homeTeam-logoDark.svg",
				width: 1200,
				height: 630,
				alt: "Image of a 3d printer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Team Property Management",
		description:
			"We specialize in full-service residential and commercial property management in San Diego County, tailored to fit your individual needs.",
		//TODO Need to create a twitter account for filament DB
		// creator: "@dminhvu02",
		// site: "@dminhvu02",
		images: [
			{
				url: "https://hometeampm.com/assets/homeTeam-logoDark.svg",
				width: 1200,
				height: 630,
				alt: "filamentDB",
			},
		],
	},
	alternates: {
		canonical: "https://hometeampm",
	},
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<Typography variant="h2" textAlign={"center"} color={"#FFF"}>
					Rental Property Management Company in San Diego
				</Typography>
			</div>
			<Box
				display={"flex"}
				width={"100vw"}
				height={200}
				sx={{ backgroundColor: "#003149" }}
				alignContent={"center"}
				justifyContent={"space-around"}
				padding={4}
			>
				<Box display={"flex"} flexDirection={"column"} alignContent={"center"} justifyContent={"center"}>
					<Typography variant="body2" color={"#FFF"}>
						HOW MUCH WILL MY HOME RENT FOR?
					</Typography>
					<Typography variant="body1" color={"#FFF"}>
						Find out by entering your rental property address
					</Typography>
				</Box>
				<Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
					<input></input>
					<CustomButton>Get Started</CustomButton>
				</Box>
			</Box>
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
				<Grid container spacing={2} padding={8}>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG1 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								RESIDENTIAL
							</Typography>
							<Typography variant="body1" color={"secondary"}>
								We deliver the highest level of professionalism in the residential property management industry to give property owners peace of mind.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG2 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								COMMERCIAL
							</Typography>
							<Typography variant="body1" fontSize={"1rem"} color={"secondary"}>
								We understand the requirements to manage commercial properties successfully. Our custom management plans are designed to meet your
								needs.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG3 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								MARKETING
							</Typography>
							<Typography variant="body1" fontSize={"1rem"} color={"secondary"}>
								We get word out to find the best tenants for your property using professional photography, videos, referrals, top rental sites, and
								more.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG4 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								ACCOUNTING
							</Typography>
							<Typography variant="body1" fontSize={"1rem"} color={"secondary"}>
								From bill payment to rent collection and preparing tax reporting statements, we offer complete financial services for property owners.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG5 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								MAINTENANCE
							</Typography>
							<Typography variant="body1" fontSize={"1rem"} color={"secondary"}>
								Property maintenance is one of the most critical aspects of maximizing your investment, and it's one of our top priorities when
								managing properties.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							sx={{ backgroundColor: "#ebebeb" }}
							padding={3}
							gap={3}
						>
							<SVG5 />
							<Typography variant="body2" fontSize={"1.8rem"}>
								LEASING
							</Typography>
							<Typography variant="body1" fontSize={"1rem"} color={"secondary"}>
								Our full-time leasing agents apply the lastest marketing, application processing and screening procedures to place high-quality
								tenants in every property.
							</Typography>
							<Typography>Learn More</Typography>
						</Box>
					</Grid>
				</Grid>
				<CustomButton>LEARN ABOUT MORE OF OUR SERVICES</CustomButton>
			</Box>
			<Box
				display={"flex"}
				width={"100vw"}
				// height={200}
				sx={{ backgroundColor: "#003149" }}
				alignContent={"center"}
				justifyContent={"space-around"}
				padding={4}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4} gap={4}>
						<Box display={"flex"} flexDirection={"column"}>
							<Typography variant="body2" color={"#FFF"}>
								HOMETEAM BY THE NUMBERS
							</Typography>
							<Typography variant="body1" color={"#FFF"}>
								Our tenure in the San Diego market and dedicated team members have generated some impressive numbers since 1992. While we don't mean
								to brag, our numbers represent the best property management experience in the market!
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={2.5} gap={4}>
						<Box display={"flex"} flexDirection={"column"} sx={{ borderLeft: ".4rem solid #FB8800" }} padding={3}>
							<SVG6 />
							<Typography variant="body2" color={"#FFF"} my={1}>
								300 +
							</Typography>
							<Typography variant="body1" color={"#FFF"}>
								Properties
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={2.5} gap={4}>
						<Box display={"flex"} flexDirection={"column"} sx={{ borderLeft: ".4rem solid #FB8800" }} padding={3}>
							<SVG7 />
							<Typography variant="body2" color={"#FFF"} my={1}>
								9
							</Typography>
							<Typography variant="body1" color={"#FFF"}>
								Employees
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={2.5} gap={4}>
						<Box display={"flex"} flexDirection={"column"} sx={{ borderLeft: ".4rem solid #FB8800" }} padding={3}>
							<SVG8 />
							<Typography variant="body2" color={"#FFF"} my={1}>
								1000 +
							</Typography>
							<Typography variant="body1" color={"#FFF"}>
								Tenants
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{ backgroundColor: "#F2F4F6" }}
				padding={6}
				width={"100vw"}
				display={"flex"}
				alignItems={"center"}
				flexDirection={"column"}
				justifyContent={"center"}
			>
				<Typography variant="body2" color={"#053149"} mt={8} mb={3}>
					Our Values
				</Typography>
				<Box paddingX={10}>
					<Typography variant="body1" mb={5} padding={3} textAlign={"center"}>
						From our founder to every team member and action we take, these core values drive who we are and how we serve property owners in the San
						Diego area.
					</Typography>
				</Box>

				<Grid container spacing={3} justifyContent="center" paddingX={10}>
					<Grid item xs={12} md={4}>
						<CustomCardComponent height={425}>
							<SVG9 />
							<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
								CONTINUED GROWTH
							</Typography>
							<Typography variant="body1" sx={{ fontSize: "1rem" }}>
								We encourage growth not just within our company but encourage it with all the parties we serve. Whether it is consistent staff
								training, webinars for our customers, or just a place that allows for the sharing of ideas.
							</Typography>
						</CustomCardComponent>
					</Grid>
					<Grid item xs={12} md={4}>
						<CustomCardComponent height={425}>
							<SVG10 />
							<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
								INTEGRITY WITHOUT COMPROMISE
							</Typography>
							<Typography variant="body1" sx={{ fontSize: "1rem" }}>
								Our company was founded on the belief that our word should be as good as the contracts that we write. That is why we were one of the
								first management companies to guarantee our services and why HomeTeam continues to provide a transparent and open environment for its
								staff and clients.
							</Typography>
						</CustomCardComponent>
					</Grid>
					<Grid item xs={12} md={4}>
						<CustomCardComponent height={425}>
							<SVG11 />
							<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
								DELIVERING EXCELLENCE
							</Typography>
							<Typography variant="body1" sx={{ fontSize: "1rem" }}>
								Good is never good enough. We are always working on trying to build an excellent experience for our customers and are always looking
								for ways to make it better. We want to be able to delight our customers and provide them with a stress-free experience. Whether it be
								a homeowner or a tenant moving into one of our properties for the first time, each and every interaction is important to us.
							</Typography>
						</CustomCardComponent>
					</Grid>
				</Grid>
				<CustomButton>GET STARTED</CustomButton>
			</Box>
			<Testimonials />
		</main>
	);
}
