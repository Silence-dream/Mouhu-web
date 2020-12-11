<template>
  <h1 style="text-align:center;font-size:24px">注册</h1>
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
        <el-form-item label="昵称" prop="name">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form-item label="密码" prop="passworld">
          <el-input
            type="password"
            v-model="ruleForm.passworld"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form-item label="重复密码" prop="passworld2">
          <el-input
            type="password"
            v-model="ruleForm.passworld2"
            placeholder="重复密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" :offset="11">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { Vue, Component } from "vue-property-decorator";
// @Component
// export class Signup extends Vue {
//   $refs!: {
//     ruleForm: HTMLFormElement;
//   };
// }
interface RuleForm {
  ruleForm: {
    email: string;
    name: string;
    passworld: string;
    passworld2: string;
  };
}
export default defineComponent({
  name: "Signup",
  data<RuleForm>() {
    const validatePass2 = (
      rule: any,
      value: string,
      callback: CallableFunction
    ) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passworld) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        name: "",
        passworld: "",
        passworld2: ""
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
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        passworld: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ],
        passworld2: [
          {
            validator: validatePass2,
            required: true,
            trigger: "blur"
          },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm: string) {
      (this.$refs[ruleForm] as any).validate((valid: boolean) => {
        // 验证通过
        if (valid) {
          console.log(this.ruleForm.email);
          console.log(this.ruleForm.passworld);
        }
      });
    }
  }
});
</script>

<style></style>
