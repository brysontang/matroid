<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { EditorState } from '@codemirror/state';
	import { EditorView, keymap } from '@codemirror/view';
	import { defaultKeymap } from '@codemirror/commands';

	import { basicSetup } from 'codemirror';
	import { javascript } from '@codemirror/lang-javascript';

	let editorContainer: HTMLElement;
	let view: EditorView;

	const dispatch = createEventDispatcher();

	export let sketch: string;

	let updatedCode = '';

	onMount(() => {
		const startState = EditorState.create({
			doc: sketch,
			extensions: [
				keymap.of(defaultKeymap),
				basicSetup,
				javascript(),
				EditorView.updateListener.of(function (e) {
					updatedCode = e.state.doc.toString();
					// dispatch('update', e.toString());
				})
			]
		});

		view = new EditorView({
			state: startState,
			parent: editorContainer
		});
	});

	function handleClick() {
		dispatch('update', updatedCode);
	}

	// Cleanup to prevent memory leaks
	onDestroy(() => {
		view?.destroy();
	});
</script>

<div>
	<button on:click={handleClick}> Run </button>
	<div class="editor" bind:this={editorContainer} />
</div>

<style>
	/* Style your editor container as needed */
	.editor {
		height: 300px;
		width: 500px;
		border: 1px solid #ddd;
		background: #fff;
	}
</style>
