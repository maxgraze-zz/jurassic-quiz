const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","data/data.csv","favicon.png","font/JANGKUY-BlackExpanded.otf","font/JANGKUY-BoldExpanded.otf","font/JANGKUY-RegularExpanded.otf","images/annoying_child.png","images/annoying_child_av.png","images/arrow.png","images/die_illustration.png","images/dino1.png","images/employee_av.png","images/expert.png","images/expert_av.png","images/keep_moving.png","images/live_illustration.png","images/park_employee.png","images/question_illustration.png","images/social_share.png","images/start_again.png","questions.json"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png",".otf":"font/otf",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-da218563.js","imports":["_app/immutable/start-da218563.js","_app/immutable/chunks/index-acbc8b99.js","_app/immutable/chunks/index-8b7308b2.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "blurb",
				pattern: /^\/blurb\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "quiz",
				pattern: /^\/quiz\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
