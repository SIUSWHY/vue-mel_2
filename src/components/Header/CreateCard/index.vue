<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="float_text">
            <div action="/news" method="post" enctype="multipart/form-data">
              <div>Выберите изображение</div>
              <input
                accept="image/*"
                type="file"
                id="img"
                ref="img"
                name="img"
                v-on:change="handleFileUpload()"
              />
            </div>
            <div>
              <div>Категория статьи</div>
              <input type="text" v-model="title" />
            </div>
            <div>
              <div>Текст статьи</div>
              <input type="text" v-model="text" />
            </div>
          </div>

          <div class="modal-footer">
            <button
              class="modal-default-button"
              @click="
                () => {
                  handleFileUpload();
                  close();
                  postNews();
                }
              "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
