import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Zen_Maru_Gothic } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { api } from "@/utils/api";

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Head>
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
      </Head>
      <main className={zen_maru_gothic.className}>
        <Toaster />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
