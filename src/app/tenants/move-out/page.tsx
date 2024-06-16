import Hero from "@/components/Hero";
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { moveOut } from "@/assets/data/data";
import CheckCircle from "../../../assets/check-circle.svg";
import ArrRight from "../../../assets/arrow-right.svg";
const page = () => {
	return (
		<>
			<Hero title={"Move Out"} />
			<Box padding={5}>
				<Typography variant="body1" my={5}>
					When moving out, you must provide an advance 30 day written notice to vacate. A 30 day notice form is provided in the forms section. Once we
					receive your 30 day notice to vacate, the following list is a breakdown of what you will need to do prior to your departure.
				</Typography>
				<Typography fontWeight={"bold"} variant="h5" my={2}>
					PREPARING THE PROPERTY
				</Typography>
				<Typography variant="body1" my={2}>
					We want your move-out to be a pleasant and successful one. The following are the steps to take for your move:
				</Typography>
				<Box display={"flex"} flexDirection={"column"} my={4}>
					{moveOut.map((item, k) => (
						<Box key={k}>
							<Box display={"flex"}>
								<CheckCircle />
								<Typography typography={"h5"} fontWeight={"bold"} color={"#FB8800"} ml={3}>
									{item?.title}
								</Typography>
							</Box>
							<List>
								{item?.text.map((item, k) => (
									<ListItem key={k}>
										<ListItemIcon>
											<ArrRight />
										</ListItemIcon>
										<ListItemText primary={item} />
									</ListItem>
								))}
							</List>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
};

export default page;
