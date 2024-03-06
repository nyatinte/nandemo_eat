import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Zen_Maru_Gothic } from "next/font/google";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import toast, { Toaster } from "react-hot-toast";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { api } from "@/utils/api";

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
  toast.error(
    "現在データベースの動作を停止しており、正常に動作しません。申し訳ございません。"
  );
  return (
    <ClerkProvider>
      <Head>
        <meta
          name="google-site-verification"
          content="Aaa6MgmHbYrF4JlauLQeoDQ1qtIgdYpMX0GzzmEcNNo"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
      </Head>
      <DefaultSeo
        defaultTitle="なんでもEAT"
        description="なんでもEATは、｢ご飯何がいい？｣｢なんでもいいよ｣というやり取りを解決するサービスです。"
        openGraph={{
          type: "website",
          locale: "ja_JP",
          title: "なんでもEAT",
          description:
            "なんでもEATは、｢ご飯何がいい？｣｢なんでもいいよ｣というやり取りを解決するサービスです。",
          url: "https://nandemo-eat.vercel.app/",
          site_name: "なんでもEAT",
          images: [
            {
              url: "https://nandemo-eat.vercel.app/%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82EAT.png",
              width: 400,
              height: 400,
              alt: "なんでもEAT",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <main className={zen_maru_gothic.className} lang="ja">
        <Toaster />
        <Header />
        <div className="min-h-without-header bg-bg">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
