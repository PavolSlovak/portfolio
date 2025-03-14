import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/store/themeContext";
import Footer from "./components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable}  antialiased`}>
        <main className="flex justify-center min-h-screen font-sans bg-container dark:bg-container_dark">
          <div className="flex flex-col bg-container  max-w-[2000px] dark:text-container dark:bg-container_dark">
            {/* Dark Mode Provider */}
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
