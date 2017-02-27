FlowRouter.route('/admin/dashboard', {
	name: 'admin',
	title: 'Admin Dashboard',
	action: function(params) {
		BlazeLayout.render('layoutAdminRequired', {content: 'admin', subcontent: 'adminDashOverview'});
	}
});
FlowRouter.route('/admin', {
	name: 'adminredir',
	title: 'Admin Dashboard',
	action: function(params) {
		FlowRouter.go('admin');
	}
});

Template.admin.onCreated(function adminOnCreated(){
	this.autorun(() => {
		// this.subscribe('pub');
	});
});
Template.admin.onRendered(function adminOnRendered(){});
Template.admin.events({
});
let pages = [
	{
		name: 'Dashboard',
		route: 'admin', //note its recommeded that this (1)
		nested: [
			{
				name: 'Overview',
				route: 'admin', //exactly matches this (2)
			},
			{
				name: 'Summary',
				route: 'admin_Summary', //and these start with (1)_ for the active tab code to work.
			}
		],
	},{
		name: 'Lorem ipsum',
		route: 'adminLorem',
		nested: [
			{
				name: 'Lorem List',
				route: 'adminLorem',
			},{
				name: 'Add New Lorem',
				route: 'adminLorem_New',
			},
		],
	},
];

Template.admin.helpers({
	pages() {
		return pages;
	},
	subpages() {
		// FlowRouter route properties are not reactive unless watchPathChange.
		FlowRouter.watchPathChange();
		let priroute = FlowRouter.current().route.name;
		if (priroute.indexOf('_') != -1) {
			priroute = priroute.substr(0, priroute.indexOf('_'))
		}

		let activepage = _.findWhere(pages, {route:priroute});
		return activepage.nested;
	}
});
Template.admin.onDestroyed(function adminOnDestroyed(){});
