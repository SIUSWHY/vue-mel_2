<template>
  <div style="background-color: #f2f2f2">
    <sliding-pagination
      :current="page"
      :total="totalPages"
      @page-change="pageChangeHandler"
    />
  </div>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
