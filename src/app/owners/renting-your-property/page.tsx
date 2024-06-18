import Hero from "@/components/Hero";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

import Image1 from "../../../assets/img/preparing-to-rent-your-property.jpg";
import Image2 from "../../../assets/img/setting-the-rent.jpg";
import Image3 from "../../../assets/img/how-long-will-the-property-be-vacant.jpg";
const page = () => {
	return (
		<>
			<Hero title={"Renting Your Property"} />

			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"body2"}>
							PREPARING TO RENT YOUR PROPERTY
						</Typography>
						<Typography variant="body1">
							We provide you with guidance on how to ready your property to compete in the ever-changing rental market. Our rental market surveys are
							based on real-time data to help us set a realistic rental rate based on your property’s condition, amenities, and the current market
							demand. We regularly communicate with renters and if their feedback indicates that maintenance or pricing is an issue, we communicate to
							you the need to make necessary adjustments to encourage applications and reduce vacancy time.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"body2"}>
							SETTING THE RENT
						</Typography>
						<Typography variant="body1">
							Supply and demand determine, location, and conditions all play a role in establishing the actual rental value of your property. To avoid
							long vacancies, we recommend you price competitively and make adjustments according to the changing supply in the market. The goal is
							always to maximize the return on your investment, but that does not always mean charging the highest rents in the neighborhood. Contact
							our experienced agents and managers and we can advise you on recommended pricing of your property even before you list with us.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image3} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"body2"}>
							HOW LONG WILL THE PROPERTY BE VACANT?
						</Typography>
						<Typography variant="body1">
							Unfortunately, there is no way to predict how long a property will remain on the market, even in the best market conditions. There are
							months when demand is high and properties are rented even before they become available. There are other months when renters are less
							motivated to move. In all cases, we work diligently to rent your property as quickly as possible to qualified tenants.
						</Typography>
						<Typography variant="body1">
							We could almost guarantee zero days of vacancy if we did not have established standards for qualifying tenants. However, we know that
							bad tenants mean more expense and frustration in the long run.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"body2"}>
							HOW DOES TENANT SCREENING BENEFIT ME?
						</Typography>
						<Typography variant="body1">
							We look into an applicant’s rental history and credit worthiness to see if there are red flags that increase the probability of late
							payments, defaults, or non-compliance with leasing terms. Waiting for the right tenant is worth the additional time it may take to rent
							out your property. We stand by our strict screening guidelines by offering a No-Eviction Guarantee as a courtesy to all our property
							owners.
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
