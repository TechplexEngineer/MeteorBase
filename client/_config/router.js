import cfg from '/client/_helpers/cfg.js';

// When rendering a route, let's update the title
FlowRouter.triggers.enter([() => {
	const title = FlowRouter.current().route.options.title;
	let out = '';
	if (title) {
		if (_.isFunction(title)) {
			out = title.apply(this, [FlowRouter.current().params]);
		} else {
			out = title;
		}

		out = `${out} - ${cfg.sysname}`;
	} else {
		console.warn('Route %s does not have a title attribute', FlowRouter.current().route.name);
		out = cfg.sysname;
	}
	document.title = out;
}]);

FlowRouter.notFound = {
	action: () => {
		BlazeLayout.render('layout', {content: 'notFound'});
	},
};