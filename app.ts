sayHello()

checkAge(15, 'Jake')

checkAge(27, 'Abby')

checkAge(18, 'John')

checkAge(21, 'Charles')

let firstName: string = 'Nate';

const numofStates: number = 50;

let favoriteVeggies: string[] = [ 'Green Beans', 'Lettuce', 'Spinach', 'Onions'];


for(let b = 0; b < favoriteVeggies.length; b++) {
    console.log(favoriteVeggies[b]);
}


let pet = {
    name: 'Roux',
    breed: 'Golden Retriever'
}

interface cNames {
    age: number;
    name: string;
}

console.log(pet);


const customerNames: cNames[]  = [
{
    age: 12,
    name: 'Zachary'
},

{
    age: 15,
    name: 'Carmen'
},
{
    age: 24,
    name: 'Figueroa'
},

{
    age: 6,
    name: 'Morgan'
},

{
    age: 29,
    name: 'Courtney'
}

];

for(let c = 0; c < customerNames.length; c++) {
    checkAge(customerNames[c].age, customerNames[c].name);
}

getLength('Hello World')

function sayHello(): void {
    alert('Hello World')
}

function checkAge(age: number, name: string) {
    if (age < 21) {
        alert("Sorry " + name + ", you arent old enough to view this page!");
    }
}

function getLength(cake: any) {
    for(let d = 0; d < cake.length; d++)
    
    if (cake % 2 == 0) {
        console.log('The world is nice and even');
    }

    else {
        console.log('The world is weird and odd');
    }
}