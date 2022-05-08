<template>
	<div class="box has-text-white">
		<h1 class="title is-3 has-text-white">Sign Up</h1>

		<form>
			<div class="field">
				<div class="label">E-mail Address</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-envelope"></i>
					</span>
					<input type="email" class="input" placeholder="E-mail Address" v-model="form.email">
				</div>
			</div>

			<div class="field">
				<div class="label">Username</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-at"></i>
					</span>
					<input type="text" class="input" placeholder=" Username" v-model="form.username">
				</div>
			</div>

			<div class="field">
				<div class="label">Password</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-key"></i>
					</span>
					<input type="password" class="input" placeholder="Password" v-model="form.password" @keyup="validatePassword">
				</div>
			</div>

			<div class="field">
				<div class="label">Confirm Password</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-key"></i>
					</span>
					<input type="password" class="input" placeholder="Confirm Password" v-model="form.confirmPassword" @keyup="validatePassword">
				</div>
			</div>
			<!-- <p class=" has-text-danger is-size-7" v-if="form.password != form.confirmPassword">
				Passwords must match!
			</p> -->
			<p class="passwordInfo has-text-grey is-size-7">
				<strong class="has-text-grey">Password requirements</strong> <br>
				{{ criteria[0] ? '🟩' : '🟥' }} Minimum 6 characters <br>
				{{ criteria[1] ? '🟩' : '🟥' }} Must contain at least one UPPERCASE letter (A-Z) <br>
				{{ criteria[2] ? '🟩' : '🟥' }} Must contain at least one number (0-9) <br>
				{{ criteria[3] ? '🟩' : '🟥' }} Passwords must match
			</p>
		</form>

		<a class="login has-text-primary">Already have an account? Log in!</a>

		<div class="buttons">
			<a class="button is-primary" @click="signup">Sign up</a>
		</div>

	</div>
</template>

<script setup>

import { computed, reactive, ref } from 'vue';

const form = reactive({
	email: "",
	username: "",
	password: "",
	confirmPassword: ""
})

let criteria = reactive([false, false, false, false])

const validatePassword = () => {
	// console.log(`Password: ${form.password}\nConfirm Password: ${form.confirmPassword}`);

	criteria[0] = form.password.length >= 6
	criteria[3] = form.password == form.confirmPassword && form.password.length > 0 && form.confirmPassword.length > 0

	criteria[1] = false
	criteria[2] = false

	for (let c of form.password)
		if (c == c.toUpperCase() && !"0123456789".includes(c)) {
			criteria[1] = true
			break
		}

	for (let c of form.password)
		if ("0123456789".includes(c)) {
			criteria[2] = true
			break
		}

}

const signup = () => {
	console.log(`E-mail: ${form.email}`)
	console.log(`Username: ${form.username}`)
	console.log(`Password: ${form.password}`)

}

</script>

<style scoped>
.label {
	color: white;
}
.box {
	display: block;
	position: relative;

	min-width: 400px;
	/* min-height: 600px; */

	width: 400px;

	margin: 40px auto;

	background: rgba(51, 51, 51, 1);
}

.buttons {
	margin: 20px 0 0 0;
}

.button {
	margin: 0 auto;
}

.input {
	background-color: rgba(40, 40, 40, 1);
	border: 0;
	color: white;
}

.input::placeholder {
	color: rgba(100, 100, 100, 1);
}

.resetPassword,
.login {
	display: inline-block;
	margin-top: 10px;
	margin-left: 10px;
}

.passwordInfo {
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>