//set the last login timestamp onLogin
Accounts.onLogin(function() {
	Meteor.users.update({_id:Meteor.userId()}, {$set: {lastLogin: new Date()}})
});

Accounts.onCreateUser(function (options, user) {
	if (options && options.profile) {
		user.profile = options.profile;
	}
	let email = "";
	if (user.services) {

		let service = _.pairs(user.services)[0];

		let serviceName = service[0];
		let serviceData = service[1];

		if (serviceName == "facebook") {
			user.profile = {
				"firstname": serviceData.first_name,
				"lastname": serviceData.last_name
			};
			email = serviceData.email;
		}
		else if (serviceName == "google") {
			user.profile = {
				"firstname": serviceData.given_name,
				"lastname": serviceData.family_name
			};
			email = serviceData.email;
		}
	}
	user.profile.name = `${user.profile.firstname} ${user.profile.lastname}`;
	if (user.profile.name.trim() == "") {
		user.profile.name = email;
	}

	return user;
});