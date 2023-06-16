# MapsAPI
MapsAPIとAPIを使った何かを作るよ
# 事故物件集約サイト「大島てる」のアンチテーゼとして、宝くじに当たった、競馬で大穴を当てた、イケメンにハンカチを拾ってもらった、食パンをくわえた美少女と正面衝突した。そんな「ラッキー」を集約するサイトを作ります。
ラッキーに遭遇する前に食べてたお店、拝んだ神社などの知られざるパワースポットも集約します

#　どんなものを作るか

1.フォームからユーザーに「ラッキー情報」を登録してもらい、それがAPIとして蓄積・アップデートされるようにしたい
2.情報はスポット名（名称）、住所(address)、いつごろのことか（date）、どんなことがあったか（comment）
<!-- 3.住所は自動で緯度経度に変換される -->今回は不要かも
4.GoogleMapsAPIで地図を引いてくる
5.2.で取得した情報が地図上にマーカーとコメントで記載される
6.マーカーを打ち出の小槌のマークに変える

# どのように作るか

・GoogleMapsAPIはストレートにGoogleCloudConsoleで作成して取得
・jsとHTMLを使い、上記APIで地図を表示。CSSで化粧
・「ラッキー情報」はGoogleスプレッドシートに記載し、それをGoogleAppsScriptでAPI化
・フォームはGoogleFormを使用してスプシに書き込めるように
・


# GAS
試行錯誤右往左往した結果、Google Apps ScriptでAPIを作りました
公開URLは以下
デプロイID：
AKfycbxZDK_fbSFKnm9-7s-cXMH4yq_jJayOFLkUbHwmsntWTcKdnZfFcHQUPW2VXmyLQtRkHA
ウェブアプリ
URL
https://script.google.com/macros/s/AKfycbxZDK_fbSFKnm9-7s-cXMH4yq_jJayOFLkUbHwmsntWTcKdnZfFcHQUPW2VXmyLQtRkHA/exec


# 参考サイト

参考チュートリアル
https://www.google.com/intl/ja_ALL/earth/outreach/learn/mapping-from-a-google-spreadsheet/

参考コード
https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11131921676

GoogleMaps APIの参考
https://www.granfairs.com/blog/staff/google-maps-api-02

スプレッドシートの埋め込み方法
https://tipstour.net/google-spreadsheet-web-embed

Googleスプレッドシートを利用した、たぶん史上最も簡単にデータを更新できるマップツール
https://qiita.com/champierre/items/e7758b69b39476148492

【GAS】スプレッドシートのデータと同期するGoogleマップアプリを作ってみた
https://webird-programming.tech/archives/1204


【Google MAP】Googleスプレッドシート API連携 + 絞込み
https://qiita.com/yoshi_yast/items/44ef9da9bc136e455950

【超便利！】HTMLにGoogleスプレッドシートからデータを取得して表示する方法
https://masa-enjoy.com/gas-api-spreadsheet
