class Media{
  constructor(title)
  {
    this._title=title;
    this._isCheckedOut=false;
    this._ratings=[];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut()
  {
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(isCheckOut)
  {
    this._isCheckedOut=isCheckOut;
  }
  addRating(num){
     this._ratings.push(num);
  }
  getAverageRating(){
    let total=this._ratings.reduce((a,s)=>a+s,0);
    console.log('total: '+total)
     let avg=total/this._ratings.length;
     return Math.floor(avg);
  }
  toggleCheckOutStatus(){
     let chk=this._isCheckedOut;
    // console.log('method status '+chk)
     if(chk===true)
     {
       this._isCheckedOut=false;
     }
     else{
       this._isCheckedOut=true;
     }
     //  this._booleanProperty = !this._booleanProperty;
  }
}
class Book extends Media{
  constructor(author,title,pages)
  {
    super(title);
    this._author=author;
    this._pages=pages;
  }
  get author(){
    return this._author;
  }
  get  pages(){
    return this._pages;
  }
  
}
class Movie extends Media{
   constructor(director,title,runTime)
  {
    super(title);
    this._director=director;
    this._runTime=runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
class Cd extends Media{
   constructor(artist,title,isCheckedOut,ratings,songs)
  {
    super(title,isCheckedOut,ratings);
    this._artist=author;
    this._songs=songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
}
const historyOfEverything=new Book('Bill Bryson','A short history of nearly everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.ratings)
console.log(historyOfEverything.getAverageRating());
const speed=new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(5)
speed.addRating(5)
console.log(speed.getAverageRating());
