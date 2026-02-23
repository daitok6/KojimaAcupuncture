import { JetBrains_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { LanguageProvider } from "@/contexts/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-rubik'
});

export const metadata = {
  title: "Kojima Acupuncture Clinic | Toronto Acupuncture & Moxibustion",
  description: "Professional acupuncture and moxibustion clinic in Toronto. Personalized treatment programs with 30+ years experience. Nagano style, Kiiko Matsumoto style. Book your appointment today.",
  keywords: "acupuncture Toronto, moxibustion, traditional Chinese medicine, North York, Kojima Acupuncture",
  openGraph: {
    title: "Kojima Acupuncture Clinic | Toronto",
    description: "Professional acupuncture and moxibustion clinic in Toronto. 30+ years experience.",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${jetbrainsMono.variable} ${rubik.variable}`}>
        <LanguageProvider>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
