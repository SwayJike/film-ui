<template>

  <div>

    <div class="hot">
      <div class="header">
        <h1>
          高分影片
        </h1>
      </div>
      <div class="container">
        <card class="figure" :id="movie.id" :data-image="movie.src" v-for="(movie, index) in hotMovies">
          <h3 slot="header">{{movie.title}}</h3>
          <p slot="content">{{movie['intro']}}</p>
        </card>
      </div>
    </div>

    <div class="recommend">
      <div class="header">
        <h1 id="typeName">
          {{typeName}}
        </h1>
      </div>
      <div class="container">
        <card class="figure" :id="movie.id" :data-image="movie.src" v-for="(movie, index) in recommendMovies" :key="movie.id">
          <h3 slot="header">{{movie.title}}</h3>
          <p slot="content">{{movie['intro']}}</p>
        </card>
      </div>
    </div>

  </div>


</template>

<script>
import Card from "@/components/Card";
import _ from 'lodash';
import bus from "@/api/bus";
import {fetchHighMovies, fetchHotMovies} from "@/api/movie";

const {fetchMovieList} = require("@/api/movie");
export default {
  name: "Cards",
  components: {
    Card
  },
  data(){
    return {
      hotMovies: [],
      recommendMovies: [],
      typeId: '',
      typeName: '全部片推荐',
      keyword: ''
    }
  },
  methods: {
    handleScroll: _.throttle(function(){
      this.moreMovies();
    },300, {
      leading: true,
      trailing: false
    }),
    async initMovies(){
      this.hotMovies = await fetchHighMovies();
      this.recommendMovies = await fetchMovieList({type: this.typeId, title: this.keyword});
    },
    async moreMovies(){
      let json = await fetchMovieList({type: this.typeId});
      this.recommendMovies = this.recommendMovies.concat(json);
    },
    handleNavClick({typeId, typeName}){
      window.scrollTo({
        top: 1360,
        behavior: 'smooth'
      })
        this.typeId = typeId;
        this.typeName = typeName + '片推荐';
      this.initMovies();
    },
    async handleSearch(keyword){
      this.keyword = keyword;
      window.scrollTo({
        top: 1360,
        behavior: 'smooth'
      })
      this.recommendMovies = await fetchMovieList({type: this.typeId, title: this.keyword});
      this.keyword = '';
    }
  },
  mounted() {
    bus.$on('nav_click', this.handleNavClick)
    bus.$on('search', this.handleSearch)
    this.initMovies();
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight>= scrollHeight) {
        this.handleScroll();
      }
    })
  }
}

</script>

<style scoped lang="scss">
.container{
  margin-left: 216px;
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