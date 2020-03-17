<template>
<div id="aps">
<header id="flext" v-for="(item,i) in cinemaList" :key="i">
<div class="fl1">
<h3>{{item.nm}}</h3>
<p>{{item.addr}}</p>


</div>
<div class="fl2">{{item.distance}}</div>

</header>
</div>
</template>
<script>
export default {
    data () {
        return {
            cinemaList:[]
        }
    },
    created () {
        this.$http.get('api/cinemaList').then(({data:res})=>{
            console.log(res.data);
            this.cinemaList = res.data.cinemas
})
}
}
</script>
    


<style>
#aps{
    margin-bottom:54.2px;

}

#flext {
 
    margin-top:7%;
    display: flex;
    justify-content: space-between;
    align-content: center;
   margin-left:8px;
   margin-right:5px;
   padding-bottom:19px;
   border-bottom:.8px solid #ccc;
}
#flext p{
    font-size:14px;
    margin-top:5px;
    max-width:290px;   
    /* 如果想手动控制某个盒子或者标签的最大宽度，可以设置max-witdh，或者min-width。 */
    color: rgb(116, 116, 116);
}
.fl1 {
    color: black;

}
.fl2 {
    
    padding-top:30px;
}


</style>