<script>
	import Quiz from '$lib/components/Quiz.svelte';
	import Avatars from '$lib/components/Avatars.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import ChooseAdventure from '$lib/components/ChooseAdventure.svelte';
	import { onMount } from 'svelte';
	import doPost from '$lib/utils/post';

	// const data = {
	// 	id: 1,
	// 	character: 'Expert',
	// 	score: 80
	// };

	// onMount(async () => {
	// 	await doPost(data);
	// });

	// let showBlurb = false;
	import Meta from '$lib/components/Meta.svelte';
	import { component } from '$lib/components/store';

	let live = false;
	let quizData = '';

	const colors = {
		purple: '#B353AD',
		khaki: '#858039',
		cream: '#EEEAE0',
		pink: '#D0A8D7',
		blackish: '#1F1E1E'
	};

	function handleAvatar(event) {
		component.update((val) => (val = 'quiz'));
		if (event.detail.character.name === 'Annoying Child') quizData = 'data/data.csv';
		else quizData = 'data/data.csv';
	}

	let htmlBg;
	onMount(() => {
		//  doPost()
		htmlBg = document.querySelector('html');
	});
</script>

<!-- <SocialShare/> -->
<Meta img="annoying_child" />

<!-- <SocialShare/> -->
<Meta img="annoying_child" />

<!-- {#if show === 'chooseAdventure'}
	<ChooseAdventure on:click={handleComponent} on:mode={handleMode} /> -->
{#if $component === 'avatar'}
	<div class="mx-auto text-center container ">
		<!-- <div class="flex flex-col text-center "> -->
		<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl">
			Pick your <span class="text-purple">player</span>!
		</h1>

		<Avatars on:character={handleAvatar} />
	</div>
{:else}
	<Quiz {quizData} />
{/if}
