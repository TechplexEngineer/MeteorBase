
FlowRouter.route('/dash', {
	name: 'userdash',
	title: 'User Dashboard',
	action: function(params) {
		BlazeLayout.render('layoutLoginRequired', {content: 'userdash'});
	}
});

Template.userdash.onCreated(function userdashOnCreated(){
	this.autorun(() => {
		//this.subscribe('pub');
	});
});
Template.userdash.onRendered(function userdashOnRendered(){});
Template.userdash.events({});
Template.userdash.helpers({
});
Template.userdash.onDestroyed(function userdashOnDestroyed(){});