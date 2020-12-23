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
    const clicked = puzzleBoard.findIndex(a => a === element.id);
    let blank_img = puzzleBoard[blank_index];
    console.log("blank index: " + blank_index);
    console.log("clicked index: " + clicked);


    if (blank_index % 4 === clicked % 4) {
        let blank_img = puzzleBoard[blank_index];
        puzzleBoard[blank_index] = puzzleBoard[clicked];
        puzzleBoard[clicked] = blank_img;
    }

    // blank = 15
    // clicked = 7

    //test -move 2 tiles down
    // const rowsToMove = ((blank_index - clicked) / 4);
    // console.log("rowsToMove: " + rowsToMove);
    // if (rowsToMove > 0) {
    //     for (let i = rowsToMove; i > 0; i--) {
    //         console.log("loop");
    //         let blank_img = puzzleBoard[blank_index];
    //         console.log("clicked + (4 * i): " + (clicked + (4 * i)));
    //         puzzleBoard[blank_index] = puzzleBoard[clicked + (4 * i)]; //11
    //         puzzleBoard[clicked + (4 * i)] = blank_img;
    //     }
    // }


    const rowsToMove = ((blank_index - clicked) / 4);
    console.log("rowsToMove: " + rowsToMove);
    if (rowsToMove > 0) {
        for (let i = rowsToMove; i > 0; i--) {
            // console.log('blank_img = ' + puzzleBoard[newBlank]);
            // rowsToMove = 3
            // clicked = 3
            let temp = puzzleBoard[clicked + (4 * i)];
            puzzleBoard[clicked + (4 * (i+1))] = temp; // + 12
            console.log("clicked + (4 * i): " + (clicked + (4 * i)));
            console.log('nowy blank: ' + (puzzleBoard[clicked + (4 * i)]));

            // puzzleBoard[clicked + (4 * i)] = blank_img;
        }
        puzzleBoard[clicked] = blank_img;
    }


    if (blank_index === clicked + 1 || blank_index === clicked - 1) {
        let blank_img = puzzleBoard[blank_index];
        puzzleBoard[blank_index] = puzzleBoard[clicked];
        puzzleBoard[clicked] = blank_img;
    }
    // puzzleBoard.splice(15,4);

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
