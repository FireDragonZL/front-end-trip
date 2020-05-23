/**
 * 使用ES6的语法：
 * 1- 在类中定义方法；
 * 2- 将类实例暴露出去；
 */
class Controller {
  // 构造方法
  constructor () {}

  // 定义的方法
  async func(ctx) {
    ctx.body = "Hello World!"
  }
}

// 暴露的实例对象
export default new Controller()