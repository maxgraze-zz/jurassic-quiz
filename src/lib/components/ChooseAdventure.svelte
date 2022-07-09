<script>
	import Mode from '$lib/components/Mode.svelte';
	import SpoilerStar from './images/spoilerStar.svelte';
	import RegStar from './images/regStar.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function dispatchMode(adventure) {
		console.log(adventure);
		dispatch('mode', {
			adventure
		});
	}
</script>

<div class="flex flex-col text-center container justify-content align-items ">
	<!-- <div class="flex flex-col text-center "> -->
	<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl ">
		Choose your <span class="text-purple">adventure</span>!
	</h1>
	<p class="font-body text-lg">
		CHOOSE IF YOU WANT TO INCLUDE LAST JURASSIC WORLD’S <br />MOVIE SPOILERS IN THE GAME
	</p>
	<div class="flex gap-8 justify-center mt-20">
		<div
			on:click={() => dispatchMode('spoiler')}
			class="bg-blackish text-cream w-5/12 h-96 text-center relative rounded-[150px] cursor-pointer"
		>
			<div class=" pt-16">
				<h1 class=" font-janguky text-3xl pb-4">all <br />movies <br />included</h1>
				<p>
					Jurassic Park<br />
					The Lost World: Jurassic Park <br />
					Jurassic Park III <br />
					Jurassic World <br />
					Jurassic World: Fallen<br />
					Kingdom Jurassic World: Dominion
				</p>
			</div>
			<SpoilerStar />
		</div>
		<div
			on:click={() => dispatchMode('regular')}
			class="bg-purple text-blackish w-5/12 h-96 text-center relative rounded-[150px] cursor-pointer"
		>
			<div class="pt-16">
				<h1 class=" font-janguky text-3xl pb-4">last <br />movie <br />excluded</h1>
				<p>
					Jurassic Park<br />
					The Lost World: Jurassic Park <br />
					Jurassic Park III <br />
					Jurassic World <br />
					Jurassic World: Fallen<br />
				</p>
			</div>
			<RegStar />
		</div>
	</div>
</div>
