import Head from 'next/head'
import { Hero } from '@components/Hero'

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
        <Hero />
      </main>
    </>
  )
}
