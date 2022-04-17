fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data =>{ 
        console.log(data)
        document.getElementById("image-container").innerHTML=
        `<img src= "${data.message}" />
        `
    })