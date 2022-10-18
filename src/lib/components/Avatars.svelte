<script>
	import { createEventDispatcher } from 'svelte';
	import { user } from './store.js';

	const characters = [
		{
			name: 'Expert',
			img: '/images/expert.png',
			av: '/images/expert_av.png',
			quiz: 'data/data.csv'
		},
		{
			name: 'Park Employee',
			img: '/images/park_employee.png',
			av: '/images/employee_av.png',
			quiz: 'data/data.csv'
		},
		{
			name: 'Annoying Child',
			img: '/images/annoying_child.png',
			av: '/images/annoying_child_av.png',
			quiz: 'data/data.csv'
		}
	];

	const dispatch = createEventDispatcher();

	function dispatchChoice(character) {
		dispatch('character', {
			character
		});
	}

	function chooseAvatar(character) {
		return user.set({
			character: character.name,
			av: character.av,
			score: 0,
			quiz: character.quiz
		});
	}

	//add once to onclick?
</script>

<div class="flex min-w-0 md:-space-x-4">
	{#each characters as character}
		<img
			on:click={() => chooseAvatar(character)}
			on:click={() => dispatchChoice(character)}
			class="self-start  scale-[.8] cursor-pointer w-1/3 h-auto"
			src={character.img}
			alt={character.name}
		/>
	{/each}
</div>
