import "../styles/globals.css";
import "tailwindcss/tailwind.css"; // 不能和sass一起使用？
import type { AppProps } from "next/app";
import Head from "next/head";
import LayoutHeader from "../components/layout-header";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps }: AppProps) {
  console.log("_apps", pageProps);

  return (
    // 全局的模式切换
    <div className="bg-white dark:bg-black">
      {/* 这里的message是在每一个页面中获取语言包后传给页面组件的 */}
      <NextIntlProvider messages={pageProps.messages}>
        <Head>
          <link
            rel="preconnect"
            href="https://websiteoss.ecoflow.com"
            crossOrigin="true"
          />
        </Head>
        <LayoutHeader />
        <Component {...pageProps} />
      </NextIntlProvider>
    </div>
  );
}
