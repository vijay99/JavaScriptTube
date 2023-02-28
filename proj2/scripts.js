const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
        return window.getComputedStyle(selectedElement).backgroundColor;
};

//console.log(getBGColor(orange));


//mouseenter event
var orangeElementColor = getBGColor(orange);

orange.addEventListener('mouseenter', () => {
    center.style.background = orangeElementColor;
});


//mouse click event
var color = getBGColor(pink); 
pink.addEventListener('click', () => {
    center.style.background = color;
});

//mouse hovor for all color and displays that color in center

const magicColorChanger = (element,color) => {

    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));