class Person{
	constructor(name = 'Anonymous', age = 0){
		this.name = name;
		this.age = age; 
	}
	
	greetings(){
		return `Hi I am ${this.name}!`
	}

	getDetails(){
		return `Hi I am ${this.name}! I am ${this.age} years old. `
	}
}

class Student extends Person{
	constructor(name,age,subject){
		super(name,age);
		this.subject = subject
	}
	hasMajor(){
		return !!this.subject
	}
	getDetails(){
		let detail = super.getDetails();

		if (this.hasMajor())
			detail = detail + `My major subject is ${this.subject}.`

		return detail;
	}
}

class Traveler extends Person{
	constructor(name,age,city){
		super(name,age);
		this.city = city;
	}
	hasCity(){
		return !!this.city
	}
	getDetails(){
		let detail = super.getDetails();

		if (this.hasCity())
			detail = detail + `I am From ${this.city}.`

		return detail;
	}
}

const me = new Traveler('Lalit',23,'Delhi');
console.log(me.getDetails());

const other = new Traveler();
console.log(other.getDetails());