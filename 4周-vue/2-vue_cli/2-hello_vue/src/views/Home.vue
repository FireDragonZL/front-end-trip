<template>
<div>
  <div class="home">
    {{msg}}
  </div>
  <hr>
  <div class="left">
    <form v-if="isShow">
      <div class="item">
        菜品名称
        <input type="text" v-model="unit.name"/>
      </div>
      <div class="item">
        菜品图片
        <input type="text" v-model="unit.url"/>
      </div>
      <div class="item">
        菜品分类
        <input type="text" v-model="unit.type"/>
      </div>
      <div class="item">
        菜品单价
        <input type="text" v-model="unit.price"/>
      </div>
      <button @click="submit">确定</button>
    </form>
    <div class="info" v-else>
      {{ this.unit.name }} - {{ this.unit.url }} - {{ this.unit.type }} - {{ this.unit.price }}
      <div class="ctrl">
        <button @click="add">添加</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
  <div class="right">
    <ul id="list">
      <li v-for="(item,index) in items" :key="index">
        {{ item.name }} - {{ item.url }} - {{ item.type }} - {{ item.price }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello World!',
      unit: {
        name: '',
        url: '',
        type: '',
        price: ''
      },
      isShow: true,
      items: []
    }
  },
  components: {},
  methods: {
    submit () {
      this.isShow = false
    },
    add () {
      // 向列表中添加方法
      this.items.push({ ...this.unit })
      this.$store.commit('setList', this.items)
      this.unit.name = ''
      this.unit.url = ''
      this.unit.type = ''
      this.unit.price = ''
      this.isShow = true
    },
    cancel () {
      // 返回form表单项
      this.isShow = true
    }
  },
  mounted () {
    this.items = this.$store.state.lists
  }
}
</script>

<style lang="scss">

</style>
