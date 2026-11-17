import type { Metadata, Viewport } from "next";
import "./tailwind-built.css";

export const viewport: Viewport = {
  themeColor: "#315B4C",
};

export const metadata: Metadata = {
  title: "Portfolio — Writer · Media Contributor · Event Host",
  description:
    "Personal portfolio showcasing newspaper articles, creative writing, television and radio appearances, event hosting, and achievements.",
  openGraph: {
    title: "Portfolio — Writer · Media Contributor · Event Host",
    description:
      "Published articles, creative writing, media appearances and event hosting portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7F5F0] text-[#202321] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
