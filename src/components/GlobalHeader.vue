<template>
  <header>
    <div class="title">
      <h1>
        <router-link to="/">
          <a href="javascript:;">某乎专栏</a>
        </router-link>
      </h1>
    </div>
    <!-- if 登录成功 -->
    <div class="login" v-if="user.isLogin">
      <Dropdown :title="`欢迎你 ${user.nickName}`"></Dropdown>
    </div>
    <!-- if 没有登录 -->
    <div class="login" v-else>
      <router-link to="/login">
        <el-button type="primary" class="login-btn">登陆</el-button>
      </router-link>
      <router-link to="/signup">
        <el-button type="primary" class="login-btn">注册</el-button>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { GlobalDataProps } from "@/store";
// 导入下拉菜单组件
import Dropdown from "@/components/Dropdown.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "GlobalHeader",
  setup() {
    const Store = useStore<GlobalDataProps>();
    const user = computed(() => Store.state.user);
    console.log(user);
    return {
      user
    };
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
