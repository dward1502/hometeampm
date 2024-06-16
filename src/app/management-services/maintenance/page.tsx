import { Typography } from "@mui/material";
import Hero from "@/components/Hero";

const page = () => {
	return (
		<>
			<Hero title={"Maintenance Services"} />
			<Typography variant="body1" my={8} textAlign={"center"}>
				Property maintenance is one of the most important aspects in maximizing your investment. Routine maintenance and services will all be managed
				for you.
			</Typography>
		</>
	);
};

export default page;
