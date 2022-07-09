<script>
	import Avatars from '$lib/components/Avatars.svelte';
	import Answer from './answer.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	let box;
	function scrollToTop() {
		box.scrollIntoView();
	}
	// const scrollToElement = (selector) => {
	// 	const element = document.querySelector(selector);
	// 	if (!element) return;
	// 	let position = element.getBoundingClientRect().top;
	// 	let offset = position + window.pageYOffset;
	// 	window.scrollTo({
	// 		top: offset,
	// 		behavior: 'smooth'
	// 	});
	// };

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView();
	}

	// let data = csv('$lib/components/data/data.csv').then((d) => {
	// 	console.log(d);
	// });
</script>

<svelte:head>
	<title>sveltekit-tailwind</title>
</svelte:head>
<!-- <svelte:window bind:scrollY={y} /> -->
<!-- <html lang="en" class="black-background"> -->
<div class="container mx-auto box items-center" bind:this={box}>
	<div class="flex flex-col min-h-screen text-center ">
		<h1 class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl ">
			How would <br />you <span class="text-purple">die</span> in <br />Jurassic movies?
		</h1>
		<p class="text-lg pt-6 uppercase">A data game by Max Graze & Datacitron</p>

		<div class="flex flex-col min-h-[20vh] gap-8 pt-6 justify-center items-center text-center">
			<!-- <a href={'#'} on:click|preventDefault={() => scrollToElement('#s1')} -->
			<a href="#s1" on:click={scrollIntoView}> <img src="/images/arrow.png" alt="down arrow" /></a>
		</div>
	</div>
	<section class="mx-auto pt-28" id="s1">
		accusamus harum ipsam corrupti impedit suscipit at sit! Saepe voluptates quibusdam expedita
		minima culpa provident, ut eum, aliquam velit vel quia debitis nisi optio, hic natus. Pariatur
		voluptatibus, autem rem deleniti exercitationem numquam nam saepe dolores optio nulla odit
		laudantium facilis ut? Corporis sapiente adipisci, commodi temporibus beatae dolor, tempora
		rerum ducimus perferendis veritatis facere quia cumque nisi? Enim incidunt debitis ipsam
		molestiae officiis culpa dolore est nulla eaque molestias earum assumenda iusto aspernatur, modi
		possimus iure! Aspernatur error, aperiam voluptates magnam praesentium sequi accusantium
		obcaecati delectus facere dicta doloribus nobis fugiat? Voluptates quasi magni accusantium
		laborum placeat tempore asperiores ex amet dicta recusandae fuga minima, id obcaecati, itaque
		dolor numquam quo, commodi quisquam eos nam dolore vitae aspernatur! Eaque, voluptas ipsa
		repellat inventore quaerat, id alias nam distinctio deserunt nulla iste dolores corrupti! Sit
		aliquid cum explicabo, ea nemo asperiores, alias, qui libero blanditiis veritatis maxime
		mollitia voluptatem at dicta rem soluta perferendis ratione. Expedita saepe incidunt sunt,
		cumque, excepturi rerum facere laudantium repudiandae iste quis animi neque repellat voluptatum
		doloremque perspiciatis dolorem alias esse corporis maxime quaerat! Voluptatum sequi cum culpa
		nulla accusamus dignissimos! Unde aliquid possimus dicta incidunt officiis perspiciatis ex
		corporis ut, quaerat molestiae illo deserunt, asperiores consectetur. Consectetur, asperiores.
	</section>
	<div class="w-full relative flex ">
		<img class="" src="/images/dino1.png" alt="dino" />
		<a href="/quiz"><button class="btn absolute bottom-1/4 left-44">Start Playing!</button></a>
	</div>
	<!-- <button on:click={scrollToTop}> SCROLL TO TOP </button> -->
</div>
<!-- </html> -->

<!-- <div class="h-96" id="seccion1"><h1>Seccion 1</h1></div> -->
<style>
	section {
		min-height: 100vh;
	}
</style>
