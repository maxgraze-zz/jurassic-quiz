<script>
	import Gauge from './Gauge.svelte';
	import { component, score, user } from './store';
	import { createEventDispatcher } from 'svelte';
	import SocialShares from './socials/index.svelte';
	// import SocialShare from './socialShares/SocialShare.svelte';

	// const context = getShellContext();
	const dispatch = createEventDispatcher();

	export let isCorrect;
	// export let activeQuestion;
	export let currentQuestion;
	let showSocialShare = false;

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
</script>

<div class="purple-black">
	<div class="black-cream">
		<div class="grid grid-cols-2 grid-rows-1">
			<div class="align-center mt-20 justify-center flex">
				<img src={blurb.src} alt="dino illustration" class="pb-14" />
			</div>
			<div class="align-center mt-20 justify-center flex flex-col">
				<div class=" -mt-10 w-2/3 flex flex-row ml-24">
					<img src={$user.av} alt={$user.character} class="px-8 " />
					<Gauge />
				</div>
				<div class="text-center space-y-4">
					<p class="font-janguky algin-center text-8xl mt-24">{blurb.title}</p>
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
		<section class="grid grid-cols-2 grid-rows-1">
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
							<button class="btn2" on:click={nextQuestion}>Next Question</button>
						{:else}
							<a href="/quiz"><button class="btn2" on:click={resetQuiz}>Fresh Start</button> </a>
							<SocialShares />
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
		border-radius: 10rem;
		background: linear-gradient(
			to right,
			theme('colors.blackish') 0%,
			theme('colors.blackish') 50%,
			theme('colors.cream') 50%,
			theme('colors.cream') 100%
		);
	}

	section {
		min-height: 100vh;
	}
</style>
