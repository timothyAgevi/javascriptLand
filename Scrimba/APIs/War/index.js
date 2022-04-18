// Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API
 
//  URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
const button= document.getElementById("war_btn")

 button.addEventListener('click',function(){
   
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(response=>response.json())
    .then( data =>console.log(data))
 })