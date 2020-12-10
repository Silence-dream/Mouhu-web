<template>
  <CreateArticle />
  <ColumnList />
</template>

<script>
import CreateArticle from "@/components/CreateArticle.vue";
import ColumnList from "@/components/ColumnList.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    CreateArticle,
    ColumnList
  }
});
</script>

<style></style>
