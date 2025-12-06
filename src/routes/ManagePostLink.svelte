<script lang="ts">
	import { ArrowBigRightDash } from 'lucide-svelte'
</script>

<a href="/posts">
	<ArrowBigRightDash class="inline" />
	<span>Manage Posts</span>
</a>

<style lang="postcss">
	@reference "#app.css";

	a {
		@apply font-zenkaku block w-fit mx-3 text-xl my-3;
	}
	span {
		@apply inline-block border-b-2 border-dotted;
		@apply hover:border-dashed;
	}
</style>
