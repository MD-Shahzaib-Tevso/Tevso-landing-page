import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { Preloader } from "@/components/shared/Preloader";
// import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import FloatingCalendlyChat from "@/components/shared/FloatingCalendlyChat";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tevso",
  description: "Landing pages shell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className={`${raleway.variable} ${lato.variable} min-h-full flex flex-col`}>
        <Preloader />
        {/* <SmoothScrollProvider> */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        {/* </SmoothScrollProvider> */}
        <FloatingCalendlyChat />
      </body>
    </html>
  );
}