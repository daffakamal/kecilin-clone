import Head from "next/head";
import AboutTitle from "../../components/About/title";
import Team from "../../components/Home/team";
import Footer from "../../components/Layout/footer";
import { Navbar } from "../../components/Layout/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kecilin | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="kecilin, file compressor, compress file, compression technology provider"
        />
        <meta
          name="description"
          content="Kecilin provides a compression technology that is smooth, efficient and applicable to modern technology models."
        />
        <link rel="icon" href="/kecilin-logo.svg" />
      </Head>
      <Navbar />
      <AboutTitle />
      <Team />
      <Footer />
    </>
  );
}
