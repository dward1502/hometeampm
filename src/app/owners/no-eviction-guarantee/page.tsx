import Hero from "@/components/Hero";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

import Image1 from "../../../assets/img/understand-the-success.jpg";

const page = () => {
	return (
		<>
			<Hero title={"No - Eviction Guarantee"} />
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography variant="body1">
							At HomeTeam Property Management, we understand that the success of your investment depends on many factors–one being the quality of your
							tenants. After all, the income from your investment property relies solely on the rent checks from your tenants. That is why we make
							sure that every prospective tenant undergoes a strict and thorough screening process in order to make sure that they are reliable and
							can pay their rent on time.
						</Typography>
						<Typography typography={"body1"}>
							We are so confident in our tenant selection process that we include a No-Eviction Guarantee as a courtesy to every HPM property owner.
							If there is an eviction due to the quality of tenants that we placed, we will cover all eviction costs up to $1000.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default page;
