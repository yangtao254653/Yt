<template>
  <div class="list_sp">
    <ul>
      <li><video src="../assets/sp1.mp4"></video></li>
      <li><video src="../assets/sp2.mp4"></video></li>
      <li><video src="../assets/sp1.mp4"></video></li>
      <li><video src="../assets/sp2.mp4"></video></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListSp",
  methods: {},
};
</script>
<style scoped>
.list_sp {
  margin: 0.4rem 0;
  width: 100vw;
  height: 2rem;
  height: 3.86rem;
  position: relative;
  left: -0.2rem;
  overflow: hidden;
}
ul {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}
li {
  position: relative;
  width: 2.9rem;
  height: 3.86rem;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-right: 0.2rem;
}
li video {
  width: 300%;
  height: 300%;
  margin-left: -100%;
  margin-top: -120%;
}
</style>
