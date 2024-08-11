import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Mohamed mashaly",
  description: "دكتور محمد مشالى جراحات امراض الذكورة وعلاج العقم و تأخر الإنجاب والضعف الجنسي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7VJ863BDFX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VJ863BDFX');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
