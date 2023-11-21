<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./assets/css/clear.css";
body{
  overflow: hidden;
  background: #0f0f1e;
&::-webkit-scrollbar{
   width:8px;
   border-radius: 10px;
   background-color: transparent;
 }
&::-webkit-scrollbar-track
 {
  border-radius: 10px;
   background-color: transparent;
 }
&::-webkit-scrollbar-thumb
 {
  border-radius: 10px;
   background-color: #b6babd;
 }
}
</style>
