// Update Projects
let projectsArray = {
	0: {
		name: 'RESTAPI-PHP',
		url: 'https://restapi.gopibabu.live/',
	},
	1: {
		name: 'SHOPPING CART',
		url: 'https://github.com/gopibabus/ShoppingCart',
	},
	2: {
		name: 'BLOG ASSETS',
		url: 'https://www.assets.gopibabu.live/',
	},
	3: {
		name: 'JavaScript & CSS Projects',
		url: 'https://gopibabu-ui.netlify.app/#/',
	},
	4: {
		name: 'REACT APPS',
		url: 'https://gopibabu-reactapps.netlify.app/',
	},
	5: {
		name: 'MY WEBSITE',
		url: 'https://gopibabu.live',
	},
	6: {
		name: 'MYFLIX',
		url: 'https://flix.gopibabu.live/',
	},
	6: {
		name: '404 ERROR PAGE',
		url: 'https://gopibabu-404.netlify.app/',
	},
	7: {
		name: 'REACT-REDUX',
		url: 'https://gopibabu-reactredux.netlify.app/',
	},
	8: {
		name: 'MY BLOG',
		url: 'https://blog.gopibabu.live/',
	},
	9: {
		name: 'BOOTSTRAP INDEX PAGE',
		url: 'https://gopibabu-index.netlify.app/',
	},
	10: {
		name: 'MY PORTFOLIO',
		url: 'https://www.portfolio.gopibabu.live/',
	},
	11: {
		name: 'SMART BRAIN API',
		url: 'https://github.com/gopibabus/smart-brain-api',
	},
	12: {
		name: 'SMART BRAIN APP',
		url: 'https://github.com/gopibabus/smart-brain',
	},
	13: {
		name: 'MYSQL ADMIN PORTAL',
		url: 'https://mysql.gopibabu.live/',
	},
	14: {
		name: 'NEST.JS INTRO',
		url: 'https://github.com/gopibabus/LearnNextjs',
	},
	15: {
		name: 'TYPING PRACTICE APP',
		url: 'https://gopibabu-typing.netlify.app/',
	},
	16: {
		name: 'MY PHOTOS',
		url: 'https://photos.gopibabu.live/',
	},
	17: {
		name: 'YOUTUBE CLONE',
		url: 'https://github.com/gopibabus/MyTube',
	},
	18: {
		name: 'CRON JOB SETUP',
		url: 'https://github.com/gopibabus/CronJobLinux',
	},
	19: {
		name: 'SEND EMAIL APP',
		url: 'https://github.com/gopibabus/SendingEmails-PHP',
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
