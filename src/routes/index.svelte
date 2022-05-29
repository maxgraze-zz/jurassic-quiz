<script>
	import CTASection from '$lib/components/samples/CTASection.svelte';
	import SomeText from '$lib/components/samples/SomeText.svelte';
</script>

<svelte:head>
	<title>sveltekit-tailwind</title>
</svelte:head>

<div class="px-6 py-12 md:px-12 text-center lg:text-left">
	<div class="container mx-auto">
	  <div class="grid lg:grid-cols-2 gap-12 flex items-center">
		<div class="mt-12 lg:mt-0">
		  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
			style="color: hsl(218, 81%, 95%)">
			Are you ready <br /><span style="color: hsl(218, 81%, 75%)">for an adventure?</span>
		  </h1>
		  <p class="text-lg" style="color: hsl(218, 81%, 95%)">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
			adipisci tenetur repudiandae rerum quos.
		  </p>
		</div>
		<div class="mb-12 lg:mb-0">
		  <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
			style="padding-top: 56.25%">
			<iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
			  src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
			  allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
		  </div>
		</div>
	  </div>
	</div>
  </div>
  
<div class="flex flex-col gap-8 min-h-[80vh] justify-center items-center text-center">
	<SomeText />
	<CTASection />
</div>
