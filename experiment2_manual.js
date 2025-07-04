// Experiment 2: Taste Manual Test Configuration
const experimentConfig = {
    experimentType: "taste_manual",
    experimentName: "Experiment 2 - Taste Manual Test",
    phases: {
        taste: {
            name: "Taste Phase",
            stimuli: [
                { id: 1, name: "Super Sweet" },
                { id: 2, name: "Medium Sweet" },
                { id: 3, name: "Little Sweet" },
                { id: 4, name: "Sour" },
                { id: 5, name: "Bitter" }
            ],
            questions: [
                {
                    id: "liking",
                    type: "slider",
                    question: "How much do you like this?",
                    min: 0,
                    max: 100,
                    labels: ["Extreme Dislike", "Extreme Like"]
                },
                {
                    id: "description",
                    type: "text",
                    question: "Please describe what you experience:"
                },
                {
                    id: "intensity",
                    type: "slider",
                    question: "How intense is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                },
                {
                    id: "sweetness",
                    type: "slider",
                    question: "How sweet is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                },
                {
                    id: "sourness",
                    type: "slider",
                    question: "How sour is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                },
                {
                    id: "saltiness",
                    type: "slider",
                    question: "How salty is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                },
                {
                    id: "bitterness",
                    type: "slider",
                    question: "How bitter is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                },
                {
                    id: "umami",
                    type: "slider",
                    question: "How umami is it?",
                    min: 0,
                    max: 100,
                    labels: ["Barely Detectable", "Strongest Imaginable"]
                }
            ]
        }
    }
};

// Base sequences for taste phase (these will be randomized per participant)
const baseSequences = {
    taste: [
        [1, 2, 3, 4, 5], // Trial 1
        [2, 3, 1, 5, 4], // Trial 2
        [4, 5, 2, 1, 3]  // Trial 3
    ]
};

// Global variables
let currentParticipant = null;
let currentPhase = 'taste';
let currentTrial = 0;
let currentStimulusIndex = 0;
let trialSequences = {};
let experimentData = {};
let currentQuestionIndex = 0;
let surveyAnswers = {};
let shuffledQuestions = [];

// Initialize the experiment
document.addEventListener('DOMContentLoaded', function() {
    initializeExperiment();
});

function initializeExperiment() {
    // Set up event listeners
    addEventListenerIfExists('start-participant-btn', 'click', startParticipant);
    addEventListenerIfExists('start-experiment-btn', 'click', startExperiment);
    addEventListenerIfExists('activate-btn', 'click', activateTest);
    addEventListenerIfExists('skip-trial-btn', 'click', skipTrial);
    addEventListenerIfExists('skip-phase-btn', 'click', skipPhase);
    addEventListenerIfExists('continue-btn', 'click', continueAfterBreak);
    addEventListenerIfExists('download-results-btn', 'click', downloadResults);
    
    // Inject survey styles
    injectSurveyStylesOnce();
    
    // Show initial screen
    showScreen('participant-screen');
}

function startParticipant() {
    const participantNumber = document.getElementById('participant-number').value;
    
    if (!participantNumber || participantNumber < 1 || participantNumber > 16) {
        alert('Please enter a valid participant number (1-16)');
        return;
    }
    
    currentParticipant = parseInt(participantNumber);
    
    // Initialize experiment data
    experimentData = {
        participant: currentParticipant,
        experimentType: experimentConfig.experimentType,
        experimentName: experimentConfig.experimentName,
        startTime: new Date().toISOString(),
        phases: {}
    };
    
    // Initialize trial sequences
    initializeTrialSequences();
    
    // Update UI
    document.getElementById('participant-status').textContent = `Participant: ${currentParticipant}`;
    
    showScreen('welcome-screen');
}

function initializeTrialSequences() {
    // Create randomized sequences for each trial
    trialSequences = {
        taste: baseSequences.taste.map(trial => [...trial].sort(() => Math.random() - 0.5))
    };
}

function startExperiment() {
    currentTrial = 0;
    currentStimulusIndex = 0;
    currentPhase = 'taste';
    
    // Initialize phase data
    experimentData.phases[currentPhase] = {
        name: experimentConfig.phases[currentPhase].name,
        trials: [],
        startTime: new Date().toISOString()
    };
    
    moveToNextStep();
}

function moveToNextStep() {
    if (currentTrial >= trialSequences[currentPhase].length) {
        // All trials completed for this phase
        showScreen('completed-screen');
        return;
    }
    
    if (currentStimulusIndex >= trialSequences[currentPhase][currentTrial].length) {
        // All stimuli completed for current trial
        currentTrial++;
        currentStimulusIndex = 0;
        
        if (currentTrial < trialSequences[currentPhase].length) {
            // Take a break between trials
            showScreen('break-screen');
            return;
        } else {
            // All trials completed
            showScreen('completed-screen');
            return;
        }
    }
    
    // Continue with next stimulus
    updateTestInstructions();
    showScreen('test-screen');
}

function updateTestInstructions() {
    const currentStimulusId = trialSequences[currentPhase][currentTrial][currentStimulusIndex];
    const stimulus = experimentConfig.phases[currentPhase].stimuli.find(s => s.id === currentStimulusId);
    
    document.getElementById('section-title').textContent = `${experimentConfig.phases[currentPhase].name}`;
    document.getElementById('test-instructions').innerHTML = `
      Please pick up each vial in the order they are arranged on the table and taste as long as you wish.
      When finished, place the vial back in its original position before picking up the next one.
      Once you have finished all vials, proceed to complete the form.
      <br><br><b>Note:</b> While filling out the form, do <u>not</u> taste again.
    `;
}

function activateTest() {
    const currentStimulusId = trialSequences[currentPhase][currentTrial][currentStimulusIndex];
    const stimulus = experimentConfig.phases[currentPhase].stimuli.find(s => s.id === currentStimulusId);
    
    // Record stimulus presentation
    const trialData = {
        trial: currentTrial + 1,
        stimulus: stimulus,
        presentationTime: new Date().toISOString(),
        responses: {}
    };
    
    // Initialize trial data if not exists
    if (!experimentData.phases[currentPhase].trials[currentTrial]) {
        experimentData.phases[currentPhase].trials[currentTrial] = [];
    }
    
    experimentData.phases[currentPhase].trials[currentTrial].push(trialData);
    
    // Show survey
    showSurvey(stimulus);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showSurvey(stimulus) {
    currentQuestionIndex = 0; // Reset to first question for new survey
    showScreen('survey-screen');
    createSurveyQuestions();
}

function createSurveyQuestions() {
    const phase = experimentConfig.phases[currentPhase];
    if (!phase || !phase.questions || phase.questions.length === 0) {
        console.error('No questions found for phase:', currentPhase);
        return;
    }
    
    const surveyContainer = document.getElementById('survey-questions');
    surveyContainer.innerHTML = '';
    
    document.getElementById('survey-title').textContent = `Post-Exposure Survey - ${phase.name}`;
    
    // Create a copy of questions array and shuffle it
    shuffledQuestions = [...phase.questions];
    shuffleArray(shuffledQuestions);
    
    // Show only the current question
    const questionsContainer = document.createElement('div');
    questionsContainer.id = 'questions-container';
    surveyContainer.appendChild(questionsContainer);
    
    showQuestion(1);
}

function showQuestion(questionNumber) {
    const question = shuffledQuestions[questionNumber - 1];
    
    if (!question) {
        console.error('Question not found:', questionNumber);
        return;
    }
    
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    currentQuestionIndex = questionNumber - 1;
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'bg-white p-8 rounded-lg shadow-lg space-y-6';
    
    const questionText = document.createElement('p');
    questionText.className = 'font-semibold text-lg text-gray-800 mb-2';
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);
    
    if (question.type === 'text') {
        const textInput = document.createElement('textarea');
        textInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary shadow-sm';
        textInput.rows = 3;
        textInput.id = `question-${question.id}`;
        textInput.placeholder = 'Type your response here...';
        questionDiv.appendChild(textInput);
    } else if (question.type === 'slider') {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = question.min;
        slider.max = question.max;
        slider.value = (question.min + question.max) / 2;
        slider.id = `question-${question.id}`;
        
        if (question.id !== 'liking') {
            slider.className = 'vertical-slider';
            const verticalContainer = document.createElement('div');
            verticalContainer.className = 'vertical-slider-container';
            
            const sliderWrapper = document.createElement('div');
            sliderWrapper.className = 'vertical-slider-wrapper';
            sliderWrapper.appendChild(slider);
            
            const verticalLabelsContainer = document.createElement('div');
            verticalLabelsContainer.className = 'vertical-labels-container';
            
            const intensityLabels = [
                { text: 'Strongest Imaginable', value: 95.499 },
                { text: 'Very Strong', value: 50.119 },
                { text: 'Strong', value: 33.113 },
                { text: 'Moderate', value: 16.218 },
                { text: 'Weak', value: 5.754 },
                { text: 'Barely detectable', value: 1.380 }
            ];
            
            intensityLabels.forEach(label => {
                const labelDiv = document.createElement('div');
                labelDiv.className = 'vertical-label';
                labelDiv.innerHTML = `<span class="label-tick"></span><span class="label-text">${label.text}</span>`;
                verticalLabelsContainer.appendChild(labelDiv);
            });
            
            verticalContainer.appendChild(sliderWrapper);
            verticalContainer.appendChild(verticalLabelsContainer);
            questionDiv.appendChild(verticalContainer);
        } else {
            slider.className = 'horizontal-slider';
            const labelsContainer = document.createElement('div');
            labelsContainer.className = 'horizontal-labels';
            const minLabel = document.createElement('span');
            minLabel.textContent = question.labels[0];
            const maxLabel = document.createElement('span');
            maxLabel.textContent = question.labels[1];
            labelsContainer.appendChild(minLabel);
            labelsContainer.appendChild(maxLabel);
            questionDiv.appendChild(slider);
            questionDiv.appendChild(labelsContainer);
        }
    }
    
    // Action buttons
    const buttonRow = document.createElement('div');
    buttonRow.className = 'flex flex-wrap gap-4 mt-6 justify-center';
    
    const submitButton = document.createElement('button');
    submitButton.className = 'px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-semibold';
    submitButton.textContent = 'Submit Answer';
    submitButton.onclick = () => submitCurrentQuestion();
    buttonRow.appendChild(submitButton);
    
    questionDiv.appendChild(buttonRow);
    questionsContainer.appendChild(questionDiv);
}

function submitCurrentQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    const element = document.getElementById(`question-${question.id}`);
    
    let response;
    if (question.type === 'slider') {
        response = parseInt(element.value);
    } else if (question.type === 'text') {
        response = element.value.trim();
    }
    
    // Store response
    if (!surveyAnswers) surveyAnswers = {};
    surveyAnswers[question.id] = response;
    
    // Move to next question
    const nextQuestion = currentQuestionIndex + 2; // +2 because currentQuestionIndex is 0-based
    if (nextQuestion <= shuffledQuestions.length) {
        showQuestion(nextQuestion);
    } else {
        // All questions answered, submit survey
        submitSurvey();
    }
}

function nextQuestion() {
    // This function is no longer used with the new randomization approach
    // Keeping it for compatibility but it won't be called
}

function previousQuestion() {
    // This function is no longer used with the new randomization approach
    // Keeping it for compatibility but it won't be called
}

function submitSurvey() {
    const responses = surveyAnswers || {};
    
    // Save responses to current trial data
    const currentTrialData = experimentData.phases[currentPhase].trials[currentTrial][experimentData.phases[currentPhase].trials[currentTrial].length - 1];
    currentTrialData.responses = responses;
    currentTrialData.responseTime = new Date().toISOString();
    
    // Reset survey answers for next stimulus
    surveyAnswers = {};
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Move to next stimulus
    currentStimulusIndex++;
    moveToNextStep();
}

function continueAfterBreak() {
    moveToNextStep();
}

function skipTrial() {
    currentTrial++;
    currentStimulusIndex = 0;
    moveToNextStep();
}

function skipPhase() {
    showScreen('completed-screen');
}

function saveToLocalStorage() {
    localStorage.setItem('flavourSyncAnswers', JSON.stringify(experimentData));
}

function downloadResults() {
    // Create data structure matching old version format
    const startTime = new Date(experimentData.startTime);
    const endTime = new Date();
    const durationSeconds = Math.round((endTime - startTime) / 1000);
    
    const resultsData = {
        participant: currentParticipant,
        startTime: experimentData.startTime,
        endTime: endTime.toISOString(),
        duration: durationSeconds,
        responses: []
    };
    
    // Gather responses from all trials
    const phaseData = experimentData.phases[currentPhase];
    if (phaseData && phaseData.trials) {
        phaseData.trials.forEach((trialArr, trialIndex) => {
            if (Array.isArray(trialArr)) {
                trialArr.forEach(trialObj => {
                    if (trialObj && trialObj.responses && trialObj.stimulus && trialObj.stimulus.id !== undefined) {
                        resultsData.responses.push({
                            id: trialObj.stimulus.id,
                            name: trialObj.stimulus.name,
                            trial: trialIndex + 1,
                            responses: trialObj.responses
                        });
                    }
                });
            }
        });
    }
    
    // Create download
    const dataStr = JSON.stringify(resultsData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `experiment2_taste_manual_participant${currentParticipant}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

function showScreen(screenId) {
    // Hide all screens
    const screens = ['participant-screen', 'welcome-screen', 'test-screen', 'survey-screen', 'break-screen', 'completed-screen'];
    screens.forEach(screen => {
        const element = document.getElementById(screen);
        if (element) {
            element.classList.add('hidden');
        }
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
}

function addEventListenerIfExists(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(event, handler);
    }
}

function injectSurveyStylesOnce() {
    if (document.getElementById('survey-slider-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'survey-slider-styles';
    styleTag.textContent = `
        /* Horizontal slider styles */
        .horizontal-slider {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 100%;
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
            outline: none;
        }
        .horizontal-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 8px;
            height: 24px;
            background: #10b981;
            border-radius: 2px;
            cursor: pointer;
            transition: transform 0.1s ease;
        }
        .horizontal-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
        }
        .horizontal-slider::-moz-range-thumb {
            width: 8px;
            height: 24px;
            background: #10b981;
            border-radius: 2px;
            cursor: pointer;
            border: none;
            transition: transform 0.1s ease;
        }
        .horizontal-slider::-moz-range-thumb:hover {
            transform: scale(1.1);
        }
        .horizontal-slider::-moz-range-track {
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
        }
        .horizontal-labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 0.5rem;
        }
        /* Vertical slider styles - matches horizontal exactly but rotated */
        .vertical-slider {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 300px;
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
            outline: none;
            transform: rotate(-90deg);
            transform-origin: center;
        }
        .vertical-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 8px;
            height: 24px;
            background: #10b981;
            border-radius: 2px;
            cursor: pointer;
            transition: transform 0.1s ease;
        }
        .vertical-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
        }
        .vertical-slider::-moz-range-thumb {
            width: 8px;
            height: 24px;
            background: #10b981;
            border-radius: 2px;
            cursor: pointer;
            border: none;
            transition: transform 0.1s ease;
        }
        .vertical-slider::-moz-range-thumb:hover {
            transform: scale(1.1);
        }
        .vertical-slider::-moz-range-track {
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
        }
        .vertical-slider:focus {
            background: #d1d5db;
        }
        /* Container styles */
        .vertical-slider-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0px;
            margin: 40px 0;
            min-height: 340px;
        }
        .vertical-slider-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width:340px;
            height: 340px;
        }
        .vertical-labels-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 300px;
            min-width: 60px;
        }
        .vertical-label {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            color: #334155;
            font-weight: 500;
        }
        .label-tick {
            width: 12px;
            height: 2px;
            background: #9ca3af;
            margin-right: 8px;
            border-radius: 1px;
        }
        .label-text {
            white-space: nowrap;
        }
    `;
    document.head.appendChild(styleTag);
} 