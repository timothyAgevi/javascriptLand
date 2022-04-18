// GET a list of blog posts from the JSON Placeholder API.
 
// BaseURL: https://apis.scrimba.com/jsonplaceholder/
// Endpoint: /posts
//limit to 5 items
// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
fetch('https://jsonplaceholder.typicode.com/posts')
  .then( response=> response.json())
  .then(data =>{    
    const postArr =data.slice(0,3)
    let html =""
    for(let post of postArr){
      html+=`
      <h3> ${ post.title}<h/3>
      <p> ${post.body}</p>
      `
    }
    document.getElementById("blog-list")
  })