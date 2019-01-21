<template>
  <div class="hello">

    <!-- <div>
      <input type="text" v-model="name">
    </div>
    <div>
      <input type="text" v-model="password">
    </div>
    <div @click="submit()">按钮</div>
    <div @click="submit3()">按钮 post</div> -->
    <el-container>
      <el-header class="header">
          <ul class="header_box">
            <li class="login_box">

            </li>
            <li class="title_box">jacklin</li>
            <li>
              <ul class="login_box">
                <li class="login" @click="login()">登录</li>
                <li class="register" @click="register()">注册</li>
              </ul>
            </li>
          </ul>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
    <div>
      <!-- <notice content="aa11"></notice> -->
    </div>
    <div @click="ok()">show</div>
    <div @click="showMes()">Mes</div>
  </div>
</template>

<script>
import env from '../../httpconfig/env'
import api from '../../httpconfig/api'
export default {
  name: 'home',
  data () {
    return {
      name:null,
      password:null
    }
  },
  mounted() {

  },
  methods: {
    login () {
      this.$router.push('/login');
    },
    register () {
      this.$router.push('/register');
    },
    ok(){
      this.$test({
        message:'猜大沙发大厦范德萨发范德萨发的说法发放打发发放的说法阿凡达发打发猜',
        title:'test'
      })
    },
    showMes(){
      this.$Mess({
        message:'11',
      })
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .header{
    .header_box{
      display:flex;
      justify-content:space-between;
      .login_box{
        display:flex;
      }
    }
    .header_box:after{
      content:'';
      clear:both;
      display:block;
    }
  }
  /* body > .el-container {
    margin-bottom: 40px;
  } */

</style>
