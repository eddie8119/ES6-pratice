// 當物件需要迴圈的時候 將物件轉化為陣列
Object.keys();
Object.values();

// 轉化為陣列 就可以搭配forEach
Object.keys(people).forEach((key) => {
  console.log(people[key]);
});
