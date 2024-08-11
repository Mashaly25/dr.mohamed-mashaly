import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Mohamed mashaly",
  description: "دكتور محمد مشالى جراحات امراض الذكورة وعلاج العقم و تأخر الإنجاب والضعف الجنسي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <Analytics></Analytics>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
