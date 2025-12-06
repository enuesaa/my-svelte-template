<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import EditLink from './EditLink.svelte';
	import { getPost } from '$lib/api/posts'
	import type { GetPostQuery } from '$lib/api/posts'

	let { params } = $props()
	let post: GetPostQuery | undefined = $state()

	$effect(() => {
		post = getPost(params.id)
	})
</script>

<PageTitle title="Post" />

{#if post !== undefined && post.data !== undefined}
	<div class="text-lg my-5 px-3">
		{post.data.title}
	</div>
	<EditLink id={params.id} />
{/if}
