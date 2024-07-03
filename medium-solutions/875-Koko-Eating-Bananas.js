/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var getLargestPile = function(piles) {
  let largestPile = -1;
  for (let i = 0; i < piles.length; i++) {
      if (piles[i] > largestPile) largestPile = piles[i]
  }

  return largestPile;
}

var getTotalEatingTime = function(piles, k) {
  let total = 0;

  for (let i = 0; i < piles.length; i++) {
      total += Math.ceil(piles[i] / k);
  }

  return total;
}

var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = getLargestPile(piles);
  let bestEatingTime = -1;

  while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      const totalEatingTime = getTotalEatingTime(piles, middle);
      // If total eating time is less than h then we know we want to eat slower so we check the left side
      if (totalEatingTime <= h) {
          bestEatingTime = middle;
          right = middle - 1;
      } 
      // If total eating time is greather than h then we know that we want to eat faster so we check the right side
      else if (totalEatingTime > h) {
          left = middle + 1;
      }
  }
  return bestEatingTime
};

/**
 * Solution Notes:
 * In this question we are given an array of intergers where each element represents the # of bananas in a pile. We are given a # ->h
 * which is how many hours we have to eat the bananas. We are looking for the best # of bananas to eat per hour to maximize slow eating but
 * finish all the bananas by the end of the time. What we are going to do is we are going to iterate through the piles of bananas and look for
 * the largest element and that being the height of our range. We then are going to use binary search to find the most optimium number of bananas to eat
 * per hour. We calculate this by going through each pile and figuring out how many hours it would take to finish all the bananas. We relate this to the
 * amount of time we have to eat and if its lower than we know we need to eat slower so we lower the number of bananas per hour. If it is greater then we 
 * increase the number of bananas per hour. Eventually we will get to an optimium number and we return this
 */