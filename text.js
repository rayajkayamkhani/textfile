// console.log("hello");


// let num1 = 22;
// let num2 = 19;

// let sub = num1-num2;
// console.log(sub);

// if (sub>19) {
//     let ab = sub*3;
//     console.log(ab)
// } else {
//     let ab2 = sub*2;
//     console.log(ab2);
// }

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 10;

// if (num1===num2) {
//     console.log("yes");
// }else if(num2===num3){
//     console.log("yes");
// }else if (num3==num4){
//     console.log("yes");
// }else if(num4===num1){
//     console.log("yes");
// }else{
//     console.log("No");
// }


// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));     

// let num1 = 22;
// let num2 = 19;

// let sub = num1-num2;
// console.log(sub);



// let num =10;
// let num2 = 10000;
// switch (num) {
//     case num:
//         if (num%2==0) {
//             console.log("odd")
//         } else {
//             console.log("10000")
//         }
//         break;
//     case num:
//         if (num%2==1) {
//             console.log("even")
//         } else {
//            console.log("10000") 
//         }
//         case num:
//             if (num===100) {
//                 console.log(num)
//             } else {
//                console.log("10000") 
//             }
//     default:
//         console.log(num2)
//         break;
// }

// let user = prompt("What is your birth year?");
// if (user<2004) {
//     let user2 = prompt("Do you have valid license number?");
//     let user = prompt("what is your License No ?")
//     alert("User with license number "+user+" is Ready to drive.");
// } else {
//     alert("Age is Not Applicable!!");
// }

// if (sub>19) {
//     let ab = sub*3;
//     console.log(ab)
// } else {
//     let ab2 = sub*2;
//     console.log(ab2);
// }


// let user1 = parseInt(prompt("How many french fries (60rs per piece) do you want to order? "));
// let user2 = parseInt(prompt("How many burgers (50rs per piece) do you want to order ? "));
// let user3 = parseInt(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
// let user4 = parseInt(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
// let user5 = parseInt(prompt("How many Cokes (50 per piece) do you want to order?"));


// let price1 = user1*60;
// let price2 = user2*50;
// let price3 = user3*100;
// let price4 = user4*80;
// let price5 = user5*50;
// let total1 = price1+price2+price3+price4+price5;
// console.log("Your total bill is: "+total1);

// if (user1<=0) {
//     console.log("your Item Count For French fries is 0")
// }else if(user2<=0){
//     console.log("your Item Count For Burgers is 0");
// }else if(user3<=0){
//     console.log("your Item Count For Chowmien is 0");
// }else if(user4<=0){
//     console.log("your Item Count For Mancurian is 0");
    
// }else if(user5<=0) {
//     console.log("your Item Count For Cokes is 0");
// }



// function val(num) 
// { 
//     var num1 = 0; 
//     var num2 = 1; 
//     var sum; 
//     var i = 0; 
//     for (i = 0; i < num; i++)  
//     { 
//         sum = num1 + num2; 
//         num1 = num2; 
//         num2 = sum; 
//     } 
//     return num2; 
// } 
// console.log(val(1)); 
// console.log(val(12));


// let a = 10;
// let b = 10;
// let c = 30;
// let d = 40;
// if ((a==b||a==c||a==d) || (b==c, b==d) || (c==d) ) {
//     console.log("yes")
// } else {
//     console.log("No")
// }

// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0;
// let n2 = 1;
// let nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


//  for ( let a = 5; a >= 1 ; a-- ){
//    let str = "";
//    for( let i = 1 ; i <= a ; i++){
//      str = str + "$##$"  
//    }
//    console.log(str);}


// let user = prompt("What is your age?");
// if (user<=18) {
//     confirm( "Would you like to have a coffee?");
//     let user = prompt( "What type of coffee you want to have?")
//   alert("Sorry Visit Again!");
// } else if(user>=2004){
//     confirm("Would you like to have tea?" );

//     let parent1 = prompt( "What type of tea do you want?");
//     let parent2 = prompt("Hello Sir/Mam, here is your 2 tea." );
//     alert("You are ready to drive with your "+parent1+","+parent2);
// }


// let str ="wecode academy";
// console.log(str.toLowerCase());

// console.log("wecode" .concat("  Rayaj  ",  "  kuchaman  ",  "  makrana  "));

// str = "      Kuchaman city     ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// let val = "Hello World ";
// console.log( val.toUpperCase());
// console.log( val.toLowerCase());

// console.log("hahahahaha"   .repeat(4))


