<script>
	import { tweened } from 'svelte/motion';
	import { user, score } from './store.js';

	// export let toFixed;
	// export let fillColor;
	import move from '$lib/utils/move.js';

	let maxValue = 100;
	let minValue = 0;

	$: value = tweened(0);
	$: $score, updateScore();

	function updateScore() {
		if ($value > 0) score.set($value);
	}
	const rectHeight = 20;
	const rectWidth = 122;
	$: rectX = $score + 2;
	const rectY = 2;
	const x = 66;
</script>

<!--   <g>
        <rect x={x} y={y} width={width} height={height} />
        <text
            x={x + width / 2}
            y={y + height / 2}
            dominant-baseline="middle"
            text-anchor="middle"
        >
            {label}
        </text>
    </g> -->
<div class="container font-janguky flex place-items-center">
	<svg class="" viewBox="0 -5 140 35">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" style="stop-color:#858039;stop-opacity:1" />
				<stop offset="50%" style="stop-color:#D0A8D7;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#B353AD;stop-opacity:1" />
			</linearGradient>
		</defs>
		{#if $score >= 0}
			<rect fill="url(#grad1)" width={rectWidth} height={rectHeight} rx="12" />
			<rect style={move(rectX, rectY)} height="16" width="18" rx="8" fill="#1F1E1E" />
			<text
				class="text-xs text-justify"
				text-anchor="middle"
				style={move(rectX + 9, rectY / 2 + 12)}
				fill="#EEEAE0">{$score}</text
			>
		{:else}
			<rect fill="url(#grad1)" width={rectWidth} height={rectHeight} rx="12" />
			<rect x={2} y={2} height="16" width="18" rx="8" fill="#1F1E1E" />
			<text x={11} y={12} class="text-xs text-justify" text-anchor="middle" fill="#EEEAE0"
				>{$score}</text
			>
		{/if}
		<text fill="black" x="0" y="30">0</text>
		<text fill="black" x="60" y="30">50</text>
		<text fill="black" x="110" y="30">100</text>
		<line x1={x} y1="-5" x2={x} y2="25" stroke="black" stroke-dasharray="3 2" />
	</svg>
</div>

<!-- style={move(rectX + 9, rectY / 2 + 12)}
style={move(rectX, rectY)}  -->
<style>
	text {
		font-size: 0.4em;
	}
</style>
