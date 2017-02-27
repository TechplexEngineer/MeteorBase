import cfg from '/client/_helpers/cfg.js';

FlowRouter.route('/', {
	name: 'home',
	title: cfg.sysname,
	action: function(params) {
		BlazeLayout.render('layout', {content: 'home'});
	}
});

Template.home.onCreated(function homeOnCreated(){
	this.autorun(() => {
		// this.subscribe('pub');
	});
});
Template.home.onRendered(function homeOnRendered(){});
Template.home.events({
	'submit form'(event) {
		event.preventDefault();
	}
});
Template.home.helpers({});
Template.home.onDestroyed(function homeOnDestroyed(){});
