function showDoctorPopup() {
    document.getElementById("doctorModal").style.display = "block";
}

function closeDoctorPopup() {
    document.getElementById("doctorModal").style.display = "none";
}

function startHealthCheck() {
    closeDoctorPopup();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    if (name && age) {
        document.getElementById("page1").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("loading").classList.add("hidden");
            document.getElementById("healthForm").classList.remove("hidden");
        }, 5000);
    } else {
        alert("Please fill in all fields");
    }
}

function checkHealth() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const cholesterol = parseFloat(document.getElementById("cholesterol").value);
    const sugar = parseFloat(document.getElementById("sugar").value);
    let message = "Health Reminder:\n";

    if (temperature < 97) {
        message += "- Low Temperature. This might indicate hypothermia. Please consult a doctor.\n";
    } else if (temperature > 100.4) {
        message += "- High Temperature. You may have a fever. Stay hydrated and rest, and consult a doctor if necessary.\n";
    } else {
        message += "- Normal Temperature.\n";
    }

    if (cholesterol < 125) {
        message += "- Low Cholesterol. Consult your doctor for dietary recommendations.\n";
    } else if (cholesterol > 200) {
        message += "- High Cholesterol. Consider a healthier diet and regular exercise, and consult a doctor.\n";
    } else {
        message += "- Normal Cholesterol.\n";
    }

    if (sugar < 70) {
        message += "- Low Blood Sugar. This may cause dizziness or fatigue. Consider a small snack, and consult a doctor if needed.\n";
    } else if (sugar > 140) {
        message += "- High Blood Sugar. Monitor regularly and consult a doctor, especially if you have diabetes.\n";
    } else {
        message += "- Normal Blood Sugar.\n";
    }

    document.getElementById("result").innerText = message;
    document.getElementById("result").style.opacity = 1;
}

function startOver() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("temperature").value = '';
    document.getElementById("cholesterol").value = '';
    document.getElementById("sugar").value = '';
    document.getElementById("result").innerText = '';
}
