<template>
      <div id="searchBox">
        <i class="si-search" id="searchIcon"></i>
          <input @input="inputed" v-model="searchKey"  type="text" placeholder="Search an icon">
        <div class="cancel-icon" >
          <span v-if="searchKey.trim().length > 0" ><i class="si-exit exitIcon"></i></span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    modelValue:{
      type:String,
      default:''
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    let searchKey: string = props.modelValue as string;
    
    // funcdtion to listen on new search string
    function inputed(e){
      this.$emit('update:modelValue',e.target.value)
    }

    return{
      inputed,
      searchKey
    }
  },
})
</script>


<style lang="scss" scoped>

#searchBox{
      padding: 10px;
      background:#FFF0EA;
      display: flex;
      align-items: center;
      height: 15px;

    }
    #searchIcon{
      width:50px;
      cursor: pointer;
      color: #BFC7D3;
      font-size: 14px;
    }
    
    .cancel-icon{
      width:25px;
      height:25px;
      
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
        font-size: 10px;
      }
      }
      
    }

    .menuIcon{
      width: 20px;
      color: #BFC7D3;
      font-size: 15px;
    }
    input{
      font-size: 10px;
      width: 150px;
      height: 20px;
      border: 0;
      background: transparent;
      outline: none;
 
    }

    ::placeholder{
      color: #BFC7D3;
    }
</style>