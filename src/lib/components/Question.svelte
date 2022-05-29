<script>
    export let question;
    export let nextQuestion;
    import { score } from './store.js'

    let isCorrect; 
    let isAnswered = false; 
    let answers = question.incorrect_answers.map(answer => {
        return {
            answer,
            correct: false
        }
    })
    let allAnswers = [
        ...answers,
        {
            answer: question.correct_answer,
            correct: true
        }
    ]
    shuffle(allAnswers);

    function shuffle(array){
        array.sort(() => Math.random() - 0.5)
    }

    function checkQuestion(correct) {
        isAnswered = true;
        isCorrect = correct;
        if(correct) {
            score.update((val) => val + 1)
        }
    }
</script>

<style>
    h5.wrong {
        color: blueviolet;
    }
    h5.wrong {
        color: rgb(214, 68, 68);
    }
    h5.isCorrect  {
        color: rgb(131, 202, 25);
    }
    .answer {
        display: block;
    }

</style>

<h3>{@html question.question}</h3>

{#if isAnswered}
<h5 class:isCorrect class:wrong={!isCorrect}>
    {#if isCorrect}You got it right!{:else}You goofed up{/if}
</h5>
{/if}

{#each allAnswers as answer }
<button class="answer" on:click={() => checkQuestion(answer.correct)}>{@html answer.answer}</button>
{/each}
{#if isAnswered}
<div>
    <button on:click={nextQuestion}>Next Question</button>
</div>
{/if}