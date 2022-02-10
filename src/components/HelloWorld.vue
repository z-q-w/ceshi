<template>
  <div class="hello">
    <div>
      <p @click="zujian">我是组件</p>
      <p v-if="sddd">哈哈</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sddd:true,
      modelValue:'输入框传值'
    }
  },
  methods:{
    zujian(){
      this.$emit('cancel','wo shi zi zu jian de zhi ');
      this.sddd= !this.sddd
    }
  }
}
</script>

<style scoped>

</style>
