const matrix = require('./matrices-lesson-exercises/src/Matrix')
class TicTacToe extends matrix {
    constructor(rows, columns) {
        super(3, 3)
    }
    loadBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.matrix[i][j] = '.'
            }
        }
    }
    play(rowNum, columnNum, player) {
        player === 1 ? this.alter(rowNum, columnNum, 'x') :
            this.alter(rowNum, columnNum, 'o')
        if(this.columnMatch()){
            return `player ${this.columnMatch()} wins`
        }
        if(this.rowMatch()){
            return `player ${this.rowMatch()} wins`
        }
    }

    rowMatch() {
        const win = ''
        this.matrix.forEach(r => {
            if (r.every(index => index === 'x') ||
                r.every(index => index === 'o')) {
                win = r[0]
                return win
            }
            return false
        })
    }
    columnMatch() {
        let win = ''
        for (let i = 0; i < this.matrix.length; i++) {
            const column = []
            column.push(this.matrix[i][0])
            if (column.every(i => i === 'x') ||
                column.every(i => i === 'o')) {
                win = column[0]
                return win
            }
            return false
        }
    }
}
let board = new TicTacToe()
board.loadBoard()
// board.print()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()


