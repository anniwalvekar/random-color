const containerE1 = document.querySelector(".container");

for(let index = 0; index < 30; index++){
    const colorGeneratorE1 = document.createElement("div");
    colorGeneratorE1.classList.add("color-generator");
    containerE1.appendChild(colorGeneratorE1);
}
const colorGeneratorE1s = document.querySelectorAll(".color-generator");

generateColors();

function generateColors(){
    colorGeneratorE1s.forEach((colorGeneratorE1) => {
     const newColorCode = randomColor();
     colorGeneratorE1.style.backgroundColor = "#" + newColorCode;
     colorGeneratorE1.innerText = "#" + newColorCode;
    });
}
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
       colorCode +=chars.substring(randomNum,randomNum + 1);
      
    }
    return colorCode;
}