<template>
  <div id="kaka">
<heads>喵喵影院</heads>

<ul>
    <router-link to="/cityAll" tag="li">全城</router-link>
   <!-- 设计成子路由 router-link -->
   <router-link to="/nowplaying" tag="li">品牌</router-link>
  <router-link to="/nowlater" tag="li">特色</router-link>
</ul>


<football ></football>

<keep-alive><router-view></router-view></keep-alive>



  </div>

</template>

<script>
import heads from '../../components/head.vue'
import football from '../../components/footer.vue'
export default {
  components:{
    football,
    heads
  }
}
</script>

<style scoped>
ul {
  height: 36px;
display: flex;
padding-top:13%;
justify-content: space-around;
line-height:36px;
font-size:20px;
border-bottom:1px solid rgb(236, 236, 236);
box-shadow:rgb(241, 241, 241) 0px .6px
}





</style>