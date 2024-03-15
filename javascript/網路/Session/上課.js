// https://cscie12.dce.harvard.edu/lecture_notes/2018-fall/20181204/slide2.html

// 為什麼要有secction
// 都有expire 設定
// 4kb

// http 無狀態協定 登入狀態 會忘記
// section id
// 記錄某個資料狀態

// -後端溝通
// -伺服器

// -stuts
// -不同

////////////////
// cookie, sessionStorage 和 localStorage 的差異: https://www.explainthis.io/zh-hant/swe/cookie-sessionstorage-localstorage-difference
// 伺服器端會在回應的標頭中，添加 Set-Cookie

// 使用場景:
// cookie-辨識用戶的場景
// localStorage -跨頁面的數據傳遞、需要長期保存的資料
// sessionStorage-表單資料保存

// 生命週期:
// cookie-關閉瀏覽器
// localStorage -手動
// sessionStorage-每次關閉該頁面

// 數據大小:
// 4kb
// 5MB~10MB

// HTTP 請求:
// 只有cookie

//////////////////////
// 只有cookie 有expire設定

// localStorage and sessionStorage 沒有expire設定
// localStorage是"靠手動或程式清除" ;   sessionStorage是"關閉瀏覽器就清除"

//////////////////////
// localStorage
// -在同源的所有标签页和窗口之间共享数据
// -数据不会过期。它在浏览器重启甚至系统重启后仍然存在
