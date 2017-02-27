import { Meteor } from 'meteor/meteor';

import UserFixture from '/server/fixtures/user.fixture.js';

Meteor.startup(() => {
	UserFixture();
});