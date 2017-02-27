import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL',
	requestPermissions: {
		google: ['email']
	},
	requestOfflineToken: {
		google: true
	},
	extraSignupFields: [
		{
			fieldName: 'firstname',
			fieldLabel: 'First name',
			inputType: 'text',
			visible: true,
			validate: function(value, errorFunction) {
				if (!value) {
					errorFunction("Please enter your first name");
					return false;
				} else {
					return true;
				}
			},
		},{
			fieldName: 'lastname',
			fieldLabel: 'Last name',
			inputType: 'text',
			visible: true,
			validate: function(value, errorFunction) {
				if (!value) {
					errorFunction("Please enter your last name");
					return false;
				} else {
					return true;
				}
			},
		}
	]
});
