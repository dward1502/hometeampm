import { Typography } from "@mui/material";
import styles from "../styles/style.module.css";
interface Props {
	title: string;
}
const Hero = (prop: Props) => {
	return (
		<div className={styles.hero}>
			<Typography color={"#FFF"} variant="body2" textAlign={'center'} fontSize={'4rem'}>{prop.title}</Typography>
		</div>
	);
};

export default Hero;
