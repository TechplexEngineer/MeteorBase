import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const UserSmallSchema = new SimpleSchema({
	_id: {
		type: String,
		label: 'ID',
	},
	name: {
		type: String,
		label: 'Name', // @note name should be the users username
	},
	email: {
		type: String,
		label: 'Email',
		optional: true,
	},
	date: {
		type: Date,
		label: 'Date',
		optional: true,
	},
});
