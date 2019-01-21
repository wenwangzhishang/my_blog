
<template>
  <div class="hello">

    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="登录名" prop="name">
        <el-input type="name" v-model="ruleForm2.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import env from '../../httpconfig/env'
import api from '../../httpconfig/api'
export default {
    name: 'register',
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                 callback(new Error('请用户名'));
            } else {
              if (this.ruleForm2.name !== '') {
                this.$refs.ruleForm2.validateField('name');
              }
              callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };


        return {
          // name:null,
          // password:null,
          ruleForm2: {
            name: '',
            checkPass: '',
          },
          rules2: {
            name: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
      height:400px;
      width:300px;
      margin: 200px auto;
  }

</style>
