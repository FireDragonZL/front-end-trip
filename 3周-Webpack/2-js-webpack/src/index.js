// 引入css样式文件
import "./index.css"

import {print} from './components/a'

print()

// 判断当前的 mode 模式是否为生产环境
if (process.env.NODE_ENV === "development") {
  console.log("baseurl is localhost:8080")
} else {
  console.log("baseurl is sunshine.com")
}

console.log("程序的入口文件!!!")

document.write("<h2>不识人间四月!</h2>")