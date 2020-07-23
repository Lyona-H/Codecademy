// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(card){
  let newArray = [];
  let sum = 0;
  for(let c = card.length - 1; c >= 0; c--){
    if(card.length % 2 === 0 && c % 2 === 0){
      if(card[c] * 2 > 9){
        newArray.push((card[c] * 2) - 9);
      }else{
        newArray.push(card[c] * 2);
      }
    }else if(card.length % 2 === 0 && c % 2 === 1){
      newArray.push(card[c]);
    }else if(card.length % 2 === 1 && c % 2 === 1){
      if(card[c] * 2 > 9){
        newArray.push((card[c] * 2) - 9);
      }else{
        newArray.push(card[c] * 2);
    }
    }else if(card.length % 2 === 1 && c % 2 === 0){
      newArray.push(card[c]);
  }
  }
  for(let a = 0; a < newArray.length; a++){
    sum += newArray[a];
  }
  if(sum % 10 === 0){
    return true;
  }else{
    return false;
  }
}
//console.log(validateCred(valid2));

const findInvalidCards = nestedArray => {
  let invalidCards = [];
  //tried for and while just to practice. both works.
  /*for(let n = 0; n < nestedArray.length; n++){
    if(validateCred(nestedArray[n]) === false){
      invalidCards.push(nestedArray[n]);
    }
  }*/
  let n = 0;
  while(n < nestedArray.length){
    if(validateCred(nestedArray[n]) === false){
      invalidCards.push(nestedArray[n]);
    }
    n++;
  }
  return invalidCards;
}


function idInvalidCardCompanies(invalidArray){
  const cardCompanies = {3: 'Amex', 4: 'Visa', 5: 'Mastercard', 6: 'Discover'};
  let invalidCardCompanies = [];
  for(let i = 0; i < invalidArray.length; i++){
     switch(invalidArray[i][0]){
        case 3:
          if(invalidCardCompanies.includes(cardCompanies[3]) === false){
            invalidCardCompanies.push(cardCompanies[3]);
          }
          break;
        case 4:
          if(invalidCardCompanies.includes(cardCompanies[4]) === false){
            invalidCardCompanies.push(cardCompanies[4]);
          }
          break;
        case 5:
          if(invalidCardCompanies.includes(cardCompanies[5]) === false){
            invalidCardCompanies.push(cardCompanies[5]);
          }
          break;
        case 6:
          if(invalidCardCompanies.includes(cardCompanies[6]) === false){
            invalidCardCompanies.push(cardCompanies[6]);
          }
          break;
        default:
          console.log('Company not found');

    }
   }
  return invalidCardCompanies;
}
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));
//console.log(idInvalidCardCompanies([valid1]))



//Use different credit card numbers and test if the functions work.
//convert strings to array of numbers
const test = testArray => {
   return Array.from(testArray, Number);
}

let array = [];
array.push(test('4485409561261868069'));
array.push(test('1530352667181421'));
array.push(test('5137974031957710'));
array.push(test('5171471813876070'));
array.push(test('5488044070434988'));

//console.log(idInvalidCardCompanies(findInvalidCards(array)));

//convert invalid numbers into valid numbers.
const converter = invalidNumber => {
  let sum = 0;
  for(let j = invalidNumber.length - 1; j >= 0; j--){
    if(invalidNumber.length % 2 === 0 && j % 2 === 0){
      if(invalidNumber[j] * 2 > 9){
       invalidNumber[j] = (invalidNumber[j] * 2) - 9;
      }else{
        invalidNumber[j] = invalidNumber[j] * 2;
      }
    }else if(invalidNumber.length % 2 === 1 && j % 2 === 1){
      if(invalidNumber[j] * 2 > 9){
        invalidNumber[j] = (invalidNumber[j] * 2) - 9;
      }else{
        invalidNumber[j] = invalidNumber[j] * 2;
    }
    }
  sum += invalidNumber[j]
  }
  
  for(let j = 0; j < invalidNumber.length - 1; j++){
    if(invalidNumber[j] >= sum % 10){
      invalidNumber[j] -= sum % 10;
      break;
    }
   }  
 return invalidNumber;
}
console.log(converter(invalid3));


