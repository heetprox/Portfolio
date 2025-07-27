import './globals.css';
import './fonts.css';
import { ViewTransitions } from 'next-view-transitions';
import DiscordMetadata from '@/components/DiscordMetadata';
import { SmoothScrollProvider } from '@/context/SmoothScrollProvider';

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
        <SmoothScrollProvider>
        <body className="bg-[#131313] text-white scrollbar-none overflow-y-auto">
          {children}
        </body>
        </SmoothScrollProvider>

      </html>
    </ViewTransitions>
  );
}
