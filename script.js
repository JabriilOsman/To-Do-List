const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Her skal vi legge til oppgaver gjennom Javascript
// Jeg lager først en if setning, først så må brukeren skrive noe i inputboksen
// Etter det så bruker vi document.createElement til å lage "li"
// og legger til "li" under list-container

//Legger til også en x knapp for å slette, der jeg bruker span
//hvor jeg legger X knappen "li"
function addTask(){
    if (inputBox.value === ''){
        alert("Du må skrive noe")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    lagreData();
}

//Her bruker jeg funksjonen addEventListener, for å trykke på "li" og "span"
// Når jeg trykker på "li", så legger jeg på "sjekk" class 

//Når jeg trykker på "span", så bruker jeg parentElement for å fjerne oppgaven, "li"

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("sjekk");
        lagreData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        lagreData();
    }
},false);

//Jeg bruker localstorage for å lagre data i vår browser
function lagreData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//For å vise data på nettsiden, så bruker jeg getItem("data")
function visData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

visData();