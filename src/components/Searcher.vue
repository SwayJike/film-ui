<template>

  <div style="height: 84px; width: 100%;position: fixed; z-index: 100;" :class="topBg? 'topBg' : ''">
  <div class="container">
    <form id="searchForm" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="search_keywords">
        <input id="keywords" type="text" class="search_input" name="query" autocomplete="off" placeholder="请输入您想观看的影片" v-model="keywords" @focus="handleFocus" @blur="handleBlur"/>
      </div>

      <button type="submit" class="search-btn-wrap" style="background: transparent" v-show="!buttonShow" @click.prevent="handleSearch">
        <svg t="1668574690526" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1119" width="200" height="200"><path d="M986.530909 1022.370909c-8.843636 0-17.92-3.490909-24.669091-10.24L710.749091 761.018182c-13.730909-13.730909-13.730909-35.84 0-49.338182s35.84-13.730909 49.338182 0l251.112727 251.112727c13.730909 13.730909 13.730909 35.84 0 49.338182-6.749091 6.749091-15.592727 10.24-24.669091 10.24z" p-id="1120" fill="#707070"></path><path d="M442.181818 69.818182c205.265455 0 372.363636 167.098182 372.363637 372.363636s-167.098182 372.363636-372.363637 372.363637S69.818182 647.447273 69.818182 442.181818 236.916364 69.818182 442.181818 69.818182m0-69.818182C198.050909 0 0 198.050909 0 442.181818s198.050909 442.181818 442.181818 442.181818 442.181818-198.050909 442.181818-442.181818S686.312727 0 442.181818 0z" p-id="1121" fill="#707070"></path></svg>
      </button>

      <button type="submit" class="search-btn-wrap" v-show="buttonShow" @click.prevent="handleSearch">
        <svg t="1668527488012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1119" width="18" height="18"><path d="M986.530909 1022.370909c-8.843636 0-17.92-3.490909-24.669091-10.24L710.749091 761.018182c-13.730909-13.730909-13.730909-35.84 0-49.338182s35.84-13.730909 49.338182 0l251.112727 251.112727c13.730909 13.730909 13.730909 35.84 0 49.338182-6.749091 6.749091-15.592727 10.24-24.669091 10.24z" p-id="1120" fill="#ffffff"></path><path d="M442.181818 69.818182c205.265455 0 372.363636 167.098182 372.363637 372.363636s-167.098182 372.363636-372.363637 372.363637S69.818182 647.447273 69.818182 442.181818 236.916364 69.818182 442.181818 69.818182m0-69.818182C198.050909 0 0 198.050909 0 442.181818s198.050909 442.181818 442.181818 442.181818 442.181818-198.050909 442.181818-442.181818S686.312727 0 442.181818 0z" p-id="1121" fill="#ffffff"></path></svg>
        <div class="btn_inner">
          全网搜
        </div>
      </button>

      <a class="rank-icon-wrap" v-show="svgShow" @click="toRankPage">
        <svg t="1668527059707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4107" width="200" height="200"><path d="M153.6 907.6c0 27.2 22.2 49.4 49.4 49.4s49.4-22.2 49.4-49.4H153.6zM252.4 446c0-27.4-22.2-49.4-49.4-49.4S153.6 418.8 153.6 446h98.8z m210.6 461.6c0 27.2 22.2 49.4 49.4 49.4s49.4-22.2 49.4-49.4h-98.8zM562 116.4c0-27.2-22.2-49.4-49.4-49.4s-49.4 22.2-49.4 49.4H562z m209.6 791.2c0 27.2 22.2 49.4 49.4 49.4s49.4-22.2 49.4-49.4h-98.8z m98.8-628.2c0-27.2-22.2-49.4-49.4-49.4s-49.4 22.2-49.4 49.4h98.8z m-618 628.2V446H153.6v461.4h98.8z m309.6 0V116.4h-98.8v791.2H562z m308.4 0V279.4h-98.8v628.2h98.8z" fill="#ffffff" p-id="4108"></path></svg>
      </a>
    </form>

    <div id="smartbox" class="mod_smartbox" v-show="smartBoxShow">
      <div class="sb_history">
        <div class="sb_head" v-show="historySearchList.length > 0">
          <div class="sb_title">历史记录</div>
          <div class="sb_tools">
          <a href="javascript:;" class="sb_del" title="清除搜索记录" @click="clearHistory"><span class="icon_text">清除记录</span></a>
          </div>
        </div>
        <div class="sb_body">
          <div class="sb_item" v-for="(item) in historySearchList">
            <a @click.prevent="handleItemClick(item)" :title="item">{{item}}</a>
          </div>
        </div>
      </div>
      <div class="sb_hot">
        <div class="sb_head">
          <div class="sb_title">热门搜索</div>
          <div class="sb_tools" @click="handleMore">
            <a class="sb_more" title="更多热搜"><span class="icon_text">更多热搜</span></a>
          </div>
        </div>
        <div class="sb_body">
          <div class="sb_item" v-for="(movie, index) in hotList">
            <a :href="`/player/${movie.id}`" :title="movie.title"><span class="sb_num" :class="[index == 0 ? 'hot_one' : index == 1 ? 'hot_two' : index == 2 ? 'hot_three' : '']" >{{index + 1}}</span><span class="sb_name">{{movie.title}}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<script>
import {fetchHotMovies} from "@/api/movie";
import bus from "@/api/bus";

