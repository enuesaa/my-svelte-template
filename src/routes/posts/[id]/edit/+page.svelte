<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import { getPost, updatePost } from '$lib/api/posts'
	import { goto } from '$app/navigation'

	let { params } = $props()
	let post = $derived(getPost(params.id))
	let update = $derived(updatePost(params.id))

	async function save(e: MouseEvent) {
		e.preventDefault()
		if (post.data === undefined) {
			return
		}
		await update.mutateAsync({
			id: post.data.id,
			title: post.data.title,
		})
		await goto(`/posts/${params.id}`)
	}
</script>

<PageTitle title="Edit" />

{#if post.data !== undefined}
	<textarea bind:value={post.data.title} class="w-full border p-2"></textarea>
	<button onclick={save}>save</button>
{/if}
