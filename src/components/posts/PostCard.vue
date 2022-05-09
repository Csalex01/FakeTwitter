<template>
	<div class="card">
		<div class="card-content">
			<div class="media-content">
				<div class="title is-size-4 has-text-white">{{ user.username }}</div>
				<div class="subtitle is-size-6 has-text-grey">{{ user.email }}</div>
			</div>

			<div class="content has-text-white">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, fugit. Velit maxime nihil iure explicabo eius similique fugit iusto iste consectetur? Nostrum odio, ipsam error id earum ut sunt quaerat!
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["user"])

console.log(props.user)

</script>

<style scoped>
.card-content {
	background: rgba(51, 51, 51, 1);
}

.card {
	margin-bottom: 20px;
}

.content {
	margin-top: 10px;
}
</style>