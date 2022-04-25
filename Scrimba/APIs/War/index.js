let deckId
let computerScore =0;
let myScore =0;
const cardsContainer = document.getElementById("cards");
const newDeckBtn=document.getElementById("new-deck");
const drawCardBtn =document.getElementById("draw-cards")
const header= document.getElementById("header")
const remainingText =document.getElementById("remaining")
const computerScoreEl=document.getElementById("computer-score")
const myScoreEl=document.getElementById("my-score")

 async function handleClick() {
    // fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
     const res =await fetch("https://deckofcardsapi.com/api/deck/${deckid}")
     const data =await res.json()        
            remainingText.textContent=`Remaining cards : ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
        
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click",async  () => {
    // fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
     const res = fetch("https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=2") //  https://deckofcardsapi.com/api/deck/ 
        const data= res.json();  //https://deckofcardsapi.com/#draw-card  docs                                                                             
               
            remainingText.textContent=`Remaining cards : ${data.remaining}`
            cardsContainer.chilren[0].innerHTML = `<img src=${data.cards[0].image}class ="card" />`
            cardsContainer.chilren[1].innerHTML =`<img src=${data.cards[1].image}class ="card" />`
                constwinnerText =determineCardWinner(data.cards[0],data.cards[1]);
                console.log(winnerText)
                header.textContent = winnerText;
                //disable draw button if there r no  cards remaining
                if (data.remaining === 0) {
                    drawCardBtn.disabled = true
                    if (computerScore > myScore) {
                        // display "The computer won the game!"
                        header.textContent = "The computer won the game!"
                    } else if (myScore > computerScore) {
                        // display "You won the game!"
                        header.textContent = "You won the game!"
                    } else {
                        // display "It's a tie game!"
                        header.textContent = "It's a tie game!"
                    }
                }
        
})
function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
  
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent=`Computer score :${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent=`My score :${computerScore}`
        return "You wins!"
    } else {
        return "It's a tie!"
    }
}


/**
 * Challenge:
 * 
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */