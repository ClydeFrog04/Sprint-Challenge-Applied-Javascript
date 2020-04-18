// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //declare/initialise vars
    const div = document.createElement("div");
    const dateSpan = document.createElement("span");
    const h1 = document.createElement("h1");
    const tempSpan = document.createElement("span");

    //set classes
    div.classList.add("header");
    dateSpan.classList.add("date");
    tempSpan.classList.add("temp");

    //text content
    dateSpan.textContent = "SMARCH 28, 2019";//The typo was included in the project text :p
    h1.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    //hierarchy
    div.append(dateSpan);
    div.append(h1);
    div.append(tempSpan);

    return div;
}

const headerContainer = document.querySelector("div.header-container");
headerContainer.appendChild(Header());
