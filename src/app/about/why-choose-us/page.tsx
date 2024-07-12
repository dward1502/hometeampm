"use client";
import Hero from "@/components/Hero";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/UI/CustomButton";
import CustomCardComponent from "@/components/UI/CustomCard";
import { useRouter } from "next/navigation";
import Testimonials from "@/components/UI/Testimonials";
import Img from "../../../assets/img/why-choose-us.jpg";
import GetQuote from "@/components/Forms/GetQuote";
import SVG from '../../../assets/circleStar.svg'

const Page = () => {
	const router = useRouter();

	return (
		<>
			<Hero title={"Why Choose Us"} />
			<Grid container mt={4} spacing={2} paddingX={3}>
				<Grid item md={6} xs={12}>
					<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
						<Image src={Img} alt="About image" style={{ maxWidth: "100%", height: "auto" }} />
					</Box>
				</Grid>
				<Grid item md={6} xs={12}>
					<Box display={"flex"} flexDirection={"column"} width={"80%"} sx={{ pl: { xs: 4 } }}>
						<Typography variant="body2" component={"h2"}>
							WE MAKE EVERY CLIENT OUR TOP PRIORITY
						</Typography>

						<Typography color={"#FB8800"} fontWeight={600} variant="body1" fontStyle={"bold"}>
							Residential and Commercial property owners benefit from our top-rated services!
						</Typography>
						<Typography variant="body1" my={1.5}>
							San Diego is an extensive area. It is also a popular spot for residential and commercial real estate investors! We realize we are not the
							only property managers in town—but our longevity in the community for more than 20 years and highly-rated services make us the best
							choice for property owners looking to maximize their investments.
						</Typography>
						<Typography variant="body1" my={1.5}>
							We serve every client we have as our top priority. The combination of our experience, established processes, local knowledge, stellar
							team, and core values make a positive difference when choosing the best property managers for your properties.{" "}
						</Typography>

						<CustomButton onClick={() => router.push("/about/company")} sx={{ mt: 4 }}>
							ABOUT US
						</CustomButton>
					</Box>
				</Grid>

				<Box
					sx={{ backgroundColor: "#F2F4F6" }}
					mt={8}
					paddingY={15}
					width={"100vw"}
					display={"flex"}
					alignItems={"center"}
					flexDirection={"column"}
					justifyContent={"center"}
				>
					<Grid container spacing={3} justifyContent="center" alignContent={'center'} padding={5}>
						<Grid item xs={12} md={4}>
							<CustomCardComponent height={425}>
								<SVG/>
								<Typography variant="h6" color={"#053149"} my={2}>
									CONTINUED GROWTH
								</Typography>
								<Typography variant="body1" fontSize={'1rem'}>
									We encourage growth not just within our company but encourage it with all the parties we serve. Whether it is consistent staff
									training, webinars for our customers, or just a place that allows for the sharing of ideas.
								</Typography>
							</CustomCardComponent>
						</Grid>
						<Grid  item xs={12} md={4}>
							<CustomCardComponent height={425}>
								<SVG/>
								<Typography variant="h6" color={"#053149"} my={2}>
									INTEGRITY WITHOUT COMPROMISE
								</Typography>
								<Typography variant="body1" fontSize={'1rem'}>
									Our company was founded on the belief that our word should be as good as the contracts that we write. That is why we were one of the
									first management companies to guarantee our services and why HomeTeam continues to provide a transparent and open environment for
									its staff and clients.
								</Typography>
							</CustomCardComponent>
						</Grid>
						<Grid  item xs={12} md={4}>
							<CustomCardComponent height={425}>
								<SVG/>
								<Typography variant="h6" color={"#053149"} my={2}>
									DELIVERING EXCELLENCE
								</Typography>
								<Typography variant="body1" fontSize={'1rem'}>
									Good is never good enough. We are always working on trying to build an excellent experience for our customers and are always looking
									for ways to make it better. We want to be able to delight our customers and provide them with a stress-free experience. Whether it
									be a homeowner or a tenant moving into one of our properties for the first time, each and every interaction is important to us.
								</Typography>
							</CustomCardComponent>
						</Grid>
					</Grid>

					<CustomButton onClick={() => router.push("/management-services/quote")} sx={{ mt: 6 }}>
						Get Started
					</CustomButton>
				</Box>
				<Testimonials />
				<GetQuote/>
			</Grid>
		</>
	);
};

export default Page;
