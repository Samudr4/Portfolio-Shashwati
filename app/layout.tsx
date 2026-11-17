import type { Metadata, Viewport } from "next";
import "./tailwind-built.css";

export const viewport: Viewport = {
  themeColor: "#315B4C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shashwati Sabhapandit — Writer · Media Contributor · Event Host",
  description:
    "Official portfolio of Shashwati Sabhapandit — showcasing newspaper articles, creative writing, television and radio broadcasts, event hosting, and achievements.",
  openGraph: {
    title: "Shashwati Sabhapandit — Portfolio",
    description:
      "Official portfolio of Shashwati Sabhapandit — Writer, State Anchor, and Media Professional.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#F7F5F0] text-[#202321] antialiased overflow-x-hidden w-full min-h-screen selection:bg-[#315B4C] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
