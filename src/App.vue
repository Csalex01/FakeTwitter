<template>
	<Navbar :user="user" />
	<RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue"

import { useRouter } from "vue-router"

export default {
	components: {
		Navbar
	},
	setup() {
		const router = useRouter()
		const user = {
			loggedIn: true
		}

		console.log("Welcome to FakeTwitter!")
		document.title = "🐦️ FakeTwitter"

		if (!user.loggedIn)
			router.push({ name: "Login" })

		return {
			user
		}
	}
}

</script>

<style>
html {
	background: rgba(100, 100, 100, 1);
}
</style>
