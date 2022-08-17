<script>
	import Avatars from '$lib/components/Avatars.svelte';
	import Gauge from './Gauge.svelte';
	import { score, user } from './store';
	import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

	export let live;
	// export let activeQuestion;
	export let activeQuestion;
	// export let showBlurb

	// console.log(showBlurb)
	
	function nextQuestion() {
		activeQuestion = activeQuestion + 1;
	}

	let blurb = {
		title: '',
		subtitle: '',
		wl: '',
		src: ''
	};

	if (live) {
		blurb.title = 'you live';
		blurb.subtitle = '(for now)';
		blurb.wl = 'win';
		blurb.src = '/images/live_illustration.png';
	} else {
		blurb.title = 'you die';
		blurb.subtitle = '(in agonizing pain)';
		blurb.wl = 'lose';
		blurb.src = '/images/die_illustration.png';
	}

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView();
	}
	function resetQuiz() {
		score.set(0);
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


<html class="blurb" lang="en">
	<body>
		<div class="grid grid-cols-2 grid-rows-1">
			<div class="align-center mt-20 justify-center flex">
				<img src={blurb.src} alt="dino illustration" class="pb-14" />
			</div>
			<div class="align-center mt-20 justify-center flex flex-col">
				<div class=" -mt-10 w-2/3 flex flex-row ml-24">
					<img src={$user.av} alt={$user.character} class="px-8 " />
					<Gauge />
				</div>
				<div class="text-center space-y-8">
					<p class="font-janguky algin-center text-8xl mt-32">{blurb.title}</p>
					<p class="font-body font-bold text-3xl">{blurb.subtitle}</p>
					<p class="font-body mx-24 text-lg">
						Excellent move, though you probably won’be the employee of the month.
					</p>
					<p class="font-body mx-24 font-bold text-3xl">
						You {blurb.wl}
						{$score} points of Darwin’s score.
					</p>
<div class="flex justify-center">
					<a href="#s1" on:click={scrollIntoView}>
						<img src="/images/arrow.png" alt="down arrow" /></a
					>
				</div>
				</div>
		</div>
		</div>
		<section class="grid grid-cols-2 grid-rows-1">
			<div class="align-center mt-20 justify-center flex">
				<img src={blurb.src} alt="dino illustration" class="pb-14" />
			</div>
			<div class="align-center mt-20 justify-center flex flex-col">
				<div class="text-justify px-28" id='s1'>
						<p>	Text about the data and the number of accident while moving one dino to another
							location. Text about the data and the number of accident while moving one dino to
							another location. Text about the data and the number of accident while moving one dino
							to another location. Text about the data and the number of accident while moving one
							dino to another location Text about the data and the number of accident while moving one
							dino to another location. Text about the data and the number of accident while</p>		
			
		<div>
			{#if live}
			<button class="btn2" on:click={nextQuestion}>Next Question</button> 

			{:else}
			<button on:click={resetQuiz}>Start New Quiz</button> 
{/if}
		</div>
					</section>
	</body>
</html>

<style>
	html {
		overflow: hidden;
		/* background-color: theme('colors.purple'); */
		background: linear-gradient(
			to right,
			theme('colors.purple') 0%,
			theme('colors.purple') 50%,
			theme('colors.blackish') 50%,
			theme('colors.blackish') 100%
		);
	}
	body {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
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
