// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function card(props) {
    //declare/initialise vars
    const div = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorSpan = document.createElement("span");

    //set classes
    div.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContainer.classList.add("img-container");

    //set attrs
    img.setAttribute("src", props.authorPhoto);

    //text content
    headlineDiv.textContent = props.headline;
    authorSpan.textContent = "By " + props.authorName;

    //hierarchy
    div.appendChild(headlineDiv);
    div.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(authorSpan);
    imgContainer.appendChild(img);


    return div;
}

const cardsContainer = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) => {
        //I understand this is totally NOT dry. However... I spent like an hour trying to make it dry. Array.from does not work on of the data objects.
        //there is no .map. There is no .foreach. How... are you supposed... to make it dry...
        //I am guessing chaining .then is supposed to be the solution. But if that is the case, then it is still not dry because instead of repeating
        //just the foreach, you'll be repeating those in addition to .then calls. DX
        response.data.articles.bootstrap.forEach((article) =>{
            cardsContainer.appendChild(card(article));
        });
        response.data.articles.javascript.forEach((article) =>{
            cardsContainer.appendChild(card(article));
        });
        response.data.articles.jquery.forEach((article) =>{
            cardsContainer.appendChild(card(article));
        });
        response.data.articles.node.forEach((article) =>{
            cardsContainer.appendChild(card(article));
        });
        response.data.articles.technology.forEach((article) =>{
            cardsContainer.appendChild(card(article));
        });
    })
    .catch(console.log);