export default function header(){
    return `
    <h1>Use the nav to look for exercises to add to your workout!</h1>
    <div class="currentWorkout">
            <p>Recommended format: 8-12 reps of each choosen exercise for 3-5 rounds</p>
    </div>
    <hr class="dotted">
    <nav>
        <ul>
            <li class="chest">Chest</li>
            <li class="back">Back</li>
            <li class="shoulders">Shoulders</li>
            <li class="biceps">Biceps</li>
            <li class="triceps">Triceps</li>
            <li class="core">Core</li>
            <li class="quads">Quads</li>
            <li class="glutes">Glutes</li>
            <li class="hamstrings">Hamstrings</li>
            <li class="calves">Calves</li>
        </ul>
    </nav>`;
}