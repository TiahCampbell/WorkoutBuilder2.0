export default function glutes(glutesExercises){
    return `
        <h1>Glutes Exercises</h1>
        <ol class="Index">
        ${glutesExercises.map(glutesExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${glutesExercise.id}">${glutesExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}