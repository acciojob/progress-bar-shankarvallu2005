const body = document.body;
body.style.padding = "20px";
body.style.margin = "0";

let currentStep = 1;
const totalSteps = 5;

createUI();

function createUI() {
    const container = document.createElement("div");
    container.id = "container";
    body.appendChild(container);

    // Progress Bar
    const progress = document.createElement("div");
    progress.id = "progress";
    container.appendChild(progress);

    // Tracker
    const tracker = document.createElement("div");
    tracker.id = "tracker";
    progress.appendChild(tracker);

    // Circles
    for (let i = 1; i <= totalSteps; i++) {
        const circle = document.createElement("div");
        circle.id = `circle-${i}`;
        circle.classList.add("circle");

        if (i === 1) {
            circle.classList.add("active");
        }

        container.appendChild(circle);
    }

    // Buttons
    const previousBtn = document.createElement("button");
    previousBtn.textContent = "Previous";
    previousBtn.id = "prev";
    previousBtn.disabled = true;

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.id = "next";

    body.append(previousBtn, nextBtn);

    previousBtn.addEventListener("click", previousStep);
    nextBtn.addEventListener("click", nextStep);

    updateProgress();
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateProgress();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
}

function updateProgress() {
    // Update circles
    for (let i = 1; i <= totalSteps; i++) {
        const circle = document.getElementById(`circle-${i}`);

        if (i <= currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
		// circle.textContent = i;
    }

    // Update tracker
    const tracker = document.getElementById("tracker");
    tracker.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;

    // Update buttons
    document.getElementById("prev").disabled = currentStep === 1;
    document.getElementById("next").disabled = currentStep === totalSteps;
}