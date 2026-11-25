import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "animate.css";
import "./globals.css";

// The original only loaded weights 100–300, so regular/bold text renders from
// the 300 face. Keep the exact same set to match the look.
const poppins = Poppins({
  weight: ["100", "200", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins-next",
});

export const metadata: Metadata = {
  title: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="w-full bg-[url(/assets/backgroundpng.png)] bg-cover">
        {children}
      </body>
    </html>
  );
}
