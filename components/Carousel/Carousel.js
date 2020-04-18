/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");
function Carousel(){
    //declare/initialise vars
    const div = document.createElement("div");
    const leftBtn = document.createElement("div");
    const mountainImg = document.createElement("img");
    const computerImg = document.createElement("img");
    const treeImg = document.createElement("img");
    const turntableImg = document.createElement("img");
    const rightBtn = document.createElement("div");
    let imgArr = [mountainImg, computerImg, treeImg, turntableImg];
    let currImgIndex = 0;

    //set classes
    div.classList.add("carousel");
    leftBtn.classList.add("left-button");
    rightBtn.classList.add("right-button");

    //set attrs
    mountainImg.setAttribute("src", "./assets/carousel/mountains.jpeg");
    computerImg.setAttribute("src", "./assets/carousel/computer.jpeg");
    treeImg.setAttribute("src", "./assets/carousel/trees.jpeg");
    turntableImg.setAttribute("src", "./assets/carousel/turntable.jpeg");

    //set a default style on the mountain img, it will start as visible
    mountainImg.style.display = "inline";

    //text content
    leftBtn.textContent = "<";
    rightBtn.textContent = ">";

    //hierarchy
    div.appendChild(leftBtn);
    div.appendChild(mountainImg);
    div.appendChild(computerImg);
    div.appendChild(treeImg);
    div.appendChild(turntableImg);
    div.appendChild(rightBtn);

    //event listeners
    leftBtn.addEventListener("click", (event)=>{
        imgArr[currImgIndex].style.display = "none";
        currImgIndex--;
        currImgIndex %= imgArr.length;
        if(currImgIndex < 0 ) currImgIndex = 3;//because we can't have negative indices
        console.log(currImgIndex);
        imgArr[currImgIndex].style.display = "inline";
    });
    rightBtn.addEventListener("click", (event)=>{
        imgArr[currImgIndex].style.display = "none";
        currImgIndex++;
        currImgIndex %= imgArr.length;
        console.log(currImgIndex);
        imgArr[currImgIndex].style.display = "inline";
    });


    return div;
}

carouselContainer.appendChild(Carousel());