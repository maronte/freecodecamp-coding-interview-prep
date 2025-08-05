/**
 * Given a roman number and a binary number return the product
 * of two number into decimal format.
 */
function product({roman, binary}) {
    const a = transformRomanToDecimal(roman);
    const b = transformRomanToBinary(binary);
    return a * b;
}

function transformRomanToDecimal (roman) {
  const romanTransformer = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  };
  let sum = 0;
  const romanArray = roman.split('');
  
  for (let i = 0; i < romanArray.length; i++) {
    const currentValue = romanTransformer[romanArray[i]];
    if (i == romanArray.length) {
        sum += currentValue;
    }
    const nextValue = romanTransformer[romanArray[i + 1]];
    if (currentValue < nextValue) {
        sum += currentValue * -1;
    } else {
      sum += currentValue;
    }
  }

  return sum;
}


function transformRomanToBinary(binary) {
  let sum = 0;
  const binaryArray = binary.split('').reverse();
  
  for (let i = 0; i < binaryArray.length; i++) {
    const multiplier = Number(binaryArray[i]);
    const exponent = i;
    if (multiplier === 0) {
      continue;
    }
    const placeDecimalValue = Math.pow(2, exponent);
    sum += placeDecimalValue * multiplier;
  }

  return sum;
}