<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.url"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <!-- 专栏列表 -->
    <PostList :list="list"></PostList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import { useRoute } from "vue-router";
import PostList from "@/components/PostList.vue";
export default defineComponent({
  name: "ColumnDetail",
  setup() {
    const Store = useStore<GlobalDataProps>();
    const Route = useRoute();
    const { id } = Route.params;
    id as string;
    Store.dispatch("fetchColumnDetail", id);
    Store.dispatch("fetchPostList", { id: id });
    console.log("Store.state.postList", Store.state.postList);
    // 专栏详情数据
    const column = computed(() => Store.state.columnDetail);
    const list = computed(() => Store.state.postList);
    return {
      column,
      list
    };
  },
  components: {
    PostList
  }
});
</script>
