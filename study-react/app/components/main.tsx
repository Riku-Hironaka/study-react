import { Headline } from '../components/headline'
import { Vercel_Logo } from './vercl_logo'

export  function Main(props: any) {
  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Headline page={props.page}> {/* 親ページから送られてきたコンポーネントをHeadlineにもコンポーネントとして送る */}
        {/* コンポーネントは通例的に、チルドレンとして送る。 */}
        <code className="font-mono font-bold text-tansform: lowercase">app/{props.page}.tsx</code>
        {/* さまざまな型をpropsとして渡すことができる。
        number={123}
        array={[1,2,3]}
        obj= {{foo: "foo", bar: "bar" }}
        boolean
        code={<code className="font-mono font-bold text-tansform: lowercase">app/about.tsx</code>}// コンポーネントもpropsで送れる */}
      </Headline>
      <Vercel_Logo />
      </div>
  )
}
