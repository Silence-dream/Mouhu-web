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
import { computed, defineComponent, watch } from "vue";
// 引入头部组件
import GlobalHeader from "@/components/GlobalHeader.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import axios from "axios";
export default defineComponent({
  name: "App",
  setup() {
    const Store = useStore<GlobalDataProps>();
    const error = computed(() => Store.state.error);

    // 验证登陆
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.Authorization = ` Bearer ${token}`;
      Store.dispatch("fetchGetInfo");
    }
    if (error.value.status) {
      console.log(1);
    }
    return {
      error
    };
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
