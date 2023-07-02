# Next.jsから入るReact入門

## Next.jsを使うと嬉しい理由

## Next.jsの使い方
- 公式ドキュメント(https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app)を使うものの、後述するyarnとnpmの性質の違いから、基本的には動画(https://www.youtube.com/watch?v=15WLMqnkPsE)参照。
- 2022/10頃よりnext.jsはver13になったらしく、色々使い勝手が変わっているため過去の資料は参考にならないものもあったりするので注意。

### Next.jsの導入
1. 始め方
- yarn create next-app 
  - npx create-next-app でも作成可能。
  しかし、これだと開発を進めていく際にyarnコマンドでパッケージの追加を使うとpackage-lock.jsonとyarn.lockがどちらもある状態になってしまい気持ち悪いことになります。一旦、package-lock.jsonとnode_modulesディレクトリを削除して、yarn installで入れ直すことで解決できるが、手間なため最初からyarnで始める。

2. 開発環境でのサーバー立ち上げ 
- yarn dev
  - 開発環境でサーバーを立ち上げるコマンド。コードの変更時に反映が早いため、開発時はこのコマンドでサーバー動作を確認する。

3. 本番環境のビルド 
- yarn build
  - .nextディレクトリ内で、本番環境用にビルドされたファイルが作成される。

4. 本番環境でのサーバーの立ち上げ
- yarn start
  - 本番環境でサーバーを立ち上げるコマンド。本番環境なのでコードの圧縮などが行われているため、速度が圧倒的に速くなる。

### Next.jsでのWebページの作り方。
1. ページの追加
- appディレクトリに、追加したいページの名前のディレクトリを作る。(例:aboutページを作りたいならapp/about)
そして、その中にpage.tsxをaboutページを作る。

2. コンポーネントの追加
- appの下にコンポーネントディレクトリを作る。そこに汎用的に使いたいコンポーネント(HeaderやFooter、buttonなどなど)を入れ、使う先のpageで使いたいコンポーネントをimportして、<"使いたいコンポーネント" />で使える。

