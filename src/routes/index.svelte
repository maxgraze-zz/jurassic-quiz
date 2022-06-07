<script>
	let box;
	function scrollToTop() {
		box.scrollIntoView();
	}
	const scrollToElement = (selector) => {
		const element = document.querySelector(selector);
		if (!element) return;
		let position = element.getBoundingClientRect().top;
		let offset = position + window.pageYOffset;
		window.scrollTo({
			top: offset,
			behavior: 'smooth'
		});
	};
	let y;
</script>

<svelte:head>
	<title>sveltekit-tailwind</title>
</svelte:head>
<!-- <svelte:window bind:scrollY={y} /> -->
<div class="container mx-auto box  " bind:this={box}>
	<div class="flex flex-col text-center items-center ">
		<h1
			class="basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
		>
			Are you ready <br /><span style="color: hsl(218, 81%, 75%)">for an adventure?</span>
		</h1>
		<p class="text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur adipisci
			tenetur repudiandae rerum quos.
		</p>

		<div class="flex flex-col min-h-[40vh] gap-8  justify-center items-center text-center">
			<a href={'#'} on:click|preventDefault={() => scrollToElement('#s1')}
				><img src="/images/arrow.png" alt="down arrow" /></a
			>
		</div>
		<p class="text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptas accusamus beatae nam
			aspernatur placeat laudantium. Corporis itaque magnam eum aperiam assumenda possimus
			blanditiis recusandae incidunt inventore tempora voluptates cumque nihil, labore culpa, quae
			iure quisquam nisi dolores excepturi id ducimus necessitatibus expedita officia laborum!
			Similique qui modi ullam doloribus sed dolorum tempore, labore dolore deleniti distinctio
			voluptas facere hic, delectus et maxime eligendi nobis odit at aperiam placeat impedit. Iste
			architecto saepe, alias atque illo quasi repudiandae quos at nisi. Aliquid, odit. Vitae,
			consectetur placeat! Repellendus eaque doloribus magni alias labore? Laudantium fugiat iusto
			nisi iste eos doloremque earum odit itaque a. Rerum recusandae eos earum atque illo, excepturi
			quam sunt quisquam nulla minus officia cum fuga, ex, quasi repellat ducimus. Eius corrupti
			doloribus veniam officiis praesentium at quo distinctio maiores iure nihil maxime illum
			perferendis repellendus iste voluptatem commodi unde aliquid explicabo, beatae esse natus
			deleniti fugit obcaecati sed! Totam quae quaerat dolor ducimus tenetur architecto, blanditiis
			qui rerum quos nostrum enim natus fugit esse tempore, quasi harum eaque, ex perspiciatis et
			explicabo vero cumque voluptatibus doloremque. Aliquam, laboriosam. Obcaecati, maiores totam
			hic modi voluptatibus, excepturi praesentium esse assumenda eos quas, laborum quisquam
		</p>
		<p id="s1">
			accusamus harum ipsam corrupti impedit suscipit at sit! Saepe voluptates quibusdam expedita
			minima culpa provident, ut eum, aliquam velit vel quia debitis nisi optio, hic natus. Pariatur
			voluptatibus, autem rem deleniti exercitationem numquam nam saepe dolores optio nulla odit
			laudantium facilis ut? Corporis sapiente adipisci, commodi temporibus beatae dolor, tempora
			rerum ducimus perferendis veritatis facere quia cumque nisi? Enim incidunt debitis ipsam
			molestiae officiis culpa dolore est nulla eaque molestias earum assumenda iusto aspernatur,
			modi possimus iure! Aspernatur error, aperiam voluptates magnam praesentium sequi accusantium
			obcaecati delectus facere dicta doloribus nobis fugiat? Voluptates quasi magni accusantium
			laborum placeat tempore asperiores ex amet dicta recusandae fuga minima, id obcaecati, itaque
			dolor numquam quo, commodi quisquam eos nam dolore vitae aspernatur! Eaque, voluptas ipsa
			repellat inventore quaerat, id alias nam distinctio deserunt nulla iste dolores corrupti! Sit
			aliquid cum explicabo, ea nemo asperiores, alias, qui libero blanditiis veritatis maxime
			mollitia voluptatem at dicta rem soluta perferendis ratione. Expedita saepe incidunt sunt,
			cumque, excepturi rerum facere laudantium repudiandae iste quis animi neque repellat
			voluptatum doloremque perspiciatis dolorem alias esse corporis maxime quaerat! Voluptatum
			sequi cum culpa nulla accusamus dignissimos! Unde aliquid possimus dicta incidunt officiis
			perspiciatis ex corporis ut, quaerat molestiae illo deserunt, asperiores consectetur.
			Consectetur, asperiores.
		</p>
	</div>
	<button on:click={scrollToTop}> SCROLL TO TOP </button>
</div>
<!-- <div class="h-96" id="seccion1"><h1>Seccion 1</h1></div> -->
