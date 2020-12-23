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

// dokonczyc przesuwanke
const playPuzzle = (element) => {
    // console.log("playPuzzle() " + element.id);
    const blank_index = puzzleBoard.findIndex(a => a === '3_3');
    let clicked_index = puzzleBoard.findIndex(a => a === element.id);
    const blank_img = puzzleBoard[blank_index];
    // console.log("blank index: " + blank_index);
    // console.log("clicked index: " + clicked_index);


    // dziala lewo -  prawo ale do naprawy na koncach
    if (blank_index === clicked_index + 1 || blank_index === clicked_index - 1) {
        puzzleBoard[blank_index] = puzzleBoard[clicked_index];
        puzzleBoard[clicked_index] = blank_img;
    } else {
        let rowsToMove = ((blank_index - clicked_index) / 4);
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
            resultString += '<div class="tic" id="' + divIdName + '" onclick="play(this)"></div>';
        }
    }
    const ticTacToe = document.getElementById('ticTacToe');
    ticTacToe.innerHTML = resultString;
}

const play = (element) => {
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
    if ((tab[0][1] === 'x' && tab[1][1] === 'x' && tab[2][1] === 'x') || (tab[0][2] === 'x' && tab[1][2] === 'x' && tab[2][2] === 'x') || (tab[0][0] === 'x' && tab[1][0] === 'x' && tab[2][0] === 'x') ||
        (tab[0][0] === 'x' && tab[0][1] === 'x' && tab[0][2] === 'x') || (tab[1][0] === 'x' && tab[1][1] === 'x' && tab[1][2] === 'x') || (tab[2][0] === 'x' && tab[2][1] === 'x' && tab[2][2] === 'x') ||
        (tab[2][2] === 'x' && tab[1][1] === 'x' && tab[0][0] === 'x') || (tab[0][2] === 'x' && tab[1][1] === 'x' && tab[2][0] === 'x')
    ) {
        alert("wygrana X");
    }
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
buildPuzzle()


initializePuzzleBoard();
