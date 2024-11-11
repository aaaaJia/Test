import {createRouter,createWebHashHistory} from 'vue-router'

const router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/index',component:()=>import('./components/index.vue')},
        {path:'/middle',component:()=>import('./components/middle.vue')},
        {path:'/waste',component:()=>import('./components/waste.vue')},
        {path:'/left-middle',component:()=>import('./components/left-middle.vue')},
        {path:'/left-middle',component:()=>import('./components/left-middle.vue')},
        {path:'/left-bottom',component:()=>import('./components/left-bottom.vue')},
        {path:'/middle-bot',component:()=>import('./components/middle-bot.vue')},
        {path:'/right-mid',component:()=>import('./components/right-mid.vue')},
        {path:'/right-bot',component:()=>import('./components/right-bot.vue')},

    ]
})

export default router