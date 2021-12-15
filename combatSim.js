let enemyGrid = document.querySelector('#ec__grid');
// card selection menu header
let chooseCardText = document.querySelector('#choose-card');
//cards are 4-1 from left to right
let cards = ['#card-1', '#card-2', '#card-3', '#card-4'];
let enemyCards = ['#enemy-card-1', '#enemy-card-2', '#enemy-card-3', '#enemy-card-4'];
let playerCard = document.querySelector('.player-card');
let infoBoxUpdates = document.querySelector('#info-text__updates');
let enemyTotalHealth = document.querySelector('#enemy-total-health');


let playerAttackPower;

let cardStats = {
    cardOne: {
        title: 'Blackwell Assassin',
        hp: 50,
        toughness: 50,
        attackPower: 30
    },
    cardTwo: {
        title: 'Forsaken Mage',
        hp: 100,
        toughness: 100,
        attackPower: 20
    },
    cardThree: {
        title: 'Solemn Baker',
        hp: 30,
        toughness: 100,
        attackPower: 10
    },
    cardFour: {
        title: 'Abandoned Hope',
        hp: 100,
        toughness: 100,
        attackPower: 5
    }
}

let enemyCardStats = {
    cardOne: {
        title: 'Nuanced Swordsman',
        hp: 40,
        toughness: 50,
        attackPower: 30
    },
    cardTwo: {
        title: 'Desperation',
        hp: 60,
        toughness: 100,
        attackPower: 20
    },
    cardThree: {
        title: 'Advance and Conquer',
        hp: 90,
        toughness: 100,
        attackPower: 10
    },
    cardFour: {
        title: 'White Castle Soldier',
        hp: 10,
        toughness: 100,
        attackPower: 0
    }
}

let playerStats = {
    totalHealth: cardStats.cardOne.hp + cardStats.cardTwo.hp + cardStats.cardThree.hp + cardStats.cardFour.hp
}

let enemyStats = {
    totalHealth: enemyCardStats.cardOne.hp + enemyCardStats.cardTwo.hp + enemyCardStats.cardThree.hp + enemyCardStats.cardFour.hp
}

let infoBoxEvents = {
    playerDamaged: `Player took a hit for ${playerAttackPower}`,
}

let deck = {
    slideUp: function() {
        anime({
            targets: '.player-card',
            translateY: -250,
            direction: 'alternate',
            delay: function(el, i, l){
                return i * 100;
            },
            endDelay: function(el,i,l) {
                return (l - i) * 100;
            },
            scale: 1.3,
            loop: false
        });
        enemyGrid.style.opacity = '25%';
        infoBoxUpdates.style.opacity = '25%';
        enemyTotalHealth.style.opacity = '25%';
    },
    slideDown: function() {
        anime({
            targets: '.player-card',
            translateY: 0,
            direction: 'alternate',
            delay: function(el, i, l){
                return i * 100;
            },
            endDelay: function(el, i, l){
                return (l - i) * 100;
            },
            scale: 1,
            loop: false
        });
        enemyGrid.style.opacity = '100%';
        infoBoxUpdates.style.opacity = '100%';
        enemyTotalHealth.style.opacity = '100%';
    }
}


function presentCards(){
    for (let j of cards){
        let k = document.querySelector(j);
        k.addEventListener('mouseover', () => {
            deck.slideUp()
            for (let i of cards) {
                let el = document.querySelector(i);
                el.addEventListener('click', () => {
                    deck.slideDown();
                })
            }
        })
    }
}

// function getRandAtkPower(max) {
//     return Math.floor(Math.random() * max); // simulated enemy attack power
// }

for (let c of cards) {
    let selected = document.querySelector(c);
        selected.addEventListener('click', () => {
            playerSendDmg(c);
        })
    }


enemyTotalHealth.innerHTML = `Enemy: ${enemyStats.totalHealth} / 200`;

function playerSendDmg(pickCard, cb) {

    playerAttackPower = cb;
    console.log(cb);

    let currentHand = [
        document.querySelector(cards[0]),
        document.querySelector(cards[1]),
        document.querySelector(cards[2]),
        document.querySelector(cards[3])
    ]

    let enemyHand = [
        document.querySelector(enemyCards[0]),
        document.querySelector(enemyCards[1]),
        document.querySelector(enemyCards[2]),
        document.querySelector(enemyCards[3])
    ]

    if (pickCard === '#card-4'){
        let enemyHp = enemyStats.totalHealth;
        enemyStats.totalHealth = enemyHp - cardStats.cardFour.attackPower;
        enemyTotalHealth.innerHTML = `Enemy: ${enemyStats.totalHealth} / 200`;
        infoBoxUpdates.innerHTML = `${enemyCardStats.cardFour.title} took a hit for ${cardStats.cardFour.attackPower}`;
        if (enemyCardStats.cardFour.hp <= 0) {
            enemyHand[3].remove();
            infoBoxUpdates.innerHTML = `${enemyCardStats.cardFour.title} has been destroyed!`;
        }
    } else if (pickCard === '#card-3'){
        let enemyHp = enemyStats.totalHealth;
        enemyStats.totalHealth = enemyHp - cardStats.cardThree.attackPower;
        enemyTotalHealth.innerHTML = `Enemy: ${enemyStats.totalHealth} / 200`;
        infoBoxUpdates.innerHTML = `${enemyCardStats.cardThree.title} took a hit for ${cardStats.cardThree.attackPower / 2}`;
        if (enemyCardStats.cardThree.hp <= 0) {
            enemyHand[2].remove();
            infoBoxUpdates.innerHTML = `${enemyCardStats.cardThree.title} has been destroyed!`;
        }
    } else if (pickCard === '#card-2') {
        let enemyHp = enemyStats.totalHealth;
        enemyStats.totalHealth = enemyHp - cardStats.cardTwo.attackPower;
        enemyTotalHealth.innerHTML = `Enemy: ${enemyStats.totalHealth} / 200`;
        infoBoxUpdates.innerHTML = `${enemyCardStats.cardTwo.title} took a hit for ${cardStats.cardTwo.attackPower}`;
        if (enemyCardStats.cardTwo.hp <= 0){
            enemyHand[1].remove();
            infoBoxUpdates.innerHTML = `${enemyCardStats.cardTwo.title} has been destroyed!`;
        }
    } else if (pickCard === '#card-1') {
        let enemyHp = enemyStats.totalHealth;
        enemyStats.totalHealth = enemyHp - cardStats.cardOne.attackPower;
        enemyTotalHealth.innerHTML = `Enemy: ${enemyStats.totalHealth} / 200`;
        infoBoxUpdates.innerHTML = `${enemyCardStats.cardOne.title} took a hit for ${cardStats.cardOne.attackPower}`;
        if (enemyCardStats.cardOne.hp <= 0) {
            enemyHand[0].remove();
            infoBoxUpdates.innerHTML = `${enemyCardStats.cardOne.title} has been destroyed!`;
        }
    }

    if (enemyStats.totalHealth <= 0){
        anime({
            targets: '.enemy-card',
            opacity: 0
        })
        enemyTotalHealth.innerHTML = `Enemy: 0/200`;
        infoBoxUpdates.innerHTML = 'Player Wins!';
    }
}

presentCards();
