<script context="module">
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export const SHELL_CONTEXT = 'SHELL_CONTEXT';

	export function getShellContext() {
		return getContext(SHELL_CONTEXT);
	}
</script>

<script lang="ts">
	import Layout from '$lib/components/layout/index.svelte';
	import '@fontsource/plus-jakarta-sans/latin.css';

	import '$lib/styles/app.css';

	const context = writable({
		page: 'main'
	});
	setContext(SHELL_CONTEXT, context);
</script>

<!-- <Layout>
	<slot />
</Layout> -->
<!-- <html class="normal-html"> -->
<main>
	<!-- <main class="normal-body min-h-screen px-8 md:pt-24 no-scrollbar select-none"> -->
	<slot />
</main>
<!-- </html> -->
<!-- {:else}
	<html class="normal-html">
		<main class="blurb-body min-h-screen px-8 md:pt-24 no-scrollbar select-none">
			<slot />
		</main>
	</html>
{/if} -->
