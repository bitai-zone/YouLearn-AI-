import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouLearn AI",
  description: "The world's most advanced AI-powered learning platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
