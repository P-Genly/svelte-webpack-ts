<script lang="ts">
	export let name: string;
	export let devList: {name: string, firstname: string}[];
</script>

<main>
	<h1>Hello {name}!</h1>

	<h2>Liste des devs en activité</h2>
	{#each devList as developer}
		<p class="developers">{developer.name} <span>{developer.firstname}</span></p>
	{/each}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
