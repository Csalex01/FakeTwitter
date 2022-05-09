<template>
	<Navbar :user="user" />
	<RouterView />
</template>

<script>
import Navbar from "./components/navigation/Navbar.vue"

import { useRouter } from "vue-router"
import { user } from "./main"

export default {
	components: {
		Navbar
	},
	setup() {
		const router = useRouter()

		document.title = "🐦️ FakeTwitter"

		if (!user.loggedIn)
			router.push({ name: "Login" })
		else
			router.push({ name: "Home" })

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
