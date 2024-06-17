import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CustomCard = styled(Card)(({ theme, h }) => ({
	height: h, 
	width: 375,
	display: "flex",
	flexDirection: "column",
	// justifyContent: 'center',
	padding:5,
	alignItems: "center",
	boxShadow: "2px -4px 27px -7px rgba(117,117,117,0.68)",
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
	textAlign: "center",
}));

const CustomCardComponent = ({ children, height }) => (
	<CustomCard h={height}>
		<CustomCardContent>{children}</CustomCardContent>
	</CustomCard>
);

export default CustomCardComponent;
