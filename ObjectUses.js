const menu = {
//way to make object and their
 _courses: {
   appetizers:[],
   mains:[],
   desserts:[],
 },
   get appetizers(){
     return this._courses.appetizers
   },
   set appetizer(app)
   {
     this._courses.appetizers=app;
     
   },
   get desserts(){
     return this._courses.desserts;
   },
   set desserts(d)
   {
     this._courses.desserts=d;
   },
     get mains(){
      return this._courses.mains;
   },
   set mains(m)
   {
     this._courses.mains=m;
   },
 get courses()
 {
   return{
     appetizer:this.appetizers,
     mains : this.mains,
     desserts: this.desserts ,
     };
 },
 addDishToCourse(courseName,dishName,dishPrice){
   let dish={
     name:dishName,
     price:dishPrice,
   };

  return this._courses[courseName].push(dish)
 },
 getRandomDishFromCourse(courseName)
 {
   //generate random dish
   let dishes=this._courses[courseName];
  // console.log(dishes)list aa gyi
   let index=Math.floor(Math.random()*dishes.length);
   //koi random index nikala length ke basis pr
   return dishes[index];
   //or return kr diya
 },
 generateRandomMeal(){
    let appetizer=menu.getRandomDishFromCourse('appetizers');
   // console.log(appetizer)particularv index us list se return hua
    let main=menu.getRandomDishFromCourse('mains');
     let dessert=menu.getRandomDishFromCourse('desserts');
     let totalPrice=appetizer.price+main.price+dessert.price;
     return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
 },
 };
 menu.addDishToCourse('appetizers', 'Caesar', 4.25);
 menu.addDishToCourse('appetizers', 'Salad', 41.25);
 menu.addDishToCourse('appetizers', 'Caesar Salad', 24.25);
// console.log(menu.appetizers)
 menu.addDishToCourse('mains', 'chowmeen Salad',54.25);
 menu.addDishToCourse('mains', 'crispy Salad', 42.25);
 menu.addDishToCourse('mains', 'tomato Salad', 14.25);

 menu.addDishToCourse('desserts', 'rasgulla', 34.25);
 menu.addDishToCourse('desserts', 'pawbhaji', 45.25);
 menu.addDishToCourse('desserts', 'ilayachi', 74.25);

let meal=menu.generateRandomMeal();
console.log(meal)
/* 
1.
Start by creating an empty menu object.
2.
Add a _courses property to your menu object and set its value to an empty object.
This property will ultimately contain a mapping between each course
and the dishes available to order in that course.
3.
Create three properties inside the _courses object called 
appetizers, mains, and desserts. Each one of these should initialize to an empty array.
4.
Create getter and setter methods for the appetizers, mains, and desserts properties.
5.
Inside your menu object, create an empty getter method for the _courses property.
6.
Inside the courses getter method, return an object that
contains key/value pairs for appetizers, mains, and desserts.
7.
Inside the menu object, we are going to create a method called .addDishToCourse() 
which will be used to add a new dish to the specified course on the menu
The method should take in three parameters: the courseName, the dishName , and the dishPrice.
8.
The .addDishToCourse() method should create an object called dish 
which has a name and price which it gets from the parameters.
The method should then push this dish object into the appropriate array 
in your menu‘s _courses object based on what courseName was passed in.
9.
Now, we’re going to need another function which will allow us to get a random dish 
from a course on the menu, which will be necessary for generating a random meal.
Create a method inside the menu object called .getRandomDishFromCourse().
It will take in one parameter which is the courseName.
10.
There are a few steps in getting the .getRandomDishFromCourse() to work.
Retrieve the array of the given course’s dishes from the menu‘s _courses object 
and store in a variable called dishes.Generate a random index by multiplying Math.random()
by the length of the dishes array (This will guarantee that the random number will 
be between 0 and the length of the array)
Round that generated number to a whole number by using Math.floor() on the result.
Return the dish located at that index in dishes.
11.
Now that we have a way to get a random dish from a course, we can
create a .generateRandomMeal() function which will automatically generate a 
three-course meal for us. The function doesn’t need to take any parameters.
The function should create an appetizer variable which should be 
the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
Create a main variable and dessert variable the same way
you created the appetizer variable, but make sure to pass in the right course type.
Calculates the total price and returns a string that
contains the name of each of the dishes and the total price of the meal, formatted as you like.

12.
Now that we’ve finished our menu, object, let’s use it to create a menu
by adding some appetizers, mains, and desserts with the .addDishToCourse() function. 
Add at least 3 dishes to each course (or more if you like!).


13.
Once your menu has items inside it, generate a meal by using the .generateRandomMeal()
function on your menu, and save it to a variable called meal. Lastly, 
print out your meal variable to see what meal was generated for you.
*/
