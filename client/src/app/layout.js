import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased bg-white dark:bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}