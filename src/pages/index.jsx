import Head from 'next/head'
import { Hero } from '@components/Hero'
import { Reviews } from '@components/Reviews'
import { Header } from '@components/Header'
import { CallToAction } from '@components/CallToAction'
import { Stats } from '@components/Stats'

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
        <Stats />
        <Reviews />
      </main>
    </>
  )
}
