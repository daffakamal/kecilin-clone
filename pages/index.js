import Head from 'next/head'
import HomeComparison from '../components/Home/home-comparison'
import HomeData from '../components/Home/home-data'
import HomeFeature from '../components/Home/home-feature'
import HomeStory from '../components/Home/home-story'
import LandingPage from '../components/Home/landingpage'
import { Navbar } from '../components/Layout/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kecilin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="kecilin, file compressor, compress file, compression technology provider" />
        <meta name="description" content="Kecilin is the first and the only Indonesia's cloud and compression technology provider. Making it possible for every business to experience small-is-better." />
        <link rel="icon" href="/kecilin-logo.svg" />
      </Head>
      <Navbar />
      <LandingPage />
      <HomeStory />
      <HomeFeature />
      <HomeData />
      <HomeComparison />
    </>
  )
}