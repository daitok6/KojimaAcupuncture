import { JetBrains_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: '--font-rubik'
});

export const metadata = {
  title: "Kojima Acupuncture Clinic",
  description: "Kojima Acupuncture Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
