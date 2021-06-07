<template>
    <div class="icon">
        <div class="icon-w">
            <i :class="className"></i>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        className:{
            type:String,
            default:''
        }
    },
    setup() {
        
    },
})
</script>
