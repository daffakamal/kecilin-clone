import Head from "next/head";
import Advantage from "../../components/Enterprise/advantage";
import API from "../../components/Enterprise/API";
import Title from "../../components/Enterprise/title";
import Footer from "../../components/Layout/footer";
import { Navbar } from "../../components/Layout/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kecilin | Enterprise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="kecilin, file compressor, compress file, compression technology provider"
        />
        <meta
          name="description"
          content="You can compress these files with the reliable and faster compression technology provided by KECILIN API. After you get key access, you can immediately compress databases, images, videos, and PDFs."
        />
        <link rel="icon" href="/kecilin-logo.svg" />
      </Head>
      <Navbar />
      <Title />
      <API />
      <Advantage />
      <Footer />
    </>
  );
}
