// Proxy 构造函数 
// 第一个参数是所要代理的目标对象 第二个参数是配置对象
var proxy = new Proxy(target, handler)


// 对实例对象进行操作，而不是针对目标对象操作(有點廢話)
var proxy = new Proxy({}, {
  get: function(target, propKey) {
    
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

//实例对象可以做為其他對象的原型 有繼承特性 
var proxy = new Proxy({}, {
  get: function(target, propKey) {
    
    return 35;
  }
});

let obj = Object.create(proxy)
obj.time 




//方法

// get() 拦截属性的读取操作
// 如果没有这个拦截函数，访问不存在的属性，只会返回undefined。
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, Key) {
    if (Key in target) {
      return target[Key];
    } else {
      throw new ReferenceError("Prop name \"" + Key + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
proxy.age // 抛出一个错误
