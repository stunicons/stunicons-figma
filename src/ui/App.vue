<template>
<div id="ui">
  
  <div class="search">
    <Search v-model="searchString" />
  </div>


</div>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from "vue";
import Search from "./components/Search.vue";

export default defineComponent({
    components: { Search },
    setup(){
      let searchString: Ref<string> = ref('')

      return {
        searchString
      }
    }
});
</script>

<style scoped lang="scss">

.btn{
  background: #3234;
}
#ui{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  .search{
    padding:$s-sm;
  }
}
</style>