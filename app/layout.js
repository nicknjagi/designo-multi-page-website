import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Designo',
    default: 'Home | Designo',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        <Header />
        <main className="max-w-[1111px] w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
