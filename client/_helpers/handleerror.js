

handleError = function(error) {
	if (error.reason) {
		sAlert.error(error.reason);
	} else {
		sAlert.error('An internal error orccured'); //@todo what should we ask the user to do?
		console.log(error);
	}
}

success = function(message) {
	sAlert.success(message);
}