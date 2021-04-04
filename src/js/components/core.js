export default function core(coreExercises){
    return `
        <h1>Core Exercises</h1>
        <ol class="Index">
        ${coreExercises.map(coreExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${coreExercise.id}">${coreExercise.name}</h4>
                <button class="addExercise" id="${coreExercise.id}">Add Exercise To My Workout</button>
            </li>
            `
        }).join("")}
        </ol>
    `;
}