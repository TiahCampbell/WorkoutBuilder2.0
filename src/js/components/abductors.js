export default function abductors(abductorExercises){
    return `
        <h1>Abductor Exercises</h1>
        <ol class="Index">
        ${abductorExercises.map(abductorExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${abductorExercise.id}">${abductorExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}