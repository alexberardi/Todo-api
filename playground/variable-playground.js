var person = {
	name: 'Alex',
	age: 21
};

function updatePerson(obj){
	obj.age = 24;
}

updatePerson(person);

console.log(person);

//array examples

var arr = [15, 37];

function addGrade(arr2){
	arr2.push(39);
}
addGrade(arr);
console.log(arr);