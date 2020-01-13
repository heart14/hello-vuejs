<template>
  <div class="nav-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1d1d1f"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home" :default-active='activeIndex'>首页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/upload">图片上传</el-menu-item>
      <el-menu-item index="/manage">图片管理</el-menu-item>
      <el-menu-item index="/message">消息中心</el-menu-item>
      <el-menu-item :index="'/usercenter/'+userId">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: "/home",
      userId: "heart"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  z-index: 9999;
  display: block;
  width: 100%;
  min-width: 1024px;
  height: 48px;
  max-height: 44px;
}
</style>