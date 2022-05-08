<template>

	<div class="box">
		<nav class="navbar is-dark">

			<div class="navbar-brand">
				<router-link :to="{name: 'Home'}" class="content navbar-item">
					<span class="title is-5 has-text-white">🐦️ FakeTwitter</span>
				</router-link>
			</div>

			<div class="navbar-menu">
				<div class="navbar-start">
					<div class="navbar-item search">
						<input type="text" name="Search" class="input has-text-white" id="searchBar" placeholder="Search">
						<a href="#" class="button is-dark searchButton">Search</a>
					</div>
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons" v-if="!user.loggedIn">
							<router-link :to="{name: 'Signup'}" class="button is-dark signupButton">
								<strong>Sign up</strong>
							</router-link>
							<router-link :to="{name: 'Login'}" class="button is-dark loginButton">Login</router-link>
						</div>
						
						<div v-else>
							<a class="button is-dark profileButton">Profile</a>
						</div>
					</div>
				</div>
			</div>

		</nav>	
	</div>

</template>

<script setup>

const props = defineProps(["user"])

</script>

<style scoped>
.input {
	background-color: rgba(40, 40, 40, 1);
	border: 0;
	min-width: 400px;
	margin-right: 20px;
}

.input::placeholder {
	color: rgba(100, 100, 100, 1);
}

.box {
	padding: 0;
	margin: 0;
}

.searchButton,
.loginButton,
.signupButton,
.profileButton {
	background: rgba(40, 40, 40, 1);
	border: 0;
}

.navbar-start {
	width: 100%;
	/* background: red; */
}

.search {
	/* background: blue; */
	width: 50%;
	margin: 0 auto;
}
</style>