Template.adminDashOverview.onCreated(function adminDashOverviewOnCreated(){
	this.autorun(() => {
		// this.subscribe('pub');
	});
});
Template.adminDashOverview.onRendered(function adminDashOverviewOnRendered(){});
Template.adminDashOverview.events({
	'submit form'(event) {
		event.preventDefault();
	},
});
Template.adminDashOverview.helpers({});
Template.adminDashOverview.onDestroyed(function adminDashOverviewOnDestroyed(){});
