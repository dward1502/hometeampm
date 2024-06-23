"use client";
import { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem, Popover, IconButton, Typography, Grid , Slide, useScrollTrigger} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "@/assets/data/data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../assets/homeTeamLogo.svg";
import NavDrawer from "./Drawer";
import { useRouter } from "next/navigation";

function HideOnScroll(props:any) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
			<Slide appear={false} direction="down" in={!trigger}>
					{children}
			</Slide>
	);
}


const NavBar = (props:any) => {
	const router = useRouter();
	const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: event.currentTarget });
	};

	const handleMenuClose = (menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: null });
	};

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: event.currentTarget });
	};

	const handlePopoverClose = (menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: null });
	};

	const toggleDrawer = () => {
		setDrawerOpen((prev) => !prev);
	};
	const handleNavigation = (path: string) => {
		console.log(path);
		const validPath = path.startsWith("https") ? path : `/${path}`;

		router.push(validPath);
		handlePopoverClose(path);
	};
	return (
		<HideOnScroll {...props}>
			<AppBar position="fixed" sx={{ padding: 2, boxShadow: "none" }} color="transparent">
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Box width={240} height={80} position={"relative"}>
						<Link href="/" passHref>
							<Logo />
						</Link>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
						{menuItems.map((menu, index) => (
							<Box key={index} onMouseEnter={(event) => handlePopoverOpen(event, menu.title)} onMouseLeave={() => handlePopoverClose(menu.title)}>
								<Button
									aria-haspopup="true"
									endIcon={<ArrowDropDownIcon />}
									sx={{ color: "#FFF", fontSize: 16, mx: 1 }}
									onClick={() => handleNavigation(`/${menu.path}`)}
								>
									{menu.title}
								</Button>

								<Popover
									id={`popover-${menu.title}`}
									anchorEl={anchorEls[menu.title]}
									open={Boolean(anchorEls[menu.title])}
									onClose={() => handlePopoverClose(menu.title)}
									anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
									transformOrigin={{ vertical: "top", horizontal: "left" }}
									sx={{ mt: 1, minWidth: "20rem", padding: 4 }}
								>
									<Grid container wrap="wrap" width={"60vw"}>
										{menu.items.map(({ item, text, path }, i) => (
											<Grid item xs={12} sm={6} md={4} key={i} onClick={() => handleNavigation(path)}>
												<MenuItem sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "20rem" }}>
													<Typography variant="body2" fontSize={"1.5rem"}>
														{item}
													</Typography>
													<Typography
														variant="subtitle2"
														fontSize={".8rem"}
														color="textSecondary"
														sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
													>
														{text}
													</Typography>
												</MenuItem>
											</Grid>
										))}
									</Grid>
								</Popover>
							</Box>
						))}
						<Link href={"/agent-referral-program"}>
							<Typography color={"#FFF"} variant="body2" fontSize={"1rem"}>
								AGENT REFERRAL PROGRAM
							</Typography>
						</Link>
						<Button
							aria-controls={`menu-${"login"}`}
							aria-haspopup="true"
							onClick={(event) => handleMenuOpen(event, "login")}
							sx={{ color: "#FFF", fontSize: 14, borderColor: "#FFF", mx: 2, padding: 0.2 }}
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
					<IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={toggleDrawer} color="inherit">
						<MenuIcon sx={{ color: "#FFF", backgroundColor: "#053149", fontSize: 40, borderRadius: "5px" }} />
					</IconButton>
					{/* <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
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
				</Box> */}
				</Toolbar>
				<NavDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
			</AppBar>
		</HideOnScroll>
	);
};

export default NavBar;
