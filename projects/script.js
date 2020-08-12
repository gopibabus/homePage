// Update Projects
let projectsArray = {
	0: {
		name: 'Node.js App',
		url: 'https://github.com/gopibabus/node-app',
	},
	1: {
		name: 'React Apps',
		url: 'https://github.com/gopibabus/react-apps',
	},
	2: {
		name: 'Sending Emails - PHP',
		url: 'https://github.com/gopibabus/sending-emails-php',
	},
	3: {
		name: 'Laravel App',
		url: 'https://github.com/gopibabus/laravel-app',
	},
	4: {
		name: 'Sorting App',
		url: 'https://github.com/gopibabus/sorting-app',
	},
	5: {
		name: 'Maps Project',
		url: 'https://github.com/gopibabus/maps-project',
	},
	6: {
		name: 'CSS Apps',
		url: 'https://github.com/gopibabus/css-apps',
	},
	7: {
		name: 'MyFlix',
		url: 'https://github.com/gopibabus/myflix',
	},
	8: {
		name: 'JavaScript Apps',
		url: 'https://github.com/gopibabus/javascript-apps',
	},
	9: {
		name: 'ReactPHP App',
		url: 'https://github.com/gopibabus/reactphp-app',
	},
	10: {
		name: 'Symfony App',
		url: 'https://github.com/gopibabus/symfony-app',
	},
	11: {
		name: 'Blog Assets',
		url: 'https://github.com/gopibabus/blog-assets',
	},
	12: {
		name: 'RestAPI - PHP',
		url: 'https://github.com/gopibabus/restapi-php',
	},
	13: {
		name: 'Typing Practice App',
		url: 'https://github.com/gopibabus/typing-practice-app',
	},
	14: {
		name: 'Shopping Cart',
		url: 'https://github.com/gopibabus/shopping-cart',
	},
};

let projects1 = document.querySelector('#projects-1');
let projects2 = document.querySelector('#projects-2');

for (const prop in projectsArray) {
	if (prop % 2 === 0) {
		updateProjectInfo(projects1, projectsArray[prop].url, projectsArray[prop].name);
	} else {
		updateProjectInfo(projects2, projectsArray[prop].url, projectsArray[prop].name);
	}
}