export default {
  name: "Searcher",
  props: {

  },
  data(){
    return {
      topBg: false,
      keywords: '',
      buttonShow: false,
      svgShow: false,
      smartBoxShow: false,
      historySearchList: [],
      hotList: []
    }

  },
  methods: {
    async initMovies(){
      this.hotList = await fetchHotMovies();
    },
    handleItemClick(item){
      this.keywords = item;
      this.handleSearch();
    },
    handleMouseEnter(){
      this.buttonShow = true;
      this.svgShow = true;
    },
    handleMouseLeave(){
      this.buttonShow = false;
      this.svgShow = false;
    },
    handleSearch(){
      // do search
      let flag = false;
      for (let i = 0; i < this.historySearchList.length; i++) {
        if (this.historySearchList[i] == this.keywords) {
          flag = true;
        }
      }
      if (!flag){
        this.historySearchList = this.historySearchList.concat(this.keywords);
        localStorage.setItem('historySearchList', JSON.stringify(this.historySearchList));
      }

      this.$router.push('/')
      bus.$emit("search", this.keywords);
      this.keywords = '';
    },
    handleMore(){
      alert('功能开发中...');
    },
    toRankPage(){
      alert('toRankPage...')
    },
    handleFocus(){
      this.smartBoxShow = true;
    },
    handleBlur(){
      let that = this;
      setTimeout(function (){
        that.smartBoxShow = false;
      },100);
    },
    clearHistory(){
      this.historySearchList = [];
      localStorage.removeItem('historySearchList');
    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      this.topBg = scrollTop >= 600 ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
    }
  },
  mounted() {
    this.initMovies();
    let list = JSON.parse(localStorage.getItem('historySearchList'));
    if (list?.length > 0){
      this.historySearchList = list;
    }
    window.addEventListener('scroll',this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
$container-height : 48px;
$container-radius : 36px;
$bg-color : rgba(255,255,255,.18);
$svg-size : 18px;

.container{
  position: fixed;
  z-index: 20;
  width: 428px;
  height: $container-height;
  right: 50%;
  top: 18px;
  transform: translate(50%);
  background: $bg-color;
  border-radius: $container-radius;
  border: none;
}

#searchForm{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  .search_keywords{
    position: relative;
    height: 100%;
    flex: 1;
    margin: 0 0 0 25px;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    color: #111;
    background-color: transparent;
    &:visited, :active{
      outline: 0 none;
    }
  }

  .rank-icon-wrap{
    position: absolute;
    right: 115px;
    margin-top: 15px;
    display: inline-block;
  }

  svg {
    width: $svg-size;
    height: $svg-size;
    color: rgb(255, 255, 255);
  }

  button, input {
    height: 100%;
    background: $bg-color;
    box-sizing: border-box;
  }

  .search_input{
    width: 100% - 9;
    background: transparent;
    color: rgba(255, 255, 255, .9);
    caret-color: rgba(255, 255, 255, 1);


    &:hover{
      &::placeholder{
        color: rgba(255, 255, 255, .9);
      }
    }
  }

  button {
    cursor: pointer;
  }

  .search-btn-wrap{
    display: flex;
    height: 100%;
    background: rgba(255,255,255,.05);
    //background: transparent;
    align-items: center;
    padding-right: 25px;
    padding-left: 10px;
    border-radius: 0 30px 30px 0;
    .btn_inner{
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #fff;
      margin-left: 6px;
    }
  }
}

#smartbox{
  z-index: 10;
  position: absolute;
  left: 18px;
  min-width: 248px;
  width: 100% - 9;
  border-radius: 4px;
  background: #232331;
  box-shadow: 0 28px 50px rgb(25 24 40 / 35%);
  font-size: 13px;
  color: rgba(255, 255, 255, .9);
  font-family: "Helvetica Neue", Helvetica, Arial;

  a{
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
    color: #111;
    background-color: transparent;
  }

  .sb_history{
    .sb_body{
      margin: 0 5px;
      overflow: hidden;
    }
    .sb_item{
      width: 50%;
      float: left;
      a{
        display: block;
        margin: 4px;
        padding: 0 10px;
        overflow: hidden;
        border-radius: 2px;
        background-color: rgba(255,255,255,.08);
        color: #e6e9f0;
        line-height: 32px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .sb_hot{
    padding-bottom: 10px;
    .sb_item{
      display: block;
      margin: 0px 4px;
      a{
        display: block;
        margin: 2px;
        padding: 5px 10px;
        overflow: hidden;
        border-radius: 2px;
        background-color: rgba(255,255,255,0);
        line-height: 22px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:hover{
        a{
          background-color: rgba(255,255,255,.08);
        }
      }
    }

    .sb_body{
      .hot_one{
        background-color: #ff183e;
      }

      .hot_two{
        background-color: #ff5c38;
      }

      .hot_three{
        background-color: #ffb821;
      }
    }

    .sb_num{
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-right: 4px;
      border-radius: 2px;
      background-color: #7f7f8c;
      color: #fff;
      font-size: 12px;
      text-align: center;
      vertical-align: top;
    }

    .sb_name{
      display: inline-block;
      max-width: 80%;
      margin-left: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      white-space: nowrap;
      color: rgba(255,255,255,.9);
    }
  }

  .sb_head{
    position: relative;
    margin: 10px 10px 5px;
    overflow: hidden;
    color: #999;
    font-size: 14px;
  }

  .sb_more, .sb_del, .sb_head{
    color: rgba(230,233,240,.45);
  }

  .sb_tools{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    white-space: nowrap;
  }
}
.topBg{
  background-color: rgba(20,20,20,.96)
}

</style>