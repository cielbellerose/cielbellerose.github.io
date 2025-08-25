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
    title: 'Kinsey Bellerose',
    url: 'https://cielbellerose.github.io/',
    siteName: 'Kinsey Bellerose',
    images: [
      {
        url: 'https://cielbellerose.github.io/assets/preview.png',
        width: 1200,
        height: 630,
        alt: 'Kinsey Bellerose'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kinsey Bellerose',
    images: ['https://cielbellerose.github.io/assets/preview.png'],
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
