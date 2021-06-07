<template>
    <div class="icon">
        <div class="icon-w">
            <i :class="name"></i>
        </div>
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
