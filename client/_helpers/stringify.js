

Template.registerHelper('stringify', (obj) => {
	return JSON.stringify(obj, null, 4);
});