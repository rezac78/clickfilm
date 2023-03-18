import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Head from "next/head";
import Script from "next/script";
import "../components/Header/header.css";
import "../styles/Netflex.css";
import "../styles/globals.css";
import "../styles/Film.css";
import "../components/Footer/Footer.css";
import "../styles/download.css";
import "../styles/Trailer.css";
import "../components/Main/Main.css";
import "../components/Right/Serial/Serial.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Resume online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Home.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
        <title>Click Film</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
