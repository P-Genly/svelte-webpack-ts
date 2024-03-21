import './global.css';

import App from './App.svelte';

const app = new App({
	target: document.querySelector('.svelte'),
	props: {
		name: 'Java REF',
		devList: [
			{name: 'COGET', firstname: 'Guillaume'},
			{name: 'NAKACHE', firstname: 'Clothilde'},
			{name: 'DOBROWOLSKI', firstname: 'Franciszek'},
			{name: 'GAAYA', firstname: 'Hassen'},
			{name: 'GENLY', firstname: 'Paul'}
		]
	}
});

export default app;
