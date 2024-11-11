<template>
    <div style="margin: 12px 0 0 0;background-color:rgba(138,43,226,0.5);padding: 5px 5px 15px 5px;">
            <div style="">
                <div style="color: white;">
                    <span>报警信息</span>
                    <span style="margin-left: 230px;">
                        <a-date-picker v-model:value="value1" />
                    </span>
                </div>
            <div style="height: 1px;width: 90%;margin: 0 auto;background-color: lime;padding: 0;top: 6px;position: relative;"></div>

            </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';


const dateFormat = 'YYYY-MM-DD';
const value1 = ref(dayjs('2015-06-06', dateFormat));
</script>