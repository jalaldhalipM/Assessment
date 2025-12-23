// Data is loaded from data.js


// DOM Elements
const landingPage = document.getElementById('landing-page');
const assessmentPage = document.getElementById('assessment-page');
const resultPage = document.getElementById('result-page');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const scoreValue = document.getElementById('score-value');
const percentageValue = document.getElementById('percentage-value');
const readinessText = document.getElementById('readiness-text');
const readinessDescription = document.getElementById('readiness-description');

// State
let currentQuestionIndex = 0;
let totalScore = 0;
let currentQuestionScore = 0;

// Event Listeners
startBtn.addEventListener('click', startAssessment);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartAssessment);

// Functions
function startAssessment() {
    landingPage.classList.add('hidden');
    assessmentPage.classList.remove('hidden');
    resultPage.classList.add('hidden');

    currentQuestionIndex = 0;
    totalScore = 0;
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Update Text
    questionText.textContent = `${currentQuestionIndex + 1}. ${question.text}`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    // Update Progress Bar
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Reset Next Button
    nextBtn.disabled = true;
    currentQuestionScore = null;

    // Render Options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option-label';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;

        const span = document.createElement('span');
        span.className = 'option-text';
        span.textContent = option.text;

        label.appendChild(radio);
        label.appendChild(span);

        // Event Listener for selection
        label.addEventListener('click', () => handleOptionSelect(option.score, label, radio));

        optionsContainer.appendChild(label);
    });
}

function handleOptionSelect(score, labelElement, radioElement) {
    // Select the radio (if clicked on label)
    radioElement.checked = true;

    // Update UI for all labels
    const allLabels = optionsContainer.querySelectorAll('.option-label');
    allLabels.forEach(lbl => lbl.classList.remove('selected'));

    // Add selected class to clicked label
    labelElement.classList.add('selected');

    // Store Score
    currentQuestionScore = score;

    // Enable Next Button
    nextBtn.disabled = false;
}

function nextQuestion() {
    // Add score
    if (currentQuestionScore !== null) {
        totalScore += currentQuestionScore;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    assessmentPage.classList.add('hidden');
    resultPage.classList.remove('hidden');

    // Calculate Results
    const maxScore = 40;
    const percentage = Math.round((totalScore / maxScore) * 100);

    // Update DOM
    scoreValue.textContent = totalScore;
    percentageValue.textContent = `${percentage}%`;

    // Determine Readiness Level
    let level = '';
    let message = '';
    let colorClass = '';

    if (totalScore >= 32) {
        level = "Strong SME with natural teaching mindset";
        message = "You have an excellent balance of subject matter expertise and learner-centricity. You demonstrate high emotional intelligence, adaptability, and a genuine desire to enable others.";
        colorClass = '#00bf53'; // Brand Green
    } else if (totalScore >= 24) {
        level = "High-potential trainer, coachable";
        message = "You have the right instincts but may occasionally lean on authority or structure over empathy. With some coaching on 'reading the room' and adaptability, you can be exceptional.";
        colorClass = '#1976d2'; // Blue
    } else if (totalScore >= 18) {
        level = "Expert SME, limited learner focus";
        message = "You are likely very skilled in your domain but may struggle to translate that into effective teaching. You tend to prioritize content or correctness over the learner's journey.";
        colorClass = '#f57c00'; // Orange
    } else {
        level = "Knowledgeable but not suited for teaching-led roles";
        message = "Your focus is heavily on tasks, efficiency, or personal delivery rather than enabling others. You might flourish as a solo contributor rather than a trainer.";
        colorClass = '#d32f2f'; // Red
    }

    readinessText.textContent = level;
    readinessText.style.color = colorClass;
    readinessDescription.textContent = message;

    // Fill progress bar to 100% just in case
    progressBar.style.width = '100%';
}

function restartAssessment() {
    startAssessment();
}
