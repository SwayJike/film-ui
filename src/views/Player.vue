<template>
  <div class="player">

    <div>
      <div id="frameBox">
        <iframe
            allowfullscreen
            :src="parseUrl"
            :title="movie.title"
            width="870px"
            height="490px">
        </iframe>

        <div class="right-box">

          <p style="color: white;font-size: 18px;width: 92%;margin: 0 auto 8px;">{{movie.title}} <span style="color: darkred; margin-left: 6px"> {{movie.score}}</span></p>
          <p style="color: white;font-size: 12px;width: 92%;margin: 0 auto 8px;">
            <span>
              时长: <span style="color: darkred">{{movie.duration}}</span>
            </span>
            <span style="margin-left: 16px">
              播放量: <span style="color: darkred">{{movie.count | toFixed}}</span>
            </span>
          </p>
          <p style="color: white;font-size: 12px;border-bottom: 1px rgba(255,255,255,.4) solid;padding-bottom: 12px;width: 92%;margin: 0 auto 16px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{movie.intro}}</p>
          <h3 style="color: white;margin-left: 16px">解析线路，若播放失败，请切换 <code>线路</code>。</h3>
          <div class="buttons">

            <button :class="item.type" @click="parseIndex = index" v-for="(item,index) in parseUrls">{{item.name}}</button>
          </div>
        </div>
      </div>

      <div class="hot">
        <div>

        </div>
        <div class="header">
          <h1 style="color: white;">
            同类推荐
          </h1>
        </div>
        <div class="container">
          <card class="figure" :id="movie.id" :data-image="movie.src" v-for="(movie, index) in recommendMovies">
            <h3 slot="header">{{movie.title}}</h3>
            <p slot="content">{{movie['intro']}}</p>
          </card>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Searcher from "@/components/Searcher";
import Naver from "@/components/Naver";
import Card from "@/components/Card";
import _ from "lodash";
import {fetchMovieById, fetchMovieList} from "@/api/movie";
export default {
  name: "Player",
  components: {Naver, Searcher, Card},
  data(){
    return {
      id: -1,
      movie: '',
      recommendMovies: [],
      parseIndex: 0,
      parseUrls: [
        {name:"玄 武",type:"pulse",url:"https://www.yemu.xyz/?url="},
        {name:"白 虎",type:"close",url:"https://okjx.cc/?url="},
        {name:"青 龙",type:"raise",url:"https://www.ckmov.com/?url="},
        {name:"井 宿",type:"up",url:"https://jx.xmflv.com/?url="},
        {name:"朱 雀",type:"fill",url:"https://jx.dj6u.com/?url="},
        {name:"鬼 宿",type:"slide",url:"https://jx.quanmingjiexi.com/?url="},
        {name:"柳 宿",type:"offset",url:"https://api.qianqi.net/vip/?url="},
        {name:"星 宿",type:"offset",url:"https://www.8090g.cn/?url="},
        {name:"张 宿",type:"offset",url:"https://www.administratorw.com/video.php?url="},
        {name:"翼 宿",type:"pulse",url:"https://www.nxflv.com/?url="},
        {name:"轸 宿",type:"close",url:"https://lecurl.cn/?url="},
        {name:"勾 陈",type:"raise",url:"https://www.pangujiexi.cc/jiexi.php?url="},
        {name:"腾 蛇",type:"up",url:"https://jx.aidouer.net/?url="},
        {name:"苍 龙",type:"slide",url:"https://www.ckplayer.vip/jiexi/?url="},
        {name:"四 象",type:"fill",url:"https://www.mtosz.com/m3u8.php?url="},
      ],
    }
  },
  computed: {
    parseUrl(){
      return this.parseUrls[this.parseIndex].url + this.movie.href;
    }
  },
  filters: {
    toFixed(val){
      if (val){
        return parseInt(val).toFixed(1);
      }else {
        return  val;
      }
    }
  },
  watch: {
    $route(to,from){
      this.fetchMovieById(to.params.id);
    }
  },
  methods: {
    handleScroll: _.throttle(function(){
      this.moreMovies();
    },500, {
      leading: true,
      trailing: false
    }),
    async moreMovies(){
      let json = await fetchMovieList();
      this.recommendMovies = this.recommendMovies.concat(json);
    },
    async fetchMovieById(id){
      this.movie = await fetchMovieById(id);
    },
    async initMovies(){
      this.recommendMovies = await fetchMovieList();
    }
  },
  mounted() {
    this.initMovies();
    this.fetchMovieById(this.id)
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight>= scrollHeight) {
        this.handleScroll();
      }
    })
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style scoped lang="scss">
.player{
position: relative;
}
#frameBox{
  display: flex;
  position: absolute;
  top: 84px;
  left: 216px;

  iframe{
    border: none;
    border-radius: 12px;
  }

  .right-box{
    background: hsl(227, 10%, 10%);
    width: 400px;
    margin-left: 30px;
    border-radius: 12px;
    padding-top: 8px;
  }
}



