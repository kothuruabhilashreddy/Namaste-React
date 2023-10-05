// creating h1 tag to add this inside div tag
const heading= document.createElement("h1");
// Adding dom data inside the tag
heading.innerHTML= "Hello World from JavaScript!!!";
// Fetching root element using id = root
let root= document.getElementById("root")
// Adding child inside the root element
root.appendChild(heading)

