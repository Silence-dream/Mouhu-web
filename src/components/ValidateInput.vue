<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="ValidateInput"
      :value="inputRef.val"
      @input="updateValue"
      v-bind="$attrs"
      placeholder="请输入邮箱地址"
    />
    <!-- v-bind="$attrs" 可以把传给父节点上的属性值给到这个元素 -->
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
  // https://vue3js.cn/docs/zh/guide/component-attrs.html#%E7%A6%81%E7%94%A8-attribute-%E7%BB%A7%E6%89%BF
  // 禁止父节点继承属性
  inheritAttrs: false,
  props: {
    rule: {
      type: Array as PropType<RulesProp>
    },
    modelValue: String
  },
  setup(props, content) {
    console.log(content.attrs);
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: ""
    });
    /* 更新input的值 */
    const updateValue = (e: KeyboardEvent) => {
      // 得到输入的值
      const val = (e.target as HTMLInputElement).value;
      console.log(val);
      inputRef.val = val;
      // content.emit("date:modeValue", val);
      // https://vue3js.cn/docs/zh/guide/component-custom-events.html#%E9%AA%8C%E8%AF%81%E6%8A%9B%E5%87%BA%E7%9A%84%E4%BA%8B%E4%BB%B6
      content.emit("update:modelValue", val);
    };
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
      ValidateInput,
      updateValue
    };
  }
});
</script>

<style></style>
