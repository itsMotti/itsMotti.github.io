const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/snow-angel-album-cover.png") {
    myImage.setAttribute("src", "images/snow-angel-deluxe-album-cover.jpeg");
  } else {
    myImage.setAttribute("src", "images/snow-angel-album-cover.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Renée Rapp is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Renée Rapp is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
