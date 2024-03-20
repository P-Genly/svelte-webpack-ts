import './global.css';

import App from './App.svelte';

// @ts-ignore
const app = new App({
	target: document.body,
	props: {
		name: 'test'
	}
});

export default app;
