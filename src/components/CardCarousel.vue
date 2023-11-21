<template>
  <div class="focus-list">
    <div class="turn-page-btn turn-page-left" @click="turnPage(-1)">
      <svg t="1668591320835" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200"><path d="M319.64 512.016l336.016-336.008 45.248 45.248L364.896 557.28z" p-id="2497" fill="#ffffff"></path><path d="M365.216 466.464l339.976 339.968-45.256 45.256-339.976-339.976z" p-id="2498" fill="#ffffff"></path></svg>
    </div>
    <div class="turn-page-btn turn-page-right" @click="turnPage(1)">
      <svg t="1668591375874" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3516" width="200" height="200"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z" p-id="3517" fill="#ffffff"></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" p-id="3518" fill="#ffffff"></path></svg>
    </div>

    <a class="focus-item" @click="player(item)" @mouseover="handleHover(index)" v-for="(item, index) in items" v-show="cur_group_index * group_size > index && (cur_group_index - 1) * group_size <= index">
      <div class="poster">
        <div class="process-wrap">
          <div class="occupy" style="width: 0%"></div>
        </div>
        <img class="pic" :src="item.min_pic">
        <div :class="[cur_active_index == index ? '' : 'unchoice-mask']"></div>
      </div>

      <div class="title" :class="[cur_active_index == index ? 'active' : '']">
        {{item.title}}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardCarousel",
  props: {
    cur_active_index: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      group_size: 5,
      cur_group_index: 1,
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
    },
    handleHover(index){
      this.$emit('cardHover', index);
    },
    player(movie){
      let {id} = movie;
      if (id === -1){
        alert('敬请期待...')
      }else {
        this.$router.push(`/player/${id}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">



.focus-list{
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 9;
  display: flex;
  div{
    svg{
      width: 36px;
      height: 36px;
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
    top: calc(50% - 0px);
    font-size: 29px;
    color: #fff;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 21;
  }

  .turn-page-left{
    width: 44px;
    left: -56px;
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
    width: 91.33px;
    height: 128.06px;
    margin-left: 12px;
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
    margin-top: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .active{
    color: rgba(255,255,255,1);
  }

}

@media screen and (min-width: 1440px){
  .focus-item{
    width: calc(((100vw - 216px - 40px * 2 - 24px) / 2 - 5 * 12px) / 6);
    max-width: 92px;
  }
}


@media screen and (min-width: 1440px){
  .poster{
    height: calc(((100vw - 216px - 40px * 2 - 24px) / 2 - 5 * 12px) / 6 * 129 / 92);
    max-height: 129px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1599px){
  .focus-list{
    right: calc((30px + 40px + 18px) / 2 + 9px);
  }
}
</style>