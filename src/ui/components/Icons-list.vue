<template>
    <section class="icons-list">
        <section class="icons-list--wrapper">
            <div class="category-wrapper" v-for="iconGroup in icons" :key="iconGroup.categoryName">
              <div v-for="icon in iconGroup.icons" :key="icon.id"> 
                  <Icon :name="icon.id"/>
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
        const icons: IconsList = _icons as unknown as IconsList;

        return { icons };
    },
    components: { Icon },
})
</script>

<style lang="scss" scoped>
.icons-list{
  &--wrapper{
    .category-wrapper{
      width:100%;
      display: grid;
      grid-template-columns: repeat(auto-fill,2.8rem);
      grid-gap: 0.1rem;
      justify-content: space-between;  
      height: 100%; /* adjust this*/  
    }
  }
}
</style>