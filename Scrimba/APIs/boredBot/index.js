document.getElementById("get-activity").addEventListener("click",function(){
fetch( 'https://apis.scrimba.com/bored/api/activity')
   .then( response=>response.json())
   .then(data =>{
       console.log(data)
       document.getElementById("activity").textContent=data.activity
       document.getElementById("title").textContent ="🦾 HappyBot🦿"
       document.body.classList.add("fun")
      
   })
})
//    When the button is clicked, call out to the Bored API
//    (URL: https://apis.scrimba.com/bored/api/activity)
//    and replace the h4 with the activity from the API

//note innerHTML add elements that were not there before. textContent modifies existing content.