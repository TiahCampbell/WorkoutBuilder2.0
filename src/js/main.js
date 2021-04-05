import header from "./components/header";
import footer from "./components/footer";
import back from "./components/back";
import biceps from "./components/biceps";
import calves from "./components/calves";
import chest from "./components/chest";
import core from "./components/core";
import glutes from "./components/glutes";
import hamstrings from "./components/hamstrings";
import quads from "./components/quads";
import shoulders from "./components/shoulders";
import triceps from "./components/triceps";
import exerciseDetails from "./components/exerciseDetails";

const apiKey = "0397a8d8c90010abe5cfb8c3798335d0b7bbf656";
const backAPI = `https://wger.de/api/v2/exercise/?muscles=12,3&language=2&appid=${apiKey}`;
const bicepsAPI = `https://wger.de/api/v2/exercise/?muscles=1,13&language=2&appid=${apiKey}`;
const calvesAPI = `https://wger.de/api/v2/exercise/?muscles=7,15&language=2&appid=${apiKey}`;
const chestAPI = `https://wger.de/api/v2/exercise/?muscles=4&language=2&appid=${apiKey}`;
const coreAPI = `https://wger.de/api/v2/exercise/?muscles=6,14&language=2&appid=${apiKey}`;
const glutesAPI = `https://wger.de/api/v2/exercise/?muscles=8&language=2&appid=${apiKey}`;
const hamstringsAPI = `https://wger.de/api/v2/exercise/?muscles=11&language=2&appid=${apiKey}`;
const quadsAPI = `https://wger.de/api/v2/exercise/?muscles=10&language=2&appid=${apiKey}`;
const shouldersAPI = `https://wger.de/api/v2/exercise/?muscles=2,9&language=2&appid=${apiKey}`;
const tricepsAPI = `https://wger.de/api/v2/exercise/?muscles=5&language=2&appid=${apiKey}`;
const appDiv = document.getElementById("app");

export default() => {
    setupHeader();
    setupFooter();
    navChest();
    navBack();
    navShoulders();
    navBiceps();
    navTriceps();
    navCore();
    navQuads();
    navGlutes();
    navHamstrings();
    navCalves();
}

function setupHeader() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = header();
    navExerciseDetails();
}

function setupFooter() {
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = footer();
    console.log(footerElement);
}

function navChest(){
    const chestLink = document.querySelector(".chest");
    chestLink.addEventListener('click', function(){
        fetch(chestAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = chest(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navBack(){
    const backLink = document.querySelector(".back");
    backLink.addEventListener('click', function(){
        fetch(backAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = back(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navShoulders(){
    const shouldersLink = document.querySelector(".shoulders");
    shouldersLink.addEventListener('click', function(){
        fetch(shouldersAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = shoulders(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navBiceps(){
    const bicepsLink = document.querySelector(".biceps");
    bicepsLink.addEventListener('click', function(){
        fetch(bicepsAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = biceps(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navTriceps(){
    const tricepsLink = document.querySelector(".triceps");
    tricepsLink.addEventListener('click', function(){
        fetch(tricepsAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = triceps(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navCore(){
    const coreLink = document.querySelector(".core");
    coreLink.addEventListener('click', function(){
        fetch(coreAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = core(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navQuads(){
    const quadsLink = document.querySelector(".quads");
    quadsLink.addEventListener('click', function(){
        fetch(quadsAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = quads(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navGlutes(){
    const glutesLink = document.querySelector(".glutes");
    glutesLink.addEventListener('click', function(){
        fetch(glutesAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = glutes(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navHamstrings(){
    const hamstringsLink = document.querySelector(".hamstrings");
    hamstringsLink.addEventListener('click', function(){
        fetch(hamstringsAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = hamstrings(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navCalves(){
    const calvesLink = document.querySelector(".calves");
    calvesLink.addEventListener('click', function(){
        fetch(calvesAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = calves(data.results);
            navExerciseDetails();
        })
        .catch(err => console.log(err));
    });    
}

function navExerciseDetails(){
    const exerciseNameElements = document.querySelectorAll(".exerciseName");
    exerciseNameElements.forEach(element => {
        element.addEventListener('click', function(){
            const exerciseId = element.id;
            fetch(`https://wger.de/api/v2/exerciseinfo/${exerciseId}`)
            .then(response => response.json())
            .then(data => {
                appDiv.innerHTML = exerciseDetails(data);
                addExerciseToMyWorkout();
            })
            .catch(err => console.log(err));
        });   
    });     
}

function addExerciseToMyWorkout(){
    const addExerciseElements = document.querySelectorAll(".addExercise");
    addExerciseElements.forEach(element => {
        element.addEventListener('click', function(){

            const exerciseId = element.id;
            fetch(`https://wger.de/api/v2/exerciseinfo/${exerciseId}`)
            .then(response => response.json())
            .then(data => {

                const pElement = document.createElement("p");
                console.log(data);
                pElement.innerText = data.name;
                pElement.class = "exerciseName";
                console.log(pElement);
                
    
                const divElement = document.querySelector(".currentWorkout");
                console.log(divElement);  
                divElement.appendChild(pElement);
                alert("Exercise Successfully Added To My Workout")
    
                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.class = "addExercise";
    
                divElement.appendChild(deleteButton);
    
                deleteButton.addEventListener('click', function(){
                    pElement.remove();
                    deleteButton.remove();
                });
                navExerciseDetails();
            })
            .catch(err => console.log(err));

            
        });   
    });     
}







    
