<template>
  <el-row :gutter="30">
    <el-col
      class="column-list-item"
      :span="8"
      v-for="item in columnList"
      :key="item._id"
    >
      <div class="box-item">
        <img :src="item.avatar ? item.avatar.url : ''" />
        <h5>{{ item.title }}</h5>
        <p>{{ item.description }}</p>
        <router-link :to="`/column/${item._id}`">进入专栏</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

export default defineComponent({
  name: "ColumnList",
  setup() {
    const Store = useStore<GlobalDataProps>();
    // 获取文章列表数据
    Store.dispatch("fetchColumnList");
    // const columnList = computed(() => Store.state.columnList);
    // console.log(columnList);

    const columnList = computed(() => {
      // 如果传过来的数据没有头像那么就为他添加一个默认的头像
      return Store.state.columnList.map(item => {
        if (item.avatar) {
          if (!item.avatar.url) {
            item.avatar.url = require("@/assets/column.jpg");
          }
        }
        return item;
      });
    });
    return {
      columnList
    };
  }
});
</script>

<style lang="scss">
.column-list-item {
  .box-item {
    margin: 20px 0;
    min-height: 240px;
    max-height: 240px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 30px;
  }
  h5 {
    color: #303133;
    font-size: 1.25rem;
  }
  p {
    color: #909399;
    line-height: 20px;
    height: 60px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  a {
    color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid #0d6efd;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin-bottom: 20px;
  }
}
</style>
