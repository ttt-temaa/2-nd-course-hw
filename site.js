function startGame() {
    alert('Игра начинается!');
}

function playGame(gameText) {
    alert(`Запуск игры №${gameText}`);
}

function startGuessNumberGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    let attempts = 0;
    let guessed = false;

    alert("Добро пожаловать в игру 'Угадай число'! Я загадал число от 1 до 100. Попробуйте угадать.");

    while (!guessed) {
        const userGuess = prompt("Введите число от 1 до 100:");

        if (userGuess === null) {
            alert("Игра завершена. Спасибо за участие!");
            return;
        }

        const guess = Number(userGuess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Пожалуйста, введите корректное число от 1 до 100.");
            continue;
        }

        attempts++;

        if (guess === targetNumber) {
            alert(`Поздравляем! Вы угадали число ${targetNumber} за ${attempts} попыток.`);
            guessed = true;
        } else if (guess < targetNumber) {
            alert("Загаданное число больше. Попробуйте ещё раз!");
        } else {
            alert("Загаданное число меньше. Попробуйте ещё раз!");
        }
    }
}

document.getElementById('startButton').addEventListener('click', () => {
    const isSmallScreen = window.matchMedia('(max-width: 376px)').matches;

    if (isSmallScreen) {
        // Переход к секции gamesPlay для маленьких экранов
        const gamesPlaySection = document.getElementById('gamesPlay');
        if (gamesPlaySection) {
            gamesPlaySection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Переход к секции aboutGames для больших экранов
        const aboutGamesSection = document.getElementById('aboutGames');
        if (aboutGamesSection) {
            aboutGamesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();

        const targetId = card.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const scrollButton = document.getElementById('scrollButton');
const miniGamesSection = document.getElementById('miniGames');

scrollButton.addEventListener('click', (event) => {
    event.preventDefault();
    miniGamesSection.scrollIntoView({ behavior: 'smooth' });
});
