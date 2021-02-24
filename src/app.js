import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(Plugin)
new Vue({
	el: '#app',
	data: {
		loading1: false,
		loading2: true,
		loading3: false,
		message: 'hi'
	},
	mounted() {
	},
	methods: {
		showToast() {
			this.$toast(`确认删除${parseInt((Math.random() * 100).toString())}吗？`, {
				autoClose: false,
				closeButton: {
					text: '确认', callback() {console.log('已经删除了')}
				}
			})
		}
	}
})
