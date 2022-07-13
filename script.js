const images = [{
        src: 'img/bear.png',
        name: 'bear'
    },
    {
        src: 'img/bear.png',
        name: 'bear'
    },
    {
        src: 'img/bison.png',
        name: 'bison'
    },
    {
        src: 'img/bison.png',
        name: 'bison'
    },
    {
        src: 'img/boar.png',
        name: 'boar'
    },
    {
        src: 'img/boar.png',
        name: 'boar'
    },
    {
        src: 'img/bull.png',
        name: 'bull'
    },
    {
        src: 'img/bull.png',
        name: 'bull'
    },
    {
        src: 'img/red-wolf.png',
        name: 'red-wolf'
    },
    {
        src: 'img/red-wolf.png',
        name: 'red-wolf'
    },
    {
        src: 'img/cat.png',
        name: 'cat'
    },
    {
        src: 'img/cat.png',
        name: 'cat'
    },
    {
        src: 'img/cow.png',
        name: 'cow'
    },
    {
        src: 'img/cow.png',
        name: 'cow'
    },
    {
        src: 'img/crawl.png',
        name: 'crawl'
    },
    {
        src: 'img/crawl.png',
        name: 'crawl'
    },
    {
        src: 'img/deer.png',
        name: 'deer'
    },
    {
        src: 'img/deer.png',
        name: 'deer'
    },
    {
        src: 'img/doe.png',
        name: 'doe'
    },
    {
        src: 'img/doe.png',
        name: 'doe'
    },
    {
        src: 'img/eagle.png',
        name: 'eagle'
    },
    {
        src: 'img/eagle.png',
        name: 'eagle'
    },
    {
        src: 'img/dog.png',
        name: 'dog'
    },
    {
        src: 'img/dog.png',
        name: 'dog'
    },
    {
        src: 'img/elephant.png',
        name: 'elephant'
    },
    {
        src: 'img/elephant.png',
        name: 'elephant'
    },
    {
        src: 'img/gorilla.png',
        name: 'gorilla'
    },
    {
        src: 'img/gorilla.png',
        name: 'gorilla'
    },
    {
        src: 'img/hippo.png',
        name: 'hippo'
    },
    {
        src: 'img/hippo.png',
        name: 'hippo'
    },
    {
        src: 'img/husky.png',
        name: 'husky'
    },
    {
        src: 'img/husky.png',
        name: 'husky'
    },
    {
        src: 'img/kangoo.png',
        name: 'kangoo'
    },
    {
        src: 'img/kangoo.png',
        name: 'kangoo'
    },
    {
        src: 'img/monkey.png',
        name: 'monkey'
    },
    {
        src: 'img/monkey.png',
        name: 'monkey'
    },
    {
        src: 'img/panther.png',
        name: 'panther'
    },
    {
        src: 'img/panther.png',
        name: 'panther'
    },
    {
        src: 'img/crocodile.png',
        name: 'crocodile'
    },
    {
        src: 'img/crocodile.png',
        name: 'crocodile'
    },
    {
        src: 'img/penguin.png',
        name: 'penguin'
    },
    {
        src: 'img/penguin.png',
        name: 'penguin'
    },
    {
        src: 'img/racoon.png',
        name: 'racoon'
    },
    {
        src: 'img/racoon.png',
        name: 'racoon'
    },
    {
        src: 'img/rhino.png',
        name: 'rhino'
    },
    {
        src: 'img/rhino.png',
        name: 'rhino'
    },
    {
        src: 'img/sloth.png',
        name: 'sloth'
    },
    {
        src: 'img/sloth.png',
        name: 'sloth'
    },
    {
        src: 'img/tiger.png',
        name: 'tiger'
    },
    {
        src: 'img/tiger.png',
        name: 'tiger'
    },
    {
        src: 'img/white-cat.png',
        name: 'white-cat'
    },
    {
        src: 'img/white-cat.png',
        name: 'white-cat'
    },
    {
        src: 'img/white-tiger.png',
        name: 'white-tiger'
    },
    {
        src: 'img/white-tiger.png',
        name: 'white-tiger'
    },
    {
        src: 'img/wolf.png',
        name: 'wolf'
    },
    {
        src: 'img/wolf.png',
        name: 'wolf'
    },
];

function randomizeImages(data) {
    return data.sort(() => Math.random() - 0.5);
}


function fillGameArea() {
    const sortedImages = randomizeImages(images);
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.innerHTML = '';

    sortedImages.forEach(image => {
        gameWrapper.innerHTML += `
            <div class="card" data-name="${image.name}">
                <img class="front" src=${image.src} alt="${image.name}">
                <img class="back" src="img/question.jpg" alt="question">
            </div>
        `;
    });
}
fillGameArea();

let hasPickedCard = false,
    lockBoard = false,
    firstCard, secondCard;
const cards = document.querySelectorAll('.card');

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!hasPickedCard) {
        hasPickedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.addEventListener('click', flipCard);
    secondCard.addEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasPickedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});
