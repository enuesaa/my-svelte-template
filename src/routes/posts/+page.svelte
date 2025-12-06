<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { listPosts } from '$lib/api/posts';

	const posts = listPosts()
</script>

<PageTitle title="Posts" />


{#if posts.data}
	<ul>
	{#each posts.data as post}
		<li>{post.title}</li>
	{/each}
	</ul>
{/if}
