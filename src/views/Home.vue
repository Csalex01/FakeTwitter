<template>
	<div class="columns">
		<div class="column">

			<div class="posts has-text-white">

				<PostCard :user="user" />
				
			</div>

		</div>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import PostCard from "../components/posts/PostCard.vue"

export default {
	name: "Home",
	props: { user },
	setup() {

	}
}
</script>

<style scoped>
.box {
	padding: 0;
	margin: 0;
}
.posts {
	max-width: 900px;
	margin: 75px auto 0px auto;

	padding: 0;
}
</style>