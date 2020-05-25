let templatesArray = {
	0: {
		name: 'PHP i18n',
		url: 'https://github.com/gopibabus/PHPi18nTemplate',
	},
	1: {
		name: 'PHP Project',
		url: 'https://github.com/gopibabus/PHPProjectTemplate',
	},
	2: {
		name: 'Jest + JavaScript',
		url: 'https://github.com/gopibabus/JestTemplate',
	},
	3: {
		name: 'ESlint + Prettier',
		url: 'https://github.com/gopibabus/ESlintPrettierTemplate',
	},
	4: {
		name: 'Timeline',
		url: 'https://github.com/gopibabus/TimelineTemplate',
	},
	5: {
		name: 'Webpack Demo',
		url: 'https://github.com/gopibabus/WebpackDemo',
	},
	6: {
		name: 'Laravel + Vue',
		url: 'https://github.com/gopibabus/LaravelVueSetup',
	},
	7: {
		name: 'Docsify Template',
		url: 'https://github.com/gopibabus/DocTemplate',
	},
	8: {
		name: 'React + TS + Jest',
		url: 'https://github.com/gopibabus/ReactTSJestTemplate',
	},
	9: {
		name: 'Parcel',
		url: 'https://github.com/gopibabus/parcelTemplate',
	},
	9: {
		name: 'Webpack',
		url: 'https://github.com/gopibabus/webpackTemplate',
	},
	10: {
		name: 'WebComponents',
		url: 'https://github.com/gopibabus/webComponents',
	},
	11: {
		name: 'PHPUnit',
		url: 'https://github.com/gopibabus/PHPUnitTemplate',
	},
};

let template1 = document.querySelector('#template-1');
let template2 = document.querySelector('#template-2');

for (const prop in templatesArray) {
	if (prop % 2 === 0) {
		updateProjectInfo(
			template1,
			templatesArray[prop].url,
			templatesArray[prop].name
		);
	} else {
		updateProjectInfo(
			template2,
			templatesArray[prop].url,
			templatesArray[prop].name
		);
	}
}
