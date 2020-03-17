<template>
  <div id="kaka">
<heads>我的喵喵</heads>
<div class="zw"></div>

<van-search   v-model="value.kw"
  placeholder="请输入搜索关键词"
  show-action
  @search="onSearch">
 <button @click="onSearch" slot="action">搜索</button>  
 <!-- 通过具名插槽自己替换vantapp组件的某些内容 -->
</van-search
>



<ul>
    <li v-for="(item,i) in movieList" :key="i">  
        
        
        <img :src="movieimg[i]" alt="">

        <div class="inline">
        <h3>{{item.nm}}</h3>
        <br>
        <p>观众评分<i>{{item.sc}}</i></p>
        <p>演员:{{item.star}}</p>
        <p>上映日期:{{item.rt}}</p>
        <br>
        <br>
        </div>
        
        <van-tag color="#f2826a">购票</van-tag>
        <div class="zhanwei2"></div>
      

    </li>
</ul>




<football ></football>
  </div>
</template>

<script>
import heads from '../../components/head.vue'
import football from '../../components/footer.vue'
import movieimg from '../../../public/movieImg.js'

export default {
  data () {
    return {
      value:{
          cityId:10,
        kw:''
      },
         movieimg,
      movieList:[]
    }
  },
  components:{
    football,
    heads
  },
  methods:{
    onSearch(){
        if(this.value.kw==='')
        return


        this.$http.get('api/searchList',{params:this.value}).then(({data:res})=>{
            console.log(res);
            this.movieList = res.data.movies.list

        })


    }



  }
}
</script>

<style scoped>
.zw{
  height: 90px;
}
.mint-button--normal{

  width:130px;
  margin-left:30%;
                    /* 有些组件的类名不是引入时的名字，需要到浏览器里自己点开去找。 */
}
.mint-searchbar {
    color: beige;

}
.zhanwei {
    height: 79px;
    /* width: 100%; */
}
li{
    margin-left:3px;
    margin-top:20px;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    /* height: 110px; */
    /* margin-left: 106px; */
    /* justify-content: space-around; */

}
img{
height:100%;
width:100px;
flex: 2.3;

}
.inline{
   flex: 3.3;
   margin-left: 5px;
  
    
}
.inline h3{
     width: 170px;
     overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;  


}
.inline p{
    width:160px;
    color: rgb(97, 96, 96);
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;   
/* 某些样式不能直接作用在flex布局的盒子上，
我们就在它的子盒子里面进行设置。比如这个超出省略号，
上面的电影名字标题也可以改。 */
    

}
.van-tag {
    height: 30px;
    width: 40px;
    text-align: center;
    font-size: 13px;
    flex: 0.6;
    margin-left:20px;
     
   

}
.zhanwei2{
    height: 100%;
    flex: 0.33;
}  
/* 通过这个白色空盒子占位，实现flex布局。 */
/* flex布局都奥妙之一就是填空盒子占位，不管是横着还是竖着 */
/* flex布局可以在任何页面情况使用，只要你懂得塞盒子或者边缘替换盒子。 */
button {
width: 45px;
height: 35px;

}



</style>