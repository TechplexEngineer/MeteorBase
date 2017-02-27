import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import User from '/lib/usermodel.js';

export function isLoggedInMixin(methodOptions) {
	const runFunc = methodOptions.run;
	methodOptions.run = function run(...args) {
		if (this.connection) {
			if (!this.userId) {
				throw new Meteor.Error('login-required', 'You must be logged in to do that.');
			}
		}
		return runFunc.apply(this, args);
	};
	return methodOptions;
}

export function isAdminMixin(methodOptions) {
	const runFunc = methodOptions.run;
	methodOptions.run = function run(...args) {
		if (this.connection) {
			if (!this.userId) {
				throw new Meteor.Error('login-required', 'You must be logged in to do that.');
			}
			if (!(new User(this.userId)).isAdmin()) {
				return new Meteor.Error('admin-required', 'You must be an admin to do that.');
			}
		}
		return runFunc.apply(this, arguments);
	};
	return methodOptions;
}
export function isAdminMixinSilent(methodOptions) {
	const runFunc = methodOptions.run;
	methodOptions.run = function run(...args) {
		if (this.connection) {
			if (!this.userId) {
				return;
			}
			if (!(new User(this.userId)).isAdmin()) {
				return;
			}
			return runFunc.apply(this, arguments);
		}
	};
	return methodOptions;
}
