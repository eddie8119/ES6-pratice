// 原型方法使用for...in , 會連方法也打印出來

function Person(name) {
  this.name = name;
}

Person.prototype.run = function () {
  return `${this.name}快跑啊`;
};

const Ming = new Person("小名");

for (const key in Ming) {
  console.log(key);
}

// 如何避免,使用object.keys()
console.log(object.keys(Ming));
