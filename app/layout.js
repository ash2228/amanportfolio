import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Shergill",
  description: "Code By Ash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
