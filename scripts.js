//Przypisywanie id do zmiennych w JS

		//new Game button
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);


		//Pozostałe

 var newGameElem = document.getElementById('js-newGameElement'),
     pickElem = document.getElementById('js-playerPickElement'),
     resultsElem = document.getElementById('js-resultsTableElement');


		//pick Rock, Paper, Scissors buttons
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');



//Nadawanie "listnerów" na element button

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });



//wartości początkowe gry

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };



//Funkcja na wyświetlanie/niewyświetlanie elementów na stronie

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

//Rozpoczęcie gry

		//Zdefiniowanie zmiennych

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


    	//Funkcja rozpoczynająca grę

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza'); //Pobieranie imienia gracza
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started'; //wywołanie stanu gry "started"
    setGameElements(); //wywołanie funkcji gameState

    playerNameElem.innerHTML = player.name;
    setGamePoints(); // 
  }

}


//Lowowanie wyniku przez komputer

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}


//Wybór gracza


var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
    
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//Przyznawanie punktów

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
      } else if (winnerIs == 'noone') {
      	playerResultElem.innerHTML = " Dead-heat!";
      }

 setGamePoints();
 endOfTheGame();
 

}

//Aktualizacja punktów
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

   
}

//Zakończenie gry

function endOfTheGame() {
  if (player.score == 10) {
    alert("The winner is " + player.name);
    gameState ="ended";
  } else if (computer.score == 10) {
    alert("Computer wins!");
    gameState ="ended";
  }
  
  setGameElements()
}

