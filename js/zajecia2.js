// Tiles
const _tiles = [
    {
        id: 1,
        img: "images/tiles/tile1.jpg"
    },
    {
        id: 2,
        img: "images/tiles/tile2.jpg"
    },
    {
        id: 3,
        img: "images/tiles/tile3.jpg"
    },
    {
        id: 4,
        img: "images/tiles/tile4.jpg"
    },

];

const shuffleTiles = () => {
    let tilesCopy = shuffle([..._tiles]);
    buildTiles(tilesCopy);
}

const hideTiles = () => {
    let tiles = $(".tile-img");
    let button = $("#tile-button");
    let buttonValue = button.prop('value');
    if (buttonValue === 'zasłoń') {
        button.prop('value', 'odsłoń');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].style.visibility = 'hidden';
        }
    } else {
        button.prop('value', 'zasłoń');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].style.visibility = 'visible';
        }
    }
}

const buildTiles = (input) => {
    let resultString = '';
    input.forEach(tile => {
        resultString += '<div class="tile"><img class="tile-img" src="'
            + tile.img + '" alt="tile' + tile.id + '"></div>'
    });
    document.getElementById("tiles-main").innerHTML = resultString;
}


// Memory game
let difficulty = 6;
let gameBoard = [];
let activeCards = [];
let stepsCounter = 0;
let card_id = [];
let cardsFlipped = 0;
let cardsFlippedArray = [];

const _cards = [
    {
        name: "java",
        img: "images\\java.png",
        id: 1
    },
    {
        name: "kafka",
        img: "images\\kafka-logo.png",
        id: 2
    },
    {
        name: "mvn",
        img: "images\\mvn.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    },
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7
    },
    {
        name: "python",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10
    },
    {
        name: "sublime",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
        id: 11
    },
    {
        name: "wordpress",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
        id: 12
    },
    {
        name: "git",
        img: "images\\git.jpg",
        id: 13
    },
    {
        name: "hibernate",
        img: "images\\hibernate.png",
        id: 14
    },
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 15
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 16
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 17
    },
    {
        name: "spring",
        img: "images\\spring-boot.png",
        id: 18
    },
];

const populateGameBoard = () => {
    updateCounter();
    let cardsCopy = [];
    cardsFlipped = 0;
    cardsFlippedArray = [];
    for (let i = 0; i < difficulty; i++) {
        let object = { ..._cards[i] }
        object.id = object.id + 1000;
        cardsCopy[i] = object;
    }
    gameBoard = shuffle(cardsCopy.concat(_cards.slice(0, difficulty)));
    buildGame(gameBoard);
}

const buildGame = (gameBoardInput) => {
    let resultString = '';
    gameBoardInput.forEach(item => {
        resultString += '<div class="card" data-name="' + item.name + '" onclick="clickCard(' + item.id + ',' + "\'" + item.name + "\'" + ')"><img id="' + item.id + '" src="' + item.img + '"alt="' + item.name + '" /></div>'
    })
    document.getElementById("game").innerHTML = resultString;
}

const shuffle = (array) => {
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

const setDifficulty = (value) => {
    difficulty = value;
    updateCounter();
    populateGameBoard();
}

const updateCounter = (val) => {
    if (val === 1) {
        stepsCounter++;
    } else {
        stepsCounter = 0;
    }
    document.getElementById("stepsCounter").value = stepsCounter + "";
}

const clickCard = (id, name) => {
    console.log("clickCard() id: " + id + " name: " + name);
    if (activeCards.length < 2) {
        updateCounter(1);
        let image = document.getElementById(id);
        image.style.visibility = "visible";
        if (activeCards.length == 0) {
            activeCards.push(name);
            card_id.push(id);
        } else if (activeCards.length == 1 && (card_id[0] !== id)) {
            activeCards.push(name);
            card_id.push(id);
            if (activeCards[0] === activeCards[1] &&
                (card_id[0] === card_id[1] - 1000 || card_id[0] - 1000 === card_id[1])) {
                if (cardsFlippedArray.findIndex(item => item === name) < 0) {
                    console.log("cardsFlippedArray.findIndex: " + (cardsFlippedArray.findIndex(item => item == name)))
                    cardsFlipped += 2;
                    console.log("cardsFlipped: " + cardsFlipped);
                    cardsFlippedArray.push(name);
                    activeCards = [];
                    card_id = [];
                }
                if (cardsFlipped == gameBoard.length) {
                    alert("Udalo sie zakonczyć gre z wynikiem: " + stepsCounter + " ruchów");
                    updateCounter();
                    populateGameBoard();
                }
            } else {
                function flipBack() {
                    let card_1 = document.getElementById(card_id[0]);
                    let card_2 = document.getElementById(card_id[1]);
                    card_2.style.visibility = "hidden";
                    card_1.style.visibility = "hidden";
                    activeCards = [];
                    card_id = [];
                }
                setTimeout(flipBack, 600);
            }
        }
    }
}

populateGameBoard();

