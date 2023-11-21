<template>
  <div class="home">

    <searcher/>

    <naver/>

    <router-view></router-view>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Searcher from "@/components/Searcher.vue";
import Naver from "@/components/Naver.vue";
import Contenter from "@/components/Contenter.vue";
import BgCarouselist from "@/components/BgCarouselist.vue";
// @ is an alias to /src

@Component({
  components: {
    BgCarouselist,
    Contenter,
    Naver,
    Searcher
  },
  data(){
    return {
      typeId : 1
    }
  },
  created() {
    let info = navigator.userAgent;
    //通过正则表达式的test方法判断是否包含“Mobile”字符串
    let isPhone = /mobile/i.test(info);
    //如果包含“Mobile”（是手机设备）则返回true

    if (isPhone){
      alert('请使用PC(电脑)访问本网站, 手机端暂未适配敬请谅解!')
    }
  },
  methods: {
  },
  mounted() {
  },
  destroyed() {
  }
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">

:root{
  --screen-line-num: 9;
  --item-gap: 12px;
}

.home{
  position: relative;
}
.list-wrap{
  margin-left: 216px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.list-wrap-item{
  height: 40px;
  background: rgba(255,255,255,.1);
  border-radius: 24px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: rgba(255,255,255,.6);
  width: calc((100% - (var(--screen-line-num) - 1) * var(--item-gap)) / var(--screen-line-num));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: var(--item-gap);
  cursor: pointer;
}
</style>
