

export function Headline(props: any) {
  // console.log(props)
  return (
    <div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-tansform: capitalize">
           {props.page} page&nbsp;
          {/* <code className="font-mono font-bold text-tansform: lowercase">app/{props.page}.tsx</code> */}
          {/* {props.code} 親ページから送られてきたコンポーネントも利用できる。  */}
          {props.children} {/* 親ページから送られてきたコンポーネントも利用できる。 */}
        </p>
      </div>
  )
}
