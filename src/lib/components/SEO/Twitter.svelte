<script>
	export let author;
	export let twitterUsername;
	export let image;
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';

	/*
	 * When there is an equivalent og tag present, Twitter takes that so check OpenGraph before
	 * adding additional tags, unless you want to override OpenGraph.
	 */
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	{#if image}
		<meta name="twitter:image" content={image.url} />
	{/if}
	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
	<meta name="twitter:label" content="Written by" />
	<meta name="twitter:data" content={author} />
</svelte:head>
