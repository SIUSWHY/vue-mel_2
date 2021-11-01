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
          <font-awesome-icon icon="search" />
        </div>
        <a class="type-list-right-menu" @click="showCreateCardModal"
          >НАПИСАТЬ В БЛОГ
          <font-awesome-icon icon="pencil-alt" />
        </a>
        <createCardModal
          v-show="isCreateCardVisible"
          @close="closeCreateCardModal"
        />
        <button class="si-up_b-style" type="button" @click="showModal">
          Sing Up
        </button>
        <modal
          v-show="isModalVisible"
          @close="closeModal"
          @showLoginModal="showLoginModal"
        />
        <login v-show="isLoginModalVisible" @close="closeLoginModal" />
      </div>
      <!-- <Registre /> -->
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
