<template>
  <select class="sort-button" id="onSort" @change="onChangeSort">
    <option value="viewCount">Likes</option>
    <option value="commentCount">Comments</option>
    <option value="newDate">Date</option>
  </select>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
