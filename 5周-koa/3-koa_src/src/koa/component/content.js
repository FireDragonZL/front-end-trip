/**
 * 上下文对象Content类
 * 1. ES6语法中的getter/setter方法
 * 2. 将body挂载到response对象上
 */
const content = {
  get body() {
    return this.response.body
  },
  set body(val) {
    this.response.body = val
  }
}

module.exports = content