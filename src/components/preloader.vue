<template>
  <div id="__preloader" class="boxPreloader __show">
    <div class="boxPreloader__contorno"></div>
  </div>
</template>

<script>
  export default({
    name: 'preloader'
  });
</script>

<style lang="scss">
  :root {
    --wh: 5%;
    --borderWidth: 5px;
  }

  .boxPreloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(#000, .25);
    display: flex;
    justify-content: center;
    align-items: center;
    
    display: none;
    z-index: -1;

    &__contorno {
      position: relative;
      width: calc(55px + var(--wh));
      height: calc(60px + var(--wh));
      border-radius: 6px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;

        width: calc(55px + var(--wh));
        height: calc(55px + var(--wh));
        border-radius: 50%;
        border-top: solid var(--borderWidth) var(--yellow);
        border-bottom: solid var(--borderWidth) var(--yellow);
        border-left: solid var(--borderWidth) transparent;
        border-right: solid var(--borderWidth) var(--yellow);

        -webkit-transform-origin: center center 0; 
        -moz-transform-origin: center center 0; 
        -ms-transform-origin: center center 0; 
        -o-transform-origin: center center 0; 
        transform-origin: center center 0; 

        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -moz-transform: translate(-50%, -50%) rotate(0deg);
        -ms-transform: translate(-50%, -50%) rotate(0deg);
        -o-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);

        -webkit-animation: loaderCircle .45s linear infinite;
        -moz-animation: loaderCircle .45s linear infinite;
        -ms-animation: loaderCircle .45s linear infinite;
        -o-animation: loaderCircle .45s linear infinite;
        animation: loaderCircle .45s linear infinite;
        
        @-webkit-keyframes loaderCircle {
          from {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
          } to {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @-moz-keyframes loaderCircle {
          from {
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
          } to {
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes loaderCircle {
          from {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            -ms-transform: translate(-50%, -50%) rotate(0deg);
            -o-transform: translate(-50%, -50%) rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
          } to {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      }
    }
  }

  .boxPreloader.__show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 1000;
  }
</style>