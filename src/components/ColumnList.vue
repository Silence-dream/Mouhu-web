<template>
  <el-row>
    <el-col
      class="column-list-item"
      :span="8"
      v-for="item in list"
      :key="item.id"
    >
      <img :src="item.avatar" />
      <h5>{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <a href="javascript:;">进入专栏</a>
    </el-col>
  </el-row>
</template>

<script lang="ts">
// 导出数据结构
export interface ColumnProps {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      //这里特别有一点，我们现在的 Array 是没有类型的，只是一个数组，我们希望它是一个 ColomnProps 的数组，那么我们是否可以使用了类型断言直接写成 ColomnProps[]，显然是不行的 ，因为 Array 是一个数组的构造函数不是类型，我们可以使用 PropType 这个方法，它接受一个泛型，讲 Array 构造函数返回传入的泛型类型。
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.column-list-item:nth-child(2n + 1) {
  background: pink;
}
</style>
