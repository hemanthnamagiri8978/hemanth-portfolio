import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Namagiri Hemanth Kumar | Portfolio",
    description: "CSE Student | ML Engineer | Full Stack Developer — Portfolio of Namagiri Hemanth Kumar.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${space.variable} ${fira.variable} antialiased text-foreground bg-background`}>
                {children}
            </body>
        </html>
    );
}