//  for ( let a = 5; a >= 1 ; a-- ){
//    let str = "";
//    for( let i = 1 ; i <= a ; i++){
//      str = str + "ha"  
//    }
//    console.log(str . repeat(5));}

// for(let i = 8; i>= 1; i--){
//     console.log("$$$$####".repeat(i))
// }

// let mobileNumber = "76100";  
// console.log(mobileNumber.padEnd(12, "*"));
// let num = "76149";
// console.log(num.padStart(12, "*"));

//Q1
// let user1 = parseInt(prompt("How many french fries (60rs per piece) do you want to order? "));
// let user2 = parseInt(prompt("How many burgers (50rs per piece) do you want to order ? "));
// let user3 = parseInt(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
// let user4 = parseInt(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
// let user5 = parseInt(prompt("How many Cokes (50 per piece) do you want to order?"));


// let price1 = user1*60;
// let price2 = user2*50;
// let price3 = user3*100;
// let price4 = user4*80;
// let price5 = user5*50;
// let total1 = price1+price2+price3+price4+price5;
// console.log("Your total bill is: "+total1);

// if (user1<=0) {
//     console.log("your Item Count For French fries is 0")
// }
// if(user2<=0){
//     console.log("your Item Count For Burgers is 0");
// }
// if(user3<=0){
//     console.log("your Item Count For Chowmien is 0");
// }
// if(user4<=0){
//     console.log("your Item Count For Mancurian is 0");
    
// }
// if(user5<=0) {
//     console.log("your Item Count For Cokes is 0");
// }


// Q3
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0;
// let n2 = 1;
// let nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



//Q4
//  let user = prompt("Do you Drink Tea or Coffee ?")

// switch (user) {
//     case "tea":
//         console.log("Tea");
//         break;
//     case "coffee":
//         console.log("Coffee");
//         break;
//     default:
//         console.log("water");
//         break;
// }  

//Q5
// let user = prompt("What is your Age ?");
// if (user>=18 && user<50) {
//     let user2 = confirm("Would You like to have Coffee ?");
//     if (user2===true) {
//         let a = "cappachino";
//         let b = "hot coffee";
//         let c = "cold coffee";
//         let user3 = prompt("What type of Coffee do you have ? 1."+a+" 2."+b+" 3."+c);
//         if (user3===a) {
//             alert("Here is your "+a+" :)");
//         }if (user3===b) {
//             alert("Here is your "+b+" :)");
//         }if (user3===c) {
//             alert("Here is your "+c+" :)");
//         }
//     }else{
//         alert("Sorry please Visit Again :)!");
//     }
//     }else{
//     let con = confirm("Would you like to have Tea ?");
//     if (con===true) {
//         let d = "green tea";
//         let e = "black tea";
//         let f = "normal tea";
//         let ask = prompt("what type of tea do you want ? 1."+d+" 2."+e+" 3."+f);
//         if (ask===d) {
//             alert("Here is your "+d+" :)");
//         }if (ask===e) {
//             alert("Here is your "+e+" :)");
//         }if (ask===f) {
//             alert("Here is your "+f+" :)");
//         }
//     }else{
//         alert("Sorry please Visit Again :)!");

//     }
// }



// Q6
// let num1 = 100;
// let num2 = 39;

// let substraction = num1-num2;
// console.log("Subtracted value is: "+substraction);

// if (substraction>40) {
//     let double = substraction*2;
//     console.log("Double absolute difference: "+double);
// } else {
//     let triple = substraction*3;
//     console.log("Triple absolute difference is: "+triple);
// }

// Q7
// let num1 = 20;
// let num2 = 5;

// if (num1>18 || num2<10) {
//     console.log("yes")
//     let sum = num1+num2;
//     console.log("Here is the Sum of No: "+sum);
// } else {
//     let sum2 = num1*num2;
//     console.log("Here is the Multiplication of No: "+sum2);
// }

// Q8
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 10;
// let e = 10;

// if ((a==b,a==c,a==d,a==e) || (b==c, b==d,b==e) || (c==d,c==e) || (d==e) ) {

//     console.log("yes")
// } else {
//     console.log("No")
// }


// Q9
// let num = 100;

// if (num%10===0 && num%20===0) {
//     console.log("Yes");
//     let sum = num*51;
//     console.log(sum);

// } else {
//     let sum2 = num*59;
//     console.log(sum2);
// }

// Q10
let str = ("rayaj kayamkhanai");
 console.log("Length of String is: "+str.length);
let num;
for(let i=1; i<=str.length; i++){
    if (str.length>15) {
       let val= 2*i;
       console.log("2 * "+i+" = "+val);
    } else {
        console.log("No");
      break;
    }
}