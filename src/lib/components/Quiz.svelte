<script>
    import { fade, blur, fly, slide, scale } from 'svelte/transition'
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte"
    import Question from "./Question.svelte"
    // import Modal from "./Modal.svelte"
    import { score } from './store.js'
import { transition_in } from "svelte/internal";
    let activeQuestion = 0;
    let quiz = getQuiz();
    let isModalOpen = false;

    onMount(() => {
        console.log('Mounted')
    })

    beforeUpdate(() => {
        console.log('Before Update')
    })

    afterUpdate(() => {
        console.log('After Update')
    })

    async function getQuiz() {
        const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        const quiz = await res.json();
        console.log(quiz)

        return quiz;
    }

    function nextQuestion() {
        activeQuestion = activeQuestion+1;
    }

    function resetQuiz() {
        isModalOpen = false;
        score.set(0)
        activeQuestion = 0;
        quiz = getQuiz()
    }

    // labelled statement
    $: if($score >  1) {
        isModalOpen = true;
    }
    $: questionNumber = activeQuestion + 1

</script>

<style>
    .fade-wrapper {
        position: absolute;
    }
    .container {
        min-height: 500px;
    }
</style>

<div>
    <!-- <div class="w-1/6 h-full  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">  -->
        <div class="w-20 h-20 px-8 rounded-full border inline-flex items-center justify-center bg-white text-gray-700 font-bold">
            Darwin Score: {$score}   
             </div>
        <!-- </div> -->
    <button on:click={resetQuiz}>Start New Quiz</button>
    <h3>Question #{questionNumber}</h3>
    <div class="container">
    {#await quiz}
        loading
    {:then data} 
        {#each data.results as question, index }

        {#if index === activeQuestion}
            <div in:fly={{x: 100}} out:fly|local={{x: -200}}  class="fade-wrapper">
                <Question {nextQuestion} {question} />
            </div>
        {/if}
        {/each}
    {/await}
    </div>
</div>

{#if isModalOpen}
<Modal on:close={resetQuiz}>
    <h2>You won!</h2>
    <p>Congratulations</p>
    <button on:click={resetQuiz}>Redo</button>
</Modal>
{/if}
