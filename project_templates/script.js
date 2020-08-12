let templatesArray = {
	0: {
		name: 'PHP i18n',
		url: 'https://github.com/gopibabus/php-i18n-template',
	},
	1: {
		name: 'PHP Project',
		url: 'https://github.com/gopibabus/php-project-template',
	},
	2: {
		name: 'Docsify Template',
		url: 'https://github.com/gopibabus/doc-template',
	},
	3: {
		name: 'React Template',
		url: 'https://github.com/gopibabus/react-template',
	},
	4: {
		name: 'Node.js Template',
		url: 'https://github.com/gopibabus/nodejs-template',
	},
	5: {
		name: 'JavaScript Template',
		url: 'https://github.com/gopibabus/javascript-project-template',
	},
	6: {
		name: 'Cron Job Template',
		url: 'https://github.com/gopibabus/cronjob-template',
	},
	7: {
		name: 'Simple Project Template',
		url: 'https://github.com/gopibabus/project-template',
	},
};

let template1 = document.querySelector('#template-1');
let template2 = document.querySelector('#template-2');

for (const prop in templatesArray) {
	if (prop % 2 === 0) {
		updateProjectInfo(template1, templatesArray[prop].url, templatesArray[prop].name);
	} else {
		updateProjectInfo(template2, templatesArray[prop].url, templatesArray[prop].name);
	}
}
