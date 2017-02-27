/* eslint "no-underscore-dangle": ["error", { "allow": ["_id", "_schema", "_transform"] }] */
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';

// const extend = function extend(reciever, provider) {
// 	Object.keys(provider).forEach((prop) => {
// 		if (provider && provider.hasOwnProperty(prop)) {
// 			reciever[prop] = provider[prop];
// 			// @note this function needs to operate on receiver
// 		}
// 	});
// };

const extend = function extend(reciever, provider) {
    for (prop in provider){
        if (provider.hasOwnProperty(prop)){
            reciever[prop] = provider[prop];
        }
    }
};

/**
 * @summary Represents a User
 * @class User
 * @param {Object} document An object representing a conversation ususally a Mongo document
 */
export default class User {
	constructor(arg) {
		if (!arg) {
			throw new Meteor.Error(
				'login-required',
				'You must be logged in.',
				'An undefined value was passed to the User class constructor.');
		}
		let doc = arg;
		if (typeof arg === 'string') {
			doc = Meteor.users.findOne(arg);
		}
		extend(this, doc);
		// Object.assign(this, document);
	}
	/**
	 * @summary The personal name of the user account.
	 * @memberOf User
	 * @name displayName
	 * @version 1.2.3
	 * @returns {String} A name representation of the user account
	 * @example
	 * ```js
	 * var selectedUser = Meteor.users.findOne({username: "janedoe"});
	 * console.log(selectedUser.displayName());
	 * ```
	 */
	displayName() {
		return this.isSelf() ? 'You' : this.username;
	}

	/**
	 * Return the user's username/
	 * If the username contains an @ symbol, any characters after and including
	 * are removed.
	 * @return {[type]} [description]
	 */
	getUsername() {
		let username = this.username;
		if (_.isUndefined(username) && this.profile && this.profile.name) {
			username = this.profile.name;
		} else {
			username = this.defaultEmail();
		}
		if (username && username.indexOf('@') !== -1) {
			username = username.substr(0, username.indexOf('@'));
		}
		return username;
	}

	/**
	 * @summary Check if the this user is the current logged in user or the specified user.
	 * @memberOf User
	 * @name isSelf
	 * @version 1.2.3
	 * @returns {Boolean}
	 */
	isSelf(user) {
		const userId = (user && user._id) || Meteor.userId();

		if (this._id === userId) {
			return true;
		}
		return false;
	}

	/**
	 * @summary Gets the default email that an account is associated.
	 * Defined as the first email in the emails array.
	 * @memberOf User
	 * @name defaultEmail
	 * @version 1.2.3
	 * @returns {String} or emptystring if no verified email
	 * @example
	 * ```js
	 * var selectedUser = Meteor.users.findOne({username: "janedoe"});
	 * console.log(selectedUser.defaultEmail());
	 * ```
	 */
	defaultEmail() { //@todo
		if (this.registered_emails && this.registered_emails[0] && this.registered_emails[0].address) {
			return this.registered_emails[0].address;
		}

		if (this.emails && this.emails[0] && this.emails[0].address) {
			return this.emails[0].address;
		}
		if (this.services && this.services.google && this.services.google.email) {
			return this.services.google.email;
		}
		return '';
	}

	getUserSmallSchema() {
		return {
			_id: this._id,
			name: this.getUsername() || "No Username!",
			email: this.defaultEmail(),
			date: new Date(),
		};
	}

	isAdmin() {
		return Roles.userIsInRole(this._id, 'admin');
	}
}

// Add the transform to the collection since Meteor.users is pre-defined by the accounts package
Meteor.users._transform = function usersTransform(document) {
	return new User(document);
};