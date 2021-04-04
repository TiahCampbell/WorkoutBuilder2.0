export default function hamstrings(hamstringsExercises){
    return `
        <h1>Hamstrings Exercises</h1>
        <ol class="Index">
        ${hamstringsExercises.map(hamstringsExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${hamstringsExercise.id}">${hamstringsExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}