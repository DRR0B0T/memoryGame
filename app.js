const cardArray = [
  {
    name: 'fries',
    img: 'img/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'img/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'img/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'img/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'img/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'img/pizza.png',
  },
  {
    name: 'fries',
    img: 'img/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'img/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'img/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'img/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'img/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'img/pizza.png',
  },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'img/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute('src', 'img/blank.png')
    cards[optionTwoId].setAttribute('src', 'img/blank.png')
    alert('You have clicked the same image!')
  }

 if( cardsChosen[0] === cardsChosen[1]) {
   alert('You found the match!')
   cards[optionOneId].setAttribute('src', 'img/white.png')
   cards[optionTwoId].setAttribute('src', 'img/white.png')
   cards[optionOneId].removeEventListener('click', flipCard)
   cards[optionTwoId].removeEventListener('click', flipCard)
   cardsWon.push(cardsChosen)
 } else {
   cards[optionOneId].setAttribute('src', 'img/blank.png')
   cards[optionTwoId].setAttribute('src', 'img/blank.png')
   alert('Sorry try again!')
 }
  result.textContent = cardsWon.length

 cardsChosen = []
 cardsChosenId = []

  if(cardsWon.length === (cardArray.length / 2)){
    result.innerHTML = 'Congratulations, you found them all!'
  }


}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if(cardsChosen.length === 2 ) {
    setTimeout(checkMatch, 500)
  }
}