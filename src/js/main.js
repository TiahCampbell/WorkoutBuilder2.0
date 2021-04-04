const apiKey = "0397a8d8c90010abe5cfb8c3798335d0b7bbf656";
const input = document.getElementById("search");

button.addEventListener('click', function(){
    let inputVal = input.value;
    const url = `https://wger.de/api/v2/exercise?q=${inputVal}&appid=${apiKey}`;
    const list = document.querySelector(".ajax-section .exercises");

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // var myJSON = JSON.stringify(data);
        const exercises = data.results;
        console.log(results);
        const exercises = results[0];
        exerciseDisplay.innerHTML = exerciseList(exercises);
    })
    .catch(err => console.log(err));
});




    
