<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="ValidateInput"
      v-model="inputRef.val"
    />
    <span class="invalid-feedback" v-if="inputRef.error">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: "VaildateInput",
  props: {
    rule: {
      type: Array as PropType<RulesProp>
    }
  },
  setup(props) {
    console.log(props);
    const inputRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    const ValidateInput = () => {
      if (props.rule) {
        // true 验证通过 false验证失败
        const allPassed = props.rule.every(item => {
          let passed = true;
          inputRef.message = item.message;
          // 通过 every 只要一个条件不满足就是终止循环的特点来进行表单验证
          switch (item.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        // console.log(allPassed);
        // console.log("inputRef.error", inputRef.error);
      }
    };
    return {
      inputRef,
      ValidateInput
    };
  }
});
</script>

<style></style>
