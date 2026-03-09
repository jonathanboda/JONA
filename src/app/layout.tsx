import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Elegant serif font for headings
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Clean sans-serif for body text
const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "AD ON AI(AOI) Infotech — Web Development Solutions",
  description:
    "AD ON AI (AOI) Infotech based in Hyderabad, India. Turning Ideas into Interactive Reality. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Hyderabad",
    "AD ON AI(AOI) Infotech",
    "AD ON AI(AOI) Infotech",
    "Web Development",
    "Full Stack",
  ],
  authors: [{ name: "AD ON AI(AOI) Infotech" }],
  openGraph: {
    title: "AD ON AI(AOI) Infotech — Web Development Solutions",
    description: "Turning Ideas into Interactive Reality",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
