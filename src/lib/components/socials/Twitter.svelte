<script>
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';

	export let hashtags = []; // array of hashtags exclude '#' e.g. ['svelte', 'askRodney']
	export let quote = undefined;
	export let related = []; // array of Twitter users (including '@')
	export let title; // text in Tweet
	export let siteUrl;
	export let via = ''; // include '@' e.g. '@askRodney'

	let img = 'images/annoying_child.png';
	const TWITTER_BLUE = '#00aced';

	const baseUrl = 'https://twitter.com/share';
	const parametersObject = {
		siteUrl,
		...(hashtags.length > 0 ? { hashtags: hashtags.join(',') } : {}),
		quote,
		text: title,
		...(related.length > 0 ? { related: related.join(',') } : {}),
		...(via.length > 0 ? { via: via.slice(1) } : {})
	};

	const params = Object.entries(parametersObject)
		.filter(([, value]) => value ?? false)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');

	const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;

	function handleClick() {
		const config = {
			height: 550,
			width: 400,
			location: 'no',
			toolbar: 'no',
			status: 'no',
			directories: 'no',
			menubar: 'no',
			scrollbars: 'yes',
			resizable: 'no',
			centerscreen: 'yes',
			chrome: 'yes'
		};
		return window.open(
			urlWithParameters,
			'',
			Object.keys(config)
				.map((key) => `${key}=${config[key]}`)
				.join(',')
		);
	}
</script>

<button on:click={handleClick}><TwitterIcon colour={TWITTER_BLUE} width={48} /></button>

<style>
	button {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}
	@media (prefers-reduced-motion: reduce) {
		button {
			transition: all 2s ease-in-out;
		}
	}

	button:focus,
	button:hover {
		transform: scale(1.1);
	}
	/* @media screen and (max-width: $desktop-breakpoint) {
		button {
			padding-left: $spacing-2;
			padding-right: $spacing-2;
		}
	} */
</style>
