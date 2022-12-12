import "@/styles/globals.css";
import "tailwindcss/tailwind.css"; // 不能和sass一起使用？
import type { AppProps } from "next/app";
import Head from "next/head";
import LayoutHeader from "@/components/layout-header";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    // 全局的模式切换
    <div className="bg-white h-full text-black dark:bg-black dark:text-white">
      {/* 这里的message是在每一个页面中获取语言包后传给页面组件的 */}
      <NextIntlProvider messages={pageProps.messages}>
        <Head>
          <link
            rel="preconnect"
            href="https://websiteoss.ecoflow.com"
            crossOrigin="true"
          />
        </Head>
        {!route.startsWith("/animation") && <LayoutHeader />}
        <Component {...pageProps} />
      </NextIntlProvider>
    </div>
  );
}
