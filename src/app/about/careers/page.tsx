import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleRounded } from "@mui/icons-material";
import Image from "next/image";
import Hero from "@/components/Hero";
import Career from "@/components/Forms/Career";

import Img from "../../../assets/img/career-oportunities.jpg";

const page = () => {
	const bulletPoints = [
		"Quality, knowledge and experience",
		"Empowering our team members to excel in our fast-paced, ever-changing environment",
		"Actively soliciting (and actually implementing) team member ideas",
		"Turning problem solving and teamwork into the most enjoyable parts of the day",
		"“Growth opportunities” that translate into actual growth, not taking on the workload of four people",
	];

	return (
		<>
			<Hero title={"Career Opportunities"} />
			<Grid container mt={4} spacing={2}>
				<Grid item md={6} xs={12}>
					<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
						<Image src={Img} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
					</Box>
				</Grid>
				<Grid item md={6} xs={12}>
					<Box display={"flex"} flexDirection={"column"} width={"80%"} sx={{ pl: { xs: 4 } }}>
						<Box display={"flex"}>
							<Typography variant="body2" component={"h2"} fontSize={"2.2rem"}>
								WANT TO LOVE WHERE
							</Typography>
							<Typography variant="body2" color={"secondary"} fontSize={"2.2rem"} ml={1}>
								YOU WORK?
							</Typography>
						</Box>
						<Typography color={"#FB8800"} fontWeight={600} variant="body1" fontStyle={"bold"}>
							At HomeTeam Property Management, we believe in...
						</Typography>
						<List>
							{bulletPoints.map((text, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<CheckCircleRounded style={{ color: "#FB8800" }} />
									</ListItemIcon>
									<ListItemText>
										<Typography variant="body1">{text}</Typography>
									</ListItemText>
								</ListItem>
							))}
						</List>
						<Typography variant="body1" my={1}>
							Our unique organizational structure and learning environment allow our property managers, operational staff, and team members to “own
							their job” and make a true difference in the experiences of our clients, tenants, vendors, and the public. Customer-oriented focus and
							commitment to excellence are fundamental to all that we do.
						</Typography>
						<Typography variant="body1" my={1}>
							We’re people-centric. Our goal is to delight our clients, tenants and team members. And we do that by focusing on integrity, customer
							service and building a great work environment.
						</Typography>
						<Typography variant="body1" my={1}>
							Those three things guide everything we do. They’re not just values we pay lip service to – they’re woven into every aspect of our
							business.
						</Typography>
						<Typography variant="body1" my={1}>
							Nodding your head? Then you may be a good fit for HomeTeam Property Management! Take a look at our open positions and feel free to
							submit an application if your experience is a match.
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box
						sx={{ backgroundColor: "#F2F4F6" }}
						mt={8}
						width={"100vw"}
						height={250}
						padding={10}
						display={"flex"}						
						flexDirection={"column"}
						justifyContent={"center"}
					>
						<Typography variant="body2" >
							OPEN POSITIONS
						</Typography>
						<Typography variant="body1">
							Sorry, we don’t have any openings available at this time. Please check back again soon or fill out the form below to send us your CV.
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Career/>
		</>
	);
};

export default page;
