export default function shoulders(shouldersExercises){
    return `
        <h1>Shoulders Exercises</h1>
        <ol class="Index">
        ${shouldersExercises.map(shouldersExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${shouldersExercise.id}">${shouldersExercise.name}</h4>
                <button class="addExercise" id="${shouldersExercise.id}">Add Exercise To My Workout</button>
            </li>
            `
        }).join("")}
        </ol>
    `;
}