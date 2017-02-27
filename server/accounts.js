import { Accounts } from 'meteor/accounts-base';

Accounts.config({
	sendVerificationEmail: true,
});

const siteName = 'Maine Robotics';
Accounts.emailTemplates.siteName = siteName;
Accounts.emailTemplates.from = `${siteName} NoReply <noreply@mainerobotics.org>`;

Accounts.emailTemplates.verifyEmail.subject = function(user) {
	return `${siteName} Email Verification`;
};

Accounts.emailTemplates.resetPassword.subject = function(user) {
	return `${siteName} Password Reset`;
};