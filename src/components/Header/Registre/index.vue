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
                  v-model.trim="$v.username.$model"
                  id="username"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя пользователя"
                />
                <div class="error">
                  <div v-if="!$v.username.minLength">
                    Имя пользователя должно содержать более
                    {{ $v.username.$params.minLength.min }} символов.
                  </div>
                  <div v-else-if="!$v.username.maxLength">
                    Имя пользователя должно содержать не более
                    {{ $v.username.$params.maxLength.max }} символов.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  v-model.trim="$v.name.$model"
                  id="name"
                  class="g-input__input"
                  type="text"
                  placeholder="Имя"
                />
                <div class="error" v-if="$v.name.$error">
                  <div v-if="!$v.name.minLength">
                    Имя должно содержать более
                    {{ $v.name.$params.minLength.min }} символов.
                  </div>
                  <div v-else-if="!$v.name.alpha">
                    Имя должно содержать только символы кириллицы.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  v-model.trim="$v.email.$model"
                  id="email"
                  class="g-input__input"
                  type="text"
                  placeholder="E-mail"
                />
                <div class="error" v-if="$v.email.$error">
                  <div v-if="!$v.email.email">
                    Электронный адресс введен не корректно.
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-margin-input-lable">
              <div>
                <input
                  v-model.trim="$v.password.$model"
                  id="password"
                  class="g-input__input"
                  type="password"
                  placeholder="Пароль"
                />
                <div class="error" v-if="$v.password.$error">
                  <div v-if="!$v.password.goodPassword">
                    Пароль должен содержать латинские заглавные,строчные и
                    числовые символы.
                  </div>
                </div>
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
                :disabled="$v.$invalid"
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
