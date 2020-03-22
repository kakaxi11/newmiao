<template>
   <div class="wrapper" ref="wrapper">
        <div class="content">
         
             <slot></slot>
<!--我们把scroll封装到这个组件里， 不用在每个组件都import了，
直接把需要滚动的内容放到插槽里即可 -->
             <!-- better-scrool插件，.wrapper用来设置固定的父盒子
             （需要设置固定高度，fiexd样式），content子盒子是需要滚动的内容
             （高度为需要滚动的内容的高度）。 -->
         </div>                   
     </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null,
                message: '哈哈哈'
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })

            this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position)
            })

            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        },
        methods:{
            scrollTo(x, y, time = 300) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 118px;
    width: 100%;
 
    /* 父盒子必须fixed，并且有一个高度 */
    height: 1px;
    
    
}
.content {
    height:1410px;
  
    /* width: 100%; */
/* 滚动的内容1350px */
}
</style>







