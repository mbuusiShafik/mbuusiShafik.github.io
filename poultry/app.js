
/*let userName = 'Shafik';

alert(`My name is ${userName}`);

let value;
value = null + 1;
alert(value);

let test = prompt('What is your age', '');

alert(test);

let isBoss = confirm('Are you the owner?')

if(isBoss==true) {
    alert('Welcome Boss!');
} else {
    alert('You are not welcomed!');
}

let userName = prompt('what is your name?', '');

alert(`Your name is ${userName}`);

let input = prompt("What is the 'offical' name of Javascript?", '');

if(input == 'ECMAScript') {
    alert('You are Right!');
} else {
    alert("You do not known 'ECMAScript'?");
}

let input = prompt("What is your lucky Number?", '');

if(input > 0) {
    alert(1);
} else if(input < 0) {
    alert('-1');
} else {
    alert(0);
}

let message = (login == 'Employee')? 'Hello':
    (login == "Director")? 'Greetings':
    (login == '')? "No login":
    '';

let age = prompt('What is your age?', '');

if(age >= 14 && age <= 90) {
    alert('Age is within range');
} else if(age < 14) {
    alert('You are too young!');
} else {
    alert('you are too old!');
}

let logIn = prompt('Please login?', '');

if(logIn == 'admin') {
    let passWord = prompt('Please enter password:', '');
    if(passWord == 'master') {
        alert('You are Welcome!');
    } else if(passWord == null || passWord == '') {
        alert('Canceled');
    } else {
        alert('Wrong password!');
    }
} else if(logIn == null || logIn == '') {
    alert('Canceled');
} else {
    alert('I donot know you!');
}
let answer = [];

for(let i = 0; i <= 10; i++) {
    if(i%2 == 0) {
        answer.push(i);
    }
}
alert(answer);
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
let input = prompt('please enter a number: ', '');

while(input <= 100 && input != null && input != '') {
    input = +prompt('please enter a number: ', '');
}

alert(`The number is ${input}`);
let num;

do {
    num = prompt('please enter a number: ', '');
} while (num <= 100 && num);*/

//prime numbers;

let n = prompt('please enter an interval: ', '');
let primeList = [];

for(i=1; i<=n; i++) {
     nextPrime:for(j=2; j<i; ++j) {
        if(i%j == 0) {
            primeList.push(i);
        }
    }
}

alert(primeList);