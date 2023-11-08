// 同源政策:
// 同協定/同網域/同阜號

// cors
// acess-control-allow-origin 後端伺服器加入以下這段 允許特定網域存取該網站的資源
const cors = require("cors");
app.use(
  cors({
    origin: "http://.....",
  })
);
