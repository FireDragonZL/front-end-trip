/**
 * 封装请求对象(暂时没看出什么用？)
 */
const request = {
  get url() {
    return this.req.url
  },
  get method() {
    return this.req.method.toLowerCase()
  }
}

module.exports = request