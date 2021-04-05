export default function back(backExercises){
    return `
        <h1>Back Exercises</h1>
        <ol class="Index">
        ${backExercises.map(backExercise =>{
            return `
            <li class="Content">
                <h4 class="exerciseName" id="${backExercise.id}">${backExercise.name}</h4>
            </li>
            `
        }).join("")}
        </ol>
    `;
}