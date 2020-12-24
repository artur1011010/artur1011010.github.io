let puzzleBoard = [];

const initializePuzzleBoard = () => {
    puzzleBoard = [];
    let num = 4, divId;
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < num; i++) {
            divId = k + "_" + i;
            puzzleBoard.push(divId);
        }
    }
    puzzleBoard = shufflePuzzle(puzzleBoard);
    buildPuzzle();
}

const buildPuzzle = () => {
    let resultString = '';
    for (let i = 0; i < puzzleBoard.length; i++) {
        let gifId = "images/puzzle/slice_" + puzzleBoard[i] + ".gif"
        resultString += '<div id="' + puzzleBoard[i] + '" class="puzzle" onclick="playPuzzle(this)" ><img src="' + gifId + '" alt="forest puzzle"></div>';
    }
    document.getElementById("forest-puzzle").innerHTML = resultString;
}

// funkcja mieszajaca puzzle
const shufflePuzzle = (array) => {
    let counter = array.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


const playPuzzle = (element) => {
    const blank_index = puzzleBoard.findIndex(a => a === '3_3');
    let clicked_index = puzzleBoard.findIndex(a => a === element.id);
    const blank_img = puzzleBoard[blank_index];

    //sprawdza czy klikniety i pusty blok sa w jedej lini
    if ((Math.floor((clicked_index) / 4)) === (Math.floor((blank_index) / 4))) {
        let columnsToMove = (clicked_index - blank_index);
        // przesuniecie w lini lewo
        if (columnsToMove > 0) {
            for (let i = columnsToMove; i > 0; i--) {
                puzzleBoard[clicked_index - i] = puzzleBoard[((clicked_index - i) + 1)];
            }
            puzzleBoard[clicked_index] = blank_img;
        }
        //przesuniecie w lini w prawo
        if (columnsToMove < 0) {
            for (let i = columnsToMove; i < 0; i++) {
                puzzleBoard[clicked_index - i] = puzzleBoard[(clicked_index - i) - 1];
            }
            puzzleBoard[clicked_index] = blank_img;
        }
    }

    else {
        let rowsToMove = ((blank_index - clicked_index) / 4);
        //warunek spawdza czy ruch nie jest po przekatnych
        if (((blank_index - clicked_index) % 4) === 0) {
            // dziala pionowo w dol
            if (rowsToMove > 0) {
                for (let i = rowsToMove; i > 0; i--) {
                    puzzleBoard[clicked_index + (4 * i)] = puzzleBoard[clicked_index + (4 * (i - 1))];
                }
                puzzleBoard[clicked_index] = blank_img;
            }
            // dziala pionowo w gore
            if (rowsToMove < 0) {
                rowsToMove *= -1;
                clicked_index = clicked_index - (rowsToMove * 4);
                for (let i = 0; i < rowsToMove; i++) {
                    puzzleBoard[clicked_index + (4 * i)] = puzzleBoard[clicked_index + (4 * (i + 1))];
                }
                puzzleBoard[clicked_index + (rowsToMove * 4)] = blank_img;
            }
        }
    }
    buildPuzzle();
}

let sign = "X";
let k = 0;
let tab = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const buildTicTacToe = () => {
    let resultString = '';
    let num = 3, divIdName;
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < num; i++) {
            divIdName = 'a' + i + k;
            resultString += '<div class="tic" id="' + divIdName + '" onclick="playTicTacToe(this)"></div>';
        }
    }
    const ticTacToe = document.getElementById('ticTacToe');
    ticTacToe.innerHTML = resultString;
}

const playTicTacToe = (element) => {
    const col = element.id.slice(1, 2);
    const row = element.id.slice(2, 3);
    if (k % 2 === 0) {
        if (tab[row][col] === 0) {
            k++;
            element.innerHTML = '<h1>X</h1>'
            tab[row][col] = "x";
        }
    } else {
        if (tab[row][col] === 0) {
            k++;
            element.innerHTML = '<h1>O</h1>'
            tab[row][col] = "o";
        }
    }
    //sprawdza warunek wygranej dla x
    if ((tab[0][1] === 'x' && tab[1][1] === 'x' && tab[2][1] === 'x') || (tab[0][2] === 'x' && tab[1][2] === 'x' && tab[2][2] === 'x') || (tab[0][0] === 'x' && tab[1][0] === 'x' && tab[2][0] === 'x') ||
        (tab[0][0] === 'x' && tab[0][1] === 'x' && tab[0][2] === 'x') || (tab[1][0] === 'x' && tab[1][1] === 'x' && tab[1][2] === 'x') || (tab[2][0] === 'x' && tab[2][1] === 'x' && tab[2][2] === 'x') ||
        (tab[2][2] === 'x' && tab[1][1] === 'x' && tab[0][0] === 'x') || (tab[0][2] === 'x' && tab[1][1] === 'x' && tab[2][0] === 'x')
    ) {
        alert("wygrana X");
    }
    //sprawdza warunek wygranej dla o
    if ((tab[0][1] === 'o' && tab[1][1] === 'o' && tab[2][1] === 'o') || (tab[0][2] === 'o' && tab[1][2] === 'o' && tab[2][2] === 'o') || (tab[0][0] === 'o' && tab[1][0] === 'o' && tab[2][0] === 'o') ||
        (tab[0][0] === 'o' && tab[0][1] === 'o' && tab[0][2] === 'o') || (tab[1][0] === 'o' && tab[1][1] === 'o' && tab[1][2] === 'o') || (tab[2][0] === 'o' && tab[2][1] === 'o' && tab[2][2] === 'o') ||
        (tab[2][2] === 'o' && tab[1][1] === 'o' && tab[0][0] === 'o') || (tab[0][2] === 'o' && tab[1][1] === 'o' && tab[2][0] === 'o')
    ) {
        alert("wygrana O");
    }
}

const newTicTacToe = () => {
    k = 0;
    tab = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    buildTicTacToe();
}

buildTicTacToe();
initializePuzzleBoard();
