export class User {
	constructor(
		public id: number,
		public firstName:string,
		public lastName:string,
		public email: string,
		public mobileNumber:string,
		public password:string,
		public admin:boolean,
		public enrolledCourses
		//private _token: string,
		//private _tokenExpirationData: Date
	) {} 

	// get token() {
	// 	if( !this._tokenExpirationData || new Date() > this._tokenExpirationData){
	// 		return null;
	// 	}
	// 	return this._token;
	// }
}