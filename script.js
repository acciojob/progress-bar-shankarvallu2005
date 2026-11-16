const body = document.body;

let currentStep = 1;
const totalSteps = 5;

createUI();

function createUI() {
  // Body Styling
  body.style.margin = "0";
  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.background = "#0f172a";
  body.style.fontFamily = "Arial, sans-serif";

  // Container
  const container = document.createElement("div");
  container.id = "container";
  container.style.position = "relative";
  container.style.width = "600px";
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";
  container.style.marginBottom = "40px";

  body.appendChild(container);

  // Progress Background
  const progress = document.createElement("div");
  progress.id = "progress";
  progress.style.position = "absolute";
  progress.style.top = "50%";
  progress.style.left = "0";
  progress.style.width = "100%";
  progress.style.height = "6px";
  progress.style.background = "#d1d5db";
  progress.style.transform = "translateY(-50%)";
  progress.style.borderRadius = "10px";
  progress.style.zIndex = "0";

  container.appendChild(progress);

  // Progress Tracker
  const tracker = document.createElement("div");
  tracker.id = "tracker";
  tracker.style.height = "100%";
  tracker.style.width = "0%";
  tracker.style.background = "#22c55e";
  tracker.style.borderRadius = "10px";
  tracker.style.transition = "0.3s";

  progress.appendChild(tracker);

  // Circles
  for (let i = 1; i <= totalSteps; i++) {
    const circle = document.createElement("div");
    circle.id = `circle-${i}`;
    circle.classList.add("circle");

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
    circle.style.background = "white";
    circle.style.border = "3px solid #22c55e";
    circle.style.display = "flex";
    circle.style.justifyContent = "center";
    circle.style.alignItems = "center";
    circle.style.fontWeight = "bold";
    circle.style.fontSize = "18px";
    circle.style.zIndex = "1";
    circle.style.transition = "0.3s";

    circle.textContent = i;

    if (i === 1) {
      circle.classList.add("active");
      activateCircle(circle);
    }

    container.appendChild(circle);
  }

  // Buttons Container
  const btnContainer = document.createElement("div");
  btnContainer.style.display = "flex";
  btnContainer.style.gap = "15px";

  body.appendChild(btnContainer);

  // Previous Button
  const prevBtn = document.createElement("button");
  prevBtn.id = "prev";
  prevBtn.textContent = "Previous";
  prevBtn.disabled = true;

  styleButton(prevBtn);

  // Next Button
  const nextBtn = document.createElement("button");
  nextBtn.id = "next";
  nextBtn.textContent = "Next";

  styleButton(nextBtn);

  btnContainer.append(prevBtn, nextBtn);

  prevBtn.addEventListener("click", previousStep);
  nextBtn.addEventListener("click", nextStep);

  updateProgress();
}

function styleButton(button) {
  button.style.padding = "10px 25px";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
}

function activateCircle(circle) {
  circle.style.background = "#22c55e";
  circle.style.color = "white";
  circle.style.boxShadow = "0 0 15px #22c55e";
}

function deactivateCircle(circle) {
  circle.style.background = "white";
  circle.style.color = "black";
  circle.style.boxShadow = "none";
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
  for (let i = 1; i <= totalSteps; i++) {
    const circle = document.getElementById(`circle-${i}`);

    if (i <= currentStep) {
      circle.classList.add("active");
      activateCircle(circle);
    } else {
      circle.classList.remove("active");
      deactivateCircle(circle);
    }
  }

  // Progress Width
  const tracker = document.getElementById("tracker");
  tracker.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;

  // Buttons
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === totalSteps;

  prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}