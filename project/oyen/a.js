const gameState = {
    playerName: "",
    currentSceneId: 1,
    visitedScenes: [],
    stats: {
        pets: 0,
        meals: 0,
        plays: 0
    }
};

const mainMenu = document.querySelector('.main-menu');
const settingsMenu = document.querySelector('.setting-menu');
const gameScreen = document.querySelector('.game');
const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const settingsButton = document.getElementById('settings-button');
const backButton = document.querySelector('.back-button');
const resetButton = document.getElementById('reset-button');
const catMessage = document.getElementById('cat-message');
const messageText = document.getElementById('message-text');
const typingCursor = document.getElementById('typing-cursor');
const catImage = document.getElementById('cat-image');
const choiceButtons = document.getElementById('choice-buttons');
const typingSound = document.getElementById('typing-sound');
const volumeControl = document.getElementById('volume-control');

const gameScenes = [
    {
        id: 1,
        image: "images/cat-smiley.png",
        message: "Halo {playerName}! Senang bertemu denganmu, aku Oyen kucing virtualmu. Apa yang ingin kamu lakukan?",
        choices: [
            { text: "Mengelus Oyen", nextScene: 2 },
            { text: "Memberi makan Oyen", nextScene: 3 },
            { text: "Bermain dengan Oyen", nextScene: 4 }
        ]
    },
    {
        id: 2,
        image: "images/cat-purring.png",
        message: "Oyen mendengkur senang sambil menggesek-gesekkan badannya ke kakimu. Dia sangat menikmati elusanmu!",
        choices: [
            { text: "Terus mengelus", nextScene: 5 },
            { text: "Berhenti mengelus", nextScene: 6 }
        ]
    },
    {
        id: 3,
        image: "images/cat-yum.png",
        message: "Oyen melahap makanannya dengan rakus! Dia terlihat sangat lapar.",
        choices: [
            { text: "Memberi makanan lagi", nextScene: 7 },
            { text: "Berhenti memberi makan", nextScene: 8 }
        ]
    },
    {
        id: 4,
        image: "images/cat-joy.png",
        message: "Oyen berlarian kesana kemari mengejar mainan yang kamu lempar! Dia sangat bersemangat!",
        choices: [
            { text: "Lanjutkan bermain", nextScene: 9 },
            { text: "Berhenti bermain", nextScene: 10 }
        ]
    },
    {
        id: 5,
        image: "images/cat-heart_eyes.png",
        message: "Oyen benar-benar mencintaimu! Matanya berbinar-binar sambil terus mendengkur.",
        choices: [
            { text: "Peluk Oyen", nextScene: 11 },
            { text: "Berhenti mengelus", nextScene: 6 }
        ]
    },
    {
        id: 6,
        image: "images/cat-disappointed.png",
        message: "Oyen mengedipkan matanya dengan sedih, sepertinya dia kecewa kamu berhenti mengelusnya.",
        choices: [
            { text: "Kembali ke menu utama", nextScene: 1 }
        ]
    },
    {
        id: 7,
        image: "images/cat-drooling_face.png",
        message: "Oyen terus makan sampai perutnya gendut! Dia mulai terlihat mengantuk.",
        choices: [
            { text: "Biarkan Oyen tidur", nextScene: 12 },
            { text: "Ajak Oyen bermain", nextScene: 13 }
        ]
    },
    {
        id: 8,
        image: "images/cat-zipper_mouth_face.png",
        message: "Oyen menatapmu dengan tatapan memelas, sepertinya dia masih ingin makan lagi...",
        choices: [
            { text: "Kasihan, beri makan lagi", nextScene: 7 },
            { text: "Tetap tidak memberi makan", nextScene: 14 }
        ]
    },
    {
        id: 9,
        image: "images/cat-rolling_on_the_floor_laughing.png",
        message: "Oyen terlihat sangat senang! Dia berguling-guling di lantai sambil mengejar ekornya sendiri.",
        choices: [
            { text: "Lanjutkan permainan", nextScene: 15 },
            { text: "Berhenti bermain", nextScene: 10 }
        ]
    },
    {
        id: 10,
        image: "images/cat-tired_face.png",
        message: "Oyen terengah-engah kelelahan tapi terlihat sangat puas setelah bermain.",
        choices: [
            { text: "Kembali ke menu utama", nextScene: 1 }
        ]
    },
    {
        id: 11,
        image: "images/cat-kissing_heart.png",
        message: "Oyen memberikan ciuman kecil padamu sebagai tanda terima kasih!",
        choices: [
            { text: "Kembali ke menu utama", nextScene: 1 }
        ]
    },
    {
        id: 12,
        image: "images/cat-sleeping.png",
        message: "Oyen tertidur pulas dengan perut yang penuh. Dia mendengkur pelan... Zzz...",
        choices: [
            { text: "Biarkan Oyen tidur", nextScene: 16 },
            { text: "Bangunkan Oyen", nextScene: 17 }
        ]
    },
    {
        id: 13,
        image: "images/cat-nauseated_face.png",
        message: "Oyen terlihat tidak nyaman! Sepertinya dia terlalu kenyang untuk bermain.",
        choices: [
            { text: "Biarkan Oyen beristirahat", nextScene: 12 },
            { text: "Tetap ajak bermain", nextScene: 18 }
        ]
    },
    {
        id: 14,
        image: "images/cat-rage.png",
        message: "Oyen marah! Dia menampar mangkuk makanannya sampai terbalik!",
        choices: [
            { text: "Segera beri makan", nextScene: 3 },
            { text: "Biarkan Oyen marah", nextScene: 19 }
        ]
    },
    {
        id: 15,
        image: "images/cat-exploding_head.png",
        message: "Oyen terlalu bersemangat! Dia mulai berlari seperti gila ke seluruh ruangan!",
        choices: [
            { text: "Biarkan dia melepaskan energi", nextScene: 20 },
            { text: "Coba tenangkan Oyen", nextScene: 21 }
        ]
    }
];

