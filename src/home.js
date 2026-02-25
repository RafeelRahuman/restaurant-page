  export default function loadHome(){
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    const para = document.createElement("p");
    para.textContent = "The food is Great in this Town";

    content.appendChild(heading);
    content.appendChild(para);
  }