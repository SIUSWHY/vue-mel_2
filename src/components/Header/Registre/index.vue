<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        @submit.prevent="sendData"
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="darckness">
          <div class="registration-butten-position">
            <div class="registration_left_position">Sign</div>
            <div class="up_btn_style">Up</div>
          </div>
          <div class="g-tab__content">
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  id="username"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя пользователя"
                />
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  id="name"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя"
                />
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  id="email"
                  class="g-input__input"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  id="password"
                  class="g-input__input"
                  type="password"
                  placeholder="Пароль"
                />
              </div>
            </div>
            <div
              type="button"
              @click="
                () => {
                  close();
                }
              "
            >
              Уже есть аккаунт!? Авторизируйтесь.
            </div>
            <div class="registr-butten-style">
              <button
                type="submit"
                value="Send"
                class="b-auth-email__registration-button"
                @click="
                  () => {
                    postUser();
                    close();
                  }
                "
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
