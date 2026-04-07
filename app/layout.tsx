import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kyle Barnette | Software Engineer",
  description:
    "Portfolio for Kyle Barnette. Backend, full-stack, and cloud systems engineering with Python, FastAPI, React, and AWS."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
