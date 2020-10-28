
// 抽离路由模块

import VueRouter from 'vue-router'


//导入 account 和 goodslist 组件
import account from './pages/Account.vue'
import goodslist from './pages/GoodsList.vue'

//导入 account 的 login register 子组件
import login from './child/login.vue'
import register from './child/register.vue'

//3.创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist 
        //{path：匹配地址栏路由变化,component:要展示组件}
        {
            path: '/account',
            component: account,
            children: [{
                    path: '/account/login',
                    component: login
                },
                {
                    path: '/account/register',
                    component: register
                }
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
})

//4.把路由对象暴露出去
export default router