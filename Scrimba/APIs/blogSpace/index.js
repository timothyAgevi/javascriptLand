// GET a list of blog posts from the JSON Placeholder API.
 
// BaseURL: https://apis.scrimba.com/jsonplaceholder/
// Endpoint: /posts
//limit to 5 items
// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
fetch('https://jsonplaceholder.typicode.com/posts')
  .then( response=> response.json())
  .then(data =>{    
    const postArr =data.slice(0,3)//containg post arry
    let html =""//variable to store postArray on DOM
    for(let post of postArr){
      html+=`
      <h3> ${post.title}<h/3>
      <p> ${post.body}</p>
      <hr/>
      `
    }
    document.getElementById("blog-list").innerHTML=html
  })

  //Posting post to server
  document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()//prevents page refresh upon clicking submit
    //value input when post is created
    const postTitle =document.getElementById("post-title").value
    const postBody =document.getElementById("post-body").value
    //object containg title and body data
    const data ={
      title:postTitle,
      body:postBody
    }
    console.log(data)
})