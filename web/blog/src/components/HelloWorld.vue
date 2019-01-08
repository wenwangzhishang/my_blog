<style >

</style>
<template>
  <div>
      <div>1111</div>
      <div>
        <input type="text" :model="name">
      </div>
      <div>
        <input type="text" :model="password">
      </div>
      <div class="btn" @click="submit"></div>
  </div>
</template>
<script>
  export default {
    name:'HelloWorld',
    data(){
      return {
          name:null,
          password:null,
      }
    },
    methods: {
        submit(){
            console.log(1);
        }
    },
  }
</script>


