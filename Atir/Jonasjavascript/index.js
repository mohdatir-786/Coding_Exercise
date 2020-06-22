/*
//below is Person function constructor using prototype property for inheritence.
let Person=function (name,yearOfBirth,job) {
this.name=name;
this.yearOfBirth=yearOfBirth;
this.job=job;
};
Person.prototype.calculateAge=function(){
    console.log(2020-this.yearOfBirth);
};
Person.prototype.lastName='smith';
let john =new Person('john',1990,'teacher');
let mark =new Person('mark',1996,'businessman');
mark.calculateAge();
john.calculateAge();
console.log(mark.name + " " + mark.lastName);
console.log(john.name + " " + john.lastName);



//below is object constructor for inheritence

let personProto={
    calculateAge:function () {
        console.log(2020-this.yearOfBirth);
    }
};
let john = Object.create(personProto);
john.yearOfBirth=1990;
john.job='teacher';
john.name='john';
console.log(john);
john.calculateAge();


// Function as an argument to a function.

let arrElement=[1990,1986,1996,1994,1984];
const calcAge=(arr,func)=>{
    let filledArr=[];
    for(let i=0;i<arr.length;i++){
        filledArr.push(func(arr[i]));
    }
    return filledArr;
};
const checkAge=(el)=>{
    return el>=30;
}
const Age=(el)=>{
   return 2020-el;
}
let val=calcAge(arrElement,Age);
console.log(calcAge(val,checkAge));




//function returning a function
const interviewQuestion=(job)=>{
 return function (name) {
     console.log(name + ' ' + "is doing" + ' ' + job);
 }
}
let val=interviewQuestion("teaching");
val('john');
//or
interviewQuestion('teaching')('john');



//Immediately invoked functions are used for data privacy..hence variables inside it cannnot be accessed from outside.
((job)=>{
    let work='ploughing';
    console.log(work + ' ' + job)
})('teaching');


/*

// Call method on objects.They are called borrowers method.
let john={
    age:20,
    job:'engineer',
    country:'US',
    presentation:function (time,uniform) {
        console.log(time+ ' '+ uniform +' '+ this.age + ' ' + this.country);
    }
};
let emily={
    age:30,
    job:'designer',
    country:'India'
};
john.presentation.call(emily,'morning','formal');*/


/*
//Bind method used to preset arguments of a function.
let arrElement=[1990,1986,1996,1994,1984];
const calcAge=(arr,func)=>{
    let filledArr=[];
    for(let i=0;i<arr.length;i++){
        filledArr.push(func(arr[i]));
    }
    return filledArr;
};
const checkAge=(limit,el)=>{
    return el>=limit;
}
const Age=(el)=>{
    return 2020-el;
}
let val=calcAge(arrElement,Age);
let val1=calcAge(val,checkAge.bind(this,30));
console.log(val1);
//Above limit argument is preset using bind function to checkAge.


*/




//Coding challenge
/*
function Question(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}
Question.prototype.displayQuestion=function(){
    console.log(this.question);
    for(let i=0;i<this.answers.length;i++){
        console.log(i+ ' '+ ':'+ this.answers[i]);
    }
}
let q1=new Question('Is javascript the coolest programing language?',['yes','No'],0);
let q2=new Question('Is React the coolest js library?',['yes','No'],0);
let q3=new Question('Is Node the best js backend framework?',['No','Yes'],1);
let arrQuestion=[q1,q2,q3];
let n=(Math.floor(Math.random()*arrQuestion.length));
arrQuestion[n].displayQuestion();
*/




//String methods in ES6


/*let firstName='John';
let lastName='Smith';
console.log(`${firstName} ${lastName} `.repeat(5));*/


/*


//Practical use of bind method
function Friends(name) {
this.name=name;
}
Friends.prototype.friendsName=function (arr) {
    let lol=this;
 return arr.map(function (el) {
   return console.log(lol.name +'friends' + " with"+ ' ' + el);
 });
}
let friendsArray=['Bob','JANE','MARK'];
new Friends('Mike').friendsName(friendsArray);

 */
/*
function Friends(name) {
    this.name=name;
}
Friends.prototype.friendsName=function (arr) {
    return arr.map(function (el) {
        return console.log(`${this.name} friends  with ${el}`);
    }.bind(this));
}
let friendsArray=['Bob','JANE','MARK'];
new Friends('Mike').friendsName(friendsArray);

*/

//SPREAD OPERATOR
/*
const cool=(...lol)=>{
    lol.map(ai=>{
        console.log(ai*2);
    })
}

cool(1,2,34,55,66);
*/
/*class Cool {

    namePrint(year){
        year.map(age=>{
            console.log(` ${age} years old`)
        });
    }

}
let obj=new Cool();
obj.namePrint([1996,1995,1990,1985]);

*/
/*
let obj=new Map();
obj.set(1,'atir');
obj.set(2,'insaf');
obj.set(3,'engineer');
*/
/*


//Class inheritence.
class Person {
    constructor(firstName,lastName,designation,yearOfBirth) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.designation=designation;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
     let age=new Date().getFullYear()-this.yearOfBirth;
     console.log(age);
    }
}
class Position extends Person{
constructor(firstName,lastName,designation,yearOfBirth,placeOfBirth,fatherName) {
    super(firstName,lastName,designation,yearOfBirth);
    this.placeOfBirth=placeOfBirth;
    this.fatherName=fatherName;
}
printData(...lol){
    lol.map(el=>{
        console.log(`el + ${this.placeOfBirth}`);
    })
}

}
let obj=new Position('atir','insaf','engineer','1996','delhi','insaf ali khan');
//console.log(obj);
obj.calculateAge();
obj.printData(23,24,33,44,55);
*/

