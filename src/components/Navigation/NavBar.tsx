"use client";
import { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { menuItems } from "@/assets/data/data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../assets/homeTeamLogo.svg";
const NavBar = () => {
	const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: event.currentTarget });
	};

	const handleMenuClose = (menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: null });
	};

	return (
		<AppBar position="fixed" sx={{ padding: 2, boxShadow: "none" }} color="transparent">
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box width={240} height={80} position={"relative"}>
					<Logo />
					{/* <HomeTeamLogoWhite /> */}
				</Box>
				<Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
					{menuItems.map((menu, index) => (
						<Box key={index}>
							<Button
								aria-controls={`menu-${menu.title}`}
								aria-haspopup="true"
								onClick={(event) => handleMenuOpen(event, menu.title)}
								endIcon={<ArrowDropDownIcon />}
								sx={{ color: "#FFF", fontSize: 16, mx: 1 }}
							>
								{menu.title}
							</Button>
							<Menu
								id={`menu-${menu.title}`}
								anchorEl={anchorEls[menu.title]}
								keepMounted
								open={Boolean(anchorEls[menu.title])}
								onClose={() => handleMenuClose(menu.title)}
							>
								{menu.items.map(({ item, text, path }, i) => (
									<MenuItem key={i} onClick={() => handleMenuClose(menu.title)}>
										<Link href={`/${path}`} passHref>
											<Typography variant="subtitle1">{item}</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
					))}
					<Link href={"/agent-referral-program"}>
						<Typography color={"#FFF"} fontSize={16} mt={1}>
							AGENT REFERRAL PROGRAM
						</Typography>
					</Link>

					<Button
						aria-controls={`menu-${"login"}`}
						aria-haspopup="true"
						onClick={(event) => handleMenuOpen(event, "login")}
						sx={{ color: "#FFF", fontSize: 16, borderColor: "#FFF", mx: 2 }}
						variant="outlined"
					>
						{"login"}
					</Button>
					<Menu
						id={`menu-${"login"}`}
						anchorEl={anchorEls["login"]}
						keepMounted
						open={Boolean(anchorEls["login"])}
						onClose={() => handleMenuClose("login")}
					>
						<MenuItem onClick={() => handleMenuClose("login")}>
							<Link href={`https://hometeam.appfolio.com/connect/users/sign_in`} passHref>
								<Typography variant="subtitle1">Tenant Login</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={() => handleMenuClose("login")}>
							<Link href={`https://hometeam.appfolio.com/oportal/users/log_in`} passHref>
								<Typography variant="subtitle1">Owner Login</Typography>
							</Link>
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
