function a (ctx) {
  console.log("=====a")
  ctx.body = "{this is a.js}"
}

module.exports = {
  a
}
