function logMood(mood) {
    const moodList = document.getElementById('mood-list');
    const newMoodItem = document.createElement('ul');
    
    const currentDateTime = new Date().toLocaleString();
    newMoodItem.textContent = `${mood} - ${currentDateTime}`;

    if (mood === 'Happy') {
        newMoodItem.classList.add('happy');
    } else if (mood === 'Sad') {
        newMoodItem.classList.add('sad');
        showSolution('Sad');
    } else if (mood === 'Stressed') {
        newMoodItem.classList.add('stressed');
        showSolution('Stressed');
    } else if (mood === 'Calm') {
        newMoodItem.classList.add('calm');
    }

    moodList.appendChild(newMoodItem);
}

function clearMoodLog() {
    document.getElementById('mood-list').innerHTML = '';
}

function showSolution(moodType) {
    const solutionContainer = document.getElementById('solution-container');
    const solutionText = document.getElementById('solution-text');

    if (moodType === 'Sad') {
        solutionText.innerHTML = `
            <strong>Feeling Sad?</strong><br>
            - Try listening to uplifting music 🎵<br>
            - Talk to a friend or loved one 💬<br>
            - Engage in a favorite hobby 🎨<br>
            - Practice gratitude by listing 3 things you're thankful for 🙏
        `;
    } else if (moodType === 'Stressed') {
        solutionText.innerHTML = `
            <strong>Feeling Stressed?</strong><br>
            - Take deep breaths and practice mindfulness 🧘‍♂️<br>
            - Go for a walk and get some fresh air 🚶‍♀️<br>
            - Try a 5-minute meditation session 🎧<br>
            - Write down your thoughts and reflect 📖
        `;
    }

    solutionContainer.style.display = "block";
}


function hideSolution() {
    document.getElementById('solution-container').style.display = "none";
}

