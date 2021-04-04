export default function exerciseDetails(exercise){
    return `
        <h1>${exercise.name}</h1>
        <ol class="Content">
            <li>Exercise Description: ${exercise.description}</li>
        </ol>
    `;
}