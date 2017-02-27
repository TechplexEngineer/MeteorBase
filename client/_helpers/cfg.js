/* global config:true */
import { Template } from 'meteor/templating';

// This variable is expsed to all templates.
export default config = {
	sysname: 'SystemName',
	version: Meteor.settings.public.APP_VERSION || '?',
	isTesting: Meteor.settings.public.IS_TESTING !== 'false',
};

Template.registerHelper('cfg', config);