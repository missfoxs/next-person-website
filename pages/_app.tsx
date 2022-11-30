import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

// TODO:最外层传递自定义参数
export default function App({ Component, pageProps }: AppProps) {
  console.log("_apps", pageProps);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://websiteoss.ecoflow.com"
          crossOrigin="true"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
