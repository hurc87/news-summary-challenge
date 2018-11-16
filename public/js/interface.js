// setting up divs for html

const app = document.getElementById('headline_box');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

//  Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=politics&show-blocks=all&&api-key='+ config, true);

request.onload = function(){
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if(request.status >= 200 && request.status < 400) {

    for (var i = 0; i < data.response.results.length; i++){

      // create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');


      // create h2 and set text content to article webTitle
      const h2 = document.createElement('h2');
      h2.textContent = data.response.results[i].webTitle;

      // create img and set content to article img
      const image = document.createElement('img');
      image.setAttribute('src', data.response.results[i].blocks.main.elements[0].assets[1].file );

      // create link title to original page
      const link_title = document.createElement('p');
      link_title.textContent = "Click here for the original page";

      // create link to original page
      const link = document.createElement('a');
      link.textContent = 'Click here for the original page';
      link.setAttribute('href', data.response.results[i].webUrl );
      console.log(data.response.results[i].webUrl)

      // append card to container element
      container.appendChild(card);

      // each card will contain the h2, image, link
      container.appendChild(h2);
      container.appendChild(image);
      container.appendChild(link);

    };

  } else {
  console.log('error');
  };
};
//  Send request
request.send();
