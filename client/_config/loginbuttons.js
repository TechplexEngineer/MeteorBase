/* global accountsUIBootstrap3:true */
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Template._loginButtonsLoggedInDropdown.events({
// 	'click #login_dash'() {
// 		FlowRouter.go('team_dash');
// 	},
// });

// change the login/register button wording
accountsUIBootstrap3.map('en', {
	loginButtonsLoggedOutDropdown: {
		signIn: 'Login',
		up: 'Register',
	},
});

// send the user home on logout
accountsUIBootstrap3.logoutCallback = (error) => {
	if (error) {
		console.log('Error:', error);
	}
	FlowRouter.go('home');
};
