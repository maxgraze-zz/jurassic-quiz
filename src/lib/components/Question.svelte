<script>
	import { user, score } from './store.js';
	import Blurb from './Blurb.svelte';
	import { createEventDispatcher, onDestroy, afterUpdate } from 'svelte';
	export let question;

	const dispatch = createEventDispatcher();
	let isCorrect;
	$: currentQuestion = true;

	onDestroy(() => console.log('question destroy'));
	afterUpdate(() => console.log('question afterupdate'));
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
		// isAnswered.update(n => n = true)
		currentQuestion = false;
		isCorrect = answer.correct;
		dispatch('answer', {
			isCorrect
		});
		score.update((val) => val + answer.points);
	}
</script>

<img class="w-11/12" src="/images/question_illustration.png" alt="caged dinosaur" />
<div class="px-10 mx-auto w-2/3">
	<p class="font-bold text-xl font-poppins mx-4 pr-10">{@html question.question}</p>

	<div class="flex gap-x-4 pt-8 w-11/12">
		{#each allAnswers as answer}
			<button class=" btn hover:gradient text-base font-body" on:click={() => checkQuestion(answer)}
				>{@html answer.answer}</button
			>
		{/each}
	</div>
</div>
{#if !currentQuestion}
	<Blurb {isCorrect} on:nextQuestion bind:currentQuestion />
{/if}
