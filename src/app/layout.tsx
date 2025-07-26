import './globals.css';
import './fonts.css';
import { ViewTransitions } from 'next-view-transitions';
import DiscordMetadata from '@/components/DiscordMetadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="scrollbar-none medium-font ">
        <head>
          <DiscordMetadata />
        </head>
        <body className="bg-[#131313] text-white scrollbar-none overflow-y-auto">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
