<script context="module" lang="ts">
	// throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");
	import { page } from '$app/stores';

	// import type { ErrorLoad } from '@sveltejs/kit';

	// export const load: ErrorLoad = ({ error, status }) => {
	// 	return {
	// 		props: {
	// 			title: `${status}: ${error.message}`
	// 		}
	// 	};
	// };
</script>

<h1>{$page.status} : {$page.error.message}</h1>


<!-- <script lang="ts">
	export let title: string;
</script>

<div class="grid min-h-[80vh] items-center">
	<div class="text-center flex flex-col gap-8">
		<div>
			<h2
				class="font-semibold bg-clip-text bg-gradient-to-br from-blue-300 to-teal-700 text-6xl text-transparent"
			>
				{title}
			</h2>
			<p class="text-gray-300">Looks like you&apos;re lost.</p>
		</div>

		<div class="flex flex-col gap-2">
			<p class="text-gray-400">It&apos;s Okay!</p>
			<div>
				<a href="/" class="btn bg-teal-600 text-xs">Home</a>
			</div>
		</div>
	</div>
</div> -->
