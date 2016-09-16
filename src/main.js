import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App.vue'
import Home from './components/modules/home.vue'
import Classify from './components/modules/Classify.vue'
import Livetype from './components/modules/livetype.vue'

Vue.use(Router)
Vue.use(Resource)

const router = new Router();

router.map({
	'/Home':{
		name:'Home',
		component:Home
	},
	'/Classify':{
		name:'Classify',
		component:Classify
	},
	'/livetype':{
		name:'livetype',
		component:Livetype
	}
})

router.redirect({
	'/':'/Home'
})

router.start(App,'#app')
