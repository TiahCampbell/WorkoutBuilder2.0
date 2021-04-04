export default function quads(quadsExercises){
    return `
        <h1>Quads Exercises</h1>
        <ol class="Index">
        ${quadsExercises.map(quadsExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${quadsExercise.id}">${quadsExercise.name}</h4>
                <button class="addExercise" id="${quadsExercise.id}">Add Exercise To My Workout</button>
            </li>
            `
        }).join("")}
        </ol>
    `;
}