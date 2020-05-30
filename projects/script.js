// Update Projects
let projectsArray = {
	0: {
		name: 'RESTAPI-PHP',
		url: 'https://restapi.gopibabu.live/',
	},
	1: {
		name: 'Drupal 7',
		url: 'https://drupal7.gopibabu.live/',
	},
	2: {
		name: 'Blog Assets',
		url: 'https://www.assets.gopibabu.live/',
	},
	3: {
		name: 'JavaScript & CSS Projects',
		url: 'https://gopibabu-ui.netlify.app/#/',
	},
	4: {
		name: 'React App',
		url: 'https://gopibabu-reactapp.netlify.app/',
	},
	5: {
		name: 'Home Page',
		url: 'https://gopibabu.live',
	},
	6: {
		name: 'MyFlix',
		url: 'https://flix.gopibabu.live/',
	},
	6: {
		name: '404 Page',
		url: 'https://gopibabu-404.netlify.app/',
	},
	7: {
		name: 'React-Redux',
		url: 'https://gopibabu-reactredux.netlify.app/',
	},
	8: {
		name: 'My Blog',
		url: 'https://blog.gopibabu.live/',
	},
	9: {
		name: 'Index Page',
		url: 'https://gopibabu-index.netlify.app/',
	},
	10: {
		name: 'My Portfolio',
		url: 'https://www.portfolio.gopibabu.live/',
	},
	11: {
		name: 'Smart Brain API',
		url: 'https://github.com/gopibabus/smart-brain-api',
	},
	12: {
		name: 'Smart Brain App',
		url: 'https://github.com/gopibabus/smart-brain',
	},
	13: {
		name: 'MySQL Admin',
		url: 'https://mysql.gopibabu.live/',
	},
	14: {
		name: 'React Projects',
		url: 'https://gopibabu-react.netlify.app/',
	},
	15: {
		name: 'Typing Practice',
		url: 'https://gopibabu-typing.netlify.app/',
	},
	16: {
		name: 'My Photos',
		url: 'https://photos.gopibabu.live/',
	},
	17: {
		name: 'MyTube',
		url: 'https://github.com/gopibabus/MyTube',
	},
	18: {
		name: 'Cron Job - Linux',
		url: 'https://github.com/gopibabus/CronJobLinux',
	},
	19: {
		name: 'Shopping Cart',
		url: 'https://github.com/gopibabus/ShoppingCart',
	},
	20: {
		name: 'Learn Laravel',
		url: 'https://laravel.gopibabu.live/',
	},
	21: {
		name: 'Next.js',
		url: 'https://github.com/gopibabus/LearnNextjs',
	},
};

let projects1 = document.querySelector('#projects-1');
let projects2 = document.querySelector('#projects-2');

for (const prop in projectsArray) {
	if (prop % 2 === 0) {
		updateProjectInfo(
			projects1,
			projectsArray[prop].url,
			projectsArray[prop].name
		);
	} else {
		updateProjectInfo(
			projects2,
			projectsArray[prop].url,
			projectsArray[prop].name
		);
	}
}
