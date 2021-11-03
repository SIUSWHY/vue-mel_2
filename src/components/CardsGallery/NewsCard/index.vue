<template>
  <div v-if="card_news" id="cards_data">
    <div class="cards_size">
      <div style="height: 220px">
        <img
          v-if="card_news.img"
          class="size_pic"
          :src="require('@/assets/' + card_news.img)"
        />
      </div>
      <div class="block_card_style">
        <div class="content-title">{{ card_news.title }}</div>
        <div class="content-text">
          {{ card_news.text }}
        </div>
        <div class="counts_position">
          <!-- <div class="date_style">{{ card_news.newDate }}</div> -->
          <div>
            <div class="view_count_style">
              <font-awesome-icon icon="heart" /> {{ card_news.viewCount }}
            </div>
            <div class="comment_count_style">
              <font-awesome-icon icon="comment" /> {{ card_news.commentCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
