// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

//Notes and Thoughts
//Is the target larger than the last item in the matrix?
//Is the target smaller than the first item in the matrix?
//How many arrays (rows) are there?
const rowTester = function (row, target) {
  for (let i = 0; i < row.length; i++) {
    if (target === row[i]) {
      return true;
    }
  }
  return false;
}

const searchMatrix = function (matrix, target) {

  let lastRow = matrix[matrix.length - 1];
  let lastValue = lastRow[lastRow.length - 1];
  let firstRow = matrix[0];
  let firstValue = firstRow[0];
  let totalRows = matrix.length;

  //Is target in the range at all?
  if (target < firstValue || target > lastValue) {
    console.log('Out of Range');
    return false;
  } else {
    console.log('Stay on Target');
  }

  if (totalRows === 1) {
    return rowTester(matrix[0], target);
  }
  //Divide and Conquere (phone book)
  //Divide total rows in half and check first of that row
  let newTestRow = Math.floor(totalRows / 2) - 1;
  console.log(matrix[newTestRow][0]);

  if (target < matrix[newTestRow][0]) {
    //target must be in lower part of matrix
    console.log('target is below current row', newTestRow);
    let newMatrix = matrix.slice();
    matrix
  } else {
    console.log('target is in current row or higher', newTestRow);
  }
  //create new Array with half cut out that can't have object and recurse




  //base case is matrix contains one row

}
//searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20]], 1);

console.log(searchMatrix([[1,3,5,7]], 8));
//searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60],[62,65,67,71],[73,76,80,82]], 1);
//searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 60);
//searchMatrix([1, 2, 3, 4], 4);


