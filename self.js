// Calculate Workout Time
function calculateWorkout() {
    let startTime = document.getElementById("start-time").value;
    let endTime = document.getElementById("end-time").value;
    
    if (!startTime || !endTime) {
        document.getElementById("workout-result").innerText = "Please select both start and end times.";
        return;
    }

    let start = new Date();
    let end = new Date();
    
    let [startHours, startMinutes] = startTime.split(":");
    let [endHours, endMinutes] = endTime.split(":");

    start.setHours(startHours, startMinutes, 0);
    end.setHours(endHours, endMinutes, 0);

    let duration = (end - start) / (1000 * 60); // Convert milliseconds to minutes

    if (duration <= 0) {
        document.getElementById("workout-result").innerText = "End time must be after start time!";
        return;
    }

    document.getElementById("workout-result").innerText = `Workout Time: ${duration} min`;
}

// Set Workout Reminder
function setWorkoutReminder() {
    alert("⏰ Reminder Set! You will receive a workout alert at the set time.");
}

// Set Meal Reminder
function setMealReminder() {
    let mealTime = document.getElementById("meal-time").value;
    
    if (mealTime === "") {
        document.getElementById("meal-reminder-msg").innerText = "Please select a meal time.";
        return;
    }

    setTimeout(() => {
        alert("🍽️ Time to eat!");
    }, 10000); 

    document.getElementById("meal-reminder-msg").innerText = `Meal reminder set for ${mealTime}`;
}

// Water Intake Tracker
let totalWater = 0;
function trackWater() {
    let waterAmount = parseInt(document.getElementById("water-intake").value);
    
    if (isNaN(waterAmount) || waterAmount <= 0) {
        alert("Please enter a valid water amount in ml.");
        return;
    }

    totalWater += waterAmount;
    document.getElementById("water-result").innerText = `Total Water Today: ${totalWater} ml`;
}


const dietPlans = {
    thin: {
        Proteins: ["Eggs", "Chicken", "Fish", "Tofu", "Nuts", "Seeds"],
        HealthyFats: ["Avocados", "Olive oil", "Nuts", "Full-fat dairy"],
        Carbs: ["Whole grains", "Sweet potatoes", "Bananas", "Legumes"],
        Drinks: ["Milk", "Smoothies", "Protein shakes"],
        Avoid: ["Junk food", "Excess caffeine", "Skipping meals"]
    },
    overweight: { 
        Proteins: ["Lean meats", "Fish", "Eggs", "Legumes", "Tofu"],
        HealthyFats: ["Olive oil", "Avocados", "Nuts", "Seeds"],
        Carbs: ["Whole grains", "Vegetables", "Fruits", "Legumes"],
        Drinks: ["Water", "Herbal tea", "Milk"],
        Avoid: ["Processed foods", "Sugary drinks", "Excess salt"]
    },
    pregnant: {
        Proteins: ["Lean meat", "Eggs", "Fish (low mercury)", "Legumes"],
        HealthyFats: ["Avocados", "Nuts", "Olive oil"],
        Carbs: ["Whole grains", "Fruits", "Vegetables"],
        Drinks: ["Water", "Milk", "Fresh juices"],
        Avoid: ["Raw seafood", "High caffeine", "Unpasteurized dairy"]
    },
    pneumonia: {
        Vitamins: ["Citrus fruits", "Bell peppers", "Tomatoes", "Leafy greens"],
        Proteins: ["Chicken", "Fish", "Eggs", "Lentils"],
        Hydration: ["Warm soups", "Water", "Herbal tea"],
        Avoid: ["Dairy (if mucus increases)", "Sugary foods", "Fried foods"]
    },
    diabetes: {
        HealthyCarbs: ["Whole grains", "Legumes", "Berries", "Apples"],
        Proteins: ["Chicken", "Fish", "Eggs", "Tofu", "Nuts"],
        HealthyFats: ["Olive oil", "Avocados", "Nuts", "Fatty fish"],
        FiberRich: ["Veggies", "Fruits (with skin)", "Chia seeds"],
        Drinks: ["Water", "Herbal tea", "Black coffee"],
        Avoid: ["Sugary foods", "Refined carbs", "Processed foods"]
    }
};

function getDietPlan() {
    let condition = document.getElementById("health-condition").value.toLowerCase(); // Ensures lowercase
    let dietPlan = dietPlans[condition];

    if (!dietPlan) {
        document.getElementById("diet-plan-result").innerText = "Please select a valid health condition.";
        return;
    }

    let formattedPlan = Object.entries(dietPlan)
        .map(([key, items]) => `**${key.replace(/([A-Z])/g, ' $1').trim()}:** ${items.join(", ")}`)
        .join("\n");

    document.getElementById("diet-plan-result").innerText = `Recommended Diet:\n${formattedPlan}`;
}
