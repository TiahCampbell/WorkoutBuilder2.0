import header from "./components/header";
import footer from "./components/footer";
import myWorkout from "./components/myWorkout";
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
// const exerciseDetailsAPI = `https://wger.de/api/v2/exerciseinfo/?q=${inputVal}&language=2&appid=${apiKey}`; // edit input value to be exercise id
const appDiv = document.getElementById("app");

export default() => {
    setupHeader();
    setupFooter();
    navMyWorkout();
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
    appDiv.innerHTML = myWorkout();
}

function setupHeader() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = header();
}

function setupFooter() {
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = footer();
    console.log(footerElement);
}

function navMyWorkout() {
    const myWorkoutLink = document.querySelector(".myWorkout");
    myWorkoutLink.addEventListener('click', function(){
        appDiv.innerHTML = myWorkout();
    });
}

function navChest(){
    const chestLink = document.querySelector(".chest");
    chestLink.addEventListener('click', function(){
        fetch(chestAPI)
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = chest(data.results);
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
            appDiv.innerHTML = chest(data.results);
        })
        .catch(err => console.log(err));
    });    
}






    
