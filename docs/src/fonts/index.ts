import type { NextFont } from "next/dist/compiled/@next/font";
import {
	Inter,
	Merriweather,
	Open_Sans,
	Oswald,
	Playfair,
	Roboto,
	Roboto_Condensed,
} from "next/font/google";
import localFont from "next/font/local";

// google fonts
export const inter: NextFont = Inter({ subsets: ["latin"] });
export const oswald: NextFont = Oswald({ subsets: ["latin"] });
export const roboto100: NextFont = Roboto({
	subsets: ["latin"],
	weight: "100",
});
export const roboto700: NextFont = Roboto({
	subsets: ["latin"],
	weight: "700",
});
export const robotoCondensed: NextFont = Roboto_Condensed({
	subsets: ["latin"],
});
export const merriweather: NextFont = Merriweather({
	subsets: ["latin"],
	weight: "300",
});
export const playfair: NextFont = Playfair({ subsets: ["latin"] });
export const openSans: NextFont = Open_Sans({ subsets: ["latin"] });

// locals fonts
export const jersey25: NextFont = localFont({
	src: "./Jersey25/Jersey25-Regular.ttf",
	display: "swap",
});

export const sofiaPro: NextFont = localFont({
	src: [
		{
			path: "./Sofia-pro/Sofia Pro Black Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Black Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Bold Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Bold Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro ExtraLight Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro ExtraLight Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Light Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Light Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Medium Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Medium Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Regular Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Semi Bold Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro Semi Bold Italic Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro UltraLight Az.otf",
		},
		{
			path: "./Sofia-pro/Sofia Pro UltraLight Italic Az.otf",
		},
	],
	display: "swap",
});
