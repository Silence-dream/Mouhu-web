<template>
  <!-- 获取dom元素测试 -->
  <!--  <h1 ref="test">12312</h1>-->
  <el-container class="container">
    <el-header height="70px">
      <!-- 头部组件 -->
      <GlobalHeader></GlobalHeader>
    </el-header>
    <el-main>
      <!-- 路由 -->
      <router-view></router-view>
    </el-main>
    <el-footer>
      <footer class="text-cent er py-4 text-secondary bg-light mt-6">
        <small>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">© 2020 者也专栏</li>
            <li class="list-inline-item">课程</li>
            <li class="list-inline-item">文档</li>
            <li class="list-inline-item">联系</li>
            <li class="list-inline-item">更多</li>
          </ul>
        </small>
      </footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
// import {} from "vuex";
import { defineComponent } from "vue";
// 引入头部组件
import GlobalHeader from "@/components/GlobalHeader.vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: {
    GlobalHeader
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
