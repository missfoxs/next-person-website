import "../styles/globals.css";
import "tailwindcss/tailwind.css"; // 不能和sass一起使用？
import type { AppProps } from "next/app";
import Head from "next/head";
import LayoutHeader from "../components/layout-header";

// TODO:最外层传递自定义参数
export default function App({ Component, pageProps }: AppProps) {
  console.log("_apps", pageProps);

  return (
    // 全局的模式切换
    <div className="bg-white dark:bg-black">
      <Head>
        <link
          rel="preconnect"
          href="https://websiteoss.ecoflow.com"
          crossOrigin="true"
        />
      </Head>
      <LayoutHeader />
      <Component {...pageProps} />
    </div>
  );
}
