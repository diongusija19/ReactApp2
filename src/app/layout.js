import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dion Gusija | Portfolio",
  description: "Personal portfolio built with Next.js",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">Dion Gusija</Link>
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">© {new Date().getFullYear()} Dion Gusija</div>
        </footer>
      </body>
    </html>
  );
}
