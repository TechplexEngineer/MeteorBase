
//see http://stackoverflow.com/a/31868285/429544
checkIsId = function(toCheck) {
	check(toCheck, Match.Where(function(str){
		check(str, Match.Maybe(String));
		let regexp = SimpleSchema.RegEx.Id;
		let result = (!str) || regexp.test(str);
		return result;
	}));
};