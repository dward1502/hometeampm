import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#FB8800",
	color: "#FFF",
	width: 200,
	fontSize: 18,
	padding: 10,
	marginTop:8,
	marginBottom:8,
	borderRadius: 50, // Adjust this value to change the roundness of the button
	"&:hover": {
		backgroundColor: "#e57e00", // Optional: Darken the button on hover
	},
}));

export default CustomButton;
