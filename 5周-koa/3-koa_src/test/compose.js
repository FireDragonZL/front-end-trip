/**
 * 组合函数 - 同步执行
 */

 // 方式一：嵌套执行
// func03(func02(func01))

// 方式二：编写组合函数，同步执行
const compose = (middlewares) => {
  [first, ...others] = middlewares
  // 调用第一个方法
  let func = first()
  // 循环调用后面的方法
  others.forEach(method => {
    func = method()
  });
}

const arr = [func01, func02, func03]
compose(arr)


// 同步函数
function func01() {
  console.log("func01...")
  console.log("func01...end")
}

function func02() {
  console.log("func02...")
  console.log("func02...end")
}

function func03() {
  console.log("func03...")
  console.log("func03...end")
}