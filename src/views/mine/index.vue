<template>
  <div id="kaka">
<heads>我的喵喵</heads>
<div class="zw"></div>
<mt-field label="用户名" placeholder="Input username" v-model="username"></mt-field>
<mt-field label="密码" placeholder="Input password" type="password" v-model="password"></mt-field>

<mt-button plain  type ="danger">登录</mt-button>




<football ></football>
  </div>
</template>

<script>
import heads from '../../components/head.vue'
import football from '../../components/footer.vue'
export default {
  data () {
    return {
      username:'',
      password:''
    }
  },


  components:{
    football,
    heads
  }
}
</script>

<style scoped>
.zw{
  height: 55px;
}
.mint-button--normal{

  width:130px;
  margin-left:30%;
                    /* 有些组件的类名不是引入时的名字，需要到浏览器里自己点开去找。 */
}





</style>