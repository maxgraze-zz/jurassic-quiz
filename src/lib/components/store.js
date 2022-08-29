import { writable } from 'svelte/store';

export const isAnswered = writable(false)
export const score = writable(0);
export const user = writable({
	score: 0,
	character: '',
	av: ''
});

export function reset() {
	user.set({
		score: 0,
		character: '',
		av: ''
	});
}
