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
					<input type="email" class="input" placeholder="E-mail Address">
				</div>
			</div>

			<div class="field">
				<div class="label">Username</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-at"></i>
					</span>
					<input type="text" class="input" placeholder=" Username">
				</div>
			</div>

			<div class="field">
				<div class="label">Password</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-key"></i>
					</span>
					<input type="password" class="input" placeholder="Password">
				</div>
				<p class="passwordInfo has-text-grey is-size-7">
					<strong class="has-text-grey">Password requirements</strong> <br>
					- Minimum 6 characters, <br>
					- Must contain at least one UPPERCASE letter (A-Z), <br>
					- Must contain at least one number (0-9).
				</p>
			</div>

			<div class="field">
				<div class="label">Confirm Password</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-key"></i>
					</span>
					<input type="password" class="input" placeholder="Password">
				</div>
			</div>
		</form>

		<a class="login has-text-primary">Already have an account? Log in!</a>

		<div class="buttons">
			<a class="button is-primary">Sign up</a>
		</div>

	</div>
</template>

<script>

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
}
</style>