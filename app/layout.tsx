import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "Wild Oasis 🌎",
  description: "The Wild Oasis website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
