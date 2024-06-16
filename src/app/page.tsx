import styles from "./page.module.css";
import { Typography, Box } from "@mui/material";
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<Typography variant="h2" textAlign={"center"} color={"#FFF"}>
					Rental Property Management Company in San Diego
				</Typography>
			</div>
      <Box display={'flex'} width={'100vw'} height={250} sx={{backgroundColor:"#003149"}} alignContent={"center"}>
          <Box>
            <Typography></Typography>
            <Typography></Typography>
          </Box>
      </Box>
		</main>
	);
}
