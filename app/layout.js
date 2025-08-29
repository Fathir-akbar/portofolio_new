import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fathir Akbar | My Portfolio",
  description: "Fathir Akbar ⭐ Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
