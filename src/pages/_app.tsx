import type { AppProps } from "next/app";
import "@/styles/global.scss";
import { Inter, Roboto } from "next/font/google";
import { H5 } from "@/components/Shared/headings/Headings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${roboto.variable} font-sans`}>
      <div className="hidden lg:block">
        <H5>Site is undergoing Maintainence Try on mobile devices</H5>
      </div>
      <div className="lg:hidden">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
