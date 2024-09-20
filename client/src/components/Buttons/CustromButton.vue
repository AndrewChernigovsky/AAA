<template lang="">
  <button class="button-4" type="button" @click="handleClick">
    <slot />
  </button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  emit('click', event);
};
</script>
<style lang="scss">
button.button-4,
button.button-4:before,
button.button-4:after {
  box-sizing: border-box;
}

button.button-4 {
  touch-action: manipulation;
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  display: block;
  height: 60px;
  width: 175px;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0 auto;
  border-radius: 10px;
  top: 0;
  -webkit-transition: 0.15s ease-in-out;
  -moz-transition: 0.15s ease-in-out;
  -ms-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

button.button-4 {
  touch-action: manipulation;
  -webkit-transform: perspective(200px) rotateX(35deg);
}

button.button-4:before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  background: #f25d30;
  /* Old browsers */
  background: -moz-linear-gradient(top, #f25d30 0%, #e03b00 100%);
  /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f25d30),
    color-stop(100%, #e03b00)
  );
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, #f25d30 0%, #e03b00 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, #f25d30 0%, #e03b00 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(top, #f25d30 0%, #e03b00 100%);
  /* IE10+ */
  background: linear-gradient(to bottom, #f25d30 0%, #e03b00 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#f25d30", endColorstr="#e03b00",GradientType=0 );
  /* IE6-9 */
  top: -50px;
  left: 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-shadow: inset 0 -2px 5px rgba(255, 255, 255, 0.3);
}

button.button-4:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 40px;
  left: 1px;
  height: 15px;
  width: 173px;
  background: #ba2500;
  /* Old browsers */
  background: -moz-linear-gradient(top, #ba2500 0%, #9b3100 100%);
  /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #ba2500),
    color-stop(100%, #9b3100)
  );
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, #ba2500 0%, #9b3100 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, #ba2500 0%, #9b3100 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(top, #ba2500 0%, #9b3100 100%);
  /* IE10+ */
  background: linear-gradient(to bottom, #ba2500 0%, #9b3100 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ba2500", endColorstr="#9b3100",GradientType=0 );
  /* IE6-9 */
  border-radius: 0 0 5px 5px;
  -webkit-transform: perspective(200px) rotateX(-40deg);
  box-shadow:
    inset 0 -2px 3px rgba(0, 0, 0, 0.5),
    0 3px 2px -1px black;
  -webkit-transition: 0.15s ease-in-out;
  -moz-transition: 0.15s ease-in-out;
  -ms-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

button.button-4:hover {
  top: -3px;
}

button.button-4:hover:after {
  height: 18.5px;
  bottom: -13px;
}

button.button-4:active {
  top: 50px;
}

button.button-4:active:after {
  height: 15px;
  bottom: 40px;
}

button.button-4 .text {
  position: relative;
  z-index: 2;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
}
</style>
