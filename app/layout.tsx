import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    template: "%s | Wild Oasis",
    default: "Welcome to Wild Oasis",
  },
  description: "Luxuriuos cabin hotel in the heart of the wilderness.",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2021 Wild Oasis</p>
        </footer>
      </body>
    </html>
  );
}
