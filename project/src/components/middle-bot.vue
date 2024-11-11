<template>
    <div style="margin: 12px auto;background-color:rgba(138,43,226,0.5);padding: 5px 5px 15px 5px;width: 90%;">
        <div style="width: 100%;margin: 0 auto;">
          <div style="color: azure;position: relative;top: 0px;left:26px;font-family: 12px;width: 100%;">
            <span>发电量统计</span>
            <span style="margin-left: 150px;">
                <a-date-picker v-model:value="value1" />
            </span>
          </div>
          <div style="">
            <div style="height: 1px;width: 90%;margin: 0 auto;background-color: lime;padding: 0;top: 6px;position: relative;"></div>
          </div>
          <!-- <div style="top: 8px;position: relative;font-size: 8px;color: white;text-align: center;">
            <span style="color: aqua;">---</span>&nbsp;<span>临江电厂生活垃圾量</span>&nbsp;
            <span style="color: cornflowerblue;">---</span>&nbsp;<span>永强电厂生活垃圾量</span>&nbsp;
            <span style="color: cyan;">---</span>&nbsp;<span>餐厨垃圾处理厂餐厨垃圾进厂量</span>&nbsp;
            <span style="color: orange;">———</span>&nbsp;<span>总量</span>
          </div> -->
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
    bottom:10
  },
  xAxis: {
    // name: '第二周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel:{
        // style: {
        // fill: '#fff',
        
        // },
        show:false
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
      data: [250, 230, 220, 200, 190, 184, 150],
      type: 'line',
      label: {
        show: true,
        formatter: '{value} 元'
      }
    }
  ]
  })
  
  </script>