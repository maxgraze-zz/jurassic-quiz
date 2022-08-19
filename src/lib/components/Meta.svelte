<script>
	export let title = "Title TK";
	export let description = "Description TK";
	export let url = "https://pudding.cool";
	export let keywords = "";
	export let preloadFont = [];
    export let img
</script>

<sveltekit:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Datacitron & Max Graze" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="The Pudding" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="images/{img}" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://pudding.cool" />
	<meta name="twitter:creator" content="@datacitron @maxgraze" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="images/{img}.png" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	<!-- {#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each} -->
</sveltekit:head>