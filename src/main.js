import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App.vue'
import Home from './components/home.vue'

Vue.use(Router)
Vue.use(Resource)

const router = new Router();

router.map({
	'/':{
		component: Home
	}
})



router.start(App,'#app')
