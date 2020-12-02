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
        <el-dropdown-item>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style></style>
