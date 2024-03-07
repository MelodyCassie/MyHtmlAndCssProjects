const  = document.getElementById("black");
const blueGuys2 = document.getElementById("white");
const blueGuys3 = document.getElementById("header3");
const blueGuys4 = document.getElementById("header4");
const blueGuys5 = document.getElementById("header5");
const blueGuys6 = document.getElementById("header6");





let uni_image1 = document.createElement("img");
let uni_image2 = document.createElement("img");
let uni_image3 = document.createElement("img");
let uni_image4 = document.createElement("img");
let uni_image5 = document.createElement("img");
let uni_image6 = document.createElement("img");
let uni_image7 = document.createElement("img");
let uni_image8 = document.createElement("img");
let uni_image9 = document.createElement("img");


uni_image1.src = ""


uni_image3.src = "https://i.pinimg.com/564x/1f/8a/b6/1f8ab66a7a7b6c5dd740ce588ccee484.jpg"

uni_image1.alt = "school";
uni_image2.alt = "school2";
uni_image3.alt = "school3";

uni_image1.style = "width: 100%; height: 100%;";
uni_image2.style = "width:100%; height: 100%;";
uni_image3.style = "width:150%, height: 100%;";

blueGuys1.addEventListener("mouseover", mouseBro)

function mouseBro(){
    blueGuys1.appendChild(uni_image1);
}
blueGuys3.addEventListener("mouseover",mouseBro2)

function mouseBro3(){
    blueGuys3.appendChild(uni_image3);
}


blueGuys2.addEventListener("mouseover", mouseBro3)

function mouseBro2(){
    blueGuys2.appendChild(uni_image2)
}


// blueGuys.addEventListener('mouseleave', function(){
//     blueGuys.removeChild(uni_image)
// })