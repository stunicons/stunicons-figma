<template>
      <div id="searchBox">
        <i class="si-search" id="searchIcon"></i>
          <input @input="inputed" v-model="searchKey"  type="text" placeholder="Search an icon">
        <div class="cancel-icon" >
          <span @click="deleted" v-if="searchKey.trim().length > 0" ><i class="si-exit exitIcon"></i></span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent , ref , Ref, getCurrentInstance} from 'vue'

export default defineComponent({
  props:{
    modelValue:{
      type:String,
      default:''
    }
  },
  emits: ['update:modelValue','input'],
  setup(props) {
    let searchKey: Ref = ref(props.modelValue);
     const internalInstance = getCurrentInstance(); 
      const bus = internalInstance.appContext.config.globalProperties.bus;

    // funcdtion to listen on new search string
    function inputed(e){
      this.$emit('update:modelValue',e.target.value)
      bus.emit('search',e.target.value)
    }


    function deleted(){
      searchKey.value = ''
      bus.emit('search',searchKey.value)
    }

    return{
      inputed,
      searchKey,
      deleted
    }
  },
})
</script>


<style lang="scss" scoped>

#searchBox{
      width:100%;
      margin:0 1rem;
      padding: 10px;
      border:1.5px solid #BFC7D3;
      border-radius:2px;
      display: flex;
      align-items: center;
      height: 15px;

    }
    #searchIcon{
      width:25px;
      cursor: pointer;
      color: #BFC7D3;
      font-size: 14px;
    }
    
    .cancel-icon{
      width:20px;
      height:20px;
      
      span{
        color: #BFC7D3;
        background: #ffffff;
        width:20px;
        height:20px;
        display:grid;
        place-items:center;
        border-radius: 50%;
        cursor: pointer;

        .exitIcon{
        font-size: 8px;
      }
      }
      
    }

    .menuIcon{
      width: 20px;
      color: #BFC7D3;
      font-size: 15px;
    }
    input{
      font-size: 12px;
      width: 100%;
      height: 20px;
      border: 0;
      background: transparent;
      outline: none;
 
    }

    ::placeholder{
      color: #BFC7D3;
    }
</style>