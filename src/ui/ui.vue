<template>
<div id="ui">
	<button class="button button--primary" @click='createNode'> Create a Vue3 node </button>
  <i class="si-home"></i>
	<p class="type type--pos-small-normal"> {{message}} </p>
  <img :src="`./node_modules/stunicons/icons/general/si-home.svg`" alt="">
</div>
</template>

<script lang='ts'>
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import 'stunicons/fonts/style.css'

import {
  dispatch,
  handleEvent
} from "./uiMessageHandler";
import {
  onMounted,
  ref
} from 'vue';

import home from 'stunicons/icons/general/si-home.svg'


export default {
  setup() {

    const message = ref("message")
    let icon = ref("")

    function createNode() {
      // This shows how the UI code can send messages to the main code.
      dispatch("createNode");
    }
    onMounted(() => {

      console.log(home)

      // The following shows how messages from the main code can be handled in the UI code.
      handleEvent("nodeCreated", nodeID => {
        message.value = `Node ${nodeID} was created!`;
      });

    })

    return {
      message,
      createNode,
      icon
    };
  }

};
</script>

<style scoped>
/* @import url('https://cdn.jsdelivr.net/npm/stunicons@1.0.11/fonts/style.min.css'); */

#ui{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-medium);
}
</style>