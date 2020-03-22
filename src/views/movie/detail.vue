
<template>
<div>
    <div class="zhanwei"></div>
<van-button color="#7232dd" @click="toback">返回</van-button>


</div>
</template>

<script>
export default {
data() {
return {

}
},


methods:{
    toback(){
        this.$router.back();
    }



},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.zhanwei{
    height: 100px;

}


</style>