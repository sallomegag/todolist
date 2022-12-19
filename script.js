"use strict";


// todolist

let input1 = document.querySelector('.input');
let button1 = document.querySelector('.button');
let ul1 = document.querySelector('.ul');
let clearall1 = document.querySelector('.clearall');
let form1 = document.querySelector('.form')


form1.addEventListener('submit' , function(event) {
    event.preventDefault();

let inputvalue = input1.value;

if (inputvalue == " ") {
return;
}

form1.style.marginLeft = "50px";

let li = document.createElement('li');

let deletebtn = document.createElement('i');
deletebtn.classList.add('fa-regular' , 'fa-trash');
deletebtn.style.color = 'black';
deletebtn.style.marginLeft = '5px';

deletebtn.addEventListener ('click' , function() {
li.remove();
});



li.textContent = inputvalue;

li.appendChild(deletebtn);
ul1.appendChild(li);




input1.value = ' ';



});

clearall1.addEventListener ('click' , function() {
ul1.innerHTML = " ";


});


// burger bar

const nav = ["home", "about", "gallery", "contact", "location"];

const links = ["index.html", "about.htlm", "gallery.html", "contact.html", "location.html"];

let navigaciatext = "<ul>";
for(let i=0; i<nav.length; i++){
    navigaciatext  += '<li><a href="'+ links[i] + '">' + nav[i] +"</a></li>";
    console.log(navigaciatext);
}

navigaciatext += "</ul>";


console.log(navigaciatext);

document.getElementById("navig").innerHTML = navigaciatext;

document.getElementById('burgerbar') ('click' , function () {

    // ?

});