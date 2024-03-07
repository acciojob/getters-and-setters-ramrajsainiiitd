//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
}
	// getter for name
	get name(){
		return this._name;
	}
	//setter for age
	set age(age){
		this._age=age;
	}
}

class Student extends Person {
	// method to log studying 
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