/*
//CODING CHALLENGE.
class Element {
    constructor(name,buildYear) {
        this.name=name;
        this.buildYear=buildYear;
    }
}
class Parks extends Element {
    constructor(name,buildYear,area,numTrees) {
        super(name,buildYear);
        this.area=area;
        this.numTrees=numTrees;
    }
    density(){
        let density=this.area/this.numTrees;
        console.log(`${this.name} , has density of ${density} trees per park .`);
    }
}
class Streets extends Element{
    constructor(name,buildYear,size=3,length) {
        super(name,buildYear);
        this.size=size;
        this.length=length;
    }
    classifyStreets(){
        const classification=new Map();
        classification.set(1,'Small');
        classification.set(2,'medium');
        classification.set(3,'large');
        classification.set(4,'ExtraLarge');
        console.log(`${this.name}, build in ${this.buildYear} is ${classification.get(this.size)} street.`);
    }
}

let allStreets=[new Streets('SouthAvenue',1990,1,0.8),
    new Streets('SouthCool',1980,2,0.9),
        new Streets('SouthDesert',1950,1.3,0.89),
            new Streets('SouthArea',1990,4,0.5)];


let allParks=[new Parks('EvergreenPark',1993,45000,1001),
    new Parks('GreenPark',1933,54000,993),
    new Parks('orangePark',1943,13220,1021)];

//Display park data
function ParkData(p) {
    console.log('-----PARK DATA------');
//Tree density of each park.
    p.forEach(den=>den.density());
}
function avgAge(p){
    let age=p.map(age=>new Date().getFullYear()-age.buildYear);
    console.log(`The average age of 3 parks is ${age.reduce((sum,cur)=>sum+cur,0)/3} years.`);
}
function numTrees(p) {
let trees=p.map(trees=>trees.numTrees);
let i=trees.findIndex(index=>index>=1000);
let name=p.map(n=>n.name);
    console.log(`${name[i]} has more than 1000 trees`);
}
ParkData(allParks);
avgAge(allParks);
numTrees(allParks);

function calcLength(s) {
    console.log('----STREETS DATA----');
let lenArr=s.map(len=>len.length);
let totalLength=lenArr.reduce((sum,cur)=>sum+cur,0);
let avg=totalLength/4;
    console.log(`The average length of all streets is ${avg} km.` )
    console.log(`Total length of all streets is ${totalLength} km.`);
}
function sizeStreets(s) {
    s.map(s=>s.classifyStreets());
}
calcLength(allStreets);
sizeStreets(allStreets);
*/

//coding challenge
/*
const compareTriplets=(a, b)=> {
    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            sumA++;
        }
        if (a[i] < b[i]) {
            sumB++;
        }
    }
    return [sumA, sumB];
}
console.log(compareTriplets([4,3,5,7],[1,3,6,9]))
*/
/*
//HASH PATTERN
const hashPattern=(n)=>{
    for(let i=0;i<n;i++){
         let sum='';
        for (let j=n-1;j>-1;j--){
            if(i>=j){
                sum=sum + '#';
            }else{
                sum=sum +' ';
            }
        }
        console.log(sum)
    }

    }
hashPattern(4);
*/

/*

//Asynchronous javascript.
const first=()=>{
    const id=[122,333,433,333];
    setTimeout((id)=>{
        console.log(`${id}:Hey its atir insaf here`);
        const idea={
            title:'cool',description:'atir insaf'
        };
        setTimeout(id1=>{
            console.log(`${id1}: Its atir here`);
            const legal={
                title:'looola',description: 'yooo yooo'
            };
            setTimeout(lol=>{
                console.log(`${lol}:atir insaf`)
            },2000,legal.description)
        },1500,idea.description)
    },3000,id[2])
}

const  second=()=>{
    console.log('cool ati insaf');
    first();
    console.log('insaf ali khan');
}

second();
*/

//Promises.
const cool=new Promise((resolve,reject)=>{
    resolve([22,33,44,33,445]);
})

const getRecipe=(id)=> {
    return new Promise((res, rej) => {
        setTimeout((id) => {
          res(`${id}:'My name is atir insaf'`);
        }, 1500, id)
    })
}
const john=(purpose)=>{
    return new Promise((res,rej)=>{
        setTimeout((purpose)=>{
            res(purpose);
        },2000,purpose)
    })
}
/*
cool.then((val)=>{
    console.log(val);
    return getRecipe(val[2])
})
    .then(lol=>{
        console.log(lol)
        return john({atir:'lol',gentelmen:'yoyo'})
    })
    .then(resp=>{
        console.log(resp);
    })
*/
/*
async function recipe(){
const result= await john(`engineering`);
    console.log(result);
const res1=await getRecipe(`23`);
    console.log(res1);
    const res2=await cool;
    console.log(res2)
}
recipe();

*/






























