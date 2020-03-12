<template>
  <div>
   <b>  热门城市:</b>
    <span v-for="(item,i) in cityList" :key="i" v-show="item.isHot===1">
{{item.nm}}
</span>


<van-index-bar :index-list="adc" :sticky="false" highlight-color="#0000FF" class="font">
  <van-index-anchor :index="item" v-for="(item,i) in adc" :key="i" >{{item}}
    
    <p v-for="(jtem,j) in cityList" :key="j"
    v-show="jtem.py[0]===item"
    >
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
        this.$http.get('api/cityList').then(({data:res})=>{
            console.log(res.data);
            this.cityList = res.data.cities
        })
    },
    methods: {
     
    }



}
</script>

<style scoped>
b {
  height: 35px;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.384);
}

span {
 font-size: 20px;
 font-weight: bold;
 margin:3%;
 color: chocolate;
}
/* .van-index-bar{
  font-style: italic;
  font-size: 16px;
} */
.font{
  font-size: 20px;
}



</style>