<template>
  <div class="wrapper">
    <div data-carousel>
      <ul class="slide__list Wallop-list">
        <li  v-for="(item,index) in items" :class="['slide__item', 'Wallop-item', index == cur_index ? 'Wallop-item--current' : '']">
          <img :src="item.max_pic" style="cursor: pointer;background: linear-gradient(to top , rgb(255,255,255), #0f0f1e);filter: brightness(90%);">
        </li>
      </ul>

      <div class="content">
        <div class="info-wrap" v-for="(item,index) in items" v-show="cur_index == index">
          <div class="video-logo-wrap">
            <img :src="item.logo" class="video-logo">
          </div>
          <div class="label">
          <span>
            {{item.label}}
          </span>
            <span>
            {{item.reason}}
          </span>
          </div>
          <div class="bottom" @click="player(item)">
            <svg t="1668601838211" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="200" height="200"><path d="M744.727273 551.563636L325.818182 795.927273c-30.254545 18.618182-69.818182-4.654545-69.818182-39.563637v-488.727272c0-34.909091 39.563636-58.181818 69.818182-39.563637l418.909091 244.363637c30.254545 16.290909 30.254545 62.836364 0 79.127272z" p-id="2435" fill="#ffffff"></path></svg>
            <span class="text">
              播放正片
            </span>

          </div>
          <span style="position: relative;top: -42px;right: -166px" @click="love = !love">
              <svg v-if="love" t="1668601993630" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5159" width="32" height="32"><path d="M334.848 343.04q22.528-28.672 49.152-50.176 22.528-18.432 50.176-33.792t57.344-13.312q43.008 3.072 71.68 20.48t45.568 43.008 23.04 58.368 4.096 66.56-13.312 64.512-27.136 57.856-34.304 49.664-36.864 40.96q-27.648 28.672-58.368 54.784t-58.368 46.08-49.664 31.744-32.256 11.776q-12.288 0-32.256-12.288t-44.544-32.256-52.224-46.08-55.296-52.736q-17.408-17.408-38.912-39.424t-40.448-48.128-32.256-57.344-14.336-67.072q-2.048-34.816 7.168-66.048t27.136-55.808 44.032-41.472 58.88-24.064 65.024 6.656 58.88 33.28q30.72 22.528 58.368 54.272zM611.328 245.76q13.312 0 25.6 1.024 11.264 1.024 23.552 3.072t21.504 6.144 19.456 10.752 19.456 12.8l20.48 16.384q6.144-6.144 13.312-11.264 13.312-10.24 35.84-23.552 12.288-7.168 28.672-10.752t33.28-2.56 33.28 6.656 27.648 17.92q31.744 33.792 37.888 66.048t-1.536 60.416-23.04 49.664-27.648 33.792q-23.552 23.552-44.544 40.96t-51.712 39.936q-16.384 11.264-34.304 19.456t-27.136 8.192q-9.216 1.024-19.968-7.68t-26.112-19.968q-7.168-5.12-13.312-12.288l-12.288-11.264-12.288-12.288q11.264-20.48 18.432-46.08 6.144-21.504 9.216-50.688t-3.072-62.976q-7.168-31.744-18.944-55.296t-23.04-37.888q-13.312-17.408-28.672-28.672z" p-id="5160" fill="#d81e06"></path></svg>
              <svg v-if="!love" t="1668601993630" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5159" width="32" height="32"><path d="M334.848 343.04q22.528-28.672 49.152-50.176 22.528-18.432 50.176-33.792t57.344-13.312q43.008 3.072 71.68 20.48t45.568 43.008 23.04 58.368 4.096 66.56-13.312 64.512-27.136 57.856-34.304 49.664-36.864 40.96q-27.648 28.672-58.368 54.784t-58.368 46.08-49.664 31.744-32.256 11.776q-12.288 0-32.256-12.288t-44.544-32.256-52.224-46.08-55.296-52.736q-17.408-17.408-38.912-39.424t-40.448-48.128-32.256-57.344-14.336-67.072q-2.048-34.816 7.168-66.048t27.136-55.808 44.032-41.472 58.88-24.064 65.024 6.656 58.88 33.28q30.72 22.528 58.368 54.272zM611.328 245.76q13.312 0 25.6 1.024 11.264 1.024 23.552 3.072t21.504 6.144 19.456 10.752 19.456 12.8l20.48 16.384q6.144-6.144 13.312-11.264 13.312-10.24 35.84-23.552 12.288-7.168 28.672-10.752t33.28-2.56 33.28 6.656 27.648 17.92q31.744 33.792 37.888 66.048t-1.536 60.416-23.04 49.664-27.648 33.792q-23.552 23.552-44.544 40.96t-51.712 39.936q-16.384 11.264-34.304 19.456t-27.136 8.192q-9.216 1.024-19.968-7.68t-26.112-19.968q-7.168-5.12-13.312-12.288l-12.288-11.264-12.288-12.288q11.264-20.48 18.432-46.08 6.144-21.504 9.216-50.688t-3.072-62.976q-7.168-31.744-18.944-55.296t-23.04-37.888q-13.312-17.408-28.672-28.672z" p-id="5160" fill="#ffffff"></path></svg>
            </span>
        </div>
      </div>
    </div>

    <cardCarousel :items="items" :cur_active_index="cur_index" @cardHover="doHover"></cardCarousel>

    <div class="mask" @click="player(items[cur_index])"></div>

  </div>
