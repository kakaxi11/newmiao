<template>
  <div id="kaka">
<heads>喵喵电影</heads>
<ul>
   <li>城市</li>   
   <!-- 设计成子路由 router-link -->
  <li>正在热映</li>
  <li>即将上映</li>
  <li>搜索</li>
</ul>



<football ></football>

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

height: 45px;
display:flex;
justify-content: space-around;
font-size:20px;
font-weight:500;
line-height: 45px;
}
</style>