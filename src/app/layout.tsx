import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Footer";
import ToastProvider from "@/lib/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL("https://hometeampm.com"),
	openGraph: {
		siteName: "HomeTeam Property Management",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	applicationName: "HomeTeam Property Management",
	appleWebApp: {
		title: "HomeTeam Property Management",
		statusBarStyle: "default",
		capable: true,
	},
	//Dont know what these are for
	// verification: {
	//   google: "YOUR_DATA",
	//   yandex: ["YOUR_DATA"],
	//   other: {
	//     "msvalidate.01": ["YOUR_DATA"],
	//     "facebook-domain-verification": ["YOUR_DATA"]
	//   }
	// },
	icons: {
		icon: [
			{
				url: "/favicon.jpg",
				type: "image/x-icon",
			},
		],
		shortcut: [
			{
				url: "/favicon.jpg",
				type: "image/x-icon",
			},
		],
		//Apple icons
		// apple: [
		//   {
		//     url: "/apple-icon-57x57.png",
		//     sizes: "57x57",
		//     type: "image/png"
		//   },
		//   {
		//     url: "/apple-icon-60x60.png",
		//     sizes: "60x60",
		//     type: "image/png"
		//   }
		//   // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
		// ]
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<NavBar />
						<ToastProvider>{children}</ToastProvider>
						<Footer />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
