<script>
	import Gauge from './Gauge.svelte';
	import { component, score, user } from './store';
	import { createEventDispatcher } from 'svelte';
	import SEO from './SEO/index.svelte';
	import website from '$lib/utils/website';
	import TwitterShare from './socials/TwitterShare.svelte';
	import Twitter from './socials/Twitter.svelte';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';
	import Button from '$lib/components/Button.svelte';

	// import SocialShare from './socialShares/SocialShare.svelte';
	const { author, siteUrl } = website;

	let twitterImageSrc = `${siteUrl}/images/dino1.png`;
	let featuredImageSrc = `${siteUrl}/images/die_illustration.png`;
	let ogImageSrc = '/images/die_illustration.png';
	let ogSquareImageSrc = '/images/die_illustration.png';
	// const context = getShellContext();
	const dispatch = createEventDispatcher();

	export let isCorrect;
	// export let activeQuestion;
	export let currentQuestion;
	let showSocialShare = false;
	let restartText = 'Start again from the beginning';
	let dinoDashboardText = 'See the dino dashboard';
	let deathDashboardText = 'See the death dashboard';
	let twitterText = 'Share my death on twitter';
	function nextQuestion() {
		dispatch('nextQuestion');
	}

	let blurb = {
		title: '',
		subtitle: '',
		wl: '',
		src: ''
	};

	if (isCorrect) {
		blurb.title = 'you live';
		blurb.subtitle = '(for now)';
		blurb.wl = 'win';
		blurb.src = '/images/live_illustration.png';
	} else {
		blurb.title = 'you die';
		blurb.subtitle = '(in agonizing pain)';
		blurb.wl = 'lose';
		blurb.src = '/images/die_illustration.png';
		showSocialShare = true;
	}

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView();
	}
	function resetQuiz() {
		score.set(0);
		currentQuestion = true;
		component.update((val) => (val = 'avatar'));
	}

	// function continueQuiz(){
	// 	showBlurb = false
	// 	dispatch('continueQuiz', {
	// 		showBlurb
	// 	});
	// }
	// 	activeQuestion = 0;
	// 	quiz = getQuiz();
	// }
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	let metadescription = 'Jurassic Park Survival ';
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

<!-- <SEO {...seoProps} /> -->

<div class="purple-black">
	<div class="black-cream br sm:cream-sm">
		<div class="grid md:grid-cols-2 grid-rows-1">
			<div class="align-center mt-20 justify-center flex">
				<img src={blurb.src} alt="dino illustration" class="pb-14" />
			</div>
			<div class="align-center mt-20 justify-center flex flex-col">
				<div class=" -mt-10 w-2/3 flex flex-row ml-24">
					<img src={$user.av} alt={$user.character} class="px-8 " />
					<Gauge />
				</div>
				<div class="text-center space-y-4">
					<p class="font-janguky algin-center text-4xl md:text-8xl mt-24">{blurb.title}</p>
					<p class="font-body font-bold text-3xl">{blurb.subtitle}</p>
					<div class="space-y-6">
						<p class="font-body mx-24 text-lg">
							Excellent move, though you probably won’be the employee of the month.
						</p>
						<p class="font-body mx-24 font-bold text-3xl">
							You {blurb.wl}
							<span class="text-purple">{$score <= 0 ? $score * -1 : $score} </span>Darwin points.
						</p>
					</div>
					<div class="flex justify-center pt-6">
						<a href="#s1" on:click={scrollIntoView}>
							<img src="/images/arrow.png" alt="down arrow" /></a
						>
					</div>
				</div>
			</div>
		</div>
		<section class=" md:grid md:grid-cols-2 md:grid-rows-1">
			<div class="align-center mt-0 justify-center flex">
				<img src={blurb.src} alt="dino illustration" class="pb-14" />
			</div>
			<div class="align-center mt-20 justify-center flex flex-col">
				<div class="text-justify px-28" id="s1">
					<p>
						Text about the data and the number of accident while moving one dino to another
						location. Text about the data and the number of accident while moving one dino to
						another location. Text about the data and the number of accident while moving one dino
						to another location. Text about the data and the number of accident while moving one
						dino to another location Text about the data and the number of accident while moving one
						dino to another location. Text about the data and the number of accident while
					</p>
					<div class="flex gap-x-10 justify-center items-center mt-10">
						{#if isCorrect}
							<button class="btn" on:click={nextQuestion}>Next Question</button>
						{:else}
							<div class="flex md:grid-cols-2 gap-5 md:grid w-96">
								<a
									href="https://twitter.com/share?ref_src=twsrc%5Etfw"
									class="twitter-share-button"
									data-via="max_graze"
									data-related="datacitron"
									data-show-count="false"
								>
									<Button type={'twitter'} text={twitterText} />
								</a>
								<!-- <TwitterShare
									{siteUrl}
									via1="@maxgraze"
									via2="@datacitron"
									description={metadescription}
									hashtags="#jurassicpark"
									related="@jurassic"
									text={'twitter share'}
								/> -->
								<Button click={resetQuiz} type={'restart'} text={restartText} />
								<Button click={resetQuiz} type={'dashboard'} text={dinoDashboardText} />
								<Button click={resetQuiz} type={'dashboard'} text={deathDashboardText} />
							</div>

							<!-- <a href="/quiz"
								><button class="bg-purple text-cream btn-small"
									><TwitterIcon width={28} />
									<span class="text-left"> Share my death on twitter </span></button
								>
							</a>
							<Twitter {siteUrl} {title} />
							<TwitterShare
								{siteUrl}
								via1="@maxgraze"
								via2="@datacitron"
								text={metadescription}
								hashtags="#jurassicpark"
								related="@jurassic"
							/> -->
						{/if}
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.purple-black {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px; /* background-color: theme('colors.purple'); */
		background: linear-gradient(
			to right,
			theme('colors.purple') 0%,
			theme('colors.purple') 50%,
			theme('colors.blackish') 50%,
			theme('colors.blackish') 100%
		);
	}
	.black-cream {
		position: absolute;
		overflow-y: auto;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		/* border-radius: 10rem; */
		background: linear-gradient(
			to right,
			theme('colors.blackish') 0%,
			theme('colors.blackish') 50%,
			theme('colors.cream') 50%,
			theme('colors.cream') 100%
		);
	}
	.cream-sm {
		position: absolute;
		overflow-y: auto;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		border-radius: 4rem;
		background: theme('colors.cream') 100%;
	}

	.br {
		border-radius: 10rem;
	}

	section {
		min-height: 100vh;
	}
</style>
