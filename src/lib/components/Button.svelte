<script>
	export let text = 'Share my death on twitter';
	export let type;
	export let click;
	let svg;
	let restart = `<svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-8.30516e-07 19L20.25 2.54552L20.25 35.4545L-8.30516e-07 19Z" fill="#D0A8D7"/>
<path d="M15 19L35.25 2.54552L35.25 35.4545L15 19Z" fill="#D0A8D7"/>
</svg>
`;

	let chart = `<svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="18.8569" width="10.2857" height="29.1429" fill="#D0A8D7"/>
<rect x="27.4286" y="5.14307" width="10.2857" height="42.8571" fill="#D0A8D7"/>
<rect x="13.7143" width="10.2857" height="48" fill="#D0A8D7"/>
</svg>`;

	let twitterIcon = `<svg width="43" height="33" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.046 25.8195C8.45403 25.6761 5.59547 22.5504 4.83522 20.0269C6.11245 20.2563 7.35926 20.199 8.63649 19.9122C8.6669 19.9122 8.69731 19.8835 8.75813 19.8549C6.2645 19.31 4.34866 18.0483 3.01061 16.0409C2.12871 14.6932 1.70297 13.2307 1.70297 11.5961C2.94979 12.227 4.25743 12.5711 5.62588 12.5998C3.74045 11.338 2.49363 9.67482 1.97666 7.55278C1.4901 5.45942 1.7942 3.45209 2.94979 1.53079C7.72419 6.83588 13.8062 9.76085 21.1655 10.2483C21.1047 9.93291 21.0743 9.61747 21.0134 9.33071C20.7702 7.38073 21.1959 5.54545 22.3211 3.88223C23.7199 1.78887 25.727 0.498445 28.3119 0.125654C31.2921 -0.333164 33.8769 0.469768 36.0361 2.44842C36.1881 2.59181 36.3098 2.62048 36.4922 2.59181C38.3168 2.21902 40.0198 1.61682 41.6315 0.727854C41.662 0.699178 41.7228 0.699178 41.7532 0.670502C41.7532 0.670502 41.7836 0.670502 41.814 0.670502C41.1146 2.62048 39.8373 4.11164 38.0431 5.20134C39.7461 5.02928 41.3883 4.59914 42.9696 3.93959L43 3.96826C42.6655 4.3984 42.331 4.79987 41.9965 5.23001C41.0537 6.31971 39.9894 7.26602 38.773 8.09763C38.6818 8.15498 38.6209 8.24101 38.6209 8.35572C38.6818 9.58879 38.6209 10.8219 38.4689 12.0549C38.1344 14.6358 37.3741 17.102 36.1881 19.4821C34.9717 21.9196 33.3904 24.1276 31.4137 26.0489C28.0382 29.318 23.9936 31.44 19.2801 32.4437C17.6683 32.7878 16.0262 32.9599 14.3536 32.9886C9.2447 33.1319 4.56153 31.9275 0.21287 29.404C0.15205 29.3754 0.0912305 29.3467 0 29.2893C3.07143 29.6048 6.02121 29.232 8.84936 28.1423C10.3395 27.5688 11.7079 26.7945 13.046 25.8195Z" fill="#EEEAE0"/>
</svg>`;

	type == 'restart' ? (svg = restart) : type === 'dashboard' ? (svg = chart) : (svg = twitterIcon);
</script>

<div class="grid-cols-2 gap-5 grid w-96">
	{#if type !== 'twitter'}
		<button
			on:click={click}
			class="bg-khaki px-4 py-2 font-semibold text-cream flex items-center space-x-2 rounded-full w-48"
		>
			{@html svg}

			<span class="text-left">{text}</span>
		</button>
	{:else}
		<button
			class="bg-purple px-4 py-2 font-semibold text-cream  flex items-center space-x-2 rounded-full w-48"
		>
			{@html svg}

			<span class="text-left">{text}</span>
		</button>
	{/if}
</div>
