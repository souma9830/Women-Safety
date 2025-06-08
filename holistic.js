function analyzeSleep() {
    let sleepTime = document.getElementById("sleep-time").value;
    let wakeTime = document.getElementById("wake-time").value;

    if (sleepTime && wakeTime) {
        let sleepStart = new Date(`1970-01-01T${sleepTime}Z`);
        let wakeUp = new Date(`1970-01-01T${wakeTime}Z`);
        
        if (wakeUp < sleepStart) wakeUp.setDate(wakeUp.getDate() + 1);
        
        let sleepDuration = (wakeUp - sleepStart) / (1000 * 60 * 60);
        document.getElementById("sleep-result").innerText = `You slept for ${sleepDuration.toFixed(1)} hours.`;
    } else {
        alert("Please select both sleep and wake times.");
    }
}

function setWakeUpReminder() {
    let wakeTime = document.getElementById("wake-time").value;

    if (wakeTime) {
        let now = new Date();
        let wakeUpTime = new Date();
        let [hours, minutes] = wakeTime.split(":");
        wakeUpTime.setHours(hours, minutes, 0);

        if (wakeUpTime < now) wakeUpTime.setDate(wakeUpTime.getDate() + 1);

        let timeUntilWakeUp = wakeUpTime - now;
        
        setTimeout(() => {
            alert("Time to wake up! 🌞");
        }, timeUntilWakeUp);

        alert(`Reminder set for ${wakeTime}. You will get a wake-up alert at the scheduled time.`);
    } else {
        alert("Please enter a wake-up time.");
    }
}

function showExercises() {
    let exerciseTime = document.getElementById("exercise-time").value;
    let exerciseList = document.getElementById("exercise-list");
    let exerciseBenefits = document.getElementById("exercise-benefits");

    let exercises = {
        morning: ["Yoga", "Stretching", "Brisk Walking"],
        afternoon: ["Strength Training", "Cycling", "Jump Rope"],
        evening: ["Pilates", "Light Jogging", "Tai Chi"],
        "pain-relief": ["Back Stretches", "Foam Rolling", "Gentle Yoga"]
    };

    let benefits = {
        morning: "Morning exercises boost energy, metabolism, and mood.",
        afternoon: "Afternoon workouts improve strength, endurance, and alertness.",
        evening: "Evening exercises help with relaxation, flexibility, and stress relief.",
        "pain-relief": "Pain relief exercises aid in muscle recovery and reduce discomfort."
    };

    if (exerciseTime && exercises[exerciseTime]) {
        exerciseList.innerHTML = "<h3>Recommended Exercises:</h3><ul>" + exercises[exerciseTime].map(ex => `<li>${ex}</li>`).join('') + "</ul>";
        exerciseBenefits.innerText = benefits[exerciseTime];
    } else {
        exerciseList.innerHTML = "";
        exerciseBenefits.innerText = "";
    }
}

function showExerciseDetails() {
    let goal = document.getElementById("exercise-goal").value;
    let goalExerciseList = document.getElementById("goal-exercise-list");

    let goalExercises = {
        "weight-loss": ["HIIT", "Running", "Jump Rope", "Cycling"],
        "muscle-gain": ["Weight Lifting", "Push-ups", "Squats", "Deadlifts"],
        "flexibility": ["Yoga", "Pilates", "Stretching Routines"],
        "pregnancy-safe": ["Prenatal Yoga", "Walking", "Gentle Stretching"],
        "diabetes-care": ["Brisk Walking", "Swimming", "Resistance Training"]
    };

    if (goal && goalExercises[goal]) {
        goalExerciseList.innerHTML = "<h3>Best Exercises for Your Goal:</h3><ul>" + goalExercises[goal].map(ex => `<li>${ex}</li>`).join('') + "</ul>";
    } else {
        goalExerciseList.innerHTML = "";
    }
}
