<template>
  <main class="position-relative overflow-hidden">
    <div class="behind h-100 w-100 position-absolute top-0 left-0"></div>
    <div class="bg-dark w-100 text-center fs-6">
      The 8th Best Legs in San Francisco presents:
    </div>
    <div id="app" class="container-fluid px-0 position-relative mx-auto">
      <img
        :src="'./images/scrr-logo.png'"
        class="d-md-flex d-none mx-auto"
        width="60%"
        draggable="false"
      />

      <img
        :src="'./images/scrr-logo.png'"
        class="d-flex d-md-none mx-auto"
        width="100%"
        draggable="false"
      />

      <img
        :src="'./images/scrr-subtitle.svg'"
        class="d-md-flex d-none mx-auto ps-3"
        width="60%"
        style="margin-top: -25px !important"
        draggable="false"
      />

      <img
        :src="'./images/scrr-subtitle.svg'"
        class="d-flex d-md-none mx-auto"
        width="90%"
        style="margin-top: -15px !important"
        draggable="false"
      />

      <img :src="'./images/rp.png'" class="rp" width="130%" />

      <div class="row justify-content-center mb-5">
        <div class="w-100"></div>

        <div class="col-auto mt-5">
          <div
            class="sectionFont text-center lightBackground p-2 px-3 rounded-3 pinkBackground"
          >
            COME SEE US
            <br class="d-block d-md-none" />
            AT FRINGE!?
          </div>
        </div>

        <div class="w-100"></div>

        <div class="col-auto mt-3">
          <a
            type="button"
            href="https://tickets.thespaceuk.com/event/911:2523/"
            target="_blank"
            class="subtitleFont button"
          >
            Tickets!!
          </a>
        </div>
        <div class="w-100 mt-5"></div>

        <div class="w-100 mb-5"></div>
        <div
          class="col-9 bg-pink p-2 pb-1 rounded-3 text-center position-relative my-5"
          style="transform: rotate(-1deg)"
        >
          <iframe
            class="trailer rounded-3"
            src="https://www.youtube.com/embed/njYtRywB0sQ?si=ZCnLkvSzLBCoEmqK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div
            class="position-absolute sectionFont bg-dark rounded-3 p-2 skew1"
          >
            WATCH THE TRAILER!
          </div>
        </div>

        <div
          class="col-auto callout text-center rounded-3 py-3 mt-5 fs-3 lightBackground"
        >
          Sexy interview with star <br class="d-none d-md-block" />
          Ryan Patrick Welsh on
          <a
            class="link bg-white p-1 px-2 rounded-3"
            href="https://broadwaybaby.com/features/the-8th-best-legs-in-san-francisco/2550"
            target="_blank"
            >BroadwayBaby.com</a
          >
        </div>

        <img :src="'./images/kuntz.png'" />
      </div>

      <!-- <div class="pb-1 mt-5"></div> -->
    </div>

    <footer class="">
      <div class="container-fluid px-0 sticky-bottom mx-auto">
        <div class="py-4 row justify-content-center my-4">
          <div class="col-9 mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
// HOT PINK: #ff32a1
// RED PINK: #fe395e
// LIGHT PINK: #fbe4fd
// BG PINK: #eb4dc2

.behind {
  z-index: -1;
  background-color: #120da4;
  background-size: 6px 6px;
  opacity: 0.2;
  background-blend-mode: color-dodge;
  background-image: repeating-linear-gradient(
    45deg,
    #444cf7 0,
    #444cf7 0.4px,
    #e5e5f7 0,
    #e5e5f7 50%
  );
}

#app {
  max-width: 1300px;
  margin: auto;
}

#app,
div {
  font-family: nove, sans-serif;
  font-size: 1.1rem;
  color: #fbe4fd;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

hr {
  border-width: 6px;
  border-radius: 5rem;
}

@font-face {
  font-family: "Kaoly Lite";
  src: url("./files/fonts/KaolyLite-Regular.ttf") format("truetype");
}

a.link {
  color: #fa5a70;
  mix-blend-mode: lighten;

  &:hover {
    mix-blend-mode: color-burn;
  }
}

.rp {
  position: absolute;
  left: -70px;
  top: 200px;
  z-index: -1;

  @media (min-width: 768px) {
    left: -150px;
    top: 50px;
  }
}

.trailer {
  width: 100%;
  height: 174px;

  @media (min-width: 768px) {
    height: 492px;
  }
}

.bg-pink {
  background-color: #fe395e;
}

.skew1 {
  font-size: 1.5rem !important;
  transform: scale(1.1) rotate(1deg);
  left: 0px;
  top: -10px;
  box-shadow: #fa5a70 0px 0px 0px 4px;

  @media (min-width: 768px) {
    transform: scale(1.5) rotate(-5deg);
    left: 50px;
  }
}

.callout {
  transform: rotate(2deg);
  left: 20px;

  box-shadow: #fbe4fd 0px 0px 0px 4px;
  line-height: 1.5 !important;
}

.lightBackground {
  background-color: #fbe4fd35;
}

.pinkBackground {
  background-color: #fe395e70;
}

.button {
  font-size: 2rem !important;
  align-items: center;
  background-color: #fbe4fd;
  border: 3px solid pink;
  border-radius: 45px;
  box-sizing: border-box;
  color: #fe395e;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0px 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:after {
  background-color: #fe395e;
  border-radius: 45px;
  content: "";
  display: block;
  height: 60px;
  left: 0;
  width: 100%;
  position: absolute;

  transform: translate(8px, 7px);
  transition: transform 0.2s ease-out;
  z-index: -1;
}

.button:hover:after {
  transform: translate(0, 0);
}

.button:active {
  background-color: #fbe4fd;
  outline: 0;
}

.button:hover {
  outline: 0;
}

.subtitleFont {
  font-family: hegante, sans-serif;
  font-style: normal;
  text-shadow: none;
  font-size: 2rem;
  line-height: 1.3;
}

.sectionFont {
  font-family: nove, sans-serif;
  text-shadow: #fe395e 2px 2px;
  font-style: normal;
  font-size: 2.25rem;
  line-height: 1.1;
}

.rocknrollFont {
  font-family: Kaoly Lite, sans-serif;
  font-size: 3rem;
}
</style>
