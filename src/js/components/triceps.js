export default function triceps(tricepsExercises){
    return `
        <h1>Triceps Exercises</h1>
        <ol class="Index">
        ${tricepsExercises.map(tricepsExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${tricepsExercise.id}">${tricepsExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}