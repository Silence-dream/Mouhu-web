<template>
  <h1 style="text-align:center;font-size:24px">登陆到某乎</h1>
  <el-form
    :model="ruleForm"
    status-icon
    label-position="top"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            autocomplete="off"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" :offset="11">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Login",
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm: string) {
      // console.log(this.$refs[ruleForm]);
      (this.$refs[ruleForm] as any).validate((valid: boolean) => {
        // 验证通过
        if (valid) {
          const { email, password } = this.ruleForm;
          (this as any).$store
            .dispatch("fetchGetToken", {
              email: email,
              password: password
            })
            .then(() => {
              ElMessage({ message: "登陆成功", type: "success" });
              this.$router.push("/");
            })
            .catch((error: any) => {
              ElMessage({ message: error, type: "error" });
            });
        }
      });
    }
  }
});
</script>

<style></style>
