<template>
	<Navbar :user="user" />
	<RouterView />
</template>

<script setup>
import Navbar from "./components/Navbar.vue"

console.log("Welcome to FakeTwitter!")
document.title = "🐦️ FakeTwitter"

const user = {
	loggedIn: true
}

</script>

<style>
html {
	background: rgba(100, 100, 100, 1);
}
</style>
