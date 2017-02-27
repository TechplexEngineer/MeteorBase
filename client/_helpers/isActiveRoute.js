import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

isActiveRoute = function(routeName) {
	// FlowRouter route properties are not reactive unless watchPathChange.
	FlowRouter.watchPathChange();
	let route = FlowRouter.current().route.name;

	if (route == routeName) {
		return 'active';
	}
	return '';
}

isActiveParentRoute = function(routeName) {
	// FlowRouter route properties are not reactive unless watchPathChange.
	FlowRouter.watchPathChange();
	let route = FlowRouter.current().route.name;
	let priroute = route;
	if (priroute.indexOf('_') != -1) {
		priroute = priroute.substr(0, priroute.indexOf('_'))
	}
	if (priroute === routeName || route == routeName) {
		return 'active';
	}
	return '';
}


Template.registerHelper('isActiveRoute', isActiveRoute);
Template.registerHelper('isActiveParentRoute', isActiveParentRoute);
