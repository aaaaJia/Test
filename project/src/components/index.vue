<template>
  <div style="margin: 60px 0 0 25px;background-color:rgba(138,43,226,0.5);padding: 5px 5px 15px 5px;">
    <div>
      <p style="color: white;text-align: center;">进厂餐厨垃圾计量</p>
    </div>
    <div style="height: 2px;width: 90%;margin: 10px auto;background-color: lime;"></div>
    <div style="display: flex;width: 90%;margin:0 auto;height: 150px;">
    <div demo-bg >
      <dv-decoration-9 style="width:150px;height:150px;flex: 1;">
        <div font-600 class="content" bg="~ dark/0" style="color: darkturquoise;font-size: 22px;">
          {{rand}}
        </div>
      </dv-decoration-9>
    </div>
    <div style="font-size: small;width: 100px;margin-left: 5px;flex: 1;color: white;">
      <p>进厂量</p>
      <p>进厂量</p>
      <p>进厂量</p>
      <p>进厂量</p>
    </div>
    <div demo-bg>
    <dv-decoration-9 style="width:150px;height:150px;flex: 1;">
        <div font-600 class="content" bg="~ dark/0" style="color: darkturquoise;font-size: 24px;">
          66%
        </div>
      </dv-decoration-9>
    </div>
    <div style="font-size: small;width: 100px;margin-left: 5px;flex: 1;color: white;">
      <p>进厂量</p>
      <p>进厂量</p>
      <p>进厂量</p>
      <p>进厂量</p>
    </div>
</div>
</div>
</template>

<script setup>
  let rand=850.12
  setTimeout(()=>{
    rand+=1
},1000)

</script>

<style scoped>
  .content{
    font-size: 28px;
    text-shadow: 0 0 3px #000b0f;
  }
</style>