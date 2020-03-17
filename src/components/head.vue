<template>
  <div id="head">
     <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#head {
position: fixed;
height: 50px;
width: 100%;
background-color:rgb(223, 45, 45);
text-align: center;
color: blanchedalmond;
font-size:20px;
font-weight:inherit;
line-height: 50px;
z-index: 99;
}

</style>