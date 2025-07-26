/**
 * Component for adding Discord-specific metadata to improve link previews
 * Discord uses OpenGraph metadata but has some specific preferences
 */
export default function DiscordMetadata() {
  return (
    <>
      {/* Discord prefers the theme-color meta tag for the embed color */}
      <meta name="theme-color" content="#131313" />
      
      {/* Discord also looks for these specific meta tags */}
      <meta property="discord:site" content="Heet Vavadiya Portfolio" />
      <meta property="discord:creator" content="Heet Vavadiya" />
      <meta property="discord:description" content="Full Stack Developer & Designer specializing in React, Next.js, TypeScript, and modern web technologies." />
    </>
  );
}