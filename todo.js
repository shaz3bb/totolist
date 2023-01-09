document.getElementById('btn').addEventListener('click',
function(){
let input = document.getElementById('input').value;
let elem=document.createElement('li');
let btn1=document.createElement('btn');
let btn2=document.createElement('btn');
btn1.innerText="Done";
btn2.innerText="Delete";
elem.innerText=input;
let ul=document.querySelector('ul');
ul.appendChild(elem);
elem.appendChild(btn1);
elem.appendChild(btn2);
btn1.style.border="none";
btn1.style.marginLeft="3%";
btn1.style.borderRadius="5px";
btn1.style.cursor="pointer";
btn1.style.color="black";
btn1.style.backgroundColor=" #fb97ad";

btn2.style.border="none";
btn2.style.cursor="pointer";
btn2.style.marginLeft="3%";
btn2.style.borderRadius="5px";
btn2.style.color="black";
btn2.style.backgroundColor=" #fb97ad";


btn1.addEventListener('click',
function(){
elem.style.textDecoration="line-through";
}
);
btn2.addEventListener('click',
function(){
elem.remove();
}
);
document.getElementById('input').value="";
}
);