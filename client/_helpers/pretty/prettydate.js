/* global PrettyDate:true*/
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import moment from 'moment';


PrettyDate = (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).format('MMM Do YYYY');
	}
	return '--';
};

PrettyDateMD = (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).format('MMM Do');
	}
	return '--';
};

PrettyDateShort = (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).format('MM/DD/YY');
	}
	return '--';
};

PrettyDateTime = (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).format('MMM Do YYYY h:mma');
	}
	return '--';
};
Template.registerHelper('prettyDate', PrettyDate);
Template.registerHelper('prettyDateMD', PrettyDateMD);

Template.registerHelper('prettyDateTime', PrettyDateTime);
Template.registerHelper('prettyDateShort', PrettyDateShort);

Template.registerHelper('prettyDateTimeLong', (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp);
	}
	return '--';
});

Template.registerHelper('prettyDateTimeShort', (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).format('M/D/YY h:mma');
	}
	return '--';
});

// use {{>reltime time=asked}} instead of this helper directly
Template.registerHelper('relativeTime', (timestamp) => {
	if (!_.isUndefined(timestamp)) {
		return moment(timestamp).fromNow();
	}
	return '--';
});

Template.registerHelper('yeardiff', (birthdate) => {
	if (!_.isUndefined(birthdate)) {
		return moment().diff(birthdate, 'years');
	}
	return '--';
});
