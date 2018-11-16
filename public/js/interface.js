// const app = document.getElementById('headline_box');
//
// const container = document.createElement('div');
// container.setAttribute('class', 'container');
//
// app.appendChild(container);

//  Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=politics&api-key='+ config, true);

request.onload = function(){
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if(request.status >= 200 && request.status < 400) {

    for (var i = 0; i < data.response.results.length; i++){
      console.log(data.response.results[i].webTitle)
    };

  } else {
  console.log('error');
  };
};
//  Send request
request.send();
