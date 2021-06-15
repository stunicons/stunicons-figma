<template>
    <section class="icons-list">
        <section class="icons-list--wrapper">
            <div class="category-wrapper" v-for="iconGroup in iconsList" :key="iconGroup.categoryName">
              <div v-for="icon in iconGroup.icons" :key="icon.id"> 
                  <Icon :icon="{name:icon.id,category:iconGroup.categoryName}"/>
              </div>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent , ref, Ref, getCurrentInstance, onMounted} from 'vue'
import {icons as _icons} from '../services/icons.json'
import Icon from './Icon.vue';


export default defineComponent({
  setup() {
      const iconsList: Ref<IconsList[]> = ref<IconsList[]>(_icons);
      const internalInstance = getCurrentInstance(); 
      const bus = internalInstance.appContext.config.globalProperties.bus;


      function search(value: string){
        let foundIcons: Ref<IconsList[]> = ref<IconsList[]>([]);
        const {icons} = require('../services/icons.json')

        //  if there is no search keyword
        //  show all icons
        if(value.trim().length <=0){
          iconsList.value = icons;
          return ;
        }

        //search

        iconsList.value.map(iconCategory => { // loop in all icons categories

          iconCategory.icons.map(icon => { //loop into icons into single icon category

            //find icons that may have tags which contains search key
            const possibleSearches = icon.tags.filter(tag => tag.indexOf(value) !== -1)

            if(possibleSearches.length > 0){ // if there are some icons , it is time to add them to search results
              let iconGroupIndex;

              // know if the icon category exists in searched icon results
              const existenceOfCategoryGroup = foundIcons.value.filter((iconGroup,index) => {
                iconGroupIndex = index;
                return iconGroup.categoryName === iconCategory.categoryName
              })

              if(existenceOfCategoryGroup.length > 0) // if icon group exists push new icons to the category
                foundIcons.value[iconGroupIndex].icons.push(icon)
              else    //if category does not exist add it with new found icon
                foundIcons.value.push({categoryName:iconCategory.categoryName,icons:[icon]})
            }


          })
        })

        iconsList.value = foundIcons.value
        console.log(iconsList.value,foundIcons.value)
      }

      onMounted(() => {
        bus.on('search', search)
      })

      return { iconsList,search };
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
      grid-template-columns: repeat(auto-fill,3rem);
      grid-gap: 0.1rem;
      justify-content: space-between;   
    }
  }
}
</style>