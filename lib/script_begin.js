// node lib/script_begin.js

// let surname = 'Chekhov'
// let name = 'Anton'
//  console.log(`${surname + ' ' +  name}`)

//--------------------------------------------------------------------
// let value = true;
// alert(typeof value); // boolean

// // Numeric Conversion
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number

//String Conversion
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string

// // -----------------------------------------------------------
// alert( "6" / "2" ); // 3, strings are converted to numbers

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

//------------------------------------------------Comparisons
// When comparing values of different types, JavaScript converts the values to numbers.

// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// alert( '' == false ); // true
// alert( 0 == false ); // true


// A strict equality operator === checks the equality without type conversion.
// alert( 0 === false ); // false


// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("0") ); // true !!!!!!!!!
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false


// ------MATH
// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


// alert( '1' + 2 ); // "12"
// alert(2 + 2 + '1' ); // "41" and not "221"
// alert('1' + 2 + 2); // "122" and not "14"

// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers

// // If we want to treat them as numbers, we need to convert and then sum them:

// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// //------------------------------------------------- IF
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// let user = "lol";
// alert(user ?? "Anonymous"); // lol (user is not null/undefined)


// let a = 3 

// a >=5 ? console.log('yes') : console.log('no')

// if (a >= 5) {
//     console.log('yes')
// } else {
//     console.log('no')
// }


// if (a >= 5) {
//     console.log('yes')
// } else if (a < 5 && a > 2) {
//     console.log('Maybe')
// } else {
//     console.log('no')
// }

// a >= 5 ? console.log('yes') : a < 5 && a > 2 ? console.log('Maybe') : console.log('no')

// ----------------------------------------------------------SWITCH
// An example of switch (the executed code is highlighted):

// let swich = 2 + 2;

// switch (4) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }
// Here the switch starts to compare a from the first case variant that is 3. The match fails.
// Then 4. That’s a match, so the execution starts from case 4 until the nearest break.
// If there is no break then the execution continues with the next case without any checks.
// An example without break:

// let sw = 2 + 2;
// ------------------------------------------
// switch (sw) {
//   case 3:
//     alert( 'Too small' );
//   case 4:
//     alert( 'Exactly!' );
//   case 5:
//     alert( 'Too big' );
//   default:
//     alert( "I don't know such values" );
// }
// // In the example above we’ll see sequential execution of three alerts:

// alert( 'Exactly!' );
// alert( 'Too big' );
// alert( "I don't know such values" );

// // For example, if we want the same code to run for case 3 and case 5:

// let swa = 3;

// switch (swa) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }
// // Now both 3 and 5 show the same message.

// //TYPE MATTERS
// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }