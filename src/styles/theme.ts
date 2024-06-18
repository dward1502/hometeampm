"use client";

import { Arimo } from "next/font/google";
import { Fjalla_One } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const arimo = Arimo({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
	display: "swap",
});
const fjallo = Fjalla_One({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	palette: {
		primary: {
			main: "#053149",
		},
		secondary: {
			main: "#FB8800",
		},
	},

	typography: {
		fontFamily: arimo.style.fontFamily,   
		body1:{
			fontSize:'1.2rem',
			fontFamily: arimo.style.fontFamily,  
			color:"#161615",
			marginTop:1,
			marginBottom:1
		},
		body2: {
			color: "#053149",
			fontSize: '2.2rem',
			fontFamily: fjallo.style.fontFamily,
		},
		button:{
			fontFamily:fjallo.style.fontFamily,
			fontSize:'1.8rem'
		}
	},
});

export default theme;
