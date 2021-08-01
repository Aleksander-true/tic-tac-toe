class TicTacToe {
    constructor() {
        this.firstPlayerSymbol = 'x';
        this.secondPlayerSymbol = 'o';
        this.currentPlayerSymbol = this.firstPlayerSymbol;
        this.winner = null;
        this.playTable = [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                        ];
                    
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playTable[rowIndex][columnIndex] == null) {
          this.playTable[rowIndex][columnIndex] = this.currentPlayerSymbol
          if (isCurrentPlayerWin(this.playTable,this.currentPlayerSymbol)) {this.winner = this.currentPlayerSymbol};
          this.currentPlayerSymbol == this.firstPlayerSymbol ?  this.currentPlayerSymbol=this.secondPlayerSymbol : this.currentPlayerSymbol=this.firstPlayerSymbol;
  
        } else {};
  
    }

    isFinished() {
      return this.getWinner()!==null || this.isDraw();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.playTable.every(arr=> !arr.includes(null));
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner()===null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playTable[rowIndex][colIndex];
    }
}

 function isCurrentPlayerWin (table, currentPlayer) {
        let isSomeRow = checkArrowRows(table,currentPlayer );
        let isSomeColumn = checkArrowRows(rotate(table),currentPlayer ); 
        let isSomeDiagonals = checkArrowRows(getDiagonals(table),currentPlayer ); 
        return isSomeRow || isSomeColumn || isSomeDiagonals;
    }
function checkArrowRows(arr, symbol) {
  return arr.some(row => row.every(item=> item == symbol ));
}    

function rotate(arr) {
  if (arr == null || arr == undefined) {arr=[]};
  let out = Array(arr[0].length);
  
  for (let i=0; i<arr[0].length; i++) {
    out[i] = [];   
    for (let j=0; j<arr.length ; j++) {
     out[i][j] = arr[j][arr[j].length-i-1];
    }
  }
  return out;
}

function getDiagonals(arr) {
  if (arr == null || arr == undefined) {arr=[]};
  let out = [[],[]];
  for (let i=0; i<arr.length; i++) {
      out[0].push(arr[i][i]);
      out[1].push(arr[arr.length-i-1][i]);
  }
  return out;
}

module.exports = TicTacToe;
