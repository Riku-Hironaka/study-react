import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from '@/src/components/Links'


export function Main(props) {
    return (
      <>
        <main className={styles.main}>
          <Headline title={props.title} page={props.page}>
            code={<code className={styles.code}>pages/{props.page}.js</code> }
          </Headline>
          <Links />
        </main>
      </>
    )
}
