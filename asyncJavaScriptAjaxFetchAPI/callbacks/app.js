const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

//SYNCHRONOUS WAY TO DO IT...not so great and only gets us the first two posts
//The reason for this is that we create the post with a timeout of 2 SECONDS, however 
//we are executing getPosts() and the subsequent innerHTML creation after 1 SECOND
//in other words we get GET what we have yet to POST


// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();


function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//we pass in getPosts as our second param, which if you look at line 37 is invoked as a callback
//when createPost is called we invoke getPosts DURING the 2 SECONDS so we can get all the posts created

//using callback allows us to achieve this ASYNCHRONOUSLY 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);