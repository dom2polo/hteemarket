import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

<<<<<<< HEAD
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
=======
>>>>>>> 88612e3 (changing the layout)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
=======
      <body>
>>>>>>> 88612e3 (changing the layout)
        {children}
      </body>
    </html>
  );
}