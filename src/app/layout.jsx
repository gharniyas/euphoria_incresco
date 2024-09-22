"use client";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sider from "@/components/layout/sider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";

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

export const client = new QueryClient({});

export default function RootLayout({ children }) {
  const pathname = useParams();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Header />
        </header>

        <div className={`flex ${!pathname?.id && "px-[100px]"}  gap-10 w-full`}>
          {!pathname?.id && <Sider />}
          <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
