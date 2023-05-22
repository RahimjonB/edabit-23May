//1. Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
    let count = 0;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] === true){
                count++;
            }
        }
        return count;
    }

//2. According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
function compact(arr) {
    return arr.filter(Boolean);
  }

//3. Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
	return Object.entries(obj);
}

//4. Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
	return [].concat(...args);
}

//5. Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
function changeEnough(change, amountDue) {
    const totalChange = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01;
    return totalChange >= amountDue;
  }

//6. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
function arrayOfMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }

//7. Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
	return Object.entries(obj);
}

//8. Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
function sortIt(arr) {
	return arr.sort();
}

//9. Fixing the error
// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr2.concat(arr[i]);
    }
    return arr2; 
  }

//10. Create a function that takes an array of numbers and returns the second largest number.
function secondLargest(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    return sortArr[1];
  }

//11. The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
function clone(arr) {
    let cloned = arr.slice();
    arr.push(cloned);
    return arr;
  }

//12. Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.
function marathonDistance(arr) {
    if (!arr || arr.length === 0) {
      return false;
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Math.abs(arr[i]);
    }
    return total === 25;
  }

  
//13. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
function testJackpot(result) {
	let firstIndex = result[0];
	for(let i=0; i < result.length; i++){
	if(result[i] !== result[0]){
		return false;
	}
}
	return true;
	}

//14. Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
function ascDesNone(arr, str) {
	if(str === "Asc"){
		return arr.sort((a,b)=>a-b);
	}
	else if(str=== "Des"){
		return arr.sort((a,b)=>b-a);
	}
	else if(str=== "None"){
		return arr;
	}
}

//15. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
function findNemo(sentence) {
  let words = sentence.split(" ");
  let nemoIndex = words.findIndex((word) => word === "Nemo");

  if (nemoIndex !== -1) {
    return `I found Nemo at ${nemoIndex + 1}!`;
  } else {
    return "I can't find Nemo :(";
  }
}

//16. Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
function jazzify(chords) {
    chords.forEach((chord, index) => {
      if (!chord.endsWith("7")) {
        chords[index] = chord + "7";
      }
    });
  
    return chords;
  }
  

//17. Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      }
    }
    return sum;
  }

//18. Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
function indexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * i;
    }
    return sum;
  }

//19. An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== i % 2) {
        return false;
      }
    }
    return true;
  }

//20. Given an integer array, transform that array into a mirror.
function mirror(arr) {
    return arr.concat(arr.slice(0, arr.length - 1).reverse());
  }
  
  