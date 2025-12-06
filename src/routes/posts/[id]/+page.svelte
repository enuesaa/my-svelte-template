<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { getPost2, getPost } from '$lib/api/posts';

	let { params } = $props();

	let post = getPost(params.id);
	// let post = getPost2(() => ({id: params.id}));

	// $effect(() => {
	// 	post = getPost(params.id);
	// })
</script>

<PageTitle title="Post" />

{#if post.data !== undefined}
	<div>
		{post.data.title}
	</div>
{/if}
