// 前后端交互之 HTTP 协议 (2:00) https://www.bilibili.com/video/BV1KV411o7u5/?spm_id_from=333.337.search-card.all.click
// https://blog.huli.tw/2019/08/09/session-and-cookie-part3/

// 你想把東西存在網頁前端
// HTTP 是無狀態的，所以每一個 Request 都是不相關的

// 一個機制來幫他管理「狀態」，而這個"機制就叫做 Session"
// 讓 Request 變成 stateful 的機制
// Session 就是一種讓客人之間能互相關聯起來的機制
// "Cookie 實作" Session 機制
// 很多種方式可以來實作 Session: Cookie, 網址列

// -----------------------
// 儲存狀態的方式:

// Cookie-based session:
// Cookie 裡面的內容給加密 所有的 Session 狀態都存在 Cookie 裡面。
// 缺點:Cookie大小限制 / 加密方式以及密鑰被駭客破解

// Session ID
// erver 只在 Cookie 裡面存一個 Session ID，其餘的狀態都存在 Server 那邊
// 不認人的方式

// sessionStorage:
// 兩個不同的分頁是有可能共用同一份 sessionStorage 的。
// 會「複製」一份到新開的 tab 去

// https://pjchender.dev/webdev/web-session-cookie/
