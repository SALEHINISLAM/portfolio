import MainFooter from "@/components/Common/MainFooter";
import MainNavbar from "@/components/Common/MainNavbar";
import LanguageThemeToggle from "@/components/Common/LanguageThemeToggle";
import { Roboto, Hind_Siliguri } from "next/font/google";
import "./globals.css";

// Configure Google Fonts
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Md Salehin Islam",
  description:
    "Md Salehin Islam is a Civil Engineering student at BUET with expertise in structural analysis, estimation, AutoCAD, MATLAB, and sustainable engineering. Experienced educator, researcher, and competition winner with a passion for solving real-world challenges.",
  keywords: [
    "Md Salehin Islam",
    "Salehin",
    "Civil Engineer BUET",
    "Structural Analysis",
    "AutoCAD MATLAB",
    "Engineering Estimation",
    "STEM Educator",
    "Bangladesh Engineer Portfolio",
    "Sustainable Engineering",
    "BUET Civil Engineering Student",
    "Best Web Developer in Bangladesh",
    "Engineering Researcher",
    "Competition Winner",
    "Engineering Problem Solver",
    "Math Tutor",
    "Udvash Teacher",
    "Utkorsho Teacher",
    "Aspect Series Writer",
    "Math Content Creator",
  ],
  authors: [{ name: "Md Salehin Islam", url: "https://mdsalehinislam.netlify.app" }],
  openGraph: {
    title: "Md Salehin Islam | Civil Engineering Student & Educator",
    description:
      "Portfolio of Md Salehin Islam – BUET Civil Engineering student, STEM educator, and competition winner. Skilled in structural analysis, estimation, AutoCAD, MATLAB, sustainable design and web development.",
    url: "https://mdsalehinislam.netlify.app",
    siteName: "Md Salehin Islam Portfolio",
    images: [
      {
        url: "https://mdsalehinislam.netlify.app/assets/heroPic.JPG", // add your profile/cover image here
        width: 1200,
        height: 630,
        alt: "Md Salehin Islam Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Salehin Islam | Civil Engineering Student & Educator",
    description:
      "Explore the portfolio of Md Salehin Islam, BUET Civil Engineering student & STEM educator. Skilled in structural design, AutoCAD, MATLAB, estimation, and sustainable engineering solutions.",
    creator: "@salehinislam" // add Twitter handle if you have one
  },
  metadataBase: new URL("https://mdsalehinislam.netlify.app"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto.variable} ${hindSiliguri.variable}`}>
        <MainNavbar />
        <LanguageThemeToggle />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}