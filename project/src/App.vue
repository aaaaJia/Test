<template>

<dv-full-screen-container>
    <div demo-bg style="width: 100%;height: 85%;">
        <dv-border-box11 title="温州伟明餐厨再生资源有限公司" :title-width="400" :animate="true">
             <div dv-bg style="display: flex;">
                <div style="flex:1">
                    <div>
                    <Index></Index>
                    </div>
                    <div>
                        <leftMiddle></leftMiddle>
                    </div>
                    <div>
                        <leftBottom></leftBottom>
                    </div>
                </div>
                <div style="flex:1">
                    <div>
                        <Middle></Middle>
                    </div>
                    <div>
                       <middleBot></middleBot>
                    </div>
                </div>
                <div style="flex:1">
                    <div>
                        <Waste></Waste>
                    </div>
                    <div>
                        <rightMid></rightMid>
                    </div>
                    <div>
                        <rightBot></rightBot>
                    </div>
                </div>
            </div>
        </dv-border-box11>

    </div>



</dv-full-screen-container>
</template>

<script setup>
import Index from './components/index.vue';
import Middle from './components/middle.vue';
import Waste from './components/waste.vue';
import leftMiddle from './components/left-middle.vue';
import leftBottom from './components/left-bottom.vue';
import middleBot from './components/middle-bot.vue';
import rightMid from './components/right-mid.vue';
import rightBot from './components/right-bot.vue';

</script>

<style scoped>
  .content{
    font-size: 28px;
    text-shadow: 0 0 3px #7acaec;
  }
</style>
