<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    
  }
</script>

<style lang="scss">

html,
body {
    margin:0;
    padding:0;
    height:100%;
}


h6,h5,h4,h3,h2,h1,p,span,label{
  font-weight: normal !important;
}


.btn:focus{
  outline: none !important;
  box-shadow: none !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}

.color-blue{
  color: var(--blue) !important;
}
.color-yellow{
  color: var(--yellow) !important;
}

/* Variables */

:root{
  --blue: #455c6a !important;
  --bluePrimary: #5b7ba1;
  --yellow: #f8a51b !important;
  --white: #fff !important;
  --text-color: #484745 !important;
  --blue-opacity: #9eaac2 !important;
  --dorado: #9d8755 !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

/* Checbox material designe */
@import url(https://fonts.googleapis.com/css?family=Roboto);

$md-checkbox-checked-color: var(--blue) !important;
$md-checkbox-border-color: rgba(0, 0, 0, 0.54);
$md-checkbox-border-color-disabled: rgba(0, 0, 0, 0.26);
$md-checkbox-checked-color-disabled: rgba(0, 0, 0, 0.26);

$md-checkbox-margin: 1em 0;
$md-checkbox-size: 1.45em;
$md-checkbox-padding: .25em;
$md-checkbox-border-width: 2px;
$md-checkbox-border-radius: 0.125em;
$md-checkmark-width: 0.125em;
$md-checkmark-color: #fff;
$md-checkbox-label-padding: .75em;



.md-checkbox {
  position: relative;
  margin: $md-checkbox-margin;
  text-align: left;

  &.md-checkbox-inline {
    display: inline-block;
  }
  
  label {
    cursor: pointer;
    display: inline;
    line-height: $md-checkbox-size;
    vertical-align: top;
    clear: both;
    padding-left: 1px;
    &:not(:empty) {
      padding-left: $md-checkbox-label-padding;
    }
    
    &:before, &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
    }
    
    &:before {
      // box
      width: $md-checkbox-size;
      height: $md-checkbox-size;
      background: #fff;
      border: $md-checkbox-border-width solid $md-checkbox-border-color;
      border-radius: $md-checkbox-border-radius;
      cursor: pointer;
      transition: background .3s;
    }
  
    &:after {
      // checkmark
    }    
  }
  
  input[type="checkbox"] {
    outline: 0;
    visibility: hidden;
    width: $md-checkbox-size;
    margin: 0;
    display: block;
    float: left;
    font-size: inherit;

    &:checked {
       + label:before{
        background: $md-checkbox-checked-color;
        border:none;
      }
      + label:after {
        $md-checkmark-size: $md-checkbox-size - 2 * $md-checkbox-padding;
        transform: translate($md-checkbox-padding, ($md-checkbox-size / 2) - ($md-checkmark-size / 2.6)) rotate(-45deg);
        width: $md-checkmark-size;
        height: $md-checkmark-size / 2;
        border: $md-checkmark-width solid $md-checkmark-color;
        border-top-style: none;
        border-right-style: none;
      } 
    }
    
    &:disabled {
      + label:before{
        border-color: $md-checkbox-border-color-disabled;
      }
      &:checked {
        + label:before{
          background: $md-checkbox-checked-color-disabled;
        }
      }
    }
  }
}
.modal{
  padding: 0 !important;
  .modal-dialog{
    @media (max-width: 767px){
      width: 90%;
    }
  }
}
.alert{
  .modal-dialog{
    max-width: 300px;
    margin: auto;
    .modal-content{
      border-radius: 0;
      border: 1px solid #d1d1d1;
      img{
        margin-bottom: 20px;
        max-width: 180px;
      }
      h3{
        font-size: 32px;
        color: var(--text-color);
      }
      p{
        color: var(--text-color);
        font-size: 20px;
        line-height: 1.2;
      }
    }
  }
}

/* Tootltips */

.tooltip{
  .tooltip-inner{
    background: #f9f9f9;
    color: var(--blue);
    border: 1px solid #d1d1d1;
  }
  .arrow{
    &::before{
      border-top-color: #d1d1d1 !important;
    }
  }
}

/* modal Menu */
.modal-menu{
   .modal-backdrop{
    background-color: transparent !important;
  }
  .modal-dialog{
    width: 90%;
    max-width: 680px;
    margin: auto;
    .modal-content{
      background-color: rgba(255, 255,255, .9);
      border: 1px solid #d1d1d1;
      border-radius: 0;
      .modal-body{
        @media (max-width: 320px){
          padding:0;
        }
      }
    }
  }
}

/* modal Menu */
.modal-send{
  .modal-dialog{
    width: 90%;
    max-width: 320px;
    margin: auto;
    .modal-content{
      background-color: #77afde;
      border-radius: 0;
    }
  }
}
.modal-payment{
 .modal-dialog{
    width: 90%;
    max-width: 320px;
    margin: auto;
    .modal-content{
      border-radius: 0;
    }
  }
}

.modal-search{
  .modal-dialog{
    width: 90%;
    max-width: 320px;
    margin: auto;
    .modal-content{
      border-radius: 0;
    }
  }
}

.modal-beneficios{
  .modal-dialog{
    width: 90%;
    max-width: 280px;
    margin: auto;
    .modal-content{
      border-radius: 0;
      .modal-body{
        background-color: var(--blue-opacity);
        padding: 0px;
        ul{
          list-style-type: none;
          padding: 5px 10px;
          margin-bottom: 0;
          li{
            padding: 8px;
            border-bottom: 1px solid #fff;
            display: flex;
            justify-content: space-between;
            color: #Fff;
            font-size: 20px;
            &:last-child{
              border-bottom: none;
            }
            p{
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

.modal-favoritos{
  .modal-dialog{
    width: 90%;
    max-width: 480px;
    margin: 10px auto;
    .modal-content{
      border-radius: 0;
    }
  }
}
.modal-recargar{
  .modal-dialog{
    width: 90%;
    max-width: 560px;
    margin: 10px auto;
    .modal-content{
      border-radius: 0;
    }
  }
}

.modal-alert{
  .modal-dialog{
    width: 90%;
    max-width: 280px;
    margin: 10px auto;
    .modal-content{
      border-radius: 0;
      background-color: var(--blue-opacity);
    }
  }
}

.modal-saldo-familia{
  .modal-dialog{
    width: 90%;
    max-width: 500px;
    margin: 10px auto;
    .modal-content{
      border-radius: 0;
    }
  }
}

.modal-edit{
  .modal-dialog{
    max-width: 320px;
    width: 95%;
    .modal-body{
      max-width: 90%;
      width: 100%;
      margin: auto;
    }
  }
}
.modal-explorar{
  .modal-dialog{
    .modal-content{
      background-color: rgba(255, 255, 255, .9);
      border: none;
      border-radius: 0;
    }
    .modal-body{
      max-width: 90%;
      width: 100%;
      margin: auto;
    }
  }
}

.modal-backdrop{
  background-color: transparent !important;
}

/* Navigation nav owl */

.carouselEdit{
  .prev,.next{
    width: 40px;
    height: 40px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 999;
    img{
      height: 100%;
    }
  }
  .carouselPrev{
    left: -20px;
    @media (max-width: 767px){
      left: -20px;
    }
  }
  .carouselNext{
    right: -20px;
    @media (max-width: 767px){
      right: -20px;
    }
  }
}

/* Cards general */

.cardStyle{
  border-radius: 0 !important;
  margin: auto 15px;
  @media (max-width: 576px){
    margin: auto;
    max-width: 330px;
    width: 90%;
  }
  .card-img-top{
      height: 200px;
      object-fit: cover;
      border-radius: 0;
  }
  .card-body{
      padding: 15px;
      .body{
          display: flex;
          .text{
              width: 60%;
              text-align: left;
              margin-top: 10px;
              h5{
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  color: var(--text-color);
                  font-size: 18px;
                  margin-bottom: 10px;
              }
              p{
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  font-size: 14px;
                  color: var(--text-color);
                  line-height: 1.3;
                  margin-bottom: 0;
                  height: 36px;
              }
          }
          .price{
              width: 40%;
              
              .number{
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  height: 42px;
                  p{
                      margin-bottom: 0;
                      font-size: 32px;
                      color: var(--text-color);
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                  }
                  span{
                      font-size: 16px;
                      color: var(--text-color);
                      margin-top: 10px;
                  }
              }
              .btn{
                  float: right;
                  padding: 4px;
                  .img-shared{
                      width: 25px;
                      object-fit: contain;
                  }
              }
          }
      }
  }
}

/* Switch  */

.switch {
    background-color: transparent;
    border-radius: 18px;
    cursor: pointer;
    display: inline-block;
    height: 22px;
    padding: 3px;
    position: relative;
    vertical-align: top;
    width: 65px;
}
.switch-input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
}
.switch-label {
    background: transparent;
    border: 2px solid var(--blue);
    border-radius: inherit;
    display: block;
    font-size: 10px;
    height: inherit;
    position: relative;
    text-transform: uppercase;
    transition: all 0.15s ease-out 0s;
}
.switch-label::before, .switch-label::after {
    line-height: 1;
    margin-top: -0.5em;
    position: absolute;
    top: 50%;
    transition: inherit;
}

.switch-input:checked ~ .switch-label {
    background: transparent;
}

.switch-handle {
    background-color: transparent;
    border-radius: 10px;
    height: 22px;
    left: 4px;
    position: absolute;
    top: 1px;
    transition: left 0.15s ease-out 0s;
    width: 22px;
}
.switch-handle::before {
    background-color: var(--blue);
    border-radius: 50%;
    content: "";
    height: 16px;
    left: 50%;
    margin: -6px 0 0 -6px;
    position: absolute;
    top: 50%;
    width: 16px;
}
.switch-input:checked ~ .switch-handle {
    left: 35px;
}

.msgError{
  color: red;
  text-align:center;
  margin: 5px auto;
}

</style>
