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
            gamesPlaySection.scrollIntoView({behavior: 'smooth'});
        }
    } else {
        // Переход к секции aboutGames для больших экранов
        const aboutGamesSection = document.getElementById('aboutGames');
        if (aboutGamesSection) {
            aboutGamesSection.scrollIntoView({behavior: 'smooth'});
        }
    }
});

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает стандартное действие ссылки
        const targetId = card.getAttribute('data-target'); // Получает целевой ID из data-атрибута
        const targetSection = document.getElementById(targetId); // Находит секцию по ID

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавно скроллит к секции
        }
    });
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
    const operators = ['+', '-', '*', '/'];
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const operator = operators[getRandomInt(0, operators.length - 1)];

    let problem = `${num1} ${operator} ${num2}`;
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }
    return {problem, answer};
}

function playGame2() {
    const {problem, answer} = generateProblem();
    const userAnswer = parseFloat(prompt(`Решите задачу: ${problem}`));
    if (userAnswer === answer) {
        alert('Правильно!');
    } else {
        alert(`Ошибка. Правильный ответ: ${answer}`);
    }
}