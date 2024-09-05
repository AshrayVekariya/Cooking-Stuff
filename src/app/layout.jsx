import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const popins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "Cooking Stuff App",
  description: "Generated Cooking Stuff",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <main>
          <div className="sticky top-0 shadow-[0px_0px_10px_0px_#00000040] z-10">
            <Header />
          </div>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
