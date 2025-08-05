function sym(...args) {
  if (args.length < 2) {
    throw new Error("Provide at least two arrays");
  }

  let currentSym = coreSym(...args);

  if (args.length < 3) {
    return currentSym;
  }

  const queue = args.slice(2);
  
  queue.forEach(element => {
    currentSym = coreSym(currentSym, element);
  });

  return currentSym;
}

function coreSym(a, b) {
  let bigger = null;
  let smaller = null;
  if (a.length === b.length) {
    bigger = a;
    smaller = b;
  } else {
    bigger = a.length > b.length ? a : b;
    smaller = a.length < b.length ? a : b;
  }

  const smallerLength = smaller.length;
  const symmetricDifference = new Set();

  for (let i = 0; i < bigger.length; i++) {
    const isCurrentBiggerInSmaller = smaller.includes(bigger[i]);
    !isCurrentBiggerInSmaller && !symmetricDifference.has(bigger[i]) ? 
        symmetricDifference.add(bigger[i]) : null;

    if (i < smallerLength) {
      const isCurrentSmallerInBigger = bigger.includes(smaller[i]);
      !isCurrentSmallerInBigger && !symmetricDifference.has(smaller[i]) ? 
        symmetricDifference.add(smaller[i]) : null;
    }
  }
  return Array.from(symmetricDifference).sort();
}

const result = sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

console.log(result); // Should be [1,4,5]