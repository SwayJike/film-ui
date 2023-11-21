<template>
  <div class="focus-list">
    <div class="turn-page-btn turn-page-left" @click="turnPage(-1)">
      <svg t="1668591320835" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200"><path d="M319.64 512.016l336.016-336.008 45.248 45.248L364.896 557.28z" p-id="2497" fill="#ffffff"></path><path d="M365.216 466.464l339.976 339.968-45.256 45.256-339.976-339.976z" p-id="2498" fill="#ffffff"></path></svg>
    </div>
    <div class="turn-page-btn turn-page-right" @click="turnPage(1)">
      <svg t="1668591375874" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3516" width="200" height="200"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z" p-id="3517" fill="#ffffff"></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" p-id="3518" fill="#ffffff"></path></svg>
    </div>

    <a class="focus-item" v-for="(item, index) in items" v-show="cur_group_index * group_size > index && (cur_group_index - 1) * group_size <= index">
      <div class="poster">
        <div class="process-wrap">
          <div class="occupy" style="width: 0%"></div>
        </div>
        <img class="pic" :src="item.min_pic">
        <div class="unchoice-mask"></div>
      </div>

      <div class="title">
        {{item.title}}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carouselist",
  data(){
    return {
      group_size: 5,
      cur_group_index: 1,
      items: [
        {
          logo: 'https://puui.qpic.cn/tv/0/1249352026/0',
          label: '杨幂 白宇 医疗题材',
          reason: '杨幂白宇为生命暖心护航',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444757_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249351719_276386/450',
          title: '谢谢你医生'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249488597/0',
          label: '毛不易 李雪琴 脱口秀',
          reason: '王源朋友圈里鹿晗最搞笑',
          max_pic: 'https://puui.qpic.cn/tv/0/1249488592_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249488585_276386/450',
          title: '毛雪汪'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249437484/0',
          label: '史蒂夫·卡瑞尔 艾伦·阿金 合家欢',
          reason: '全员卖萌拯救“小老板“',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444738_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249437478_276386/450',
          title: '小黄人大眼萌'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249482364/0',
          label: '美食纪录片 地方美食 饮食文化',
          reason: '四川大邑·肥肠血旺',
          max_pic: 'https://puui.qpic.cn/tv/0/1249482362_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249482357_276386/450',
          title: '早餐中国'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249366474/0',
          label: '秦昊 万茜 工业题材',
          reason: '秦昊万茜掌舵工业变革',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444874_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249366464_276386/450',
          title: '大博弈'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249437484/0',
          label: '史蒂夫·卡瑞尔 艾伦·阿金 合家欢',
          reason: '全员卖萌拯救“小老板“',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444738_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249437478_276386/450',
          title: '小黄人大眼萌'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249482364/0',
          label: '美食纪录片 地方美食 饮食文化',
          reason: '四川大邑·肥肠血旺',
          max_pic: 'https://puui.qpic.cn/tv/0/1249482362_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249482357_276386/450',
          title: '早餐中国'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249366474/0',
          label: '秦昊 万茜 工业题材',
          reason: '秦昊万茜掌舵工业变革',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444874_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249366464_276386/450',
          title: '大博弈'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249437484/0',
          label: '史蒂夫·卡瑞尔 艾伦·阿金 合家欢',
          reason: '全员卖萌拯救“小老板“',
          max_pic: 'https://puui.qpic.cn/tv/0/1249444738_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249437478_276386/450',
          title: '小黄人大眼萌'
        },
        {
          logo: 'https://puui.qpic.cn/tv/0/1249482364/0',
          label: '美食纪录片 地方美食 饮食文化',
          reason: '四川大邑·肥肠血旺',
          max_pic: 'https://puui.qpic.cn/tv/0/1249482362_1920800/0',
          min_pic: 'https://puui.qpic.cn/tv/0/1249482357_276386/450',
          title: '早餐中国'
        },
      ]
    }
  },
  methods: {
    turnPage(size){
      let min = 1;
      let max = this.items.length / this.group_size;
      this.cur_group_index = this.cur_group_index + size;
      if (this.cur_group_index > max){
        this.cur_group_index = max;
      }else if (this.cur_group_index < min){
        this.cur_group_index = min;
      }
    }
  }
}
</script>

<style scoped lang="scss">



.focus-list{
  position: absolute;
  z-index: 15;
  display: flex;
  div{
    svg{
      width: 24px;
      height: 24px;
      color: rgb(255, 255, 255);
      &:not(:root) {
        overflow: hidden;
      }
    }
  }

  .turn-page-btn{
    width: 24px;
    height: 43px;
    position: absolute;
    top: calc(50% - 17px);
    font-size: 29px;
    color: #fff;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 21;
  }

  .turn-page-left{
    width: 44px;
    left: -45px;
    padding-left: 20px;
  }

  .turn-page-right{
    right: -35px;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    &:hover{
      outline: 0 none;
      text-decoration: none;
    }
    &:active, a:hover {
      color: #ff5c38;
    }
  }

  .focus-item{
    margin-left: 12px;
  }

  @media screen and (min-width: 1440px){
    .focus-item{
      width: calc(((100vw - 216px - 40px * 2 - 24px) / 2 - 5 * 12px) / 6);
      max-width: 92px;
    }
  }


  .poster{
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    width: 100%;

    image{
      display: inline-block;
      vertical-align: bottom;
      border: 0 none;
    }

    .pic{
      width: 100%;
      height: 100%;
      border-radius: 8px;
      -o-object-fit: cover;
      object-fit: cover;
      font-family: "object-fit: cover;";
    }

    .unchoice-mask{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,.5);
      display: none;
    }
  }

  @media screen and (min-width: 1440px){
    .poster{
      height: calc(((100vw - 216px - 40px * 2 - 24px) / 2 - 5 * 12px) / 6 * 129 / 92);
      max-height: 129px;
    }
  }

  .process-wrap{
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: rgba(255,255,255,.2);
    bottom: 0;
    left: 0;
    .occupy{
      height: 100%;
      background-color: #fff;
    }
  }

  .title{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(255,255,255,.6);
    letter-spacing: 0;
    text-align: center;
    margin-top: var(--card-margin);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

}

@media screen and (min-width: 1024px) and (max-width: 1599px){
  .focus-list{
    right: calc((30px + 40px + 18px) / 2 + 9px);
  }
}
</style>