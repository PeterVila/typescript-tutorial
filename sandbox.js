//TYPES
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20; //Typescript will tell us we can't assign this
character = 'luigi'; //This will work, no error
//arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3); //Won't let us push a different type to the array
// names[0] = 3; //Same, due to this it will not compile
// names = 'hello'; variable type can't change either
var numbers = [10, 20, 30];
numbers.push(25);
var mixed = ['ken', 4, 'chun-li', 8, 9, true]; //Mixed array with different types
//Must declare it at the beginning when we compile
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
//These properties will always have to be their respective value as well as the object variable must be an object
ninja.age = 40; //Works!
// ninja.age = '30'; //Doesn't work
// ninja.skills = ['fighting', 'sneaking']; //Can't add extra properties when we defined it
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// explicit tpyes
var character1; //Initialize but only allow it to take in strings
var age1;
var isLoggedIn;
// age1 = 'luigi' //Gives an error, because type needs to be #
//arrays
var ninjas1 = []; //Only array of strings
// ninjas1 = [10, 23] //Doesn't work
ninjas1 = ['yoshi', 'mario']; //works
ninjas1.push('peter'); //WONT WORK because ninjas is not initialized with an empty array.... so make it 
// union types -- mixed array
var mixed1 = []; // Pipe or 
mixed1.push('hello');
mixed1.push(20);
// mixed1.push(false) //Doesn't work because that pipe is not on.
var uid; //We don't need to provide parentheses if it's not in front of an array
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'string' //Doesn't work
var ninjaTwo; //Better because it includes types
// ninjaTwo = {} //Doesn't work because the properties arent all there!
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
};
