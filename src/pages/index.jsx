import Head from 'next/head'
import { Hero } from '@components/Hero'
import { Reviews } from '@components/Reviews'
import { Header } from '@components/Header'
import { Pricing } from '../components/Pricing'
import { CallToAction } from '@components/CallToAction'

export default function Home() {
  return (
    <>
      <Head>
        <title>viiiiis</title>
        <meta
          name="description"
          content="viiiiis, fundation, donation, donaciones, fundaciones, non profit"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <CallToAction />
        <Reviews />
      </main>
    </>
  )
}
