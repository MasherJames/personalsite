import { Red_Hat_Mono } from "next/font/google";
import localFont from "next/font/local";

const redHatMono = Red_Hat_Mono({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});

const agrandir = localFont({
  src: [
    {
      path: "../node_modules/assets/fonts/Agrandir-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/assets/fonts/Agrandir-WideMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/assets/fonts/Agrandir-WideBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-agrandir",
});

export { agrandir, redHatMono };
