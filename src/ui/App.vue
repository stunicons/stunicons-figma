<template>
<div id="ui">
  
  <section class="search">
    <Search v-model="searchString" />
  </section>
  <section class="icons-body">
    <IconsList/>
  </section>

</div>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from "vue";
import Search from "./components/Search.vue";
import IconsList from "./components/Icons-list.vue";

export default defineComponent({
    components: { Search,IconsList },
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

html, body{
    margin: 0 !important;
    padding:0 !important;
    background-color: dodgerblue;
}

#ui{
  
  .search{
    padding:$s-sm 0;
    display:flex;
    border-bottom:1px solid red;
    justify-content:center;
    
  }
}
</style>