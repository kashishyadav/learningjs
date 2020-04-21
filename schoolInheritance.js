class School{
  constructor(name,level,numberOfStudent)
  {
    console.log(numberOfStudent)
    this._name=name;
    this._level=level;
    this._numberOfStudent=numberOfStudent;
    console.log(this._numberOfStudent)

  }
  set numberOfStudent(num){
    if(typeof num==='number')
    {
      this._numberOfStudent=num;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level
  }
  get numberOfStudent(){
    console.log(this._numberOfStudent)
    return this._numberOfStudent;
  }
  quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudent} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeacher){
    let index=Math.floor(Math.random()*substituteTeacher.length)
    return substituteTeacher[index]
  }
}
class PrimarySchool extends School{
  constructor(name,numberOfStudent,property)
  {
    console.log(numberOfStudent)
    super(name,'primary',numberOfStudent);
    this._pickupPolicy=property;
  }
  get  pickupPolicy(){
    return this._pickupPolicy;
  }
 
}
class HighSchool extends School{
  constructor(name,numberOfStudent,sportsTeam)
  {
    super(name,'high',numberOfStudent);
    this._sportsTeam=sportsTeam;
  }
  get sportsTeam(){
    return this._sportsTeam;
  }
 
}
const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);

