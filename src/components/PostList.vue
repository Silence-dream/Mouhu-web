<template>
  <div class="post-list">
    <article
      v-for="item in list"
      :key="item.author"
      class="card mb-3 shadow-sm"
    >
      <div class="card-body">
        <h4>
          <!-- 文章详情 -->
          <router-link :to="`/posts/${item.author}/`">{{
            item.title
          }}</router-link>
        </h4>
        <div class="row my-3 align-items-center">
          <div v-if="item.image" class="col-4">
            <img
              :src="item.image.url"
              :alt="item.title"
              class="rounded-lg w-100"
            />
          </div>
          <p :class="{ 'col-8': item.image }" class="text-muted">
            {{ item.excerpt }}
          </p>
        </div>
        <span class="text-muted">{{ item.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PostList",
  props: ["list"]
});
</script>

<style></style>
