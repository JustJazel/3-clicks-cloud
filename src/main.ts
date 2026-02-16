import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'



createApp(App)
	.use(createPinia())
	.use(naive)
	.mount('#app')
