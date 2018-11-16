// setting up divs for headlines

const app = document.getElementById('headline_box');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

// setting up divs for artilce summary
const summary = document.getElementById('article_box')
const summaryContainer = document.createElement('div');
summaryContainer.setAttribute('class', 'summary_container');
summary.appendChild(summaryContainer);

//  Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=mail&show-blocks=all&&api-key='+ config, true);

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

      // create link to original page
      const link = document.createElement('a');
      link.textContent = 'Click here for the original page';
      link.setAttribute('href', data.response.results[i].webUrl );
      console.log(data.response.results[i].webUrl)

      // append card to container element
      container.appendChild(card);

      // each card will contain the h2, image, link
      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(link);

      // article summary

      // create a div with a card class
      const sum = document.createElement('div');
      sum.setAttribute('id', i,);

      // create h3 and set text content to article webTitle
      const h3sum = document.createElement('h3');
      h3sum.textContent = data.response.results[i].webTitle;

      // create img and set content to article img
      const imageSum = document.createElement('img');
      imageSum.setAttribute('src', data.response.results[i].blocks.main.elements[0].assets[1].file );

      // create p and set text content to article summary limited to 300 chars
      const p = document.createElement('p');
      // trying to strip html tags from string
      var StrippedString = data.response.results[i].blocks.body[0].bodyHtml.replace(/(<([^>]+)>)/ig,"");
      const description = StrippedString.substring(0,300);
      p.textContent = `${description}...`;

      // create link to original page
      const linksum = document.createElement('a');
      linksum.textContent = 'Click here for the original page';
      linksum.setAttribute('href', data.response.results[i].webUrl );
      console.log(data.response.results[i].webUrl)




      // append card to container element
      summaryContainer.appendChild(sum);

      // each card will contain the h3, image, link
      sum.appendChild(h3sum);
      sum.appendChild(imageSum);
      sum.appendChild(p);
      sum.appendChild(linksum);

    };

  } else {
  console.log('error');
  };
};
//  Send request
request.send();