playButton.addEventListener('click', startGame);
settingsButton.addEventListener('click', openSettings);
backButton.addEventListener('click', closeSettings);
resetButton.addEventListener('click', resetGame);
volumeControl.addEventListener('input', updateVolume);

function init() {
    const savedGame = localStorage.getItem('oyenGame');
    if (savedGame) {
        try {
            const parsed = JSON.parse(savedGame);
            gameState.playerName = parsed.playerName || "";
            gameState.stats = parsed.stats || { pets: 0, meals: 0, plays: 0 };
            playerNameInput.value = gameState.playerName;
        } catch (e) {
            console.error(e);
        }
    }
    updateVolume();
}

function updateVolume() {
    if (typingSound) {
        typingSound.volume = volumeControl.value / 100;
    }
}

function playSound(sound) {
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(e => console.log(e));
}

function startGame() {
    const name = playerNameInput.value.trim();
    if (name.length < 3 || name.length > 20) {
        alert("Hanya 3 sampai 20 karakter.");
        return;
    }
    if (/<[^>]*>/g.test(name)) {
        alert("Nama tidak boleh mengandung elemen HTML.");
        return;
    }

    gameState.playerName = name;
    saveGame();

    mainMenu.classList.add('hidden');
    gameScreen.classList.add('visible');

    loadScene(1);
}

function openSettings() {
    mainMenu.classList.add('hidden');
    settingsMenu.setAttribute('aria-hidden', 'false');
}

function closeSettings() {
    settingsMenu.setAttribute('aria-hidden', 'true');
    mainMenu.classList.remove('hidden');
}

function resetGame() {
    if (confirm("Apakah anda setuju untuk menghapus data game?.")) {
        localStorage.removeItem('oyenGame');
        gameState.playerName = "";
        gameState.currentSceneId = 1;
        gameState.visitedScenes = [];
        gameState.stats = { pets: 0, meals: 0, plays: 0 };
        playerNameInput.value = "";
        closeSettings();
    }
}

function saveGame() {
    localStorage.setItem('oyenGame', JSON.stringify({
        playerName: gameState.playerName,
        stats: gameState.stats
    }));
}

async function loadScene(sceneId) {
    const scene = gameScenes.find(s => s.id === sceneId);
    if (!scene) {
        console.error(sceneId);
        return;
    }

    gameState.currentSceneId = sceneId;
    gameState.visitedScenes.push(sceneId);
    saveGame();

    if (scene.onEnter) {
        scene.onEnter();
    }

    catImage.src = scene.image;

    choiceButtons.classList.remove('visible');
    choiceButtons.innerHTML = '';

    typingCursor.style.display = 'inline-block';
    messageText.textContent = '';

    const processedMessage = scene.message.replace(/\{playerName\}/g, gameState.playerName);

    await typeMessage(processedMessage);

    typingCursor.style.display = 'none';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => loadScene(choice.nextScene));
        choiceButtons.appendChild(button);
    });

    setTimeout(() => {
        choiceButtons.classList.add('visible');
    }, 50);
}

async function typeMessage(message, index = 0) {
    return new Promise(resolve => {
        if (index < message.length) {
            if (message[index] !== ' ') {
                playSound(typingSound);
            }

            messageText.textContent += message[index];

            const speed = Math.random() * 30 + 20;

            setTimeout(() => {
                typeMessage(message, index + 1).then(resolve);
            }, speed);
        } else {
            resolve();
        }
    });
}

document.addEventListener('DOMContentLoaded', init);