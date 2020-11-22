<template>
  <header>
    <div class="title">
      <h1>
        <a href="javascript:;">某乎专栏</a>
      </h1>
    </div>
    <div class="login">
      <el-button type="primary" class="login-btn">登陆</el-button>
      <el-button type="primary" class="login-btn">注册</el-button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GloballHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
@import "./public/css/function";

header {
  background-color: pink;
  line-height: 70px;
  height: 70px;
  @include clearfix;
  .title {
    float: left;
    a {
      font-size: 20px;
      color: #ffffff;
    }
  }
  .login {
    float: right;
    .login-btn {
      font-size: 16px;
      border-color: #ffffff;
      &:hover {
        background-color: #fff;
        color: #303133;
        transition: all 0.4s;
      }
    }
  }
}
</style>
