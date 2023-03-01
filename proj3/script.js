const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },

    {
        name: "Complete DSA course",
        price: "3.8"
    },

    {
        name: "Complete Java course",
        price: "93"
    },

    {
        name: "Complete c++ course",
        price: "23"
    }
];


function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ "+ course.price);
        span.appendChild(price);

        li.appendChild(span); 
        ul.appendChild(li);
    });
}

//generateList();

//when ever page loads then only call generateList
window.addEventListener("load",generateList);


//sorting based on price of course lower to higher
const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=> {
    courses.sort( (a,b) => a.price - b.price);
    generateList();
})

//sorting based on price of course higher to lower
const buttonBlue = document.querySelector(".btn-primary");

buttonBlue.addEventListener("click", ()=> {
    courses.sort( (a,b) => b.price - a.price);
    generateList();
})