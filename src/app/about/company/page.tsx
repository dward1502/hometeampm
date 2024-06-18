"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";
import Img from "../../../assets/img/about-us.png";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/UI/CustomButton";
import CustomCardComponent from "@/components/UI/CustomCard";
import GetQuote from "@/components/UI/GetQuote";

import Carmen from "../../../assets/img/CarmenJimenez.jpg";
import Shun from "../../../assets/img/ShunWakita.jpg";
import Testimonials from "@/components/UI/Testimonials";
import SVG from '../../../assets/circleStar.svg'

const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Our Company"} />
			<Grid container mt={4} spacing={2}>
				<Grid item md={6} xs={12}>
					<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
						<Image src={Img} alt="About image" style={{ maxWidth: "100%", height: "auto" }} />
					</Box>
				</Grid>
				<Grid item md={6} xs={12}>
					<Box display={"flex"} flexDirection={"column"} width={"80%"} sx={{ pl: { xs: 4 } }}>
						<Typography variant="body2" color={"#053149"}>
							About Us
						</Typography>

						<Typography color={"#FB8800"} fontWeight={400} variant="h6" fontStyle={"bold"}>
							QUALITY. INTEGRITY. SINCE 1992.
						</Typography>
						<Typography variant="body1" my={1.5}>
							In 1992, HomeTeam Property Management started with a simple goal:
						</Typography>
						<Typography variant="body1" my={1.5}>
							To provide clients with quality property management services to maintain their investment.
						</Typography>
						<Typography variant="body1" my={1.5}>
							It’s been over 20 years and our goal hasn’t changed. Quality is still our top priority. That’s why we consistently adopt new
							technologies and analyze every aspect of our services to maximize their value and quality.
						</Typography>
						<Typography variant="body1" my={1.5}>
							We also believe in integrity and work hard to maintain a great work environment that meets the needs of our clients, tenants, and team
							members.
						</Typography>
						<Typography variant="body1" my={1.5}>
							We’re consistently one of the highest rated property management companies on Yelp, and we love that the majority of our business comes
							from referrals. Every client is a priority and we’re proud to have been ranked among the top 3 management companies three years in a row
							by the San Diego Tribune poll.
						</Typography>
						<CustomButton onClick={() => router.push("/about/why-choose-us")} sx={{ mt: 4 }}>
							WHY CHOOSE US
						</CustomButton>
					</Box>
				</Grid>

				<Box
					sx={{ backgroundColor: "#F2F4F6" }}
					mt={8}
					padding={2}
					width={"100vw"}
					display={"flex"}
					alignItems={"center"}
					flexDirection={"column"}
					justifyContent={"center"}
				>
					<Typography variant="body2" color={"#053149"} my={3}>
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
								<SVG/>
								<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
									CONTINUED GROWTH
								</Typography>
								<Typography variant="body1">
									We encourage growth not just within our company but encourage it with all the parties we serve. Whether it is consistent staff
									training, webinars for our customers, or just a place that allows for the sharing of ideas.
								</Typography>
							</CustomCardComponent>
						</Grid>
						<Grid item xs={12} md={4}>
							
							<CustomCardComponent height={425}>
								<SVG/>
								<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
									INTEGRITY WITHOUT COMPROMISE
								</Typography>
								<Typography variant="body1">
									Our company was founded on the belief that our word should be as good as the contracts that we write. That is why we were one of the
									first management companies to guarantee our services and why HomeTeam continues to provide a transparent and open environment for
									its staff and clients.
								</Typography>
							</CustomCardComponent>
						</Grid>
						<Grid item xs={12} md={4}>
							
							<CustomCardComponent height={425}>
								<SVG/>
								<Typography variant="body2" color={"#053149"} my={2} sx={{ fontSize: "1.6rem" }}>
									DELIVERING EXCELLENCE
								</Typography>
								<Typography variant="body1">
									Good is never good enough. We are always working on trying to build an excellent experience for our customers and are always looking
									for ways to make it better. We want to be able to delight our customers and provide them with a stress-free experience. Whether it
									be a homeowner or a tenant moving into one of our properties for the first time, each and every interaction is important to us.
								</Typography>
							</CustomCardComponent>
						</Grid>
					</Grid>
					<Box my={6}>
						<CustomButton onClick={() => router.push("/management-services/quote")} sx={{ mt: 6 }}>
							Get Started
						</CustomButton>
					</Box>
				</Box>
				<Box
					sx={{ backgroundColor: "#FFF" }}
					mt={10}
					padding={2}
					width={"100vw"}
					display={"flex"}
					alignItems={"center"}
					flexDirection={"column"}
					justifyContent={"center"}
				>
					<Typography variant="body2" color={"#053149"} my={3}>
						OUR TEAM
					</Typography>
					<Box paddingX={10}>
						<Typography variant="body1" mb={5} textAlign={"center"}>
							Our team members ensure that every client is a priority! Click below to get to know us a bit better. We're all looking forward to
							working with you!
						</Typography>
					</Box>

					<Grid container spacing={3} justifyContent="center">
						<Grid item xs={12} md={4}>
							<CustomCardComponent height={375}>
								<Box width={"100%"} height={200} position={"relative"}>
									<Image src={Shun} alt="Image of Carmen" fill />
								</Box>
								<Typography variant="h5" color={"#053149"} my={2}>
									SHUN WAKITA
								</Typography>
								<Typography variant="body1" color={"#FB8800"}>
									CEO
								</Typography>
							</CustomCardComponent>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomCardComponent height={375}>
								<Box width={"100%"} height={200} position={"relative"}>
									<Image src={Carmen} alt="Image of Carmen" fill />
								</Box>
								<Box>
									<Typography variant="h5" color={"#053149"} my={2}>
										CARMEN T. JIMENEZ
									</Typography>
									<Typography variant="body1" color={"#FB8800"}>
										Property Manager
									</Typography>
								</Box>
							</CustomCardComponent>
						</Grid>
					</Grid>
					<Box my={6}>
						<CustomButton onClick={() => router.push("/management-services/quote")} sx={{ mt: 6, width: 340 }}>
							MEET THE REST OF THE TEAM
						</CustomButton>
					</Box>
				</Box>
			</Grid>
			<Testimonials />
			<GetQuote/>
		</>
	);
};

export default page;
