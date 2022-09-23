<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
	import Question from './Question.svelte';
	import { score, user, isAnswered } from './store.js';
	import Gauge from './Gauge.svelte';
		import { csv } from 'd3';

	export let quizData;

	
	function handleChange() {
		activeQuestion = activeQuestion + 1;

 }
	

	// $: console.log(data);
	$: activeQuestion = 0;
	let quiz = getQuiz();

	beforeUpdate(() => {
		// console.log('Before Update');
	});

	afterUpdate(() => {
		// console.log('After Update');
	});

	async function getQuiz() {
		// const res = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=boolean');
		// const quiz = await res.json();
		// console.log(quiz);
		const quiz = await csv(quizData);
		return quiz;
	}

	function nextQuestion() {
		activeQuestion = activeQuestion + 1;
	}

	// labelled statement
	$: questionNumber = activeQuestion + 1;
</script>

<!-- <div class="flex flex-col"> -->


	<!-- <Blurb {isCorrect} {activeQuestion}/> -->
<div class=" -mt-20 w-1/2 flex flex-row float-right place-center">
	<!-- <div class=""> -->
	<!-- <div class=" h-full  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"> -->
	<!-- <img src={$user.av} alt={$user.character} class="px-8  scale-75" /> -->
	<img src={$user.av} alt={$user.character} class="px-8 scale-75 " />

	<!-- </div> -->
	<Gauge />
</div>

<!-- <div
		class="w-20 h-20 px-8 rounded-full border inline-flex items-center justify-center bg-white text-gray-700 font-bold"
	>
		Darwin Score: {$score}
	</div> -->
<!-- </div> -->
<div class="container mx-auto  flex flex-col place-items-center ">
	<!-- <h3>Question #{questionNumber}</h3> -->
	{#await quiz}
		loading
	{:then data}
		{#each data as question, index}
			{#if index === activeQuestion}
				<!-- {#if showBlurb}
					<Blurb /> -->
				<!-- {:else} -->
				<div in:fly={{ x: 100 }} out:fly|local={{ x: -200 }} class="">
					<!-- <Question on:answer {nextQuestion} {question} /> -->
					<Question on:nextQuestion={handleChange} {activeQuestion} {question} />
				</div>
			{/if}
			<!-- {/if} -->
		{/each}
	{/await}
</div>
<!-- </div> -->
<style>
</style>
