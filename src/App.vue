<template>
  <!-- 获取dom元素测试 -->
  <!--  <h1 ref="test">12312</h1>-->
  <el-container class="container">
    <el-header height="70px">
      <!-- 头部组件 -->
      <GlobalHeader :user="currentUser"></GlobalHeader>
    </el-header>
    <el-main>
      <!-- 专栏组件 -->
      <ColumnList :list="list"></ColumnList>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
// 引入头部组件
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
// 引入文章组件
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";

// 测试文章列表数据
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧"
    // avatar:
    //   "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  }
];
// 测试用户数据
const currentUser: UserProps = {
  isLogin: false,
  name: "罗志祥"
};

export default defineComponent({
  name: "App",
  setup() {
    // 这样可以获取到一个dom元素
    // const test = ref<null | HTMLElement>(null);
    onMounted(() => {
      console.log("onMouted");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return {
      list: testData,
      currentUser: currentUser
      // test
    };
  },
  components: {
    GlobalHeader,
    ColumnList
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
