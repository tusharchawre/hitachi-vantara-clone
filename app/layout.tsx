import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hitachi Vantara | Inovation Through Data Infrastructure",
  description: "The Data Foundation for Innovation",
  icons: {
    icon: '/favicon.ico',
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
