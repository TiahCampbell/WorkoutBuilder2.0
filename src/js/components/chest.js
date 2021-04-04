export default function chest(chestExercises){
    return `
        <h1>Chest Exercises</h1>
        <ol class="Index">
        ${chestExercises.map(chestExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${chestExercise.id}">${chestExercise.name}</h4>
                <button class="addExercise" id="${chestExercise.id}">Add Exercise To My Workout</button>
            </li>
            `
        }).join("")}
        </ol>
    `;
}