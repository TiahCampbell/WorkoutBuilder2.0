export default function exerciseDetails(exercise){
    console.log(exercise);
    return `
        <h1>${exercise.name}</h1>
        <ul class="DetailsContent">
            Exercise Description: ${exercise.description}
            <ol class="DetailsIndex">
            ${exercise.muscles.map(muscle =>{
            return `
                <li class="Details">
                    <h4 class="muscleName" id="${muscle.id}">${muscle.name}</h4>
                    <img class="muscleImage" src="https://wger.de${muscle.image_url_main}"/>
                </li>
                `
            }).join("")}
            </ol>
            <button class="addExercise" id="${exercise.id}">Add Exercise To My Workout</button>
        </ul>
    `;
}