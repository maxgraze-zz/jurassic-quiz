<script>
	export let title = 'Jurassic Franchise Quiz';
	export let description = 'I survived Jurassic Park!';
	export let siteUrl = 'https://jurassic-park-survival-quiz.netlify.app';
	export let keywords = '';
	export let preloadFont = [];
	export let img = 'images/annoying_child.png';
</script>

<sveltekit:head>
	<meta content="text/html; charset=UTF-8" name="Content-Type" />
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Datacitron & Max Graze" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Jurassic Park Survival Quiz" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content={img} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteUrl} />
	<meta name="twitter:creator" content="@datacitron @maxgraze" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{siteUrl}/" />

	<!-- {#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each} -->
</sveltekit:head>
