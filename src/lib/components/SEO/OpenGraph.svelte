<script>
	export let image;
	export let squareImage;
	export let metadescription;
	export let ogLanguage;
	export let pageTitle;
	export let siteTitle;
	export let url;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />
		<meta property="og:image:width" content="400" />
		<meta property="og:image:height" content="400" />
		<meta property="og:image:alt" content={squareImage.alt} />
	{/if}
</svelte:head>
