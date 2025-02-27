import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({ 
  subsets: ["latin"], 
  variable: "--font-serif", 
  weight:  ["400"]

})

export const metadata: Metadata = {
  title: "IntoreGuard",
  description: "Report instantly, stay safe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={twMerge(inter.variable, calistoga.variable,"antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
