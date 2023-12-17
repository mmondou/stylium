import '@styles/normalize.css'
import '@styles/variables.css'
import '@styles/reset.css'
import '@styles/main.css'
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stylium</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="Stylium"/>
      </Head>

      <Header/>

      <main>
        <Component {...pageProps} />
      </main>

      <Footer/>
    </>
  )
}

export default Application
