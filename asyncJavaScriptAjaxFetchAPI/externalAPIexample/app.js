document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const req = new XMLHttpRequest();

  req.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  req.send();

  req.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output;

    }
  }

  e.preventDefault();
}