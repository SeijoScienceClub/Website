# Website

成城科学部のウェブサイトです。

## Directory

このリポジトリの構造です。`[手動編集厳禁]`の記載がある場合は、**何があっても「ファイルの編集、追加、削除、移動、並びにフォルダの編集、追加、削除、移動」をしないでください。**

```
(root)
│
├── .astro >> Astroのビルド済みファイルなどが格納。[手動編集厳禁]
├── .github >> GitHubのissueやPRのテンプレートファイルなどが格納。編集時はGitHubから。その際絶対にProductionに直でコミットしないこと！！[手動編集厳禁]
├── node_modules >> npmでインストールしたパッケージなどのデータが格納。[手動編集厳禁]
├── public >> サイト内各所で使うファイルを保存、ロゴ画像、ファビコン画像など。
│   └── favicon.svg >> サイトファビコン。
│
├── src >> このサイトのメイン部分。基本的に編集するのはここ。
│   ├── assets >> 今のとこ使ってない。各ページで読み込む画像ファイルなどの格納。
│   ├── component >> 他のフレームワークで動かしたい、別ファイルに分けたい、そんなコードを分けておく場所。
│   ├── layouts >> ウェブサイトの基幹レイアウトの設定に用いる。根本からデザインを変える時にいじるのはたぶんここ。
│   └── pages >> 各ページを格納する場所。indexがトップページ。
│
├── .gitignore >> GitHubにアップロードしてはいけないものをここに記載する。変更前にPR出して、他の人のチェックを受けて。
├── astro.config.mjs >> Astroの設定ファイル。拡張機能もここを編集して入れるけど、多くの場合はコマンドで何とかなる。
├── package-lock.json >> マジでいじるな。ガチで。[手動編集厳禁]
├── package.json >> ソースコードの設定ファイル。基本触らないに越したことはない。
├── README.md >> 今見てるこのファイル。変更前にPR出して、他の人のチェックを受けて。
└── tailwind.config.mjs >> TailwindCSSの設定ファイル。基本触らないに越したことはない。
```