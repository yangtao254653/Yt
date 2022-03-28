<template>
  <div class="sph_home">
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
    <ul class="video_list">
      <li>
        <div class="lists_top">
          <img src="../assets/波吉2.png" alt="" />
          <div class="txt">
            <p class="name">一只小波吉</p>
            <p>颜值博主 优质视频</p>
          </div>
          <div class="btn">
            <div class="btn_gz">+ 关注</div>
            <div class="iconfont icon-gengduo"></div>
          </div>
        </div>
        <video src="../assets/sp1.mp4" controls></video>
        <div class="sph_pl">
          <div class="title">长安大雪天，鸟雀难相觅</div>
          <div class="god_comment">
            <div class="comment_name">
              <div class="iconfont icon-xiaoxi"></div>
              <div class="pl_name">谁是谁的谁</div>
              :
              <div class="pul">如今未堪看，须是雪霜中。</div>
            </div>
          </div>
          <ul class="inter">
            <li><span class="iconfont icon-zhuanfa"></span><span>2</span></li>
            <li><span class="iconfont icon-xiaoxi"></span><span>7</span></li>
            <li><span class="iconfont icon-good"></span><span>199</span></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="lists_top">
          <img src="../assets/波吉3.jpg" alt="" />
          <div class="txt">
            <p class="name">一只小波吉</p>
            <p>颜值博主 优质视频</p>
          </div>
          <div class="btn">
            <div class="btn_gz">+ 关注</div>
            <div class="iconfont icon-gengduo"></div>
          </div>
        </div>
        <video src="../assets/sp2.mp4" controls></video>
        <div class="sph_pl">
          <div class="title">长安大雪天，鸟雀难相觅</div>
          <div class="god_comment">
            <div class="comment_name">
              <div class="iconfont icon-xiaoxi"></div>
              <div class="pl_name">谁是谁的谁</div>
              :
              <div class="pul">如今未堪看，须是雪霜中。</div>
            </div>
          </div>
          <ul class="inter">
            <li><span class="iconfont icon-zhuanfa"></span><span>2</span></li>
            <li><span class="iconfont icon-xiaoxi"></span><span>7</span></li>
            <li><span class="iconfont icon-good"></span><span>199</span></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
// @ is an alias to /src

export default {
  name: "VideoPage",
  components: {},
  methods: {
    sear() {
      this.$router.push("/Searchs/1");
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
  left: 0.24rem;
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
.video_list > li {
  margin-bottom: 0.4rem;
  background: white;
}
.list {
  display: flex;
  flex-direction: column;
}
.lists_top {
  display: flex;
  padding: 0.26rem;
}
.lists_top img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.txt {
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 0.24rem;
}
.name {
  color: black;
  text-align: left;
  font-size: 0.3rem;
}
.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  flex: 1;
}
.btn_gz {
  color: #e08318;
  border: 0.01rem solid #e08318;
  display: flex;
  width: 1.2rem;
  height: 0.6rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.26rem;
}
.btn_gz + div {
  margin: 0 0.2rem;
  font-size: 0.3rem;
  font-weight: bold;
}
video {
  width: 100vw;
}
.sph_pl .iconfont {
  margin: 0 0.16rem;
}
.title {
  color: black;
  font-size: 0.3rem;
  margin: 0.3rem;
  text-align: left;
}
.god_comment {
  display: flex;
  padding: 0.26rem;
}
.comment_name {
  display: flex;
  color: #6679a5;
  border-bottom: 0.01rem solid #eee6e6;
  padding-bottom: 0.2rem;
  width: 100%;
}
.pul {
  color: #5a5a5a;
}
.inter {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.26rem;
  padding-bottom: 0.2rem;
}
</style>
