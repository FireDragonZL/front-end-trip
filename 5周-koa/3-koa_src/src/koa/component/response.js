/**
 * 封装响应信息对象
 */
const response = {
  get body() {
    return this._body
  },
  set body(val) {
    this._body = val
  }
}

module.exports = response