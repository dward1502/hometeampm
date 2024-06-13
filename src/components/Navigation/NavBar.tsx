"use client";
import { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { HomeTeamLogoWhite } from "../SVG/svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = () => {
	const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: event.currentTarget });
	};

	const handleMenuClose = (menu: string) => {
		setAnchorEls({ ...anchorEls, [menu]: null });
	};

	const menuItems = [
		{
			title: "About",
			items: [
				{ item: "Our Company", text: "It's been over 20 years and our goal hasn't changed", path: "about/company" },
				{ item: "Our Team", text: "Meet the Home Team Property Management Team", path: "about/team" },
				{ item: "Why Choose Us", text: "No matter your property management goals, we will get you there", path: "about/why-choose-us" },
				{
					item: "Careers",
					text: "Take a look at our open positions and feel free to submit an application if your experience is a match",
					path: "about/careers",
				},
				{
					item: "Vendors",
					text: "We are continually seeking out qualified, professional vendors to fulfill goods or maintenance contracts",
					path: "about/vendors",
				},
				{
					item: "Connect With Us",
					text: "Reach out to our expert team to ssee how we can assist you with your property management needs",
					path: "about/connect",
				},
				{ item: "Testimonials", text: "Read HomeTeam Property Management client testimonials here", path: "about/testimonials" },
			],
		},
		{
			title: "Management Services",
			items: [
				{ item: "Residential", text: "It's been over 20 years and our goal hasn't changed", path: "management-services/residential" },
				{ item: "Commerical", text: "View our commercial property management services", path: "management-services/commercial" },
				{ item: "Marketing", text: "View how we market your property to prospective tenants", path: "management-services/marketing" },
				{
					item: "Accounting",
					text: "We specialize in complete financial services for our property owners",
					path: "management-services/accounting",
				},
				{
					item: "Maintenance",
					text: "Property maintenance is one of the most important aspects of maximizing your investment",
					path: "management-services/maintenance",
				},
				{
					item: "Leasing",
					text: "Our leasing department utilizes the latest in application and credit screening procedures",
					path: "management-services/leasing",
				},
				{ item: "Free Rental Analysis", text: "Get a free rental valuation of your investment property", path: "management-services/free-rental-analysis" },
				{ item: "Get a Quote", text: "Learn how much it would cost to manage your property", path: "management-services/quote" },
			],
		},
		{
			title: "Owners",
			items: [
				{
					item: "Marketing your property",
					text: "Learn how we market your property to ensure the maximum exposure to qualified buyers",
					path: "owners/marketing-your-property",
				},
				{
					item: "Renting your property",
					text: "We provide you with guidance on how to ready your property to compete in the ever changing rental market",
					path: "owners/renting-your-property",
				},
				{
					item: "Maintaining your property",
					text: "The best approach to maintenance is preventative maintenance, and this is HomeTeam Property Management policy",
					path: "owners/maintaining-your-property",
				},
				{
					item: "No - Eviction Guarantee",
					text: "We are so confident in our tenant selection process that we include a No - Eviction Guarantee",
					path: "owners/no-eviction-guarantee",
				},
				{
					item: "Free rental analysis",
					text: "Get a free rental valuation of your investment property",
					path: "owners/free-rental-analysis",
				},
				{
					item: "Owner portal login",
					text: "Sign-in to monitor your account",
					path: "owners/owner-portal-login",
				},
				{ item: "Get a quote", text: "Learn how much it would cost to manage your property", path: "owners/testimonials" },
			],
		},
		{
			title: "Tenants",
			items: [
				{
					item: "Rental Search",
					text: "Find your next place to live in San Diego",
					path: "tenants/rental-search",
				},
				{
					item: "Tenant Portal Login",
					text: "Sign-in to monitor your account",
					path: "tenants/tenant-portal-login",
				},
				{
					item: "Pay Your Rent",
					text: "Paying rent on time has never been easier",
					path: "tenants/pay-your-rent",
				},
				{
					item: "Future Tenants",
					text: "Important information for tenants wanting to lease a property from HomeTeam",
					path: "tenants/future-tenants",
				},
				{
					item: "Move Out",
					text: "We want your move-out to be a pleasant and successful one",
					path: "tenants/move-out",
				},
				{
					item: "Notice to Vacate",
					text: "Moving out? Submit your notice to vacate here!",
					path: "tenants/notice-to-vacate",
				},
			],
		},
		{
			title: "Properties",
			items: [
				{
					item: "Residential",
					text: "Find your next place to live in San Diego",
					path: "properties",
				},
				{
					item: "Commerical",
					text: "Find your next space to do business in San Diego",
					path: "properties",
				},
			],
		},
		{
			title: "Learning Center",
			items: [
				{
					item: "Free Resources",
					text: "Access valuable resources and information at no cost",
					path: "learning-center",
				},
				{
					item: "Blog",
					text: "Stay informed with our insightful articles and updates",
					path: "learning-center/blog",
				},
			],
		},
	];
	return (
		<AppBar sx={{ padding: 2 }}>
			<Toolbar>
				<Box flexGrow={1}>
					<Link href="/">
						<HomeTeamLogoWhite />
					</Link>
				</Box>
				<Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
					{menuItems.map((menu, index) => (
						<Box key={index}>
							<Button
								aria-controls={`menu-${menu.title}`}
								aria-haspopup="true"
								onClick={(event) => handleMenuOpen(event, menu.title)}
								endIcon={<ArrowDropDownIcon />}
								sx={{ color: "#FFF", fontSize: 15 }}
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
						<Typography>AGENT REFERRAL PROGRAM</Typography>
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
							<Link href={`https://hometeam.appfolio.com/connect/users/sign_in`}  passHref>
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
