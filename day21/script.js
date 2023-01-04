var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","disney");
input.setAttribute("placeholder","Enter ID");


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);

let names = document.createElement("div");
names.setAttribute("id","names");
let allies = document.createElement("div");
allies.setAttribute("id","allies");
let tvShows = document.createElement("div");
tvShows.setAttribute("id","tvShows");
let images = document.createElement("div");
images.setAttribute("id","images");


div.append(input,button,names,allies,tvShows,images);
document.body.append(div);

async function foo(){
    
    var dis =document.getElementById("disney").value;
    var url=`https://api.disneyapi.dev/characters/${dis}`;

    var result=await fetch(url);
    let result1=await result.json();
    console.log(result1);


    names.innerHTML=`Name: ${result1.name}`
    allies.innerHTML=`Name of the allies: ${result1.allies}`
   tvShows.innerHTML=`Name of the TV Shows: ${result1.tvShows}`
   images.innerHTML=`<div><img src="${result1.imageUrl}"</div>`
}