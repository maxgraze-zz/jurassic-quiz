<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Avatars from '$lib/components/Avatars.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import ChooseAdventure from '$lib/components/ChooseAdventure.svelte';
	import { onMount } from 'svelte';
	import doPost from '$lib/utils/post';
	import website from '$lib/utils/website';
	import SEO from '$lib/components/SEO/index.svelte';

	// const data = {
	// 	id: 1,
	// 	character: 'Expert',
	// 	score: 80
	// };

	// onMount(async () => {
	// 	await doPost(data);
	// });

	// let showBlurb = false;
	import Meta from '$lib/components/Meta.svelte';
	import { component } from '$lib/components/store';

	let live = false;
	let quizData = '';

	const colors = {
		purple: '#B353AD',
		khaki: '#858039',
		cream: '#EEEAE0',
		pink: '#D0A8D7',
		blackish: '#1F1E1E'
	};

	function handleAvatar(event) {
		component.update((val) => (val = 'quiz'));
		if (event.detail.character.name === 'Annoying Child') quizData = 'data/data.csv';
		else quizData = 'data/data.csv';
	}

	let htmlBg;
	onMount(() => {
		//  doPost()
		htmlBg = document.querySelector('html');
	});
	// let twitterImageSrc = '/images/dino1.png';
	// let featuredImageSrc = '/images/dino1.png';
	// let ogSquareImageSrc = '/images/dino1.png';
	// let ogImageSrc = '/images/dino1.png';

	// const { author, siteUrl } = website;
	// let title = 'Home';
	// const breadcrumbs = [
	// 	{
	// 		name: 'Home',
	// 		slug: ''
	// 	}
	// ];

	// let metadescription = 'Jurassic Park Survival Quize';
	// const featuredImageAlt = 'picture of a dinosaur';
	// const featuredImage = {
	// 	url: featuredImageSrc,
	// 	alt: featuredImageAlt,
	// 	width: 672,
	// 	height: 448,
	// 	caption: 'Home page'
	// };
	// const ogImage = {
	// 	url: ogImageSrc,
	// 	alt: featuredImageAlt
	// };
	// const ogSquareImage = {
	// 	url: ogSquareImageSrc,
	// 	alt: featuredImageAlt
	// };

	// const twitterImage = {
	// 	url: twitterImageSrc,
	// 	alt: featuredImageAlt
	// };
	// const entityMeta = {
	// 	url: `${siteUrl}/`,
	// 	faviconWidth: 512,
	// 	faviconHeight: 512,
	// 	caption: author
	// };
	// const seoProps = {
	// 	title,
	// 	slug: '',
	// 	entityMeta,
	// 	breadcrumbs,
	// 	metadescription,
	// 	featuredImage,
	// 	ogImage,
	// 	ogSquareImage,
	// 	twitterImage
	// };
</script>

<!-- <SEO {...seoProps} /> -->

<!-- <SocialShare/> -->
<!-- <Meta img="annoying_child" /> -->

<!-- <SocialShare/> -->
<!-- <Meta img="annoying_child" /> -->

<!-- {#if show === 'chooseAdventure'}
	<ChooseAdventure on:click={handleComponent} on:mode={handleMode} /> -->
{#if $component === 'avatar'}
	<div class="mx-auto text-center container ">
		<!-- <div class="flex flex-col text-center "> -->
		<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl">
			Pick your <span class="text-purple">player</span>!
		</h1>

		<Avatars on:character={handleAvatar} />
	</div>
{:else}
	<Quiz {quizData} />
{/if}
