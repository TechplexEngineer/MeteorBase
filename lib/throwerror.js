/* global throwError:true */
import { Meteor } from 'meteor/meteor';

throwError = (error, reason, details) => {
	const err = new Meteor.Error(error, reason, details);
	if (Meteor.isClient) {
		return err;
	} else if (Meteor.isServer) {
		throw err;
	}
};