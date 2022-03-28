<template>
  <div class="list">
    <div id="nav">
      <div class="zb"><div class="iconfont icon-zhibo_"></div></div>
      <div class="cen">
        <router-link to="/">推荐</router-link>
        <router-link to="/list">榜单</router-link>
        <div class="sph_bot"></div>
      </div>
      <div class="tj">
        <div class="iconfont icon-tianjia"></div>
      </div>
    </div>
    <div class="sph_search">
      <div class="iconfont icon-fangdajing"></div>
      <input type="text" placeholder="大家都在搜：冬残奥会" @click="sear" />
    </div>
    <p>视频榜每分钟更新一次</p>
    <ul>
      <div class="one">
        <div class="top">
          <div class="ranking"><img src="../assets/one.jpg" alt="" /></div>
          <div>
            <p class="title">外交部驳斥美官员称中国已表达援俄</p>
            <div class="one_flex">
              <div class="le">
                <span class="iconfont icon-redu"></span> 996万热度
              </div>
              <div class="ri">839万次观看·3个视频</div>
            </div>
          </div>
        </div>
      </div>
      <ListSp></ListSp>
      <li>
        <div class="ranking red">2</div>
        <div>
          <p class="title">邓伦偷逃税被追缴并罚款1.06亿元</p>
          <div>
            <div class="le">
              <span class="iconfont icon-redu"></span> 963万热度
            </div>
            <div class="ri">3132万次观看·9个视频</div>
          </div>
        </div>
        <div><img src="../assets/list_1.jpg" alt="" /></div>
      </li>
      <li>
        <div class="ranking orange">3</div>
        <div>
          <p class="title">赖美云白色情人节巧克力熔岩可可</p>
          <div>
            <div class="le">
              <span class="iconfont icon-redu"></span> 941热度
            </div>
            <div class="ri">96.5万次观看·7个视频</div>
          </div>
        </div>
        <div><img src="../assets/list_2.jpg" alt="" /></div>
      </li>
      <li>
        <div class="ranking green">4</div>
        <div>
          <p class="title">邓伦偷逃税被追缴并罚款1.06亿元</p>
          <div>
            <div class="le">
              <span class="iconfont icon-redu"></span> 963万热度
            </div>
            <div class="ri">3132万次观看·9个视频</div>
          </div>
        </div>
        <div><img src="../assets/list_1.jpg" alt="" /></div>
      </li>
      <li>
        <div class="ranking aquamarine">5</div>
        <div>
          <p class="title">赖美云白色情人节巧克力熔岩可可</p>
          <div>
            <div class="le">
              <span class="iconfont icon-redu"></span> 941热度
            </div>
            <div class="ri">96.5万次观看·7个视频</div>
          </div>
        </div>
        <div><img src="../assets/list_2.jpg" alt="" /></div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import ListSp from "../components/ListSp.vue";

export default {
  name: "ListPage",
  components: {
    ListSp,
  },
  methods: {
    sear() {
      this.$router.push("/Searchs/2");
    },
  },
};
</script>

<style scoped>
#nav {
  background: white;
  display: flex;
  justify-content: space-around;
}
#nav .iconfont {
  font-size: 0.46rem;
  align-items: center;
  /* margin: 0 .3rem; */
}
#nav > div {
  display: flex;
  align-items: center;
  position: relative;
}
#nav {
  padding: 0.7rem 0 0.35rem;
  font-size: 0.44rem;
  position: relative;
}

#nav a {
  position: relative;
  margin: 0 0.3rem;
  z-index: 1;
}

#nav a.router-link-exact-active {
  color: #343434;
  font-weight: bold;
}
.sph_bot {
  width: 1rem;
  height: 0.16rem;
  background: #f8b004;
  border-radius: 0.2rem;
  position: absolute;
  left: 1.7rem;
  bottom: -0rem;
}
#nav > div:last-child {
  background: #fc800f;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  color: white;
  justify-content: center;
}
#nav > div:last-child .iconfont {
  font-size: 0.2rem;
}
.sph_search {
  position: relative;
  padding-bottom: 0.15rem;
  border-bottom: 0.01rem solid #ccc;
}
.sph_search .iconfont {
  position: absolute;
  left: 28%;
  top: 20%;
}
.sph_search input {
  background: #eaeaea;
  outline: none;
  width: 96%;
  height: 0.6rem;
  border: none;
  border-radius: 0.2rem;
  font-size: 0.16rem;
  text-align: center;
}
.aquamarine {
  color: aquamarine;
}
.green {
  color: green;
}
.orange {
  color: orange;
}
.red {
  color: red;
}
.list {
  background: white;
}
.list > p {
  text-align: left;
  padding: 0 0.24rem;
  padding: 0.2rem 0;
}
.ranking {
  margin-right: 0.26rem;
  font-size: 0.26rem;
  font-weight: bold;
}
.one {
  text-align: left;
}
.top {
  display: flex;
}
.top img {
  width: 0.66rem;
  height: 0.76rem;
}
.title {
  width: 4.5rem;
  font-size: 0.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  margin-bottom: 0.2rem;
}
.ranking + div {
  width: 100%;
}
.one_flex {
  width: 100%;
  font-size: 0.26rem;
  color: #929196;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
ul {
  padding: 0 0.24rem;
}
li {
  display: flex;
  text-align: left;
  margin: 0.2rem 0;
}
li div > img {
  width: 1.62rem;
  height: 1.5rem;
}
</style>
