import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import BreadcrumbComponent from "@/components/Breadscrumb";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopee Fake",
  description: "Choose your favorite products and get it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <BreadcrumbComponent></BreadcrumbComponent>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
