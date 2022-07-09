<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Avatars from '$lib/components/Avatars.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import ChooseAdventure from '$lib/components/ChooseAdventure.svelte';

	let show = 'chooseAdventure';
	let showBlurb = false;
	let live = false;
	let quizData = '';
	function handleComponent(event) {
		show === 'chooseAdventure' ? (show = 'avatars') : (show = 'quiz');
	}

	function handleMessage(event) {
		event.detail.isCorrect === true ? (live = true) : (live = false);
		showBlurb = true;
	}
	function handleMode(event) {
		show = 'avatars';
		if (event.detail.adventure === 'regular') quizData = 'data/data.csv';
		else quizData = 'data/data.csv';
	}
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
{:else if showBlurb}
	<Blurb {live} />
{:else}
	<Quiz {quizData} on:answer={handleMessage} />
{/if}
