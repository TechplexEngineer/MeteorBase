// import { Meteor } from 'meteor/meteor';
// import { Template } from 'meteor/templating';

// import '/imports/ui/layouts/parts/header.html';
// import '/imports/ui/layouts/parts/header.less';


Template.header.helpers({
	connected() {
		return Meteor.status().connected;
	},
});
