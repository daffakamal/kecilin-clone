import Head from 'next/head'
import HomeStory from '../components/Home/home-story'
import LandingPage from '../components/Home/landingpage'
import { Navbar } from '../components/Layout/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kecilin</title>
      </Head>
      <Navbar />
      <LandingPage />
      <HomeStory />
    </>
  )
}