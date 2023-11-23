document.addEventListener('DOMContentLoaded', () => {

    const allBtn = document.querySelectorAll('button')
    const input = document.querySelector('input')
    const allDiv = document.querySelectorAll('div')
    let playerTry = 3

    const startGameBtn = allBtn[0]
    const appendBtn = allBtn[1]

    const resultDiv = allDiv[0]
    const hintDiv = allDiv[1]


    function getRandomNumber() {
        const randomNumbers = Math.random() //get random number from 0 to 1
        const floatRandomNumberGameOption = randomNumbers * 10 // get random number from 0 to 3 because we have 10 val
        const integerRandomGameOption = Math.floor(floatRandomNumberGameOption)
        return integerRandomGameOption
    }

    startGameBtn.addEventListener('click', () => {
        targetNumber = getRandomNumber()
        playerTry = 3
        appendBtn.disabled = false
        input.value = ''
    })
  
    let targetNumber = getRandomNumber()
    appendBtn.addEventListener('click', () => {
        // console.log(targetNumber, 'Target Number');
        // console.log(input.value, 'Input Number');
        // console.log(playerTry, 'Player Chance');
        if(targetNumber === +input.value){
            hintDiv.innerText = 'You\'re the winner!'
            appendBtn.disabled = true

        } else {
            playerTry--;
            if(playerTry < 1){
                appendBtn.disabled = true
                hintDiv.innerText = 'Unfortunately, you lost.'
            }  
             else {
                if(targetNumber < +input.value) {
                    hintDiv.innerText = 'Your number is greater than the target.'
                } 
                if(targetNumber > +input.value) {
                    hintDiv.innerText = 'Your number is smaller than the target.'
                } 

            //     if(!isNaN(+input.value)) {
            //         input.value = ''
            //         // hintDiv.innerText = 'Please enter a valid number'
            //    }
               
            }
        
        }

    })

    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, ''); 
    });

})