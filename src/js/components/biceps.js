export default function biceps(bicepsExercises){
    return `
        <h1>Biceps Exercises</h1>
        <ol class="Index">
        ${bicepsExercises.map(bicepsExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${bicepsExercise.id}">${bicepsExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}