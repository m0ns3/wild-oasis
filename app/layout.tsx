import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "Wild Oasis 🌎",
  title: {
    template: "%s | Wild Oasis",
    default: "Welcome to Wild Oasis",
  },
  description: "Luxuriuos cabin hotel in the heart of the wilderness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
