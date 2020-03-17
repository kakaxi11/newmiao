<template>
<div id="football">
<div id="foot">

<router-link to="/cinema">   <div><img src="../../public/img/cinema.png" alt=""><span>影院</span></div></router-link>
 <router-link to="/movie"> <div><img src="../../public/img/movie.png" alt=""><span>电影</span></div></router-link>
<router-link to="/mine">   <div><img src="../../public/img/mine.png" alt=""><span>我的</span></div></router-link>
 
</div>
</div>

</template>

<script>
export default {


}
</script>

<style>
#foot {
    /* height:667px; */
    
    display: flex;
    /* padding-top: 600px; */
    /* justify-content: space-around; */
    bottom: 0px;
    position: fixed;
    /* justify-content: space-around; */
    
    background: rgba(250, 250, 250, 0.925);
    
}
div img {
    display: block;
}
.router-link-active {
  text-decoration: none;
  text-shadow: lightslategray;
}
a {
  text-decoration: none;    
  color: rgb(0, 0, 0);
  /* 去掉所有链接的下划线  */
}
#foot div
 {
   margin-left:3em;
    margin-right:3em;

}


</style>