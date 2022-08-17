<script>
	export let question;
	export let activeQuestion;
	export let live
	import { user, score } from './store.js';
	import Blurb from './Blurb.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let isCorrect;
	let isAnswered = false;
	// let showBlurb = false;

	// function handleBlurb(event) {
	// 	event ? (showBlurb = true) : '';
	// }

	let answers = [
		{
			answer: question.incorrect_answer,
			correct: false,
			points: +question.points_die
		}
	];

	let allAnswers = [
		...answers,
		{
			answer: question.correct_answer,
			correct: true,
			points: +question.points_live
		}
	];
	shuffle(allAnswers);

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}

	function checkQuestion(answer) {
		isAnswered = true;
		isCorrect = answer.correct;
		dispatch('answer', {
			isCorrect
		});
		// if ($score <= 0 && !isCorrect) {	
		// 	return;}	
		// else
		 score.update((val) => val + answer.points)
			
			}
</script>

<!-- {#if showBlurb}
	<Blurb />
{:else} -->
{#if isAnswered}
	<h5 class:isCorrect class:wrong={!isCorrect}>
		{#if isCorrect}You got it right!{:else}You goofed up{/if}
	</h5>
{/if}

<img class="w-11/12" src="/images/question_illustration.png" alt="caged dinosaur" />
<div class="mx-10">
	<p class="font-bold text-xl font-poppins mx-4 pr-10">{@html question.question}</p>

	<div class="flex gap-x-4 pt-8 w-11/12">
		{#each allAnswers as answer}
			<button class=" btn text-base font-body" on:click={() => checkQuestion(answer)}
				>{@html answer.answer}</button
			>
		{/each}
	</div>
</div>
{#if isAnswered}
<Blurb {live} {activeQuestion}/>
	<!-- <div>
		<button class="btn2" on:click={nextQuestion}>Next Question</button>
	</div> -->
{/if}
