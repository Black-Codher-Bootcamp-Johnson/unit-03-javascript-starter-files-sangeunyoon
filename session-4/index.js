// ****************************************************TASK 1 - OBJECTS****************************************************


let personA= {
 name: 'A',
 age: '21',
 location:'Manchester',
 likes: 'pizza'
};




let personB= {
    name: 'B',
    age: '31',
    location:'Manchester',
    likes: 'Pasta'
   };



   let personC= {
    name: 'C',
    age: '41',
    location:'London',
    likes: 'Korean BBQ'
   };


   let personD= {
    name: 'D',
    age: '51',
    location:'London',
    likes: 'Spicy food'
   };




   function biography(person) {
   console.log('Hi, my name is ' + person.name + '. I am ' + person.age + 'years old, I live in  ' +person.location+
      ' and I like ' + person.likes +'.')
     
     }

     biography(personA);
     biography(personB);
     biography(personC);
     biography(personD);




// ****************************************************TASK 2 - MATHS OPERATORS****************************************************


const x = 6;
const y = 4;

const addition = x + y; 

console.log("Addition: x + y = " + addition); // Addition: x + y = 10 

const subtraction = x - y;

console.log("Subtraction: x - y =" + subtraction); // subtraction: x-y =2

const multiplication = x * y;

 console.log("multiplication: x * y =" + multiplication); //multiplicatio: x* y= 24

 const division = x / y;

 console.log("Division: x / y = " + division); // Division: x/y = 1.5

if (x===y) {
    console.log ("X is equal to y");
} else {
    console.log("X is not equal to y")
}













// ****************************************************TASK 3****************************************************



const age = 31;
const minimumDrivingAge= 17;

const isEnoughDrive = age > minimumDrivingAge;

console.log('Do I age enough for driving?' + isEnoughDrive);









//****************************************homework******************************************************** */


      function calculate(firstNum, secNum, ope) {
    
        if(ope === "*") {
           return firstNum * secNum
         }
    
     
       if(ope === "-") {
        return firstNum - secNum
      }
    
    
      if(ope === "+") {
        return firstNum + secNum
      }
    
    if(ope === "/") {
        return firstNum / secNum
      }
      }

       calculate(2,2,'*');
       calculate(22,3,'-');
       calculate(2,2,'+');
       calculate(21,3,'/');




    
 
 const ageA = 21; 
const ageB= 31;

const whoIsOlder= ageA > ageB;

console.log('Who is older?' + whoIsOlder);



      let personA= {
        name: 'A',
        age: '21',
        
       };
       
            
       let personB= {
           name: 'B',
           age: '31',
    
          };
       
          function whoIsOlder(person) {
            console.log( person.name + 'is' + person.age + 'years old older than ' +person.name)
              
              }
        