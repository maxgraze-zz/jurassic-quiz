<script>
	import CTASection from '$lib/components/samples/CTASection.svelte';
	import SomeText from '$lib/components/samples/SomeText.svelte';
	import Arrow from '$lib/components/images/Arrow.svelte';
	//flex flex-col gap-8 min-h-[80vh]
</script>

<svelte:head>
	<title>sveltekit-tailwind</title>
</svelte:head>
<!-- <div class="text-center bg-cream bg-contain rounded-[60px] lg:text-left"> -->
<div class="container mx-auto ">
	<div class="grid lg:grid-cols-2 gap-12 flex items-center ">
		<div class="mb-12 lg:mb-0">
			<div class="embed-responsive embed-responsive-16by9 relative w-full rounded-lg shadow-lg" />
		</div>
		<!--overflow-hidden-->
		<div class="mt-12 lg:mt-0">
			<h1 class="text-h1 font-janguky md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
				Are you ready <br /><span style="color: hsl(218, 81%, 75%)">for an adventure?</span>
			</h1>
			<p class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur adipisci
				tenetur repudiandae rerum quos.
			</p>
		</div>
	</div>
	<div class="flex flex-col min-h-[40vh] gap-8  justify-center items-center text-center">
		<a href=""><img src="/images/arrow.png" alt="down arrow" /></a>
	</div>
</div>
<!-- </div> -->
