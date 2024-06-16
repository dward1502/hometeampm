"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/UI/CustomButton";
import CustomCardComponent from "@/components/UI/CustomCard";

import Carmen from "../../../assets/img/CarmenJimenez.jpg";
import Shun from "../../../assets/img/ShunWakita.jpg";
import Carolina from '../../../assets/img/CarolinaGusman.jpg'
import Jerome from '../../../assets/img/JeromeWatson.jpg'
import Placeholder from '../../../assets/employee-placeholder.svg'

const page = () => {
	const router = useRouter();
	return (
		<>
			<Hero title={"Our Team"} />
			<Grid container mt={10} spacing={3} justifyContent={"center"}>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Shun} alt="Image of Carmen" fill style={{ objectFit: "cover" }} />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							SHUN WAKITA
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							CEO
						</Typography>
					</CustomCardComponent>
				</Grid>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Carmen} alt="Image of Carmen" fill />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							CARMEN T. JIMENEZ
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							Property Manager
						</Typography>
					</CustomCardComponent>
				</Grid>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Carolina} alt="Image of Carmen" fill style={{ objectFit: "cover" }} />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							CAROLINA GUSMAN
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							Residential Services Admin
						</Typography>
					</CustomCardComponent>
				</Grid>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Jerome} alt="Image of Carmen" fill style={{ objectFit: "cover" }} />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							JEROME WATSON
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							Staff Acountant
						</Typography>
					</CustomCardComponent>
				</Grid>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Placeholder} alt="Image of Carmen" fill style={{ objectFit: "cover" }} />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							MARY ILUSTRE
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							Property Management Assistant
						</Typography>
					</CustomCardComponent>
				</Grid>
				<Grid item>
					<CustomCardComponent>
						<Box width={"100%"} height={250} position={"relative"}>
							<Image src={Placeholder} alt="Image of Carmen" fill style={{ objectFit: "cover" }} />
						</Box>
						<Typography variant="h6" color={"#053149"} my={2}>
							MICHAEL JEROME DE GUZMAN
						</Typography>
						<Typography variant="body1" color={"#FB8800"}>
							Receptionist
						</Typography>
					</CustomCardComponent>
				</Grid>
			</Grid>
		</>
	);
};

export default page;
