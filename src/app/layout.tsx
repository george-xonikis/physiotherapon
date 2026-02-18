import type { Metadata } from "next";
import { Open_Sans, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { I18nProvider } from "@/i18n/I18nContext";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "greek"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Physiotherapon | Φυσικοθεραπεία & Κινησιοθεραπεία Θεσσαλονίκη",
    template: "%s | Physiotherapon",
  },
  description:
    "Το Physiotherapon, που βρίσκεται στην καρδιά της Θεσσαλονίκης, αποτελεί μία πρωτοποριακή επιλογή στον τομέα της φυσικοθεραπείας και της κινησιοθεραπείας.",
  keywords: "Physiotherapon,φυσικοθεραπεία Θεσσαλονίκη,κινησιοθεραπεία",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "Physiotherapon",
    title: "Physiotherapon | Φυσικοθεραπεία & Κινησιοθεραπεία Θεσσαλονίκη",
    description:
      "Το Physiotherapon, που βρίσκεται στην καρδιά της Θεσσαλονίκης, αποτελεί μία πρωτοποριακή επιλογή στον τομέα της φυσικοθεραπείας και της κινησιοθεραπείας.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${openSans.variable} ${raleway.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
