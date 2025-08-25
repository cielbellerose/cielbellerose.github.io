import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import OrientationAlert from "./components/OrientationAlert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinsey Bellerose",
  openGraph: {
    title: 'Kinsey Bellerose - Portfolio',
    images: [
      {
        url: '/assets/social-preview.png',
        width: 820,
        height: 429,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="layout-header">
          <div className="header-container">
            <Header
              linkedinUrl="https://www.linkedin.com/in/kinsey-bellerose/"
              githubUrl="https://github.com/cielbellerose"
              resumeUrl="assets/Resume.pdf"
            />
          </div>
        </header>

        <main className="main-content">{children}</main>
        <OrientationAlert />
      </body>
    </html>
  );
}
