export default function adductors(adductorExercises){
    return `
        <h1>Adductor Exercises</h1>
        <ol class="Index">
        ${adductorExercises.map(adductorExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${adductorExercise.id}">${adductorExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}