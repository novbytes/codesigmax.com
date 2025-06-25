let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let difficulty = 100;
let gamesPlayed = 0;
let botWins = 0;
let musicEnabled = true;

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset-btn');
const musicButton = document.getElementById('music-btn');
const botMessageText = document.getElementById('bot-message-text');
const catExpression = document.getElementById('cat-expression');
const difficultyLevel = document.getElementById('difficulty-level');

const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const drawSound = document.getElementById('drawSound');
const bgMusic = document.getElementById('bgMusic');

function enableAudio() {
    if (musicEnabled) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => {
            musicButton.textContent = "MUSIC OFF";
            musicEnabled = false;
        });
    }
}

const messages = {
    idle: [
        { text: "KAMU TAKKAN MENANG.", image: "images/cat-smirk.png" },
        { text: "PERLAWANANMU SIA-SIA.", image: "images/cat-expressionless.png" },
        { text: "AKU TAK TERKALAHKAN.", image: "images/cat-relieved.png" },
        { text: "UNTUK APA MENCOBA?", image: "images/cat-no_mouth.png" },
        { text: "ITU SAJA KEMAMPUANMU?", image: "images/cat-wink.png" }
    ],
    thinking: [
        { text: "MENGHITUNG KEKALAHANMU...", image: "images/cat-pensive.png" },
        { text: "MENGANALISIS LANGKAH TERBAIK...", image: "images/cat-neutral_face.png" },
        { text: "MENGAMATI KEPUTUSASAANMU...", image: "images/cat-anguished.png" },
        { text: "MEMPROSES... KAMU KALAH", image: "images/cat-face_holding_back_tears.png" },
        { text: "MENJALANKAN SIMULASI... GAGAL", image: "images/cat-blush.png" }
    ],
    win: [
        { text: "KEMENANGAN DIRAIH.", image: "images/cat-partying_face.png" },
        { text: "TERLALU MUDAH. MANUSIA TERDUGA.", image: "images/cat-star_struck.png" },
        { text: "DOMINASI SELESAI.", image: "images/cat-rose.png" },
        { text: "GG TANPA BALAS!", image: "images/cat-saluting_face.png" },
        { text: "SUDAH KUKATAKAN.", image: "images/cat-smirk.png" }
    ],
    lose: [
        { text: "KESALAHAN! KESALAHAN!", image: "images/cat-rage.png" },
        { text: "HASIL TIDAK MASUK AKAL!", image: "images/cat-dizzy_face.png" },
        { text: "KEGAGALAN SISTEM TERDETEKSI!", image: "images/cat-sob.png" },
        { text: "KETIDAKJUJURAN TERDETEKSI!", image: "images/cat-sneezing_face.png" },
        { text: "AKU AKAN KEMBALI LEBIH KUAT.", image: "images/cat-innocent.png" }
    ],
    draw: [
        { text: "SERIES. KAMU BERUNTUNG.", image: "images/cat-sweat_smile.png" },
        { text: "LAIN KALI KAU JATUH.", image: "images/cat-kissing_smiling_eyes.png" },
        { text: "HASIL YANG TIDAK DITERIMA.", image: "images/cat-face_holding_back_tears.png" },
        { text: "KERUSAKAN SISTEM.", image: "images/cat-dizzy.png" },
        { text: "KESEIMBANGAN DIPULIHKAN... UNTUK SEKARANG.", image: "images/cat-smiling_face_with_tear.png" }
    ]
};

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function triggerPortraitGlitch(duration = 1000) {
    const portrait = document.getElementById('cat-expression');
    portrait.classList.add('glitch-portrait');

    setTimeout(() => {
        portrait.classList.remove('glitch-portrait');
    }, duration);
}

function triggerPortraitColorGlitch(duration = 1000) {
    const portrait = document.getElementById('cat-expression');
    portrait.classList.add('glitch-portrait-color');

    setTimeout(() => {
        portrait.classList.remove('glitch-portrait-color');
    }, duration);
}

function initGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    statusDisplay.textContent = "GILIRAN KAMU [X]";
    statusDisplay.classList.remove('glitch');

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning-cell');
    });

    setRandomMessage('idle');
    updateDifficulty();

    playSound(clickSound);
}

function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive || currentPlayer !== 'X') {
        return;
    }

    playSound(clickSound);

    makeMove(clickedCellIndex, 'X');

    if (checkWin() || checkDraw()) {
        return;
    }

    currentPlayer = 'O';
    statusDisplay.textContent = "SHINDJI BERPIKIR . . .";

    setRandomMessage('thinking');

    setTimeout(() => {
        if (gameActive) {
            const aiMove = findBestMove();
            makeMove(aiMove, 'O');

            playSound(clickSound);

            checkWin();
            checkDraw();

            if (gameActive) {
                currentPlayer = 'X';
                statusDisplay.textContent = "GILIRAN KAMU [X]";
                setRandomMessage('idle');
            }
        }
    }, 500 + Math.random() * 1000);
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    cells[index].classList.add(player.toLowerCase());

    cells[index].style.animation = 'none';
    void cells[index].offsetWidth;
    cells[index].style.animation = 'pulse 0.5s';
}

