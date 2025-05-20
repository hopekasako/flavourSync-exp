// Base sequences for each phase (these will be randomized per participant)
const baseSequences = {
    smell: [
        [1, 2, 3, 4, 5], // Trial 1
        [2, 3, 1, 5, 4], // Trial 2
        [4, 5, 2, 1, 3]  // Trial 3
    ],
    taste: [
        [1, 2, 3, 4, 5], // Trial 1
        [2, 3, 1, 5, 4], // Trial 2
        [4, 5, 2, 1, 3]  // Trial 3
    ],
    flavor: [
        [1, 2], // Trial 1
        [2, 1], // Trial 2
        [1, 2]  // Trial 3
    ]
};

// Experiment configuration
const experimentConfig = {
    phases: {
        smell: {
            name: "Smell Phase",
            stimuli: [
                { id: 1, name: "Starfruit" },
                { id: 2, name: "Lemon" },
                { id: 3, name: "Vanilla" },
                { id: 4, name: "Coffee" },
                { id: 5, name: "Water" }
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
        },
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
        },
        flavor: {
            name: "Flavor Phase",
            parts: ["orthonasal", "retronasal"],
            stimuli: [
                { id: 1, name: "Lychee Tea" },
                { id: 2, name: "Lemon Tea" }
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

// Main experiment data
const experimentData = {
    sections: {
        section_1: [ // Smell Phase
            { experiment_id: 1, command_string: "1 1 5000" },
            { experiment_id: 2, command_string: "2 1 5000" },
            { experiment_id: 3, command_string: "3 1 5000" },
            { experiment_id: 4, command_string: "4 1 5000" },
            { experiment_id: 5, command_string: "5 1 5000" }
        ],
        section_2: [ // Taste Phase
            { experiment_id: 1, command_string: "1 1 5000 200" },
            { experiment_id: 2, command_string: "2 1 5000 200" },
            { experiment_id: 3, command_string: "3 1 5000 200" },
            { experiment_id: 4, command_string: "4 1 5000 200" },
            { experiment_id: 5, command_string: "5 1 5000 200" }
        ],
        section_3: [ // Flavor Phase
            { experiment_id: 1, part: "orthonasal", commands: [
                { command_string: "1 1 6000", delay: 0 },
                { command_string: "1 1 3000 200", delay: 3000 }
            ]},
            { experiment_id: 2, part: "orthonasal", commands: [
                { command_string: "3 1 6000", delay: 0 },
                { command_string: "3 1 3000 200", delay: 3000 }
            ]},
            { experiment_id: 3, part: "retronasal", commands: [
                { command_string: "2 1 6000", delay: 0 },
                { command_string: "2 1 6000 200", delay: 0 }
            ]},
            { experiment_id: 4, part: "retronasal", commands: [
                { command_string: "4 1 6000", delay: 0 },
                { command_string: "4 1 6000 200", delay: 0 }
            ]}
        ]
    }
};

// Participant sequences (20 sequences for each participant)
const participantSequences = {
    1: {
        smell: [[1,2,3,4,5], [2,3,1,5,4], [4,5,2,1,3]],
        taste: [[1,2,3,4,5], [2,3,1,5,4], [4,5,2,1,3]],
        flavor: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    2: {
        smell: [[2,3,4,5,1], [3,4,5,1,2], [5,1,2,3,4]],
        taste: [[2,3,4,5,1], [3,4,5,1,2], [5,1,2,3,4]],
        flavor: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[2,1], [1,2]]
        }
    },
    // Add sequences for participants 3-16 here
};

// App state
const state = {
    participantNumber: null,
    currentPhase: 'smell',
    currentTrial: 1,
    currentStimulus: 1,
    currentQuestion: 1,
    answers: {},
    port: null,
    writer: null,
    reader: null,
    testStarted: false,
    trialSequences: null,
    currentFlavorPart: 'orthonasal', // 'orthonasal' or 'retronasal'
    currentFlavorTrial: 1, // 1 or 2
};

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get sequence for current participant
function getParticipantSequence() {
    return participantSequences[state.participantNumber] || participantSequences[1]; // Default to sequence 1 if not found
}

// Initialize trial sequences for the participant
function initializeTrialSequences() {
    const seq = getParticipantSequence();
    state.trialSequences = seq;
    // Reset flavor part/trial/stimulus
    state.currentFlavorPart = 'orthonasal';
    state.currentFlavorTrial = 1;
    state.currentStimulus = 1;
}

// Get current stimulus based on trial sequence
function getCurrentStimulus() {
    const phase = state.currentPhase;
    if (phase === 'flavor') {
        const part = state.currentFlavorPart;
        const trial = state.currentFlavorTrial - 1;
        const stimulusIndex = state.currentStimulus - 1;
        const stimulusId = state.trialSequences[phase][part][trial][stimulusIndex];
        return experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
    } else {
        const trial = state.currentTrial - 1;
        const stimulusIndex = state.currentStimulus - 1;
        const stimulusId = state.trialSequences[phase][trial][stimulusIndex];
        return experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
    }
}

// Get command for current stimulus
function getCurrentCommand() {
    const phase = state.currentPhase;
    const stimulus = getCurrentStimulus();
    if (phase === 'smell') {
        return experimentData.sections.section_1.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'taste') {
        return experimentData.sections.section_2.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'flavor') {
        const part = state.currentFlavorPart;
        let flavorStimulus;
        if (part === 'orthonasal') {
            // Orthonasal: experiment_id 1 or 2
            flavorStimulus = experimentData.sections.section_3.find(s => s.part === 'orthonasal' && s.experiment_id === stimulus.id);
        } else {
            // Retronasal: map stimulus.id 1->3, 2->4
            let retroId = stimulus.id === 1 ? 3 : 4;
            flavorStimulus = experimentData.sections.section_3.find(s => s.part === 'retronasal' && s.experiment_id === retroId);
        }
        if (flavorStimulus) {
            return flavorStimulus.commands.map(cmd => ({
                command: cmd.command_string,
                delay: cmd.delay
            }));
        }
    }
    return null;
}

// Serial connection
async function connectToDevice() {
    try {
        state.port = await navigator.serial.requestPort();
        await state.port.open({ baudRate: 115200 });
        
        state.writer = state.port.writable.getWriter();
        state.reader = state.port.readable.getReader();
        
        document.getElementById('connection-status').textContent = 'Connected';
        document.getElementById('connection-status').classList.remove('bg-red-100', 'text-red-600');
        document.getElementById('connection-status').classList.add('bg-green-100', 'text-green-600');
        document.getElementById('start-experiment-btn').disabled = false;
        
        readFromSerial();
        
    } catch (error) {
        console.error('Error connecting to device:', error);
        alert('Failed to connect to device. Please try again.');
    }
}

async function readFromSerial() {
    try {
        while (true) {
            const { value, done } = await state.reader.read();
            if (done) break;
            console.log('Received from device:', new TextDecoder().decode(value));
        }
    } catch (error) {
        console.error('Error reading from serial:', error);
    }
}

async function sendCommand(command) {
    if (!state.writer) {
        alert('Device not connected!');
        return;
    }
    
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(command + '\n');
        await state.writer.write(data);
        console.log('Command sent:', command);
    } catch (error) {
        console.error('Error sending command:', error);
        alert('Failed to send command to device.');
    }
}

// UI handlers
function showScreen(screenId) {
    document.getElementById('participant-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.add('hidden');
    document.getElementById('survey-screen').classList.add('hidden');
    document.getElementById('break-screen').classList.add('hidden');
    document.getElementById('completed-screen').classList.add('hidden');
    
    document.getElementById(screenId).classList.remove('hidden');
}

function updateExperimentStatus() {
    const phase = experimentConfig.phases[state.currentPhase];
    const totalTrials = 3;
    const totalStimuli = phase.stimuli.length;
    
    // Update welcome screen
    document.getElementById('current-phase').textContent = phase.name;
    document.getElementById('current-trial').textContent = `Trial ${state.currentTrial} of ${totalTrials}`;
    document.getElementById('current-stimulus').textContent = `Stimulus ${state.currentStimulus} of ${totalStimuli}`;
    
    // Update test screen
    document.getElementById('section-title').textContent = `${phase.name}`;
    document.getElementById('phase-indicator').textContent = phase.name;
    document.getElementById('trial-indicator').textContent = `${state.currentTrial} of ${totalTrials}`;
    document.getElementById('stimulus-indicator').textContent = `${state.currentStimulus} of ${totalStimuli}`;
    
    // Update participant status
    document.getElementById('participant-status').textContent = `Participant: ${state.participantNumber}`;
}

function updateTestInstructions() {
    const phase = experimentConfig.phases[state.currentPhase];
    const stimulus = getCurrentStimulus();
    let instructions = '';
    
    // Log the current sequence for testing
    console.log('Current Phase:', state.currentPhase);
    console.log('Current Trial:', state.currentPhase === 'flavor' ? state.currentFlavorTrial : state.currentTrial);
    console.log('Current Stimulus ID:', stimulus.id);
    console.log('Current Stimulus Name:', stimulus.name);
    if (state.currentPhase === 'flavor') {
        const part = state.currentFlavorPart;
        const trial = state.currentFlavorTrial - 1;
        console.log('Full Trial Sequence:', state.trialSequences.flavor[part][trial]);
    } else {
        console.log('Full Trial Sequence:', state.trialSequences[state.currentPhase][state.currentTrial - 1]);
    }
    
    if (state.currentPhase === 'smell') {
        instructions = `Please position your nose near the device. Click the button when ready to experience the smell.`;
    } else if (state.currentPhase === 'taste') {
        instructions = `Please position your mouth in the mouthpiece. Click the button when ready to experience the taste.`;
    } else if (state.currentPhase === 'flavor') {
        instructions = `Please position your nose near the device and mouth in the mouthpiece. Click the button when ready to experience the flavor.`;
    }
    
    document.getElementById('test-instructions').textContent = instructions;
}

function createSurveyQuestions() {
    const phase = experimentConfig.phases[state.currentPhase];
    if (!phase || !phase.questions || phase.questions.length === 0) {
        console.error('No questions found for phase:', state.currentPhase);
        return;
    }
    
    const surveyContainer = document.getElementById('survey-questions');
    surveyContainer.innerHTML = '';
    
    document.getElementById('survey-title').textContent = `Post-Exposure Survey - ${phase.name}`;
    
    // No progress bar
    
    // Show only the current question
    const questionsContainer = document.createElement('div');
    questionsContainer.id = 'questions-container';
    surveyContainer.appendChild(questionsContainer);
    
    showQuestion(state.currentQuestion);
}

function showQuestion(questionNumber) {
    const phase = experimentConfig.phases[state.currentPhase];
    const question = phase.questions[questionNumber - 1];
    if (!question) {
        console.error('Question not found:', questionNumber);
        return;
    }
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    state.currentQuestion = questionNumber;
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'bg-white p-8 rounded-lg shadow-lg space-y-6';
    
    const questionText = document.createElement('p');
    questionText.className = 'font-semibold text-lg text-gray-800 mb-2';
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);
    
    if (question.type === 'slider') {
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'space-y-2';
        
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = question.min;
        slider.max = question.max;
        slider.value = (question.min + question.max) / 2;
        slider.className = 'w-full accent-primary';
        slider.id = `question-${question.id}`;
        
        const labelsContainer = document.createElement('div');
        labelsContainer.className = 'flex justify-between text-sm text-gray-500';
        
        const minLabel = document.createElement('span');
        minLabel.textContent = question.labels[0];
        
        const maxLabel = document.createElement('span');
        maxLabel.textContent = question.labels[1];
        
        labelsContainer.appendChild(minLabel);
        labelsContainer.appendChild(maxLabel);
        
        const valueDisplay = document.createElement('div');
        valueDisplay.className = 'text-center font-medium text-primary';
        valueDisplay.textContent = slider.value;
        
        slider.addEventListener('input', () => {
            valueDisplay.textContent = slider.value;
        });
        
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(labelsContainer);
        sliderContainer.appendChild(valueDisplay);
        questionDiv.appendChild(sliderContainer);
    } else if (question.type === 'text') {
        const textInput = document.createElement('textarea');
        textInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary shadow-sm';
        textInput.rows = 3;
        textInput.id = `question-${question.id}`;
        textInput.placeholder = 'Type your response here...';
        questionDiv.appendChild(textInput);
    }
    
    // Unified action buttons row
    const buttonRow = document.createElement('div');
    buttonRow.className = 'flex flex-wrap gap-4 mt-6 justify-center';
    
    const submitButton = document.createElement('button');
    submitButton.className = 'px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-indigo-700 transition-colors text-lg font-semibold';
    submitButton.textContent = 'Submit Answer';
    submitButton.onclick = () => submitCurrentQuestion();
    buttonRow.appendChild(submitButton);
    
    const skipQuestionButton = document.createElement('button');
    skipQuestionButton.className = 'px-6 py-3 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition-colors text-lg font-semibold';
    skipQuestionButton.textContent = 'Skip Question';
    skipQuestionButton.onclick = () => skipQuestion();
    buttonRow.appendChild(skipQuestionButton);
    
    const skipTrialButton = document.createElement('button');
    skipTrialButton.className = 'px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-colors text-lg font-semibold';
    skipTrialButton.textContent = 'Skip Trial';
    skipTrialButton.onclick = skipTrial;
    buttonRow.appendChild(skipTrialButton);
    
    const skipPhaseButton = document.createElement('button');
    skipPhaseButton.className = 'px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors text-lg font-semibold';
    skipPhaseButton.textContent = 'Skip Phase';
    skipPhaseButton.onclick = skipPhase;
    buttonRow.appendChild(skipPhaseButton);
    
    questionDiv.appendChild(buttonRow);
    
    // If last question, show continue button after submit
    if (state.currentQuestion > phase.questions.length) {
        const continueDiv = document.createElement('div');
        continueDiv.className = 'text-center p-6';
        const continueBtn = document.createElement('button');
        continueBtn.className = 'px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-indigo-700 transition-colors text-lg font-semibold';
        continueBtn.textContent = 'Continue to Next Stimulus';
        continueBtn.onclick = moveToNextStep;
        continueDiv.appendChild(continueBtn);
        questionsContainer.appendChild(continueDiv);
        return;
    }
    
    questionsContainer.appendChild(questionDiv);
}

function submitCurrentQuestion() {
    const phase = experimentConfig.phases[state.currentPhase];
    const question = phase.questions[state.currentQuestion - 1];
    const element = document.getElementById(`question-${question.id}`);
    if (!element) return;
    if (question.type === 'text' && !element.value.trim()) {
        alert('Please provide an answer before submitting.');
        return;
    }
    // Save the current answer
    const trialKey = `trial_${state.currentTrial}`;
    const stimulusKey = `stimulus_${state.currentStimulus}`;
    if (!state.answers[state.currentPhase]) {
        state.answers[state.currentPhase] = {};
    }
    if (!state.answers[state.currentPhase][trialKey]) {
        state.answers[state.currentPhase][trialKey] = {};
    }
    if (!state.answers[state.currentPhase][trialKey][stimulusKey]) {
        state.answers[state.currentPhase][trialKey][stimulusKey] = {
            stimulusId: getCurrentStimulus().id,
            responses: {}
        };
    }
    state.answers[state.currentPhase][trialKey][stimulusKey].responses[question.id] = 
        question.type === 'slider' ? element.value : element.value.trim();
    saveToLocalStorage();
    // Move to next question or finish if all questions are answered
    const nextQuestion = state.currentQuestion + 1;
    if (nextQuestion <= phase.questions.length) {
        showQuestion(nextQuestion);
    } else {
        // All questions answered, show completion message
        const questionsContainer = document.getElementById('questions-container');
        questionsContainer.innerHTML = '';
        const continueDiv = document.createElement('div');
        continueDiv.className = 'text-center p-6';
        const continueBtn = document.createElement('button');
        continueBtn.className = 'px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-indigo-700 transition-colors text-lg font-semibold';
        continueBtn.textContent = 'Continue to Next Stimulus';
        continueBtn.onclick = moveToNextStep;
        continueDiv.appendChild(continueBtn);
        questionsContainer.appendChild(continueDiv);
    }
}

function skipQuestion() {
    // Save null/empty for this question and move to next
    const phase = experimentConfig.phases[state.currentPhase];
    const question = phase.questions[state.currentQuestion - 1];
    const trialKey = state.currentPhase === 'flavor'
        ? `trial_${state.currentFlavorTrial}_${state.currentFlavorPart}`
        : `trial_${state.currentTrial}`;
    const stimulusKey = `stimulus_${state.currentStimulus}`;
    if (!state.answers[state.currentPhase]) state.answers[state.currentPhase] = {};
    if (!state.answers[state.currentPhase][trialKey]) state.answers[state.currentPhase][trialKey] = {};
    if (!state.answers[state.currentPhase][trialKey][stimulusKey]) {
        state.answers[state.currentPhase][trialKey][stimulusKey] = {
            stimulusId: getCurrentStimulus().id,
            responses: {}
        };
    }
    state.answers[state.currentPhase][trialKey][stimulusKey].responses[question.id] = null;
    saveToLocalStorage();
    // Move to next question
    const nextQuestion = state.currentQuestion + 1;
    const phaseQuestions = experimentConfig.phases[state.currentPhase].questions.length;
    if (nextQuestion <= phaseQuestions) {
        showQuestion(nextQuestion);
    } else {
        // All questions answered, show completion message
        const questionsContainer = document.getElementById('questions-container');
        questionsContainer.innerHTML = '';
        const continueDiv = document.createElement('div');
        continueDiv.className = 'text-center p-6';
        const continueBtn = document.createElement('button');
        continueBtn.className = 'px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-indigo-700 transition-colors text-lg font-semibold';
        continueBtn.textContent = 'Continue to Next Stimulus';
        continueBtn.onclick = moveToNextStep;
        continueDiv.appendChild(continueBtn);
        questionsContainer.appendChild(continueDiv);
    }
}

function validateSurveyAnswers() {
    const phase = experimentConfig.phases[state.currentPhase];
    let allAnswered = true;
    
    // Check all questions, not just the current one
    phase.questions.forEach(question => {
        const element = document.getElementById(`question-${question.id}`);
        if (element) {
            if (question.type === 'text' && !element.value.trim()) {
                allAnswered = false;
            }
        }
    });
    
    return allAnswered;
}

function collectSurveyAnswers() {
    const phase = experimentConfig.phases[state.currentPhase];
    const trialKey = `trial_${state.currentTrial}`;
    const stimulusKey = `stimulus_${state.currentStimulus}`;
    
    if (!state.answers[state.currentPhase]) {
        state.answers[state.currentPhase] = {};
    }
    
    if (!state.answers[state.currentPhase][trialKey]) {
        state.answers[state.currentPhase][trialKey] = {};
    }
    
    if (!state.answers[state.currentPhase][trialKey][stimulusKey]) {
        state.answers[state.currentPhase][trialKey][stimulusKey] = {
            stimulusId: getCurrentStimulus().id,
            responses: {}
        };
    }
    
    // Collect answers for all questions, even if they're not currently visible
    phase.questions.forEach(question => {
        const element = document.getElementById(`question-${question.id}`);
        if (element) {
            if (question.type === 'slider') {
                state.answers[state.currentPhase][trialKey][stimulusKey].responses[question.id] = element.value;
            } else if (question.type === 'text') {
                state.answers[state.currentPhase][trialKey][stimulusKey].responses[question.id] = element.value.trim();
            }
        }
    });
    
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('flavourSyncAnswers', JSON.stringify(state.answers));
}

function downloadResults() {
    // Build a structured, meaningful JSON reflecting the workflow
    const output = {
        participant: state.participantNumber,
        timestamp: new Date().toISOString(),
        results: []
    };
    
    for (const phaseKey of Object.keys(state.answers)) {
        const phaseData = state.answers[phaseKey];
        for (const trialKey of Object.keys(phaseData)) {
            const trialData = phaseData[trialKey];
            for (const stimulusKey of Object.keys(trialData)) {
                const entry = trialData[stimulusKey];
                // For flavor, add part/trial info
                let part = undefined, flavorTrial = undefined;
                if (phaseKey === 'flavor') {
                    // Parse keys like trial_1_orthonasal_1
                    const match = trialKey.match(/^trial_(\d+)_([a-z]+)_(\d+)$/);
                    if (match) {
                        flavorTrial = parseInt(match[1]);
                        part = match[2];
                    }
                }
                output.results.push({
                    phase: phaseKey,
                    trial: phaseKey === 'flavor' ? flavorTrial : parseInt(trialKey.replace('trial_', '')),
                    part: part,
                    stimulus: entry.stimulusId,
                    responses: entry.responses
                });
            }
        }
    }
    
    const dataStr = JSON.stringify(output, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `flavourSync_results_participant_${state.participantNumber}.json`;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

async function activateTest() {
    if (state.testStarted) return;
    state.testStarted = true;
    
    document.getElementById('activate-btn').disabled = true;
    
    const stimulus = getCurrentStimulus();
    const commands = getCurrentCommand();
    
    // Show system running message
    const instructions = document.getElementById('test-instructions');
    const originalText = instructions.textContent;
    instructions.textContent = 'System is running... Please wait.';
    instructions.classList.add('text-primary', 'font-medium');
    
    if (Array.isArray(commands)) {
        // Handle flavor phase commands
        for (const cmd of commands) {
            if (cmd.delay > 0) {
                await new Promise(resolve => setTimeout(resolve, cmd.delay));
            }
            await sendCommand(cmd.command);
        }
    } else if (commands) {
        // Handle smell and taste phase commands
        await sendCommand(commands);
    }
    
    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Restore original text
    instructions.textContent = originalText;
    instructions.classList.remove('text-primary', 'font-medium');
    
    state.testStarted = false;
    document.getElementById('activate-btn').disabled = false;
    
    state.currentQuestion = 1; // Reset to first question for new survey
    showScreen('survey-screen');
    createSurveyQuestions();
}

function handleSubmitSurvey() {
    if (!validateSurveyAnswers()) {
        alert('Please answer all questions before submitting.');
        return;
    }
    
    collectSurveyAnswers();
    moveToNextStep();
}

function skipSurvey() {
    collectSurveyAnswers();
    moveToNextStep();
}

function moveToNextStep() {
    const phase = experimentConfig.phases[state.currentPhase];
    if (state.currentPhase === 'flavor') {
        const totalStimuli = phase.stimuli.length;
        const totalTrials = 2;
        const parts = phase.parts;
        // Move within part
        if (state.currentStimulus < totalStimuli) {
            state.currentStimulus++;
            showScreen('test-screen');
            updateTestInstructions();
            updateExperimentStatus();
        } else if (state.currentFlavorTrial < totalTrials) {
            state.currentFlavorTrial++;
            state.currentStimulus = 1;
            showScreen('break-screen');
        } else if (state.currentFlavorPart === 'orthonasal') {
            state.currentFlavorPart = 'retronasal';
            state.currentFlavorTrial = 1;
            state.currentStimulus = 1;
            showScreen('break-screen');
        } else {
            showScreen('completed-screen');
        }
    } else {
        const totalStimuli = phase.stimuli.length;
        if (state.currentStimulus < totalStimuli) {
            state.currentStimulus++;
            showScreen('test-screen');
            updateTestInstructions();
            updateExperimentStatus();
        } else if (state.currentTrial < 3) {
            state.currentTrial++;
            state.currentStimulus = 1;
            showScreen('break-screen');
        } else if (state.currentPhase === 'smell') {
            state.currentPhase = 'taste';
            state.currentTrial = 1;
            state.currentStimulus = 1;
            showScreen('break-screen');
        } else if (state.currentPhase === 'taste') {
            state.currentPhase = 'flavor';
            // Reset flavor part/trial/stimulus
            state.currentFlavorPart = 'orthonasal';
            state.currentFlavorTrial = 1;
            state.currentStimulus = 1;
            showScreen('break-screen');
        } else {
            showScreen('completed-screen');
        }
    }
}

function continueAfterBreak() {
    if (state.currentPhase === 'flavor') {
        showScreen('test-screen');
        updateTestInstructions();
        updateExperimentStatus();
    } else {
        showScreen('test-screen');
        updateTestInstructions();
        updateExperimentStatus();
    }
}

function startParticipant() {
    const participantNumber = parseInt(document.getElementById('participant-number').value);
    
    if (isNaN(participantNumber) || participantNumber < 1 || participantNumber > 16) {
        alert('Please enter a valid participant number (1-16)');
        return;
    }
    
    // Clear old data and reset answers for new participant
    localStorage.removeItem('flavourSyncAnswers');
    state.answers = {};
    
    state.participantNumber = participantNumber;
    initializeTrialSequences();
    showScreen('welcome-screen');
    updateExperimentStatus();
}

function skipTrial() {
    if (confirm('Are you sure you want to skip this trial? All answers will be saved.')) {
        if (state.currentPhase === 'flavor') {
            const totalStimuli = experimentConfig.phases.flavor.stimuli.length;
            // Skip to end of current trial
            state.currentStimulus = totalStimuli;
            moveToNextStep();
        } else {
            const totalStimuli = experimentConfig.phases[state.currentPhase].stimuli.length;
            // Skip to end of current trial
            state.currentStimulus = totalStimuli;
            moveToNextStep();
        }
    }
}

function skipPhase() {
    if (confirm('Are you sure you want to skip this phase? All answers will be saved.')) {
        if (state.currentPhase === 'flavor') {
            const totalStimuli = experimentConfig.phases.flavor.stimuli.length;
            // If in orthonasal, skip to end of last trial in orthonasal
            if (state.currentFlavorPart === 'orthonasal') {
                state.currentFlavorTrial = 2;
                state.currentStimulus = totalStimuli;
                moveToNextStep();
            } else {
                // If in retronasal, skip to end
                state.currentFlavorTrial = 2;
                state.currentStimulus = totalStimuli;
                moveToNextStep();
            }
        } else {
            const totalStimuli = experimentConfig.phases[state.currentPhase].stimuli.length;
            state.currentTrial = 3;
            state.currentStimulus = totalStimuli;
            moveToNextStep();
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (!('serial' in navigator)) {
        alert('Web Serial API is not supported in your browser. Please use Chrome or Edge.');
        document.getElementById('connect-device-btn').disabled = true;
    }
    
    const savedData = localStorage.getItem('flavourSyncAnswers');
    if (savedData) {
        try {
            state.answers = JSON.parse(savedData);
        } catch (e) {
            console.error('Error parsing saved data:', e);
        }
    }
    
    document.getElementById('start-participant-btn').addEventListener('click', startParticipant);
    document.getElementById('connect-device-btn').addEventListener('click', connectToDevice);
    document.getElementById('start-experiment-btn').addEventListener('click', function() {
        showScreen('test-screen');
        updateTestInstructions();
        updateExperimentStatus();
    });
    document.getElementById('activate-btn').addEventListener('click', activateTest);
    document.getElementById('submit-survey-btn').addEventListener('click', handleSubmitSurvey);
    document.getElementById('skip-survey-btn').addEventListener('click', skipSurvey);
    document.getElementById('continue-btn').addEventListener('click', continueAfterBreak);
    document.getElementById('download-results-btn').addEventListener('click', downloadResults);
});