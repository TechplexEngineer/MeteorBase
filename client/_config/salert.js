import { Meteor } from 'meteor/meteor';
import { sAlert } from 'meteor/juliancwirko:s-alert';

Meteor.startup(() => {
	sAlert.config({
		effect: 'flip',
		position: 'bottom',
		timeout: 5000, // or 'none'
		html: true,
		// onRouteClose: true,
		// stack: true,
		// or you can pass an object:
		stack: {
			spacing: 5, // in px
			limit: 3 // when fourth alert appears all previous ones are cleared
		},
		// offset: 65, // in px - added to first alert (bottom or top - depends of the pos property)
		// beep: false
		// examples:
		// beep: '/beep.mp3'  // or you can pass an object:
		// beep: {
		//     info: '/beep-info.mp3',
		//     error: '/beep-error.mp3',
		//     success: '/beep-success.mp3',
		//     warning: '/beep-warning.mp3'
		// }
	});
});