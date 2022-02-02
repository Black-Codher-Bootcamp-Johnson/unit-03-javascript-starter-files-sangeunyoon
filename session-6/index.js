// // Use this randomNumber inside of the while/for loops to generate a random number
// const randomNumber = Math.round(Math.random() * 10);

// // ****************************************************TASK 1****************************************************
// let count = 1;



// while (count<=10) {
//     const randomNumber = Math.round(Math.random() * 10);
//     console.log (randomNumber);
//     count=count+1;

// }






// // ****************************************************TASK 2****************************************************


// for (let count=1; count<=10; count ++ ) {
//     // const randomNumber = Math.round(Math.random() * 10);
//     console.log (count);
// if (count ===5)break;
// }


//*********************** */
const animals =['cat','dog','tiger','rhino','badget'];

for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);

    if(animals[i].length <5 )break;
}

