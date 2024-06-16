import React from "react";
import { testimonials } from "../../assets/data/data";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Testimonials = () => {
	return (
		<Box width={"100%"} sx={{ backgroundColor: "#FFF", padding: 10 }} display={"flex"} flexDirection={"column"}>
			<Box display={"flex"} justifyContent={"space-around"}>
				<Typography variant="h5" color={"#053149"}>
					CLIENT TESTIMONIALS
				</Typography>
				<Link href={"/about/testimonials"}>
					<Typography variant="body1" color={"#FB8800"}>
						View All Testimonials
					</Typography>
				</Link>
			</Box>
			<Box display={"flex"}>
        
      </Box>
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
				<CustomButton sx={{ width: 275, marginTop: 10 }}>SHARE YOUR EXPERIENCE</CustomButton>
			</Box>
		</Box>
	);
};

export default Testimonials;
