<template>
  <div class="flex">
    <NewsCard
      v-for="post in $store.state.posts"
      :key="post._id"
      :card_news="post"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
