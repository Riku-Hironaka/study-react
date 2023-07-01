# Next.jsから入るReact入門

## Next.jsを使うと嬉しい理由

### Next.jsの使い方
- 公式ドキュメント(https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app)を使うものの、後述するyarnとnpmの性質の違いから、基本的には動画(https://www.youtube.com/watch?v=15WLMqnkPsE)参照。

1. 始め方。 
- yarn create next-app 
  - npx create-next-app でも作成可能。
  しかし、これだと開発を進めていく際にyarnコマンドでパッケージの追加を使うとpackage-lock.jsonとyarn.lockがどちらもある状態になってしまい気持ち悪いことになります。一旦、package-lock.jsonとnode_modulesディレクトリを削除して、yarn installで入れ直すことで解決できるが、手間なため最初からyarnで始める。

2. yarn dev
  - 開発環境でサーバーを立ち上げるコマンド。コードの変更時に反映が早いため、開発時はこのコマンドでサーバー動作を確認する。

3. yarn build
  - .nextディレクトリ内で、本番環境用にビルドされたファイルが作成される。

4. yarn start
  - 本番環境でサーバーを立ち上げるコマンド。本番環境なのでコードの圧縮などが行われているため、速度が圧倒的に速くなる。




