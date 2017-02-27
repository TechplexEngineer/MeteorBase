/* global $ document */
// import { Template } from 'meteor/templating';
// import './admin.nav.html';
// import './nav.html';

Template.nav.onRendered(() => {
	$(document).ready(() => {
		// Initalize bootstrap dropdowns.
		$('.nav.navbar-nav .dropdown-toggle').dropdown();
	});
});
