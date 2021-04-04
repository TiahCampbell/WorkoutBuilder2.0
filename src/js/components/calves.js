export default function calves(calvesExercises){
    return `
        <h1>Calves Exercises</h1>
        <ol class="Index">
        ${calvesExercises.map(calvesExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${calvesExercise.id}">${calvesExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}