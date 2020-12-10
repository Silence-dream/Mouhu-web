<template>
  <header>
    <div class="title">
      <h1>
        <router-link to="/">
          <a href="javascript:;">某乎专栏</a>
        </router-link>
      </h1>
    </div>
    <!-- if 没有登录 -->
    <div class="login" v-if="user.isLogin">
      <router-link to="/login">
        <el-button type="primary" class="login-btn">登陆</el-button>
      </router-link>
      <router-link to="/signup">
        <el-button type="primary" class="login-btn">注册</el-button>
      </router-link>
    </div>
    <!-- if 登录成功 -->
    <div class="login" v-else>
      <Dropdown :title="`欢迎你 ${user.name}`"></Dropdown>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
// 导入下拉菜单组件
import Dropdown from "@/components/Dropdown.vue";
// 用户数据结构接口
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    Dropdown
  }
});
</script>

<style scoped lang="scss">
@import "./public/css/function";

header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  background-color: #0084ff;
  padding: 0 20px;
  .title {
    a {
      font-size: 20px;
      color: #ffffff;
    }
  }
  .login {
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
