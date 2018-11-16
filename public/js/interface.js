const app = document.getElementById('headline_box');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

//  Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=politics&api-key='+ config, true);

request.onload = function(){
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if(request.status >= 200 && request.status < 400) {

    for (var i = 0; i < data.response.results.length; i++){
      console.log(data.response.results[i].webTitle);

      // create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      console.log('create divs')

      // create h2 and set text content to article webTitle
      const h2 = document.createElement('h2');
      h2.textContent = data.response.results[i].webTitle;
      console.log('fill divs')

      // append card to container element
      container.appendChild(card);

      // each card will contain the h2
      container.appendChild(h2);

    };

  } else {
  console.log('error');
  };
};
//  Send request
request.send();
