let deckId
const cardsContainer = document.getElementById("cards");
const newDeckBtn=document.getElementById("new-deck");
const drawCardBtn =document.getElementById("draw-cards")
function handleClick() {
    // fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    fetch("https://deckofcardsapi.com/api/deck/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    // fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
    fetch("https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=2") //  https://deckofcardsapi.com/api/deck/                                                                                     
        .then(res => res.json())//https://deckofcardsapi.com/#draw-card  docs
        .then(data => {
            console.log(data.cards)
            cardsContainer.chilren[0].innerHTML = `
                <img src=${data.cards[0].image}class ="card" />`

                cardsContainer.chilren[1].innerHTML =`
                <img src=${data.cards[1].image}class ="card" />`
        })
})
/**
 * Challenge:
 * 
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */