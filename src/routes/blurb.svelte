<script>
	import Avatars from '$lib/components/Avatars.svelte';

	// function resetQuiz() {
	// 	score.set(0);

	// 	activeQuestion = 0;
	// 	quiz = getQuiz();
	// }
</script>

<!-- <div class="container mx-auto box items-center">
	<div class="flex flex-col text-center ">
		<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl">
			Pick your <span class="text-purple">player</span>!
		</h1>
		<Avatars />
	</div>
</div> -->

<html lang="en">
	<body>
		<div class="grid grid-cols-2 grid-rows-1">
			<div class="align-center mt-20 justify-center flex">content</div>
			<div class="align-center mt-20 justify-center flex">
				<!-- <button on:click={resetQuiz}>Start New Quiz</button> -->
			</div>
		</div>
	</body>
</html>

<style>
	html {
		overflow: hidden;
		/* background-color: theme('colors.purple'); */
		background: linear-gradient(
			to right,
			theme('colors.purple') 0%,
			theme('colors.purple') 50%,
			theme('colors.blackish') 50%,
			theme('colors.blackish') 100%
		);
	}
	body {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background: linear-gradient(
			to right,
			theme('colors.blackish') 0%,
			theme('colors.blackish') 50%,
			theme('colors.cream') 50%,
			theme('colors.cream') 100%
		);
	}
</style>
