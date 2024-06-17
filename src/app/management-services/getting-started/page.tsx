import Hero from "@/components/Hero";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

import Image1 from "../../../assets/img/preparing-to-rent-your-property.jpg";
import Image2 from "../../../assets/img/initial-meeting-inspection-and-consultation.jpg";

import SVG2 from "../../../assets/icon-maintenance-plan.svg";
import SVG3 from "../../../assets/icon-tenance-screening-and-lease-preparation.svg";
import SVG1 from "../../../assets/icon-leasing-oversight.svg";

const page = () => {
	return (
		<>
			<Hero title="Get a Quote" />
			<Box sx={{ backgroundColor: "#F2F4F6" }} width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image1} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"h4"} fontWeight={"bold"} color={"#053149"}>
							LOOKING TO HIRE A PROPERTY MANAGEMENT COMPANY?
						</Typography>
						<Typography color={"#FB8800"} typography={"h6"} fontWeight={"bold"}>
							Unsure where to start?
						</Typography>
						<Typography typography={"body1"}>
							The managers and staff of HomeTeam Property Management have many years of residential and commercial management experience. We take an
							active role in providing guidance to property owners in expense control, life safety issues and vacancy. We understand that your
							investment must perform but must also be maintained to extend its quality.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box width={"100%"} padding={8} display={"flex"}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
						<Typography typography={"h4"} fontWeight={"bold"} color={"#053149"}>
							INITIAL MEETING, INSPECTION & CONSULTATION
						</Typography>
						<Typography variant="body1">
							A property manager will provide an assessment of your property. During the initial meeting, our managers will walk the property with you
							and provide a general assessment of your property. These property reviews are for the managers to get a better idea of how we can be of
							greater assistance, and to help you understand the roles and responsibilities of HomeTeam Property Management. An interior and exterior
							inspection is also done to provide us with a thorough understanding of the condition of your property.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
						<Box width={"100%"} position={"relative"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
							<Image src={Image2} alt="Career opportunites image" style={{ maxWidth: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box display={"flex"} flexWrap={"wrap"} padding={5} sx={{ backgroundColor: "#F2F4F6" }}>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG1 />
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" mt={3} textAlign={"center"} >
						LEASING OVERSIGHT
					</Typography>
					<Typography variant="body1" mt={4}>
						We oversee the leasing and marketing of your property. After assessing current vacancy rates, market rents, and current leasing
						situations, we can provide you with a strategic property management plan for your investment. If the property is in need of work, we may
						also develop a maintenance plan to bring your investment up to a rentable condition in the most cost effective manner.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG2 />{" "}
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" textAlign={"center"} mt={3}>
						MAINTENANCE PLAN
					</Typography>
					<Typography variant="body1" mt={4}>
						Oversight of your property is vital to the overall appeal and safety. We will plan to make sure maintenance issues are proactively
						addressed. In addition, a “life safety” plan will be initiated and communicated to all tenants regarding fire safety, carbon monoxide, and
						other tenant-targeted safety issues.
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{ padding: 5, m: 1, backgroundColor: "#FFF", boxShadow: "0 3px 32px #0029" }}
					flex={1}
				>
					<SVG3 />{" "}
					<Typography fontWeight={"bold"} color={"#053149"} variant="h5" mt={3} textAlign={"center"} >
						TENANT SCREENING &amp; LEASE PREPARATION
					</Typography>
					<Typography variant="body1" mt={4}>
						By utilizing the latest screening methods available, our trained and experienced in-house leasing staff can guarantee the quality of your
						tenants. We so strongly believe in the quality of our screening services that we guarantee no eviction; If a tenant we screen and place in
						your property is ever evicted, we will cover the costs of the eviction up to $1,000.00! All tenant screening methods comply with local,
						state, and federal laws.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default page;
