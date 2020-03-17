<template>
  <div>
    <div class="box"></div>
   <b>  热门城市:</b>
    <span v-for="(item,i) in cityList" :key="i" v-show="item.isHot===1">
<van-tag color="#f2826a" @click="change(item.nm,item.id)">{{item.nm}}</van-tag>
  <!-- 通过点击事件，并把数据传递给vuex -->
</span>
 

<van-index-bar :index-list="adc" :sticky="false" highlight-color="#0000FF" class="font">
  <van-index-anchor :index="item" v-for="(item,i) in adc" :key="i" >{{item}}
    
    <p v-for="(jtem,j) in cityList" :key="j"
    v-show="jtem.py[0]===item"
     @click="change(jtem.nm,jtem.id)">
    {{jtem.nm}}                                                     
    </p>
  </van-index-anchor>
</van-index-bar>

<!-- 
<ul>
  <li v-for="(item,i) in adc" :key="i">{{item}}    
    <p v-for="(jtem,j) in cityList" :key="j"
    v-show="jtem.py[0]===item"
    >
    {{jtem.nm}}
    </p>
  </li>
</ul> -->


  </div>
</template>

<script>
export default {
    data () {
        return {
          cityList:[],
          adc:['a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','w','x','y','z']
            
        }
    },
    created () {
        var cityListjs = window.localStorage.getItem('cityList')
      
        if(cityListjs){
           this.cityList = JSON.parse(cityListjs) 
          return
          // 如果Localsorage里面有数据，则不进行axios请求，直接渲染。
        }
        this.$http.get('api/cityList').then(({data:res})=>{
            console.log(res.data);
            this.cityList = res.data.cities
            window.localStorage.setItem('cityList',JSON.stringify(res.data.cities)) 
            // 为了提高性能，避免每次刷新都请求数据，我们把数据保存在浏览器的localStorage里面，这样下次刷新页面也不会再发生请求了
        //keep-alive只是页面之间切换不重新请求数据，但是刷新后还是会请求。
        })
    },
    methods: {
      change(nm,id){
        this.$store.commit('CHANGEST', { nm, id })
        window.localStorage.setItem('nm',nm)  
        window.localStorage.setItem('id',id)
        this.$router.push('./nowplaying')

        //传递数据，并请求vuex的mutasions里的CHANGEST函数对数据进行更改
      },
    }



}
</script>

<style scoped>
.box{
height: 115px;   
/* 因为顶部的两个盒子定位后，下面的内容会顶上去，所以设这个盒子来占位，防止下面的内容顶上去。   */
}


b {
  margin-left: 15px;
  height: 35px;
  width: 60px;
 
}

span {
 font-size: 15px;
 font-weight: bold;
 margin:3%;
 color: rgb(255, 255, 255);
}
/* .van-index-bar{
  font-style: italic;
  font-size: 16px;
} */
.font{
  font-size: 20px;
}



</style>