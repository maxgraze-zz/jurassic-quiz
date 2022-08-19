<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Avatars from '$lib/components/Avatars.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import ChooseAdventure from '$lib/components/ChooseAdventure.svelte';
	import { onMount } from 'svelte';
import SocialShare from '$lib/components/socialShares/SocialShare.svelte';


	let show = 'chooseAdventure';
	// let showBlurb = false;
	let live = false;
	let quizData = '';

	const colors = {
		purple: '#B353AD',
		khaki: '#858039',
		cream: '#EEEAE0',
		pink: '#D0A8D7',
		blackish: '#1F1E1E'
	};


	function handleComponent(event) {
		show === 'chooseAdventure' ? (show = 'avatars') : (show = 'quiz');
	}

	function handleMessage(event) {
		event.detail.isCorrect === true ? (live = true) : (live = false);
		// showBlurb = true;
		htmlBg.style.setProperty(
			'--tunnel',
			`linear-gradient(
			to right,
			${colors.purple}  0%,
			${colors.purple} 50%,
			${colors.blackish} 50%,
			${colors.blackish} 100%
		)`
		);
	}
	function handleMode(event) {
		show = 'avatars';
		if (event.detail.adventure === 'regular') quizData = 'data/data.csv';
		else quizData = 'data/data.csv';
	}

	// function handleQuiz(event) {
	// 	showBlurb= event.detail.showBlurb

	// }
	let htmlBg;
	onMount(() => {
		htmlBg = document.querySelector('html');
	});
</script>

{#if show === 'chooseAdventure'}
	<ChooseAdventure on:click={handleComponent} on:mode={handleMode} />
{:else if show === 'avatars'}
	<div class="flex flex-col text-center container justify-content align-items ">
		<!-- <div class="flex flex-col text-center "> -->
		<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl">
			Pick your <span class="text-purple">player</span>!
		</h1>

		<Avatars on:choose={handleComponent} />
		<!-- </div> -->
	</div>
<!-- {:else if showBlurb}
	<Blurb {showBlurb}{live} on:continueQuiz={handleQuiz} /> -->
{:else}
	<Quiz {quizData} {live} />
	<SocialShare/>
	<!-- <Quiz {quizData} on:answer={handleMessage} /> -->
{/if}
