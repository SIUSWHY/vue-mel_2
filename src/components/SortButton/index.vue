<template>
  <select class="sort-button" id="onSort" onchange="onSort(event)">
    <option value="default">Sort</option>
    <option value="viewCount">Popular</option>
    <option value="newDate">Date</option>
  </select>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
