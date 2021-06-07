<template>
    <div class="icon">
        <i :class="name"></i>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        name:{
            type:String,
            required:true
        }
    },
    setup() {
        
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