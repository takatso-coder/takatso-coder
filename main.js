const myHeading = document.querySelector("h1");

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download.webp") {
    myImage.setAttribute("src", "images/download.webp");
  } else {
    myImage.setAttribute("src", "images/download.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

