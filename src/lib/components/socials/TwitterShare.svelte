<script>
	import Button from '../Button.svelte';
	export let description;
	export let siteUrl;
	export let hashtags;
	export let via1;
	export let via2;
	export let related;
	export let text;
	// export let img;

	let img = 'images/annoying_child.png';

	$: query = [
		description && `text=${encodeURIComponent(description)}`,
		siteUrl && `url=${encodeURIComponent(siteUrl)}`,
		hashtags && `hashtags=${hashtags}`,
		via1 && `via1=${encodeURIComponent(via1)}`,
		via2 && `via2=${encodeURIComponent(via2)}`,
		related && `related=${encodeURIComponent(related)}`
		// img && `related=${encodeURIComponent(img)}`
	]
		.filter(Boolean)
		.join('&');

	$: href = `https://twitter.com/intent/tweet?${query}`;

	function open(e) {
		e.preventDefault();

		const w = 600;
		const h = 400;
		const x = (screen.width - w) / 2;
		const y = (screen.height - h) / 2;
		const features = `width=${w},height=${h},left=${x},top=${y}`;

		window.open(href, '_blank', features);
	}
</script>

<a target="_blank" {href}> <Button on:click={open} type={'twitter'} {text} /> </a>
