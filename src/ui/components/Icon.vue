<template>
    <div class="icon" @click="createNode">
        <i :class="icon.name"></i>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { dispatch} from "../uiMessageHandler";
import '../types/index'

export default defineComponent({
    props:{
        icon:{
            type:Object as PropType<IconCategory>,
            required:true
        }
    },
    setup({icon}) {
        
        function createNode() {
        // This shows how the UI code can send messages to the main code.
        dispatch("insertIcon",icon);
        }

        return {
            createNode
        }
    },
})
</script>
<style lang="scss" scoped>
.icon{
    padding:$s-md;
    border-radius:1px;
    cursor:pointer;
    
    &:hover{
        background-color:#F0F0F0;
    }
}
</style>