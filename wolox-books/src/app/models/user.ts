export class User {
	constructor(
		private name: string,
		private lastName: string,
		private email: string,
		private password: string,
		private passwordConfirmation: string
	) {}

	toJson(){
		return {
			first_name: this.name,
			last_name: this.lastName,
			email: this.email,
			password: this.password,
			password_confirmation: this.passwordConfirmation
		};
	}
}
