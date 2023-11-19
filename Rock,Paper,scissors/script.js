document.addEventListener('DOMContentLoaded', () => {
  const allBtn = document.querySelectorAll('button')
  const allDiv = document.querySelectorAll('div')


const playerStoneBtn = allBtn[0]
const playerScissorsBtn = allBtn[1]
const playerPaperBtn = allBtn[2]
const computer = allBtn[3]

const playerDiv = allDiv[1]
const computerDiv = allDiv[2]
const resultDiv = allDiv[3]




function getRandomComputerOptionGame() { 
    const randomNumbers = Math.random() //get random number from 0 to 1
    const floatRandomNumberGameOption = randomNumbers * 3 // get random number from 0 to 3 because we have 3 val
    const integerRandomGameOption = Math.floor(floatRandomNumberGameOption)
    // Math.floor(Math.random())
    if(integerRandomGameOption === 0){
        computerDiv.innerHTML = `<h3>Rock</h3>`
        return 'Rock'
    } 
    if(integerRandomGameOption === 1){
        computerDiv.innerHTML = `<h3>Scissors</h3>`
        return 'Scissors'
    }
    if(integerRandomGameOption === 2){
        computerDiv.innerHTML = `<h3>Paper</h3>`
        return 'Paper'
    }

}


// computer.addEventListener('click', () => {
//     console.log(getRandomComputerOptionGame());
// })

playerStoneBtn.addEventListener('click', () => {
    const playerValue = 'Rock'
    const computerValue = getRandomComputerOptionGame()
    playerDiv.innerHTML = `<h3>${playerValue}</h3>`
    if(computerValue === 'Scissors'){
        resultDiv.innerText = `You're the winner!`
    }
    if(computerValue === 'Rock'){
        resultDiv.innerText = `It's a draw!`
    }
    if(computerValue === 'Paper'){
        resultDiv.innerText = `Unfortunately, you lost.`
    }

    // const computerValue = 'Rock' || 'scissors' || 'paper'
})
playerScissorsBtn.addEventListener('click', () => {
    const playerValue = 'Scissors'
    const computerValue = getRandomComputerOptionGame()
    playerDiv.innerHTML = `<h3>${playerValue}</h3>`
    if(computerValue === 'Scissors'){
        resultDiv.innerText = `It's a draw!`
    }
    if(computerValue === 'Rock'){
        resultDiv.innerText = `Unfortunately, you lost.`
    }
    if(computerValue === 'Paper'){
        resultDiv.innerText = `You're the winner!`
    }


})
playerPaperBtn.addEventListener('click', () => {
    const playerValue = 'Paper'
    const computerValue = getRandomComputerOptionGame()
    playerDiv.innerHTML = `<h3>${playerValue}</h3>`
    if(computerValue === 'Scissors'){
        resultDiv.innerText = `Unfortunately, you lost.`
    }
    if(computerValue === 'Rock'){
        resultDiv.innerText = `You're the winner!`
    }
    if(computerValue === 'Paper'){
        resultDiv.innerText = `It's a draw!`
    }


})



})