// Update Projects
let projectsArray = {
	0: {
		name: 'Learn Bootstrap',
		url: 'https://gopibabu-bootstrap.netlify.app/',
	},
	1: {
		name: 'Learn Laravel',
		url: 'https://laravel.gopibabu.live/',
	},
	2: {
		name: 'Dev Tools',
		url: 'https://gopibabu-devtools.netlify.app/#/',
	},
	2: {
		name: 'Dev Resources',
		url: 'https://notes.gopibabu.live/#/',
	},
	3: {
		name: 'JavaScript',
		url: 'https://gopibabu-js.netlify.app/',
	},
	4: {
		name: 'MySQL',
		url: 'https://gopibabu-mysql.netlify.app/#/',
	},
	4: {
		name: 'PHP',
		url: 'https://gopibabu-php.netlify.app/#/',
	},
	5: {
		name: 'CSS',
		url: 'https://gopibabu-css.netlify.app/#/',
	},
	6: {
		name: 'Gopi Notes',
		url: 'https://gopi-notes.netlify.app/#/',
	},
	7: {
		name: 'Laravel Docs',
		url: 'https://gopibabu-laravel.netlify.app/#/',
	},
	8: {
		name: 'Dev Tools - old',
		url: 'https://github.com/gopibabus/DeveloperTools',
	},
	9: {
		name: 'Next.js',
		url: 'https://github.com/gopibabus/LearnNextjs',
	},
	10: {
		name: 'TypeScript',
		url: 'https://github.com/gopibabus/LearnTypeScript',
	},
	11: {
		name: 'DataStructures & Algorithms',
		url: 'https://gopibabu-ds-alg.netlify.app/#/',
	},
	12: {
		name: 'Public APIs',
		url: 'https://github.com/gopibabus/Public-APIs',
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
