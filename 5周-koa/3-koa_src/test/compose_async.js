/**
 * 组合函数 - 异步执行
 * 利用 next() 方法循环递增调用下一个函数
 */
function compose(middlewares) {

  return dispatch(0)

  function dispatch(num) {
    let func = middlewares[num]
    if (!func) {
      // 向上返回一个promise对象
      return Promise.resolve()
    }
    return Promise.resolve(
      func(function next() {
        return dispatch(num + 1)
      })
    )
  }
}

const middlewares = [func01, func02, func03]
compose(middlewares)

/**
 * 异步函数：await后的next执行结束后才会继续往下执行
 */
async function func01(next) {
  console.log("func01...")
  // 等待一个promise对象
  await next()
  console.log("func01...end")
}

async function func02(next) {
  console.log("func02...")
  await next()
  console.log("func02...end")
}

async function func03(next) {
  console.log("func03...")
  await next()
  console.log("func03...end")
}
