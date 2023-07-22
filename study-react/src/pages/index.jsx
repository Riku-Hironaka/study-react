import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })
const foo =1;

const handleClick =(e) => {  
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
}

export default function Home() {


  return (
    <>
      <Head>
        <title>index pages</title>
      </Head>
      <Header/>
      <a href='/about' onClick={handleClick}>
          ボタン
      </a>

      <Main title="Index Page" page="index" />
      <Footer />
    </>
  )
}
