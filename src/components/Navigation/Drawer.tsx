"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { menuItems } from "../../assets/data/data";
interface DrawerProps {
	open: boolean;
	toggleDrawer: () => void;
}

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
	backgroundColor: "#053149",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#FFF" }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba( 203, 203, 203 ,30)",
}));

const NavDrawer = ({ open, toggleDrawer }: DrawerProps) => {
	const [expanded, setExpanded] = useState<string | false>("panel1");

	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Drawer open={open} anchor="top" onClose={toggleDrawer}>
				{menuItems.map((menu, k) => (
					<Accordion expanded={expanded === `${menu.title}`} onChange={handleChange(`${menu.title}`)}>
						<AccordionSummary aria-controls={`${menu.title}-content`} id={`${menu.title}header`} key={k}>
							<Typography variant="body2" fontSize={"1.8rem"} color={"#FFF"}>
								{menu.title}
							</Typography>
						</AccordionSummary>
						{menu.items.map(({ item, path }, i) => (
							<AccordionDetails>
								<Link href={`/${path}`} onClick={()=> toggleDrawer()}>
									<Typography variant="body1" color={"#FFF"} ml={5}>
										{item}
									</Typography>
								</Link>
							</AccordionDetails>
						))}
					</Accordion>
				))}
			
		</Drawer>
	);
};

export default NavDrawer;
