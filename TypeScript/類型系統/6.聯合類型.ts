// 讀變數時，要先「類型縮小」
function printId(
    id:number|string
  ) {
    if (typeof id === 'string') {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }