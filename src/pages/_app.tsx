import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/custom.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width-device-width. initial-scale=1.0, maximum-scale=1.0, user-scalable-no"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        />

        <title>DS Catalog NextJS</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
