function greet(name){
    console.log("Hello "+ name)
}

greet("Rahul");
greet("Ruhon");
greet("Lucky");



function greet(address, city, district, state, country){
    console.log("address:"+ address)
    console.log("city:"+ city)
    console.log("district:"+ district)
    console.log("state:"+ state)
    console.log("country:"+ country)
}


function add(a, b){
    console.log(a + b)
}

add(10,50);


function introduce(name, age, Course )
{
    console.log("Name:", name)
    console.log("Age:", age)
    console.log("Course:", Course)
}

introduce("Puwali", 16, "BCA");




function add(a, b) {
  return a + b;
}

let result = add(10, 20);

console.log(result);


let result = add(10, 20);

console.log(result);
console.log(result * 2);
console.log(result + 100);



const Student_name = "Parag Jyoti Borah";
let age = 18;
let course = "BSC DATA SCIENCE";
var College_name = "SITM";
let Marks = 80 + "%";
const Birth_year = 2008;
Marks = 80.5 + "%";
let City = "Golaghat";
let Semester = 1 + "st";
let Favourite_subject = "coding";

console.log("Student name: " + Student_name);
console.log("Student age: " + age);
console.log("Student course: " + course);
console.log("College name: " + College_name);
console.log("Student's perfomance: " + Marks);
console.log("Birth year: " + Birth_year);
console.log("City: " + City);
console.log("Semester: " + Semester);








 
///ARAY OF JAVASCRIPT


let fruits = ["Apple", "Mango", "Banana", "Grapes"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
console.log(fruits[3]); // Grapes

let marks = [85, 90, 78, 92, 88];
console.log(marks[0]); // 85
console.log(marks[1]); // 90
console.log(marks[2]); // 78
console.log(marks[3]); // 92
console.log(marks[4]); // 88        

let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Black"];
console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue
console.log(colors[3]); // Yellow
console.log(colors[4]); // Orange
console.log(colors[5]); // Purple
console.log(colors[6]); // Pink
console.log(colors[7]); // Brown
console.log(colors[8]); // Gray
console.log(colors[9]); // Black


let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers[2]); // 30
console.log(numbers[3]); // 40
console.log(numbers[4]); // 50  


let cities = ["Golaghat", "Delhi", "Chennai", "Mumbai", "Kolkata"];
console.log(cities[0]); // Golaghat
console.log(cities[1]); // Delhi
console.log(cities[2]); // Chennai
console.log(cities[3]); // Mumbai
console.log(cities[4]); // Kolkata


let cars = ["Toyota", "Tata", "Ford", "BMW", "Mercedes"];
console.log(cars[0]); // Toyota
console.log(cars[1]); // Tata
console.log(cars[2]); // Ford
console.log(cars[3]); // BMW
console.log(cars[4]); // Mercedes


let languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];
console.log(languages[0]); // Python
console.log(languages[1]);  // JavaScript
console.log(languages[2]);  // Java
console.log(languages[3]);  // C++
console.log(languages[4]);  // Ruby

let subjects = ["Math", "Science", "History", "Geography", "English"];
console.log(subjects[0]); // Math
console.log(subjects[1]); // Science
console.log(subjects[2]); // History
console.log(subjects[3]); // Geography
console.log(subjects[4]); // English    


let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[0]); // Monday
console.log(days[1]); // Tuesday
console.log(days[2]); // Wednesday
console.log(days[3]); // Thursday
console.log(days[4]); // Friday 
console.log(days[5]); // Saturday
console.log(days[6]); // Sunday

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[0]); // January
console.log(months[1]); // February
console.log(months[2]); // March
console.log(months[3]); // April   
console.log(months[4]); // May
console.log(months[5]); // June
console.log(months[6]); // July
console.log(months[7]); // August
console.log(months[8]); // September
console.log(months[9]); // October
console.log(months[10]);    // November
console.log(months[11]);    // December 


let states = ["Assam", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"];
console.log(states[0]); // Assam
console.log(states[1]); // Delhi
console.log(states[2]); // Maharashtra
console.log(states[3]); // Karnataka
console.log(states[4]); // Tamil Nadu

let continents = ["Asia", "Africa", "Europe", "North America", "South America", "Australia", "Antarctica"];
console.log(continents[0]); // Asia
console.log(continents[1]); // Africa
console.log(continents[2]); // Europe
console.log(continents[3]); // North America
console.log(continents[4]); // South America
console.log(continents[5]); // Australia
console.log(continents[6]); // Antarctica

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);
console.log(planets[5]);
console.log(planets[6]);
console.log(planets[7]);
console.log(planets[8]); // This will be undefined since there are only 8 planets in the array


let countries = ["India", "USA", "China", "Canada", "Australia"];
console.log(countries[0]); // India
console.log(countries[1]); // USA
console.log(countries[2]); // China
console.log(countries[3]); // Canada
console.log(countries[4]); // Australia


/// JavaScript Assignment Operators


let x = 5;
let y = 10;
let z = 15;

x += 2; // x = x + 2
y -= 3; // y = y - 3
z *= 4; // z = z * 4
console.log(x); // 7
console.log(y); // 7
console.log(z); // 60   



let a = 10;
a += 5;
console.log(a); // 15


let b = 20;
b -= 10;
console.log(b); // 10

let c = 5;
c *= 3;
console.log(c); // 15

let d = 10;
d /= 2;
console.log(d); // 5

let e = 15;
e %= 4;
console.log(e); // 3    

let f = 2;
f **= 3;
console.log(f); // 8


