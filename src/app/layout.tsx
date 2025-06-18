import './globals.css';
import './fonts.css';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

export const metadata: Metadata = {
  title: 'Joseph Zhang - Interaction Designer',
  description: "Portfolio of Joseph Zhang, Interaction Designer based in New York.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="scrollbar-none">
        <body className="bg-black text-white scrollbar-none overflow-y-auto">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
