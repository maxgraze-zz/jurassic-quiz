<script>
	import Arrow from '$lib/components/images/arrow.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/utils/website';
	import { MetaTags } from 'svelte-meta-tags';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';
	import Button from '$lib/components/Button.svelte';
	import TwitterShare from '$lib/components/socials/TwitterShare.svelte';

	let trexSound;

	function playSound() {
		setTimeout(() => {
			trexSound.play();
		}, 500);
	}

	let box;
	function scrollToTop() {
		box.scrollIntoView();
	}
	// const scrollToElement = (selector) => {
	// 	const element = document.querySelector(selector);
	// 	if (!element) return;
	// 	let position = element.getBoundingClientRect().top;
	// 	let offset = position + window.pageYOffset;
	// 	window.scrollTo({
	// 		top: offset,
	// 		behavior: 'smooth'
	// 	});
	// };

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView();
	}

	let twitterImageSrc = 'https://jurassic-park-survival-quiz.netlify.app/images/twitter.png';
	let featuredImageSrc = 'https://jurassic-park-survival-quiz.netlify.app/images/twitter.png';
	let ogSquareImageSrc = 'https://jurassic-park-survival-quiz.netlify.app/images/twitter.png';
	let ogImageSrc = 'https://jurassic-park-survival-quiz.netlify.app/images/twitter.png';

	const { author, siteUrl } = website;

	let title = 'Would you survive Jurassic Park?';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];

	let metadescription = 'Jurassic Park Survival Quiz';
	const featuredImageAlt = 'picture of a dinosaur';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<!-- <MetaTags
	title="Using More of Config"
	titleTemplate="%s | Svelte Meta Tags"
	description="Would you survive Jurassic Park?"
	canonical={siteUrl}
	openGraph={{
		url: siteUrl,
		title: 'Open Graph Title',
		description: 'Open Graph Description',
		images: [
			{
				url: ogImageSrc,
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			},
			{
				url: ogImageSrc,
				width: 900,
				height: 800,
				alt: 'Og Image Alt Second'
			},
			{ url: ogImageSrc }
		],
		site_name: 'Jurassic Park Survival QuiZ'
	}}
	twitter={{
		handle: '@maxgraze',
		site: '@datacitron',
		cardType: 'summary_large_image',
		title: 'Using More of Config',
		description: 'This example uses more of the available config options.',
		image: ogImageSrc,
		imageAlt: 'Twitter image alt'
	}}
	facebook={{
		appId: '1234567890'
	}}
/> -->

<SEO {...seoProps} />
<!-- <svelte:window bind:scrollY={y} /> -->
<!-- <html lang="en" class="black-background"> -->
<div class="container mx-auto mt-24 box items-center" bind:this={box}>
	<a
		href="https://twitter.com/share?ref_src=twsrc%5Etfw"
		class="twitter-share-button"
		data-via="max_graze"
		data-related="datacitron"
		data-show-count="false"
	>
		<Button type={'twitter'} text={'click to share'} />
	</a>
	<TwitterShare
		{siteUrl}
		via1="@maxgraze"
		via2="@datacitron"
		description={metadescription}
		hashtags="#jurassicpark"
		related="@jurassic"
		text={'twitter share'}
	/>
	<div class="flex flex-col mt-10 md:mt-0 min-h-screen text-center ">
		<h1 class="basis-1/3 md:text-h1 font-janguky md:text-6xl xl:text-7xl ">
			How would <br />you <span class="text-purple">die</span> in <br />Jurassic movies?
		</h1>
		<p class="text-lg pt-6 uppercase">A data game by Max Graze & Datacitron</p>

		<div class="flex flex-col min-h-[20vh] gap-8 pt-6 justify-center items-center text-center">
			<!-- <a href={'#'} on:click|preventDefault={() => scrollToElement('#s1')} -->
			<a href="#start-quiz" on:click={scrollIntoView}>
				<img src="/images/arrow.png" alt="down arrow" /></a
			>
		</div>
	</div>
	<section class="mx-auto pt-28" id="s1">
		accusamus harum ipsam corrupti impedit suscipit at sit! Saepe voluptates quibusdam expedita
		minima culpa provident, ut eum, aliquam velit vel quia debitis nisi optio, hic natus. Pariatur
		voluptatibus, autem rem deleniti exercitationem numquam nam saepe dolores optio nulla odit
		laudantium facilis ut? Corporis sapiente adipisci, commodi temporibus beatae dolor, tempora
		rerum ducimus perferendis veritatis facere quia cumque nisi? Enim incidunt debitis ipsam
		molestiae officiis culpa dolore est nulla eaque molestias earum assumenda iusto aspernatur, modi
		possimus iure! Aspernatur error, aperiam voluptates magnam praesentium sequi accusantium
		obcaecati delectus facere dicta doloribus nobis fugiat? Voluptates quasi magni accusantium
		laborum placeat tempore asperiores ex amet dicta recusandae fuga minima, id obcaecati, itaque
		dolor numquam quo, commodi quisquam eos nam dolore vitae aspernatur! Eaque, voluptas ipsa
		repellat inventore quaerat, id alias nam distinctio deserunt nulla iste dolores corrupti! Sit
		aliquid cum explicabo, ea nemo asperiores, alias, qui libero blanditiis veritatis maxime
		mollitia voluptatem at dicta rem soluta perferendis ratione. Expedita saepe incidunt sunt,
		cumque, excepturi rerum facere laudantium repudiandae iste quis animi neque repellat voluptatum
		doloremque perspiciatis dolorem alias esse corporis maxime quaerat! Voluptatum sequi cum culpa
		nulla accusamus dignissimos! Unde aliquid possimus dicta incidunt officiis perspiciatis ex
		corporis ut, quaerat molestiae illo deserunt, asperiores consectetur. Consectetur, asperiores.
		<div id="start-quiz" class=" w-full relative pb-10 ">
			<div class="items-center justify-center flex bottom-1/4 ">
				<img class="" src="/images/dino1.png" alt="dino" />
				<a href="/quiz"
					><button class="btn hover:gradient -translate-x-[14rem] translate-y-10 "
						>Start Playing!</button
					></a
				>
				<!-- <a href="/quiz"
				><button on:click={playSound} class="btn absolute bottom-1/4 left-44">Start Playing!</button
				></a
			> -->
			</div>
		</div>
		<!-- <button on:click={playSound} > sound!</button> -->

		<audio src="audio/t_rex.mp3" preload="auto" bind:this={trexSound} controls>
			<!-- <audio src=https://www.myinstants.com/media/sounds/m4a1_single-kibblesbob-8540445.mp3 preload=auto bind:this={trexSound} controls> -->

			<track kind="captions" />
		</audio>
	</section>
	<!-- <button on:click={scrollToTop}> SCROLL TO TOP </button> -->
</div>
<!-- </html> -->

<!-- <div class="h-96" id="seccion1"><h1>Seccion 1</h1></div> -->
<style>
	section {
		min-height: 100vh;
	}

	audio {
		display: none;
	}
</style>
