// 傳統後端切換路由 伺服器渲染 切換頁面的時間較長 體驗差
// spa前端產生虛擬路由 在首頁的時候取得 hTML css
// JS 透過ajax取得伺服器資源 jS動態產生畫面 瀏覽器不需要重新取的HTML及css 沒有畫面的停滯感
// "用API與後端溝通" 後端不需要再寫hTML混在程式中 前後端分離

// csr(spa) ssr差異
// 差異在於HTML在哪一端完成

// ssr
// 以前的伺服器渲染 是前後端混在一起 / 現在是透過後端提供API 前端利用SSR工具 做到伺服器渲染 (請意識傳統/現代 後端渲染的差異(就是API))

// 參考資料
// https://www.youtube.com/watch?v=X8j5E6ojq6M
