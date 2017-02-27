/* global pathFor:true */
/* eslint no-underscore-dangle: ["error", { "allow": ["_routesMap"] }] */
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { _ } from 'meteor/underscore';
// import { EJSON } from 'meteor/ejson';
// import { Template } from 'meteor/templating';


pathFor = function pathFor(imputs) {
	let options = {};

	let routeName = imputs;

	if (arguments.length > 1) {
		routeName = arguments[0];
		options = arguments[1] || {};
	}

	// options = options && options.hash; //@todo
	// @todo steal ideas from https://git.io/vmjNG

	const data = {};
	const query = options.query || {};
	const re = /:([^\/]+)/g;

	const route = FlowRouter._routesMap[routeName];
	if (typeof route === 'undefined') {
		console.warn('RouteName: %s not found', routeName);
	} else {
		const keys = route.path.match(re);
		_.each(keys, (k) => {
			const key = k.replace(':', ''); // @note this assumes there is only one :
			if (_.has(options.hash, key)) {
				data[key] = EJSON.clone(options.hash[key]);
			}
		});
		if (_.size(data) < (keys && keys.length)) {
			console.warn(routeName, 'Is missing one or more required route parameters');
		}
	}
	const path = FlowRouter.path(routeName, data, query);

	return path;
};

Template.registerHelper('pathFor', pathFor);