<template>
    <div style="margin: 12px 0 0 0;background-color:rgba(138,43,226,0.5);padding: 5px 5px 15px 5px;">
        <div style="width: 100%;margin: 0 auto;">
          <div style="color: azure;position: relative;top: 0px;left:26px;font-family: 12px;width: 100%;">
            <span>固渣量</span>
            <span style="margin-left: 230px;">
              <a-date-picker v-model:value="value1" />
            </span>
          </div>
          <div style="">
            <div style="height: 1px;width: 90%;margin: 0 auto;background-color: lime;padding: 0;top: 6px;position: relative;"></div>
          </div>
          <div style="top: 4px;position: relative;font-size: 8px;color: white;text-align: center;">
            <span style="color: aqua;font-size: large">.</span>&nbsp;<span>当日固渣量</span>&nbsp;
          </div>
          <div style="width: 80%;margin: 0 auto;">
            <dv-charts :option="option" style="width:100%;height:150px;margin: 0;padding: 0;"/>
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

  //   title: {
  //   text: '周销售额趋势',
  //   style: {
  //       fill: '#fff',
  //       fontSize:10,
  //       },
  
  // },
  grid:{
    left:25,
    top:40,
    right:0,
    bottom:20
  },
  xAxis: {
    // name: '第二周',
    data: ['1', '3', '5', '7', '9', '11', '13','15','17','19','21','23','25','27','29','31'],
    axisLabel:{
        style: {
        fill: '#fff',
        
        },
        show:true
      },
    axisLine:{
      style: {
      stroke: '#fff',
      lineWidth: 1
}
    }  
  },
  yAxis: {
    name: '总量',
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
      data: [45,40,56,78,59,41,53,65,52,76,72,79,70,69,47,45],
      type: 'line',
      lineStyle: {
        lineDash: [5, 5],
      },
    }
  ]
  })
  
  </script>