<template>
  <transition name="fade" @after-leave="afterLeave">
    <div class="notice" :style="style"  v-show="visible">
      <span class="cotent">{{message}}</span>
      <a class="btn" @click.stop.prevent="handleClose">{{title}}</a>
    </div>
  </transition>

</template>



<script>
  export default {
    name: 'notice',
    data(){
      return {
        // verticalOffset: 0,
        // style:{}
        visible:true,
      }
    },
    props: {
      message: {
        type: String,
        require: true
      },
      title: {
        type: String,
        default: 'X'
      },
    },

    computed: {
          style () {
            return {
              [this.verticalProperty]: `${ this.verticalOffset }px`
            }
          }
    } ,


    methods: {
      handleClose (e) {
        this.$emit('close')
      },
      afterLeave () {
        this.$emit('closed')//派发事件
      }
    }
  }
</script>
<style lang="scss" scoped>
.notice{
  // position:fixed;
  // top:20px;
  // left:50%;
  width:120px;
  background:#fff;
  color:red;
  border:1px solid #ddd;
}
</style>


