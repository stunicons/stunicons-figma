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
import { defineComponent , ref , Ref} from 'vue'

export default defineComponent({
  props:{
    modelValue:{
      type:String,
      default:''
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    let searchKey: Ref = ref(props.modelValue);
    
    // funcdtion to listen on new search string
    function inputed(e){
      this.$emit('update:modelValue',e.target.value)
    }

    function deleted(){
      searchKey.value = ''
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
      background:#FFF0EA;
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
        width:100%;
        height:100%;
        display:grid;
        place-items:center;
        border-radius: 20px;
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