</template>

<script>
import Wallop from "wallop";
import CardCarousel from "@/components/CardCarousel";
export default {
  name: "BgCarouselist",
  components: {CardCarousel},
  data(){
    // 13902,"哥,你好",https://v.qq.com/x/cover/mzc00200st6j0jd.html,//puui.qpic.cn/vcover_vt_pic/0/mzc00200st6j0jd1667792532608/260,01:50:33,8.1,主演：马丽 常远 魏翔 贾冰 黄允桐,6854145,,,
    // 13903,神奇动物,https://v.qq.com/x/cover/mzc002007blv9mj.html,//puui.qpic.cn/vcover_vt_pic/0/mzc002007blv9mj1666603313891/260,02:08:26,9.1,主　演： 埃迪·雷德梅恩 裘德·洛 麦斯·米科尔森,6844557,,,
    // 13904,小黄人大眼萌,https://v.qq.com/x/cover/mzc00200oqwulnj.html,//puui.qpic.cn/vcover_vt_pic/0/mzc00200oqwulnj1668158498923/260,01:28:28,9.1,导　演： 凯尔·巴尔达 布拉德·埃布尔森,96584745,,,
    // 13905,重啓,https://v.qq.com/x/cover/mzc00200dxhbjfd.html,//puui.qpic.cn/vcover_vt_pic/0/mzc00200dxhbjfd1667560893718/260,01:30:07,7.3,主　演： 季晨 季肖冰,5241447,,,
    // 13906,夺命双骄,https://v.qq.com/x/cover/mzc00200g2cy0mm.html,//puui.qpic.cn/vcover_vt_pic/0/mzc00200g2cy0mm1668350692335/260,01:20:13,6.9,主　演： 韩昕妤 李柏蓉 楼学贤,25647,,,

    return {
      love: false,
      cur_index: 0,
      timer: null,
      items: [
        {
          id: 13902,
          logo: 'https://puui.qpic.cn/tv/0/1249560938/0?max_age=7776000',
          label: '马丽 常远 家庭喜剧',
          reason: '常远在线撮合马丽魏翔',
          max_pic: 'https://puui.qpic.cn/tv/0/1249560939_1920800/0?max_age=7776000',
          min_pic: 'https://puui.qpic.cn/tv/0/1249560931_276386/450?max_age=7776000',
          title: '哥,你好'
        },
        {
          id: 13903,
          logo: 'https://puui.qpic.cn/tv/0/1249559281/0?max_age=7776000',
          label: '埃迪·雷德梅恩 裘德·洛 奇幻魔法',
          reason: '重返魔法世界！会员免费看',
          max_pic: 'https://puui.qpic.cn/tv/0/1249559279_1920800/0?max_age=7776000',
          min_pic: 'https://puui.qpic.cn/tv/0/1249559274_276386/0?max_age=7776000',
          title: '神奇动物'
        },
        {
          id: 13904,
          logo: 'https://puui.qpic.cn/tv/0/1249437484/0',
          label: '史蒂夫·卡瑞尔 艾伦·阿金 合家欢',
          reason: '全员卖萌拯救“小老板“',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444738_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249437478_276386/450',
          title: '小黄人大眼萌'
        },
        {
          id: 13905,
          logo: 'https://puui.qpic.cn/tv/0/1249345370/0?max_age=7776000',
          label: '季晨 季肖冰 跨物种对决',
          reason: '盗墓笔记黑花双强联手',
          max_pic: 'https://puui.qpic.cn/tv/0/1249350622_1920800/0?max_age=7776000',
          min_pic: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200dxhbjfd1667560893718/260',
          title: '重啓'
        },
        {
          id: 13906,
          logo: 'https://puui.qpic.cn/tv/0/1249549085/0?max_age=7776000',
          label: '李柏蓉 韩昕妤 犯罪动作',
          reason: '战斗天使一正一邪生死对决',
          max_pic: 'https://puui.qpic.cn/tv/0/1249549088_1920800/0?max_age=7776000',
          min_pic: 'https://puui.qpic.cn/vcover_vt_pic/0/hw2a2q3dsh090g81585149697988/260',
          title: '夺命双骄'
        },
        {
          id: -1,
          logo: 'https://puui.qpic.cn/tv/0/1249566924/0?max_age=7776000',
          label: '投票&刷片赢乐园双飞游',
          reason: '敬請期待',
          max_pic: 'https://puui.qpic.cn/tv/0/1249566905_1920800/0?max_age=7776000',
          min_pic: 'https://puui.qpic.cn/vcover_vt_pic/0/fhe2h7sop52qzza1559132364/260',
          title: '迪士尼嘉年華'
        }
      ]
    }
  },
  methods: {
    changeCurIndex(){
      let len = this.items.length;
      this.cur_index = (this.cur_index + 1) % len;
    },
    doHover(index){
      this.cur_index = index;
    },
    player(movie){
      let {id} = movie;
      if (id === -1){
        alert('敬请期待...')
      }else {
        this.$router.push(`/player/${id}`)
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.changeCurIndex, 5000);
  }
}

window.onload = function (){
  const slider = document.querySelector('[data-carousel]');
  const slides = [...document.querySelectorAll('.Wallop-item')]
  this.wallop = new Wallop(slider);

  let prev = 0

  const removePrevClasses = (index) => {
    let prevClass
    if (slides[index].classList.contains('Wallop-item--hidePrevious')) {
      prevClass = 'Wallop-item--hidePrevious'
    } else if (slides[index].classList.contains('Wallop-item--hideNext')) {
      prevClass = 'Wallop-item--hideNext'
    }

    if (prevClass) {
      setTimeout(() => {
        slides[index].classList.remove(prevClass)
      }, 600)
    }
  }

  const onChange = () => {
    removePrevClasses(prev)
    prev = this.wallop.currentItemIndex
  }

  this.wallop.on('change', onChange);

}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

/* List reset */
ul {
  padding: 0;
  margin: 0;
}

button {
  background-color: transparent;
  border: none;
  width: 65px;
  padding: 20px;
  transition: opacity 200ms;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  z-index: 2;

  svg {
    fill: #FAFAFA;
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }
}

.button--next {
  left: auto;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(180deg);
}


.wrapper {
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .slide__list {
    /*width: calc(100vw - 40px);
    height: calc(100vw / 2);*/
    font-family: Lato, sans-serif;

    &::before,
    &::after {
      content: '';
      width: 180px;
      //height: 100%;
      display: block;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, #141316 60%, transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, #141316 60%, transparent);
    }

    .slide__item {
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      justify-content: center;

      > * {
        width: 100%;
      }
    }
  }

  [data-carousel] {
    position: relative;
  }

  .Wallop-list {
    position: relative;
    overflow: hidden;
  }

  .Wallop-item {
    --x1: 0.1;
    --y1: 0.67;
    --x2: 0.29;
    --y2: 0.98;

    --originalCurve: cubic-bezier(var(--x1), var(--y1), var(--x2), var(--y2));
    --reversedCurve: cubic-bezier(calc(1 - var(--x2)), calc(1 - var(--y2)), calc(1 - var(--x1)), calc(1 - var(--y1)));

    --length: 1300ms;

    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .Wallop-item--current {
    visibility: visible;
    position: relative;

  }


  .Wallop-item--hidePrevious,
  .Wallop-item--hideNext {
    --length: 500ms;
    visibility: visible;
  }

  .content{
    height: 260px;
    width: 100%;
    position: absolute;
    bottom: 30px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }

  .info-wrap{
    width: calc(50vw - .5 * var(--left-tab-width) - 58px);
    flex-direction: column;
    z-index: 14;
    position: absolute;
    left: 230px;
    display: flex;
    justify-content: start;
    cursor: pointer;

    .video-logo-wrap{
      .video-logo{
        max-height: 88px;
      }
    }
    .label{
      font-family: PingFangSC-Regular;
      color: #fff;
      letter-spacing: 0;
      font-size: 16px;
      margin-left: 12px;
      margin-top: 12px;
      margin-bottom: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: flex;
      flex-direction: column;
      span{
        margin-bottom: 8px;
      }
    }
    .bottom{
      background: rgba(255,255,255,.15);
      border-radius: 33.6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 152px;
      height: 52px;
      svg{
        width: 32px;
        height: 32px;
      }
      .text{
        font-family: PingFangSC-Regular;
        color: #fff;
        letter-spacing: 0;
        line-height: 33.6px;
        margin-left: 9px;
      }

    }
  }

  .mask{
    position: absolute;
    background: linear-gradient(to top, #0f0f1e, rgba(255,255,255,0.1));
    width: 100%;
    height: 100%;
    cursor: pointer;
  }


  /* Custom keyframe animation */

  @keyframes slideIn {
    0% {
      transform: translate3d(50%, 0, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      opacity: 0;
    }
  }

}
</style>