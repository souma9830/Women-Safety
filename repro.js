document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    document.getElementById('today-date').textContent = `Today's Date: ${today.toDateString()}`;
});

function calculateNextPeriod() {
    let lastPeriod = document.getElementById('last-period').value;
    if (lastPeriod) {
        let lastDate = new Date(lastPeriod);
        let nextPeriod = new Date(lastDate);
        nextPeriod.setDate(lastDate.getDate() + 28);

        let ovulationDate = new Date(lastDate);
        ovulationDate.setDate(lastDate.getDate() + 14);

        document.getElementById('prediction').textContent = 
            `Your next period is expected around: ${nextPeriod.toDateString()}`;
        document.getElementById('ovulation-prediction').textContent = 
            `Your ovulation is expected around: ${ovulationDate.toDateString()}`;

        
        let reminderDate = new Date(nextPeriod);
        reminderDate.setDate(nextPeriod.getDate() - 2);

      
        localStorage.setItem("nextPeriod", nextPeriod);
        localStorage.setItem("reminderDate", reminderDate);

        document.getElementById("set-reminder").style.display = "inline";
    } else {
        document.getElementById('prediction').textContent = 'Please enter a valid date.';
        document.getElementById('ovulation-prediction').textContent = '';
    }
}

function setReminder() {
    let reminderDate = new Date(localStorage.getItem("reminderDate"));
    let today = new Date();

    let timeDiff = reminderDate.getTime() - today.getTime();

    if (timeDiff > 0) {
        setTimeout(() => {
            alert("Reminder: Your period is expected in 2 days.");
        }, timeDiff);

        alert(`Reminder set! You will be alerted on ${reminderDate.toDateString()}.`);
    } else {
        alert("The reminder date has already passed. Please enter a new last period date.");
    }
}
