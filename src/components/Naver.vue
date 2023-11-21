<template>
  <div class="left-nav-wrap">
    <div class="logo-wrap">
      <a class="logo-link" href="/" @mouseover="logo_active=true" @mouseout="logo_active= false">
        <svg v-if="!logo_active" style="vertical-align: middle;margin-bottom: 10px" t="1669638241014" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4111" width="40" height="40"><path d="M236.706202 651.900826c-96.585318-168.113766-74.581094-266.159309-74.581094-266.159309s-187.782656 34.91072-43.480269 313.689088c144.07209 278.357709 302.810829 163.56393 302.810829 163.56393S327.993549 810.781901 236.706202 651.900826zM434.465485 321.499341c207.106662 111.561114 269.116826 15.299174 269.116826 15.299174s6.414438-54.320742-5.7472-126.069146c-12.127744-71.547904-48.588902-140.108595-48.588902-140.108595s2.899149-0.648806-19.873587-0.648806c-65.901056 0-84.524032 55.855718-190.348186 99.675853-69.085696 28.60585-70.187827 15.624602-132.015923 27.01353-24.031437 4.444467-49.604096 16.310272-71.266509 35.253555-52.355891 45.813555-124.656947 162.877235-124.656947 162.877235S310.533018 254.731571 434.465485 321.499341zM922.29591 345.632154C886.122291 292.484198 673.239859 82.162176 673.239859 82.162176s123.417702 228.062925-8.70871 531.574784C532.185702 917.725594 348.329677 896.34048 348.329677 896.34048s90.600755 13.65975 154.688307 21.481267c54.244966 6.620058 104.321843 7.630131 104.321843 7.630131s178.719744 12.15232 295.803904-221.815296C998.422221 513.250509 945.614029 379.894067 922.29591 345.632154z" p-id="4112" fill="#ffffff">
        </path></svg>

        <svg v-else style="vertical-align: middle;margin-bottom: 10px" t="1669638241014" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4111" width="40" height="40"><path d="M236.706202 651.900826c-96.585318-168.113766-74.581094-266.159309-74.581094-266.159309s-187.782656 34.91072-43.480269 313.689088c144.07209 278.357709 302.810829 163.56393 302.810829 163.56393S327.993549 810.781901 236.706202 651.900826zM434.465485 321.499341c207.106662 111.561114 269.116826 15.299174 269.116826 15.299174s6.414438-54.320742-5.7472-126.069146c-12.127744-71.547904-48.588902-140.108595-48.588902-140.108595s2.899149-0.648806-19.873587-0.648806c-65.901056 0-84.524032 55.855718-190.348186 99.675853-69.085696 28.60585-70.187827 15.624602-132.015923 27.01353-24.031437 4.444467-49.604096 16.310272-71.266509 35.253555-52.355891 45.813555-124.656947 162.877235-124.656947 162.877235S310.533018 254.731571 434.465485 321.499341zM922.29591 345.632154C886.122291 292.484198 673.239859 82.162176 673.239859 82.162176s123.417702 228.062925-8.70871 531.574784C532.185702 917.725594 348.329677 896.34048 348.329677 896.34048s90.600755 13.65975 154.688307 21.481267c54.244966 6.620058 104.321843 7.630131 104.321843 7.630131s178.719744 12.15232 295.803904-221.815296C998.422221 513.250509 945.614029 379.894067 922.29591 345.632154z" p-id="4112" fill="#00d1d1"></path></svg>
        <span :style="{'color': logo_active? '#00d1d1': 'white'}" style="font-size: 22px;margin-left: 12px;font-style: italic;">FreeMovie</span>

      </a>
    </div>
    <div class="nav-wrap">
      <div v-for="(type, index) in types">
        <a class="nav-item" :class="[cur_active_index == index ? 'router-click-active' : '']" @click.prevent="handleItemClick(type, index)">
          <div class="text">
            {{type.typeName}}
            <span class="nav-new-tag">
              NEW
            </span>
          </div>
<!--          <div class="icon select"></div>-->
          <div class="icon">
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import fetchMovieList, {fetchTypeList} from "@/api/movie";
import bus from "@/api/bus";

export default {
  name: "Naver",
  data(){
    return {
      logo_active: false,
      cur_active_index: 0,
      types: [
        {typeId: '',typeName: '全部'}
      ]
    }
  },
  mounted() {
     this.fetchTypeList();

  },
  methods: {
    async fetchTypeList(){
      let types = await fetchTypeList();
      this.types = this.types.concat(types);
    },
    handleItemClick(type, index){
      this.$router.push('/')
      this.cur_active_index = index;
      bus.$emit('nav_click', type)
    }
  }
}
</script>

<style scoped lang="scss">
.left-nav-wrap{
  font: 12px/1.5 numFont,PingFangSC-Regular,Tahoma,Microsoft Yahei,sans-serif;
  word-break: break-all;
  width: 216px;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0px;
  background-image: linear-gradient(-90deg,rgba(20,20,20,0) 1%,rgba(20,20,20,.6) 99%);
  opacity: .8;

  a{
    text-decoration: none;
    cursor: pointer;
    color: #111;
    background-color: transparent;
    &:active, :visited{
      outline: 0 none;
    }
  }

  .logo-wrap{
    height: 84px;
    .logo-link{
      display: inline-block;
      width: 158px;
      height: 40px;
      //text-indent: -300px;
      margin-left: 24px;
      margin-top: 26px;
      position: relative;
      span{
        color: white;

      }
    }
  }

  .nav-wrap{
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 120px);
    direction: rtl;
    scrollbar-color: rgba(255,255,255,.4) transparent;
    scrollbar-width: thin;
    -ms-overflow-style: none;

    .nav-item{
      width: 150px;
      height: 48px;
      border-radius: 9px;
      margin-right: 66px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 32px;
      display: flex;
      justify-content: flex-start;
      -webkit-justify-content: flex-end;
      align-items: center;
      color: #00d1d1!important;
      color: rgba(255,255,255,.6);

      .text{
        position: relative;
        margin-left: 15px;
        color: rgba(255,255,255,.6);
        .nav-new-tag{
          position: absolute;
          right: -26px;
          top: 4px;
          font-weight: 800;
          font-size: 12px;
          line-height: 12px;
          transform: scaleX(.65);
          color: #ff183e;
        }
      }
      .icon{
        height: 20px;
        margin-left: 42px;
        margin-bottom: 2px;
        color: #fff;
        opacity: 1!important;
        display: inline-block;

        i{
          width: 18px;
          height: 18px;
        }
        i:not(:root) {
          overflow: hidden;
        }
      }

      &:hover{
        .text{
          color: white;
        }
      }
    }

    .router-click-active{
      .text{
        color: #00d1d1!important;
      }
    }

    &::-webkit-scrollbar{
      width: 6px;
      border-radius: 3px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb{
      background-color: rgba(255,255,255,.4);
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track{
      background-color: transparent;
      border-radius: 3px;
    }
  }


}
</style>