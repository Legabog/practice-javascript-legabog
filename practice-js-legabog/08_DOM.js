const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[0]
// const heading2 = document.getElementsByClassName("h2-class")[0]
const heading2 = document.querySelector("h2");
const heading3 = document.querySelectorAll("h2")[1];

setTimeout(() => {
  addStylesTo(heading, "JavaScript");
}, 2500);

const link = heading2.querySelector("a")

link.addEventListener("click", event => {
    event.preventDefault()
    console.log("Link on click", event.target.getAttribute("href"))

    const url = event.target.getAttribute("href")

    window.location = url
})

setTimeout(() => {
    
  addStylesTo(link, "Практикуйся", "blue");
}, 5000);

setTimeout(() => {
  addStylesTo(heading3, "И всё получится!!!", "yellow", "2rem");
}, 7500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.backgroundColor = "black";
  node.style.textAlign = "center";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  // falsy: "", undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "#000";
    heading.style.background = "#fff";
  } else {
    heading.style.color = "red";
    heading.style.background = "black";
  }
};

heading3.addEventListener("dblclick", () => {
  if (heading3.style.color === "yellow") {
    heading3.style.color = "#000";
    heading3.style.background = "#fff";
  } else {
    heading3.style.color = "yellow";
    heading3.style.background = "black";
  }
});
