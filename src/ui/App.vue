<template>
<div id="ui">
  
  <div id="searchBox">
    <i class="si-search" id="searchIcon"></i>
      <input type="text" placeholder="Search an icon">
    <i class="si-exit exitIcon"></i>
</div>

</div>
</template>

<script lang='ts'>


export default {

};
</script>

<style scoped>
/* @import url('https://cdn.jsdelivr.net/npm/stunicons@1.0.11/fonts/style.min.css'); */
.btn{
  background: #3234;
}
#ui{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-medium);
}

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
.exitIcon{
  border-radius: 20px;
  color: #BFC7D3;
  cursor: pointer;
  background: #ffffff;
  font-size: 9px;
  padding: 5px;
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