//global array variable for posts
let postArray=[]
//global title and body variables
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
//function to update DOM
function renderPosts(){
  let html =""//variable to store postArray on DOM
    for(let post of postArray){
      html+=`
      <h3> ${post.title}<h/3>
      <p> ${post.body}</p>
      <hr/>
      `
    }
    document.getElementById("blog-list").innerHTML=html
}
//GET Posts from api
fetch('https://jsonplaceholder.typicode.com/posts')
  .then( response=> response.json())
  .then(data =>{    
     postArray =data.slice(0,3)//containg post arry
     renderPosts();
  })

  //Add post to server
    //event to grab inputed values
  document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()//prevents page refresh upon clicking submit
    //value input when post is created
    const postTitle =titleInput.value
    const postBody =bodyInput.value
    //object containg title and body data
    const data ={
      title:postTitle,
      body:postBody
    }

   //options object to be passed to fetch request  
    const options={
    method:"POST",
    body:JSON.stringify(data),//convert js object to json format   
    headers:{
      "Content-Type": "application/json"
    }
  }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts",options)
      .then(res=>res.json())
      .then(post => {
        //display new post
        postArray.unshift(post)
        renderPosts();
        //reset form
        titleInput.value = ""
        bodyInput.value = ""
      })
    
})