/*
  https://developer.mozilla.org/en/docs/Web/CSS/box-shadow
  box-shadow: [inset?] [top] [left] [blur] [size] [color];

  Tips:
    - We're setting all the blurs to 0 since we want a solid fill.
    - Add the inset keyword so the box-shadow is on the inside of the element
    - Animating the inset shadow on hover looks like the element is filling in from whatever side you specify ([top] and [left] accept negative values to become [bottom] and [right])
    - Multiple shadows can be stacked
    - If you're animating multiple shadows, be sure to keep the same number of shadows on hover/focus as non-hover/focus (even if you have to create a transparent shadow) so the animation is smooth. Otherwise, you'll get something choppy.
*/

// Animate the size, inside
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}

// Animate the size, outside
.pulse:hover,
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em transparent;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}

// Stack multiple shadows, one from the left, the other from the right
.close:hover,
.close:focus {
  box-shadow:
      inset -3.5em 0 0 0 var(--hover),
      inset 3.5em 0 0 0 var(--hover);
}

// Size can also be negative; see how it's smaller than the element
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

// Animating from the bottom
.up:hover,
.up:focus {
  box-shadow: inset 0 -3.25em 0 0 var(--hover);
}

// And from the left
.slide:hover,
.slide:focus {
  box-shadow: inset 6.5em 0 0 0 var(--hover);
}

// Multiple shadows, one on the outside, another on the inside
.offset {
  box-shadow:
      0.3em 0.3em 0 0 var(--color),
      inset 0.3em 0.3em 0 0 var(--color);

  &:hover,
  &:focus {
    box-shadow:
        0 0 0 0 var(--hover),
        inset 6em 3.5em 0 0 var(--hover);
  }
}

//=== Set button colors
// If you wonder why use Sass vars or CSS custom properties...
// Make a map with the class names and matching colors
$colors: (
    fill: #a972cb,
    pulse: #ef6eae,
    close: #ff7f82,
    raise: #ffa260,
    up: #e4cb58,
    slide: #8fc866,
    offset: #19bc8b
);

// Sass variables compile to a static string; CSS variables are dynamic and inherited
// Loop through the map and set CSS custom properties using Sass variables
@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

// Now every button will have different colors as set above. We get to use the same structure, only changing the custom properties.
button {
  color: var(--color);
  transition: 0.25s;

  &:hover,
  &:focus {
    border-color: var(--hover);
    color: #fff;
  }
}

//=== Pen styling, ignore


// Basic button styles
button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

h1 { font-weight: 400; }

code {
  color: #e4cb58;
  font: inherit;
}

.buttons{
  margin-top: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.hot{
 padding-top: 80px + 490px + 100px;
  padding-left: 216px;
  //background: hsl(227, 10%, 10%);
}

.container{
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header{
    position: relative;
    left: 230px;
    color: white;
    margin: 6px 0;

  }

  .figure{
    margin: 16px;
  }

  h3{
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p{
    font-style: italic;
    font-size: 14px;
  };
}




</style>