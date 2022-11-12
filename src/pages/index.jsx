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
          content="Lo que haces por otros, es una semilla que siembras en tu propia vida. Somos viiiis, una comunidad que sueña hacer visible lo pequeño y significativo lo que no creemos que es."
        />
        <meta
          name="twitter:image"
          content="https://www.viiiiis.com/assets/imgs/home/kids.jpg"
        />
        <meta
          property="og:description"
          content="Lo que haces por otros, es una semilla que siembras en tu propia vida. Somos viiiis, una comunidad que sueña hacer visible lo pequeño y significativo lo que no creemos que es."
        />
        <meta
          property="og:image"
          content="https://www.viiiiis.com/assets/imgs/home/kids.jpg"
        />
        <meta property="twitter:domain" content="www.viiiiis.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Lo que haces por otros, es una semilla que siembras en tu propia vida. Somos viiiis, una comunidad que sueña hacer visible lo pequeño y significativo lo que no creemos que es."
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
