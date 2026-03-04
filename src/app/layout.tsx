import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Distinctive display font for headings - bold, modern, memorable
const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Clean, modern sans for body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AD ON AI Infotech — Web Development Solutions",
  description:
    "AD ON AI (AOI) Infotech based in Hyderabad, India. Turning Ideas into Interactive Reality. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Hyderabad",
    "AD ON AI Infotech",
    "AOI Infotech",
    "Web Development",
    "Full Stack",
  ],
  authors: [{ name: "AD ON AI Infotech" }],
  openGraph: {
    title: "AD ON AI Infotech — Web Development Solutions",
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
        className={`${syne.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
