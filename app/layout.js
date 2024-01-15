import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio By Kamran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <NavBar />
        <main className="relative overflow-hidden">
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}
