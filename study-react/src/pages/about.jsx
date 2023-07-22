import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>about pages</title>
      </Head>
      <Header />
      <Main title="About Page" page="about" />
      <Footer />
    </>
  )
}
