<template>
  <div>
    <div class="left">
      显示菜单列表
      <ul>
        <li v-for="(item,index) in items" :key="index">
          {{item.name}} - {{item.url}} - {{item.type}} - {{item.price}}
          <button
            @click="reduce(item, index)"
          >-</button>
          {{ typeof item.num === 'undefined' ? 0 : item.num }}
          <button
            @click="add(item, index)"
          >+</button>
        </li>
      </ul>
    </div>
    <div class="right">
      提交订单详情
      <ul>
        <li
          v-for="(item, index) in orders"
          :key="'order' + index"
        >菜名名称{{item.name}}-菜名单价{{item.price}}-单项总价{{item.price * item.num}}</li>
      </ul>
      <p>总价：{{ total }}</p>
    </div>
  </div>
</template>>

<script>
import _ from 'lodash'
export default {
  name: 'order',
  data () {
    return {
      items: this.$store.state.lists
    }
  },
  computed: {
    // 过滤订单数量大于1的订单
    orders () {
      return _.filter(this.items, (item) =>
        typeof item.num !== 'undefined' && item.num > 0
      )
    },
    total () {
      let sum = 0
      // 作用和foreach循環等價
      _.each(this.orders, (item) => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    // 增加订单数量
    add (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num++
      // 限购10份
      if (item.num > 10) {
        item.num = 10
      }
      /**
       * vue只能监听data数组的变化，而不能监听数组内部属性值的变化
       * Vue.set(...) 和 this.$set(...) 原理是一样的，不同的是$set绑定在了vue的原型上
       * */
      this.$set(this.items, index, item)
    },
    // 减少订单数量
    reduce (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num--
      if (item.num < 0) {
        item.num = 0
      }
      this.$set(this.items, index, item)
    }
  }
}
</script>

<style lang="scss">
</style>>
