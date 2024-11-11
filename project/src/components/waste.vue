<template>
  <div style="margin: 60px 0 0 0;background-color:rgba(138,43,226,0.5);padding: 5px 5px 15px 5px;">

    
    <div style="">
        <div style="font-family: 12px;color: aliceblue;margin-top: 0px;left: 20px;top:10px;position: relative;margin: 0;padding: 0;">
            <span>废水处理量</span>
            <span style="margin-left: 200px;">
              <a-date-picker v-model:value="value1" />
            </span>
        </div>
        <div style="height: 1px;width: 90%;margin: 0 auto;background-color: lime;padding: 0;top: 20px;position: relative;"></div>
        <div>
            <dv-charts :option="option" style="width:100%;height:180px;"/>
        </div>
    </div>
</div>

</template>
<script setup>
import { ref,reactive } from 'vue';
import dayjs from 'dayjs';


const dateFormat = 'YYYY-MM-DD';
const value1 = ref(dayjs('2015-06-06', dateFormat));

const option=ref({
    title: {
    text: '当日废水处理量',
    style: {
        fill: '#fff',
        fontSize:10,
        }
  },
  xAxis: {
    // name: '日期',
    data: ['1', '3', '5', '7', '9', '11', '13','15','17','19','21','23','25','27','29','31'],
    axisLabel:{
        style: {
        fill: '#fff',
        },
    },
    nameTextStyle: {
        fill: '#fff',
        fontSize: 10
    },

  },
  yAxis: {
    name: '重量(t)',
    data: 'value',
    axisLabel:{
        style: {
        fill: '#fff',
        },
    },
    nameTextStyle: {
        fill: '#fff',
        fontSize: 10
    }
  },
  series: [

    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985,985,3985,3985,3985,3985,3985,3985,3985,3985,3985,3985],
      type: 'bar',
      barWidth:12
    }
  ]
})

</script>