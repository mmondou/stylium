import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stylium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Stylium" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