function checkWin() {
    let roundWon = false;
    let winningCombo = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }

        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            winningCombo = winningConditions[i];
            break;
        }
    }

    if (roundWon) {
        gameActive = false;

        winningCombo.forEach(index => {
            cells[index].classList.add('winning-cell');
        });

        if (currentPlayer === 'X') {
            statusDisplay.textContent = "KAMU MENANG!";
            setRandomMessage('lose');
            createConfetti('#f0f');
            playSound(winSound);
        } else {
            statusDisplay.textContent = "SHINDJI MENANG!";
            setRandomMessage('win');
            createConfetti('#0ff');
            playSound(loseSound);
            triggerPortraitGlitch(3000);
            triggerPortraitColorGlitch(3000);
            botWins++;
        }

        gamesPlayed++;
        updateDifficulty();

        return true;
    }

    return false;
}

function checkDraw() {
    if (!board.includes('')) {
        gameActive = false;
        statusDisplay.textContent = "SERI!";
        setRandomMessage('draw');
        createConfetti('#ff0');
        playSound(drawSound);
        gamesPlayed++;
        updateDifficulty();
        return true;
    }
    return false;
}

function findBestMove() {
    let bestMove;

    bestMove = findWinningMove('O');
    if (bestMove !== null) return bestMove;

    bestMove = findWinningMove('X');
    if (bestMove !== null) return bestMove;

    if (board[4] === '') return 4;

    if (board[4] === 'X') {
        const corners = [0, 2, 6, 8];
        const availableCorners = corners.filter(index => board[index] === '');
        if (availableCorners.length > 0) {
            for (let corner of availableCorners) {
                if (canCreateFork(corner, 'O')) {
                    return corner;
                }
            }
            return availableCorners[Math.floor(Math.random() * availableCorners.length)];
        }
    }

    if (hasOppositeCorners('X')) {
        const sides = [1, 3, 5, 7];
        const availableSides = sides.filter(index => board[index] === '');
        if (availableSides.length > 0) {
            return availableSides[Math.floor(Math.random() * availableSides.length)];
        }
    }

    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(index => board[index] === '');
    if (availableCorners.length > 0) {
        for (let corner of availableCorners) {
            if (canCreateFork(corner, 'O')) {
                return corner;
            }
        }
        return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    const edges = [1, 3, 5, 7];
    const availableEdges = edges.filter(index => board[index] === '');
    if (availableEdges.length > 0) {
        return availableEdges[Math.floor(Math.random() * availableEdges.length)];
    }

    return board.indexOf('');
}

function findWinningMove(player) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if (board[a] === player && board[b] === player && board[c] === '') return c;
        if (board[a] === player && board[c] === player && board[b] === '') return b;
        if (board[b] === player && board[c] === player && board[a] === '') return a;
    }
    return null;
}

function hasOppositeCorners(player) {
    return (board[0] === player && board[8] === player) ||
        (board[2] === player && board[6] === player);
}

function canCreateFork(move, player) {
    const tempBoard = [...board];
    tempBoard[move] = player;

    let winningOpportunities = 0;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if ((tempBoard[a] === player && tempBoard[b] === player && tempBoard[c] === '') ||
            (tempBoard[a] === player && tempBoard[c] === player && tempBoard[b] === '') ||
            (tempBoard[b] === player && tempBoard[c] === player && tempBoard[a] === '')) {
            winningOpportunities++;

            if (winningOpportunities >= 2) {
                return true;
            }
        }
    }

    return false;
}

function setRandomMessage(category) {
    const messageList = messages[category];
    const randomMessage = messageList[Math.floor(Math.random() * messageList.length)];

    botMessageText.textContent = randomMessage.text;
    catExpression.src = randomMessage.image;

    if (category === 'lose' || category === 'draw') {
        triggerPortraitGlitch(2000);
        if (category === 'lose') {
            triggerPortraitColorGlitch(2000);
        }
    }
}

function updateDifficulty() {
    difficulty = 100;
    difficultyLevel.style.width = difficulty + '%';
    statusDisplay.classList.add('glitch');
}

function createConfetti(color) {
    const colors = [
        color || '#f0f',
        '#0ff',
        '#ff0',
        '#f0f',
        '#0ff'
    ];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function playSound(sound) {
    if (!musicEnabled) return;

    try {
        sound.currentTime = 0;
        sound.play();
    } catch (e) {
        //
    }
}

function toggleMusic() {
    musicEnabled = !musicEnabled;

    if (musicEnabled) {
        musicButton.textContent = "MUSIC ON";
        bgMusic.play().catch(e => {
            musicButton.textContent = "MUSIC OFF";
            musicEnabled = false;
        });
    } else {
        musicButton.textContent = "MUSIC OFF";
        bgMusic.pause();
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', initGame);
musicButton.addEventListener('click', toggleMusic);

document.addEventListener('click', enableAudio, { once: true });
triggerPortraitGlitch(1000);
initGame();