<script>
	import Twitter from './Twitter.svelte';
	import Facebook from './Facebook.svelte';
	import { browser } from '$app/env';
	import website from '$lib/utils/website';
	import TwitterIcon from '../icons/TwitterIcon.svelte';

	const { siteTitle, siteUrl } = website;

	export let slug;
	export let title;

	$: webShareAPISupported = browser && typeof navigator.share !== 'undefined';

	$: handleWebShare;
	const handleWebShare = async () => {
		try {
			navigator.share({
				title,
				text: `Shared from ${siteTitle}`,
				url
			});
		} catch (error) {
			webShareAPISupported = false;
		}
	};
	const url = `${siteUrl}/${slug}`;
</script>

<!-- <aside class="container"> -->

<div class="wrapper">
	Share: <div class="buttons">
		{#if webShareAPISupported}
			<button on:click={handleWebShare}
				><span class="screen-reader-text">Share</span><TwitterIcon width={48} /></button
			>
		{:else}
			<Twitter {siteUrl} {title} />
		{/if}
	</div>
</div>
<div class="wrapper">
	<div class="buttons">
		<Twitter {siteUrl} {title} />
		<!-- <Facebook {url} /> -->
	</div>
</div>

<!-- </aside> -->
<style>
	/* button {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}

	@media (prefers-reduced-motion: reduce) {
		button {
			transition: all 2s ease-in-out;
		}
	}

	button:focus,
	button:hover {
		transform: scale(1.1);
	} */
</style>
