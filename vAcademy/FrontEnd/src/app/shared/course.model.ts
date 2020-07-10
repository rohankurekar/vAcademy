export class Course {
	constructor(
		public name:string,
		public duration:string,
		public description:string,
		public price: number,
		public imageurl:string,
		public lesson:[[],[],[]]
	) {} 
}