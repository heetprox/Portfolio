import './globals.css';
import './fonts.css';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

export const metadata: Metadata = {
  title: 'Heet Vavadiya - Full-Stack Developer',
  description: "Portfolio of Heet Vavadiya, Full-Stack Developer based in Ahmedabad, In.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="scrollbar-none medium-font ">
        <body className="bg-[#131313] text-white scrollbar-none overflow-y-auto">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
