<template>
  <div>
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="current = $event"
    />
  </div>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
