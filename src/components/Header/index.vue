<template>
  <div class="back-g_headr_menu">
    <div class="r-nav-b_position">
      <div class="r-nav-b_position">
        <nav>
          <ul class="menu_list">
            <li class="active">Тексты</li>
            <li>Рассылки</li>
            <div class="podcast-btn">Подкасты</div>
          </ul>
        </nav>
      </div>
      <div class="l-nav-b_position">
        <div>
          <input class="search-b" type="text" placeholder="  Ищите статью?" />
        </div>
        <a class="type-list-right-menu">НАПИСАТЬ В БЛОГ </a>
        <button class="si-up_b-style" type="button" @click="showModal">
          Sing Up
        </button>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
