import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const user = {
	loggedIn: true,
	username: "Csalex01",
	email: "alex@csalex.org"
}

const app = createApp(App)

app.use(router)
app.mount('#app')

export {
	user
}