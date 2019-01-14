<template>
  <div class="hello">
    <div>
      <input type="text" v-model="name">
    </div>
    <div>
      <input type="text" v-model="password">
    </div>
    <div @click="submit()">按钮</div>
    <div @click="submit3()">按钮 post</div>
  </div>
</template>

<script>
import env from '../../httpconfig/env'
import api from '../../httpconfig/api'
export default {
  name: 'HelloWorld',

  data () {
    return {
      name:null,
      password:null
    }
  },
  mounted() {

  },
  methods: {
    submit(){
      let data = {
          name:this.name,
          password:this.password
      }
      this.axios({
          method:'get',
          url:'/vue/123',
          data:data,
          })
          .then((res) =>{
            console.log(res);
          })
    },
    submit2(){
      let data = {
          name:this.name,
          password:this.password
      }
      this.axios({
          method:'get',
          url:'/vue/456',
          data:data,
          })
          .then((res) =>{
            console.log(res);
          })
    },
    submit3(){
      let data1 = {
          name:this.name,
          password:this.password
      };
      // let data = new URLSearchParams();
      // data.append('name',data1);
      this.axios.post('/vue/register',data1)
          .then((res) =>{
            console.log(res);
          })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
