/**
 * SOLUTION 1
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let record = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let newScore = record[record.length - 1] + record[record.length - 2];
      record.push(newScore);
    } else if (operations[i] === "D") {
      let newScore = record[record.length - 1] * 2;
      record.push(newScore);
    } else if (operations[i] === "C") {
      record.pop();
    } else {
      record.push(parseInt(operations[i]));
    }
  }
  let totalScore = 0;
  for (let i = 0; i < record.length; i++) {
    totalScore += record[i];
  }

  return totalScore;
};

/**
 * Q: What the question is asking is to keep a record (a stack) of all
 * of the game operations that occur. 
 * 
 * OPERATIONS:
 *  An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

    I created a for loop that will look for these operations and manipulate
    the stack accordingly. Then at the end we will take all of the scores and add
    them up and return them.
 */
