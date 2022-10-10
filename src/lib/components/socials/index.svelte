<script>
	import Twitter from './Twitter.svelte';
	import Facebook from './Facebook.svelte';
	import { browser } from '$app/env';
	import website from '$lib/utils/website';

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
	<div class="buttons">
		<Twitter {url} {title} />
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
