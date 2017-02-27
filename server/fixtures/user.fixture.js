

export default UserFixture = function() {
	const u = {
		email: 'techplex.engineer+campreg@gmail.com',
		username:'superadmin',
		password: '1Password',
		profile: {
			firstname: 'Super',
			lastname: 'Admin',
			name: 'Super Admin',
		},
	};

	if (!Accounts.findUserByUsername(u.username)) {
		const id = Accounts.createUser(u);
		Roles.addUsersToRoles(id, ['admin']);
	}
};