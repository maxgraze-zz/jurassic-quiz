<script>
	// import defaultFeaturedImage from '$lib/assets/home/home.jpg';
	// import defaultOgImage from '$lib/assets/home/home-open-graph.jpg';
	// import defaultOgSquareImage from '$lib/assets/home/home-open-graph-square.jpg';
	// import defaultTwitterImage from '$lib/assets/home/home-twitter.jpg';
	import website from '$lib/utils/website';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const {
		author,
		entity,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		twitterUsername
	} = website;
	let defaultImage = '/images/dino1.png';
	export let breadcrumbs = [];
	export let entityMeta = null;
	export let metadescription;
	export let slug;
	export let timeToRead = 0;
	export let title;

	// '\u007c'; // |
	const defaultAlt = 'picture of a dinosaur';

	// imported props with fallback defaults
	export let featuredImage = {
		url: defaultImage,
		// url: defaultFeaturedImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: defaultImage,
		// url: defaultOgImage,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: defaultImage,
		// url: defaultOgSquareImage,
		alt: defaultAlt
	};
	export let twitterImage = {
		url: defaultImage,
		// url: defaultTwitterImage,
		alt: defaultAlt
	};

	const pageTitle = `${siteTitle} | ${title}`;
	const url = `${siteUrl}`;
	const openGraphProps = {
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	};
	const schemaOrgProps = {
		author,
		breadcrumbs,
		entity,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		githubPage,
		twitterUsername
	};
	const twitterProps = {
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<!-- <SchemaOrg {...schemaOrgProps} /> -->
