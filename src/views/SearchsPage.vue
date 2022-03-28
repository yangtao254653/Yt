<template>
  <div id="Sear">
    <div class="top">
      <span class="iconfont icon-fangdajing"></span>
      <input type="text" placeholder="冬残奥会" />
      <span @click="fh">取消</span>
    </div>
    <div class="cai">
      <h5>猜你想搜</h5>
      <ul>
        <li>冬残奥会</li>
        <li>雪容融</li>
        <li>国内疫情</li>
        <li>乌克兰</li>
        <li>俄罗斯</li>
        <li>两会</li>
        <li>尚食</li>
      </ul>
    </div>
    <div class="icon">
      <ul>
        <li>
          <div></div>
          <p>放映厅</p>
        </li>
        <li>
          <div></div>
          <p>娱乐明星</p>
        </li>
        <li>
          <div></div>
          <p>综艺</p>
        </li>
        <li>
          <div></div>
          <p>时尚美妆</p>
        </li>
        <li>
          <div></div>
          <p>美食</p>
        </li>
        <li>
          <div></div>
          <p>搞笑幽默</p>
        </li>
        <li>
          <div></div>
          <p>游戏</p>
        </li>
        <li>
          <div></div>
          <p>动漫</p>
        </li>
        <li>
          <div></div>
          <p>VLOG</p>
        </li>
        <li>
          <div></div>
          <p>纪录片</p>
        </li>
        <li>
          <div></div>
          <p>知识</p>
        </li>
        <li>
          <div></div>
          <p>音乐</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchsPage",
  props: ["id"],
  methods: {
    fh() {
      if (this.id == 1) {
        this.$router.push("/");
      } else if (this.id == 2) {
        this.$router.push("/List");
      }
    },
  },
};
</script>
<style scoped>
.top {
  padding: 0.32rem 0.16rem 0.16rem;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0.18rem;
  background: white;
}
.top input {
  background: #eaeaea;
  outline: none;
  width: 80%;
  height: 0.6rem;
  border: none;
  border-radius: 0.2rem;
  font-size: 0.16rem;
  padding-left: 0.6rem;
}
.top .iconfont {
  position: absolute;
  left: 7%;
  top: 42%;
}
.cai {
  height: 2.8rem;
  background: white;
  padding: 0 0.32rem;
  text-align: left;
  margin-bottom: 0.2rem;
}
.cai h5 {
  color: black;
  padding: 0.4rem 0 0.2rem;
}
.cai ul {
  display: flex;
  flex-wrap: wrap;
}
.cai ul li {
  padding: 0.18rem 0.32rem;
  margin-bottom: 0.2rem;
  background: #f7f7f7;
  border-radius: 1rem;
  margin-right: 0.3rem;
}
.icon {
  padding: 0.36rem 0.32rem;
  background: white;
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.icon ul {
  width: 120%;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.24rem;
}
.icon ul li {
  width: 0.76rem;
  margin-right: 0.48rem;
  height: 1.4rem;
  text-align: center;
}
.icon ul li p {
  width: 150%;
  margin-top: 0.16rem;
  margin-left: -25%;
}
.icon ul div {
  width: 0.76rem;
  height: 0.74rem;
  background-image: url("../assets/icon.jpg");
  background-size: 6.86rem 2.31rem;
}
.icon ul li:nth-child(2) div {
  background-position: -1.24rem 0;
}
.icon ul li:nth-child(3) div {
  background-position: -2.46rem 0;
}
.icon ul li:nth-child(4) div {
  background-position: -3.68rem 0;
}
.icon ul li:nth-child(5) div {
  background-position: -4.9rem 0;
}
.icon ul li:nth-child(6) div {
  background-position: -6.13rem 0;
}
.icon ul li:nth-child(7) div {
  background-position: 0rem -1.59rem;
}
.icon ul li:nth-child(8) div {
  background-position: -1.24rem -1.59rem;
}
.icon ul li:nth-child(9) div {
  background-position: -2.46rem -1.59rem;
}
.icon ul li:nth-child(10) div {
  background-position: -3.68rem -1.59rem;
}
.icon ul li:nth-child(11) div {
  background-position: -4.9rem -1.59rem;
}
.icon ul li:nth-child(12) div {
  background-position: -6.13rem -1.59rem;
}
</style>
