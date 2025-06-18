import './globals.css';
import './fonts.css';
import type { Metadata } from 'next';
import Bar from "@/components/Navbar";
import { ViewTransitions } from 'next-view-transitions';

export const metadata: Metadata = {
  title: 'Heet Pro',
  description: "Heet Vavadiya A Full Stack Blockchain Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
    <html lang="en" className="scrollbar-none">
      <body className="bg-white scrollbar-none overflow-y-auto ">
        <Bar />
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
