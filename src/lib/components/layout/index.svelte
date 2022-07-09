<script lang="ts">
	import DefaultMetaTags from './DefaultMetaTags.svelte';
	import Footer from './Footer.svelte';
</script>

<DefaultMetaTags />

<!-- <div class="bg-fixed min-h-screen bg-black scroll-smooth">
	<div class="bg-fixed bg-cream min-h-screen rounded-[130px]"> -->
<main class="min-h-screen px-8 md:pt-24 md:mx-48 no-scrollbar select-none">
	<slot />
</main>
<!-- </div>
</div> -->
