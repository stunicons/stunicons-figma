<template>
    <section class="icons-list">
        <section class="icons-list--wraper">
            <div v-for="iconGroup in icons" :key="iconGroup.categoryName">
              <div v-for="icon in iconGroup.icons" :key="icon.id"> 
                  <Icon name="icon.id"/>
              </div>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {icons as _icons} from '../services/icons.json'
import Icon from './Icon.vue';



export default defineComponent({
    setup() {
        const icons = _icons;
        console.log(icons)
        return { icons };
    },
    components: { Icon },
})
</script>

<style lang="scss" scoped>

</style>