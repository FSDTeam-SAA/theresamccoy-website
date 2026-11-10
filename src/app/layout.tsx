import type { Metadata } from "next";
import { connection } from "next/server";
import {
  Poppins,
  Onest,
  Hanken_Grotesk,
  Libre_Caslon_Text,
  Host_Grotesk,
  Outfit,
  Plus_Jakarta_Sans,
  Wix_Madefor_Text,
} from "next/font/google";
import "./globals.css";
import MainProviders from "@/Providers/MainProviders";
import Provider from "@/Providers/Provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});
const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});
const host = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const wix = Wix_Madefor_Text({
  variable: "--font-wix",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "The Bookkeepers Marketplace | MyCPA OnCall",
  description:
    "Connect with assessed, trained, and approved bookkeeping professionals through MyCPA OnCall.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // A fresh CSP nonce requires rendering each document per request.
  await connection();
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${onest.variable} ${hanken.variable} ${caslon.variable} ${host.variable} ${outfit.variable} ${jakarta.variable} ${wix.variable} antialiased`}
      >
        <MainProviders>
          <Provider> {children} </Provider>
        </MainProviders>
        <Toaster position="top-right" closeButton />
      </body>
    </html>
  );
}
