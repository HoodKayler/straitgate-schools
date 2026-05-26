import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import { getGeneral, getSchools } from "@/lib/content";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Straitgate Schools",
    template: "%s | Straitgate Schools",
  },
  description:
    "Straitgate Schools — nurturing academic excellence with Christ-centered values across multiple campuses in Lagos and Ogun State, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const general = getGeneral();
  const schools = getSchools();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <LayoutShell general={general} schools={schools}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
