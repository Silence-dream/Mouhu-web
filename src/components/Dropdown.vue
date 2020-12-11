<template>
  <el-dropdown trigger="click">
    <el-button type="primary">
      {{ title }}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu style="width: 100%;">
        <el-dropdown-item>新建文章</el-dropdown-item>
        <el-dropdown-item>管理账户</el-dropdown-item>
        <el-dropdown-item @click="Loggedout">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import { ElMessage } from "element-plus";

import axios from "axios";
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    // 暂时的退出功能
    const Store = useStore<GlobalDataProps>();
    const Loggedout = function() {
      localStorage.removeItem("token");
      Store.state.user.isLogin = false;
      delete axios.defaults.headers.Authorization;
      ElMessage({ message: "退出成功", type: "success" });
    };
    return {
      Loggedout
    };
  }
});
</script>

<style></style>
