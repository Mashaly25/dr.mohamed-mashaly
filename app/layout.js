import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Mohamed mashaly",
  description: "دكتور محمد مشالى جراحات امراض الذكورة وعلاج العقم و تأخر الإنجاب والضعف الجنسي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
