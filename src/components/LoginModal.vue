<template>
	<div class="box has-text-white">
		<h1 class="title is-3 has-text-white">Login</h1>

		<form>
			<div class="field">
				<div class="label">E-mail</div>
				<div class="control has-icons-left">
					<span class="icon">
						<i class="fa-solid fa-envelope"></i>
					</span>
					<input type="email" class="input validate" placeholder="E-mail">
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
			</div>
		</form>

		<a class="signup has-text-primary">Don't have an account? Sign up!</a>
		<a class="resetPassword has-text-danger">Reset Password</a>

		<div class="buttons">
			<a class="button is-primary">Login</a>
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
.signup {
	display: inline-block;
	margin-top: 10px;
	margin-left: 10px;
}
</style>