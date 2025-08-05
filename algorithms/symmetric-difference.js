/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets
 * is the set of elements which are in either of the two sets but
 * not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * 
 * Symmetric difference is a binary operation, which means
 * it operates on only two elements. So to evaluate
 * an expression involving symmetric differences among three elements (A △ B △ C),
 * you must complete one operation at a time.
 * Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 * 
 * Create a function that takes two or more arrays and returns an array of
 * their symmetric difference. The returned array must contain only unique values (no duplicates).
 */
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