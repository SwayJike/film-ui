<template>
  <div class="container">

    <div>
      <bg-carouselist/>
    </div>

    <div>
      <cards/>
    </div>

  </div>
</template>

<script>
import BgCarouselist from "@/components/BgCarouselist";
import Cards from "@/components/Cards";
export default {
  name: "Contenter",
  components: {Cards, BgCarouselist}
}
</script>

<style scoped lang="scss">
.container{
 display: flex;
  flex-direction: column;
}
</style>