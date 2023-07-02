import { Next_links } from '../components/next.js_links'
import { Next_Logo } from '../components/next_logo'
import Header from '../components/header'
import { Main } from '../components/main'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Main page="about"/>
      <Next_Logo />
      <Next_links />
    </main>
  )
}
