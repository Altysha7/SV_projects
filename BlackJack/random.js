document.addEventListener('DOMContentLoaded', () => {

const allBtn = document.querySelectorAll('button')
const allCardsClass = document.querySelectorAll('.cards')
const pointsCount = document.querySelectorAll('p')
const result = document.querySelector('.resultBox')

const playerBtn = allBtn[0]
const casinoBtn = allBtn[1]
const startBtn = allBtn[2]

const playerDiv = allCardsClass[0]
const casinoDiv = allCardsClass[1]

const playerPointsBox = pointsCount[0]
const casinoPointsBox = pointsCount[1]

const allCards = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
const allCardsImg = ['./cards/2-C.png', './cards/3-C.png', './cards/4-C.png', './cards/5-C.png', './cards/6-C.png',
 './cards/7-C.png', './cards/8-C.png', './cards/9-C.png', './cards/10-C.png',
  './cards/J-C.png', './cards/Q-C.png', './cards/K-C.png', './cards/A-C.png' ]

let playerCards = []
let casinoCards = []

//Random 
function getRandomNumber() {
    const allCardsLength = allCards.length
    const randomNum = Math.floor(Math.random() * allCardsLength) 
    // console.log(randomNum);
    // const randomCard = allCards[randomNum]
    // console.log(randomCard);
    return randomNum
}


//Player
playerBtn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    const valueOfNewCard = allCards[randomNumber]
    const imgOfNewCard = allCardsImg[randomNumber]
   playerCards.push(valueOfNewCard)
   //newCard
   const newCard = document.createElement('p')
   playerDiv.append(newCard)
   //newCard.innerText = valueOfNewCard

   //imgCard
   const imgCard = document.createElement('img')
   playerDiv.append(imgCard)
   imgCard.src= imgOfNewCard
    //TotalAmount
   const playerTotalAmount = playerCards.reduce((previousSumm, currentItem) => previousSumm + currentItem, 0)
   playerPointsBox.innerText = `Player Points: ${playerTotalAmount}`
   const casinoTotalAmount = casinoCards.reduce((firstValue, secondValue) => firstValue + secondValue, 0)
    if(playerTotalAmount > 21) { 
            casinoBtn.disabled = true
            playerBtn.disabled = true
            // casinoPointsBox.innerText = `Casino won!` 
            result.innerText = `Casino won!`
    } 
    if(casinoTotalAmount < 22 && casinoTotalAmount > playerTotalAmount){
            result.innerText = `Unfortunately, Player lost.`
    } 
    //  else if (casinoTotalAmount === playerTotalAmount) {
    //         casinoBtn.disabled = true
    //         playerBtn.disabled = true
    //         casinoPointsBox.innerText = `No winner this time, it's a tie.`
    //         playerPointsBox.innerText = `No winner this time, it's a tie.`
    // }
    playerPointsBox.innerHTML = `Player Points: <b>${playerTotalAmount}</b>`
})

//Casino
casinoBtn.addEventListener('click', () => { 
    console.log(casinoPointsBox)
      playerBtn.disabled = true
      const randomNumber = getRandomNumber()
      const valueOfNewCard = allCards[randomNumber]
      const imgOfNewCard = allCardsImg[randomNumber]
      casinoCards.push(valueOfNewCard)
        //newCard
     const newCard = document.createElement('p')
     casinoDiv.append(newCard)
        //newCard.innerText = valueOfNewCard
        //imgCard
     const imgCard = document.createElement('img')
     casinoDiv.append(imgCard)
     imgCard.src= imgOfNewCard
        //TotalAmount
     const casinoTotalAmount = casinoCards.reduce((firstValue, secondValue) => firstValue + secondValue, 0)
     const playerTotalAmount = playerCards.reduce((previousSumm, currentItem) => previousSumm + currentItem, 0)

    //  casinoPointsBox.innerHTML = `Casino Points: <b>${casinoTotalAmount}</b>`

    
        if (casinoTotalAmount > 21) {
            casinoBtn.disabled = true
            playerBtn.disabled = true          
            result.innerText = `Congratulations! Player won!`
        }
         if(casinoTotalAmount < 22 && casinoTotalAmount > playerTotalAmount){
            casinoBtn.disabled = true
            playerBtn.disabled = true
            result.innerText = `Unfortunately, Player lost.`
         } 
        //else if (casinoTotalAmount === playerTotalAmount) {
        //     // casinoBtn.disabled = true
        //     // playerBtn.disabled = true
        //     casinoPointsBox.innerText = `No winner this time, it's a tie.`
        //     playerPointsBox.innerText = `No winner this time, it's a tie.`
        // } 
           casinoPointsBox.innerHTML = `Casino Points: <b>${casinoTotalAmount}</b>`
})

    //starBtn
    startBtn.addEventListener('click', () => {
        casinoBtn.disabled = false
        playerBtn.disabled = false
        playerCards = []
        casinoCards = []
        playerPointsBox.innerText = `Player Points: 0`
        casinoPointsBox.innerText = `Casino Points: 0`
        playerDiv.innerHTML = ''
        casinoDiv.innerHTML = ''
        result = ''
    })
})