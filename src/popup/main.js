import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource' //原生请求
import JsonViewer from 'vue-json-viewer' // json预览
import jquery from 'jquery' // jquery
import VueClipBoard from 'vue-clipboard2'
import JsonExcel from 'vue-json-excel'
import axios from 'axios'
import './core/use'
// 引入element-ui
import ElementUI from 'element-ui'
Vue.prototype.$element = ElementUI
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$ = jquery
Vue.use(JsonViewer)
Vue.use(ElementUI)
Vue.use(VueClipBoard)
Vue.component('downloadExcel', JsonExcel)
Vue.prototype.request = axios

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
