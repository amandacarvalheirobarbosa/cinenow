import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import NavBar from "../components/nabBar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineNow",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* <NavBar /> */}
        <NextAuthProvider>{children}</NextAuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
