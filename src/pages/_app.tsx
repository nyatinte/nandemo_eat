import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { Zen_Maru_Gothic } from "next/font/google";

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <main className={zen_maru_gothic.className}>
        <Toaster />
        <Component {...pageProps} />;
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
