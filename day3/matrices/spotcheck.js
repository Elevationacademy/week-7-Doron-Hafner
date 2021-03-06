// ================= spotCheck-1 =================
let matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9,]
]

// ================= spotCheck-2 =================
const generateMatrix = function (rows, columns) {
    let counter = 0
    let matrix = []
    for (let r = 0; r < rows; r++) {
        matrix.push([])
        for (let c = 0; c < columns; c++) {
            matrix[r].push(counter ++)
        }
    }
    return matrix
}
const matrix = generateMatrix(5,5)
const printMatrix = function (matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            return (matrix[r][c]);
        }
    }
}
console.log(printMatrix(matrix))

// ================= spotCheck-3 =================
const get = function (row, col){
    return (matrix[row][col]);
}
console.log(get(1,2))

// ================= spotCheck-4 =================
const print =  function(matrix){
    for (let r = 0; r < matrix.length; r++) {
        const str = matrix[r][0] > 9 ?
        matrix[r].toString().replace(/,/g,'      ') :
        matrix[r].toString().replace(/,/g,'       ')
        return str;
    }
}
console.log(print(matrix))

// ================= spotCheck-5 =================
const printRow = function(matrix, rowNum){
    for (let i = 0; i < matrix[rowNum].length; i++){
        console.log(matrix[rowNum][i])
    }
}
printRow(matrix, 2)

// ================= spotCheck-6 =================
const alter = function (matrix, row, col, num) {
    matrix[row][col] = num
    console.log(matrix);
}
alter(matrix,1,2,10)