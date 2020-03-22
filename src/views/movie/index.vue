<template>
  <div id="kaka">
<heads>喵喵电影</heads>
<ul>
    <router-link to="/city" tag="li">{{ $store.state.nm }}</router-link>
   <!-- 设计成子路由 router-link -->
   <router-link to="/nowplaying" tag="li">正在热映</router-link>
  <router-link to="/nowlater" tag="li">即将上映</router-link>
  <router-link to="/search" tag="li"><img src="../../../public/img/search.png" alt=""></router-link>
</ul>

<keep-alive><router-view></router-view></keep-alive> 
<van-loading color="#1989fa" />
<!-- keep-alive可以保留数据请求的缓存，挺高页面渲染的响应速度 -->
<!-- 用keep-alive需要注意的是，一旦启用了这个，在切换页面时，
该页面生命周期函数里面的操作将不再起效，除非重新刷新一次页面-->


<football ></football>
<router-view name="detail"></router-view>
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
/* margin-top:60px; */
top: 50px;
background-color: rgba(255, 255, 255, 0.925);
position: fixed;
height: 30px;
width: 100%;
font-size:18px;
font-weight:500;
line-height: 30px;
z-index: 9;
}
ul li{
  float: left;
  margin-left: 4%;
  margin-right:4%;

}

</style>