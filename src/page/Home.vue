<template>
  <div>
    <aHeader></aHeader>
    <router-view></router-view>
  </div> 
</template>
<script>
  import aHeader from '../common/Header'
  export default {
    data() {
      return {

      }
    },
    components:{aHeader},
  }   
</script>
<style lang="scss" scoped>
  
</style>