import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>about pages</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main title="About Page" page="about" />
      <Footer />
    </>
  )
}