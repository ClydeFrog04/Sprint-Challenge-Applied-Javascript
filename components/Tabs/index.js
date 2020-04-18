// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector("div.topics");
function tab(topic){
    const div = document.createElement("div");
    div.classList.add("tab");
    div.textContent = topic;
    return div;
}//just to break things up a little bit :]

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) =>{
        //console.log(response);
        response.data.topics.forEach((topic) =>{
            topics.appendChild(tab(topic));
        });
    })
    .catch(console.log);