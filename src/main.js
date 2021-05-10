import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 解决移动端300ms延迟
import FastClick from 'fastclick'
// import VueLazyload from 'vue-lazyload'

const app = createApp(App)

// app.use(VueLazyload,{
//   loading: require('assets/img/common/background.png')
// })

FastClick.attach(document.body)

app.use(store).use(router).mount('#app')
