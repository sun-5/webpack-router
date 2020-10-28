import Vue from 'vue'

//1.导入vue-router包
import VueRouter from 'vue-router'
//2. 手动安装VueRouter
Vue.use(VueRouter)

//导入app组件
import app from './App.vue'

// 导入路由自定义模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {
        msg: "12 3"
    },
    methods: {},
    render: c => c(app),
    //render会把el指定的app div所有内容都清空覆盖，
    //不要把路由的router-view 和 router-link直接写到el控制的元素中
    router //4.将路由对象挂载到vm实例上
});
// 注意：app组件是通过vm实例的render函数，渲染出来的， el控制的元素中
//Account 和 GoodsList 组件，是通过路由匹配监听到的，所以只能展示到属于路由的    <router-view></router-view> 中