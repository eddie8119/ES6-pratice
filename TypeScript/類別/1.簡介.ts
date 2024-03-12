// 類別（class）是物件導向程式設計的基本構件，封裝了屬性和方法

// 配置項strictPropertyInitialization
// 會檢查屬性是否設定了初始值
class Point {
  x: number; // 报错
  y: number; // 报错
}

// 如果不希望出現報錯，可以使用非空斷言。
class Point {
  x!: number;
  y!: number;
}

