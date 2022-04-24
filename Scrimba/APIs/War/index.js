let deckId
const cardsContainer = document.getElementById("cards");
const newDeckBtn=document.getElementById("new-deck");
const drawCardBtn =document.getElementById("draw-cards")
const header= document.getElementById("header")

function handleClick() {
    // fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    fetch("https://deckofcardsapi.com/api/deck/${deckid}")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    // fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
    fetch("https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=2") //  https://deckofcardsapi.com/api/deck/                                                                                     
        .then(res => res.json())//https://deckofcardsapi.com/#draw-card  docs
        .then(data => {
            console.log(data.remaining);
            cardsContainer.chilren[0].innerHTML = `<img src=${data.cards[0].image}class ="card" />`

                cardsContainer.chilren[1].innerHTML =`<img src=${data.cards[1].image}class ="card" />`
                constwinnerText =determineCardWinner(data.cards[0],data.cards[1]);
                console.log(winnerText)
                header.textContent = winnerText;
        })
})
function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
  
    if (card1ValueIndex > card2ValueIndex) {
        return "Card 1 wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "Card 2 wins!"
    } else {
        return "It's a tie!"
    }
}

const card1Obj = {
    value: "7"
}
const card2Obj = {
    value: "KING"
}

determineCardWinner(card1Obj, card2Obj)
/**
 * Challenge:
 * 
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */