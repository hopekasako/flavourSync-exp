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
        section_3_orthonasal: [ // Flavor Phase - Orthonasal
            { experiment_id: 1, commands: [
                { command_string: "1 1 6000", delay: 0 },
                { command_string: "1 1 3000 200", delay: 3000 }
            ]},
            { experiment_id: 2, commands: [
                { command_string: "3 1 6000", delay: 0 },
                { command_string: "3 1 3000 200", delay: 3000 }
            ]}
        ],
        section_3_retronasal: [ // Flavor Phase - Retronasal
            { experiment_id: 3, commands: [
                { command_string: "2 1 6000", delay: 0 },
                { command_string: "2 1 6000 200", delay: 0 }
            ]},
            { experiment_id: 4, commands: [
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
    3: {
        smell: [[3,4,5,1,2], [4,5,1,2,3], [1,2,3,4,5]],
        taste: [[3,4,5,1,2], [4,5,1,2,3], [1,2,3,4,5]],
        flavor: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[2,1], [1,2]]
        }
    },
    4: {
        smell: [[4,5,1,2,3], [5,1,2,3,4], [2,3,4,5,1]],
        taste: [[4,5,1,2,3], [5,1,2,3,4], [2,3,4,5,1]],
        flavor: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[1,2], [2,1]]
        }
    },
    5: {
        smell: [[5,1,2,3,4], [1,2,3,4,5], [3,4,5,1,2]],
        taste: [[5,1,2,3,4], [1,2,3,4,5], [3,4,5,1,2]],
        flavor: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    6: {
        smell: [[1,3,5,2,4], [2,4,1,3,5], [3,5,2,4,1]],
        taste: [[1,3,5,2,4], [2,4,1,3,5], [3,5,2,4,1]],
        flavor: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[1,2], [1,2]]
        }
    },
    7: {
        smell: [[2,4,1,3,5], [3,5,2,4,1], [4,1,3,5,2]],
        taste: [[2,4,1,3,5], [3,5,2,4,1], [4,1,3,5,2]],
        flavor: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[2,1], [2,1]]
        }
    },
    8: {
        smell: [[3,5,2,4,1], [4,1,3,5,2], [5,2,4,1,3]],
        taste: [[3,5,2,4,1], [4,1,3,5,2], [5,2,4,1,3]],
        flavor: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[2,1], [1,2]]
        }
    },
    9: {
        smell: [[4,1,3,5,2], [5,2,4,1,3], [1,3,5,2,4]],
        taste: [[4,1,3,5,2], [5,2,4,1,3], [1,3,5,2,4]],
        flavor: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    10: {
        smell: [[5,2,4,1,3], [1,3,5,2,4], [2,4,1,3,5]],
        taste: [[5,2,4,1,3], [1,3,5,2,4], [2,4,1,3,5]],
        flavor: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    },
    11: {
        smell: [[1,4,2,5,3], [2,5,3,1,4], [3,1,4,2,5]],
        taste: [[1,4,2,5,3], [2,5,3,1,4], [3,1,4,2,5]],
        flavor: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[1,2], [1,2]]
        }
    },
    12: {
        smell: [[2,5,3,1,4], [3,1,4,2,5], [4,2,5,3,1]],
        taste: [[2,5,3,1,4], [3,1,4,2,5], [4,2,5,3,1]],
        flavor: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    },
    13: {
        smell: [[3,1,4,2,5], [4,2,5,3,1], [5,3,1,4,2]],
        taste: [[3,1,4,2,5], [4,2,5,3,1], [5,3,1,4,2]],
        flavor: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[2,1], [1,2]]
        }
    },
    14: {
        smell: [[4,2,5,3,1], [5,3,1,4,2], [1,4,2,5,3]],
        taste: [[4,2,5,3,1], [5,3,1,4,2], [1,4,2,5,3]],
        flavor: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[1,2], [2,1]]
        }
    },
    15: {
        smell: [[5,3,1,4,2], [1,4,2,5,3], [2,5,3,1,4]],
        taste: [[5,3,1,4,2], [1,4,2,5,3], [2,5,3,1,4]],
        flavor: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[1,2], [1,2]]
        }
    },
    16: {
        smell: [[1,5,4,3,2], [2,1,5,4,3], [3,2,1,5,4]],
        taste: [[1,5,4,3,2], [2,1,5,4,3], [3,2,1,5,4]],
        flavor: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    }
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
    if (!state.participantNumber || !participantSequences[state.participantNumber]) {
        console.error('Invalid participant number or sequence not found');
        return participantSequences[1]; // Default to sequence 1 if not found
    }
    return participantSequences[state.participantNumber];
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
        if (part === 'orthonasal') {
            return experimentData.sections.section_3_orthonasal.find(s => s.experiment_id === stimulus.id)?.commands;
        } else {
            // For retronasal, map stimulus.id 1->3, 2->4
            let retroId = stimulus.id === 1 ? 3 : 4;
            return experimentData.sections.section_3_retronasal.find(s => s.experiment_id === retroId)?.commands;
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
    let totalTrials = 3;  // default for smell & taste

    // Flavor phase only has 2 trials per part
    if (state.currentPhase === 'flavor') {
        totalTrials = 2;
    }

    const totalStimuli = phase.stimuli.length;

    // Set phase display name with extra info for flavor parts
    let phaseDisplayName = phase.name;
    if (state.currentPhase === 'flavor') {
        // Capitalize flavor part for better display
        const partName = state.currentFlavorPart.charAt(0).toUpperCase() + state.currentFlavorPart.slice(1);
        phaseDisplayName += ` - ${partName}`;
    }

    // Update welcome screen
    document.getElementById('current-phase').textContent = phaseDisplayName;

    // Trial info — flavor phase uses currentFlavorTrial, others use currentTrial
    const currentTrialNumber = (state.currentPhase === 'flavor') ? state.currentFlavorTrial : state.currentTrial;

    // Make trial text super clear & friendly
    document.getElementById('current-trial').textContent = `Trial ${currentTrialNumber} of ${totalTrials}`;

    // Stimulus info
    document.getElementById('current-stimulus').textContent = `Stimulus ${state.currentStimulus} of ${totalStimuli}`;

    // Update test screen with same clear info
    document.getElementById('section-title').textContent = phaseDisplayName;
    document.getElementById('phase-indicator').textContent = phaseDisplayName;
    document.getElementById('trial-indicator').textContent = `Trial ${currentTrialNumber} of ${totalTrials}`;
    document.getElementById('stimulus-indicator').textContent = `Stimulus ${state.currentStimulus} of ${totalStimuli}`;

    // Participant info stays the same
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
        instructions = `Please place the mouthpiece in your mouth. Click the button when ready to experience the taste.`;
    } else if (state.currentPhase === 'flavor') {
        instructions = `Please position your nose near the device and place the mouthpiece in your mouth. Click the button when ready to experience the flavor.`;
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

        // Add custom styles for the slider
        const style = document.createElement('style');
        style.textContent = `
            /* Base slider styling */
input[type="range"] {
    -webkit-appearance: none;  /* Remove default Chrome/Edge style */
    -moz-appearance: none;     /* Remove default Firefox style */
    appearance: none;
    width: 100%;
    height: 4px;               /* Slim track */
    background: #e5e7eb;
    border-radius: 2px;
    outline: none;
}

/* Webkit (Chrome, Edge, Safari) thumb */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 24px;
    background: #4f46e5;
    border-radius: 2px;
    cursor: pointer;
    margin-top: px; /* Align thumb vertically */
    transition: transform 0.1s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.1);
}

/* Firefox thumb */
input[type="range"]::-moz-range-thumb {
    width: 8px;
    height: 24px;
    background: #4f46e5;
    border-radius: 2px;
    cursor: pointer;
    border: none;
    transition: transform 0.1s ease;
}

input[type="range"]::-moz-range-thumb:hover {
    transform: scale(1.1);
}

/* Firefox track */
input[type="range"]::-moz-range-track {
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
}

/* Focus style */
input[type="range"]:focus {
    background: #d1d5db;
}

        `;
        document.head.appendChild(style);

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = question.min;
        slider.max = question.max;
        slider.value = (question.min + question.max) / 2;
        slider.className = 'w-full';
        slider.id = `question-${question.id}`;

        const labelsContainer = document.createElement('div');
        labelsContainer.className = 'flex justify-between text-sm text-gray-500';

        // Custom labels for intensity-related questions
        if (question.id !== 'liking') {
            const intensityLabels = [
                { text: 'Barely detectable', value: 1.380 },
                { text: 'Weak', value: 5.754 },
                { text: 'Moderate', value: 16.218 },
                { text: 'Strong', value: 33.113 },
                { text: 'Very Strong', value: 50.119 },
                { text: 'Strongest Imaginable', value: 95.499 }
            ];

            // Create label elements with specific positions
            intensityLabels.forEach(label => {
                const labelDiv = document.createElement('div');
                labelDiv.className = 'flex flex-col items-center';
                
                const labelText = document.createElement('span');
                labelText.textContent = label.text;
                labelText.className = 'text-xs text-center';
                
                labelDiv.appendChild(labelText);
                labelsContainer.appendChild(labelDiv);
            });

            // Update slider value to match the closest label value
            slider.addEventListener('input', () => {
                const value = parseFloat(slider.value);
                const closestLabel = intensityLabels.reduce((prev, curr) => {
                    return Math.abs(curr.value - value) < Math.abs(prev.value - value) ? curr : prev;
                });
                // Store the value but don't display it
                slider.dataset.value = closestLabel.value.toFixed(3);
            });
        } else {
            // Original liking labels
            const minLabel = document.createElement('span');
            minLabel.textContent = question.labels[0];
            
            const maxLabel = document.createElement('span');
            maxLabel.textContent = question.labels[1];
            
            labelsContainer.appendChild(minLabel);
            labelsContainer.appendChild(maxLabel);
        }

        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(labelsContainer);
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
    let trialKey;
    if (state.currentPhase === 'flavor') {
        trialKey = `trial_${state.currentFlavorTrial}_${state.currentFlavorPart}`;
    } else {
        trialKey = `trial_${state.currentTrial}`;
    }
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
    let trialKey;
    if (state.currentPhase === 'flavor') {
        trialKey = `trial_${state.currentFlavorTrial}_${state.currentFlavorPart}`;
    } else {
        trialKey = `trial_${state.currentTrial}`;
    }
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
        results: {
            smell: [],
            taste: [],
            flavor: {
                orthonasal: [],
                retronasal: []
            }
        }
    };
    
    // Process smell and taste phases
    ['smell', 'taste'].forEach(phase => {
        if (state.answers[phase]) {
            for (const trialKey of Object.keys(state.answers[phase])) {
                const trialData = state.answers[phase][trialKey];
                for (const stimulusKey of Object.keys(trialData)) {
                    const entry = trialData[stimulusKey];
                    output.results[phase].push({
                        trial: parseInt(trialKey.replace('trial_', '')),
                        stimulus: entry.stimulusId,
                        responses: entry.responses
                    });
                }
            }
        }
    });
    
    // Process flavor phase
    if (state.answers.flavor) {
        // Process orthonasal
        for (const trialKey of Object.keys(state.answers.flavor)) {
            if (trialKey.includes('orthonasal')) {
                const trialData = state.answers.flavor[trialKey];
                for (const stimulusKey of Object.keys(trialData)) {
                    const entry = trialData[stimulusKey];
                    output.results.flavor.orthonasal.push({
                        trial: parseInt(trialKey.match(/trial_(\d+)_orthonasal/)[1]),
                        stimulus: entry.stimulusId,
                        responses: entry.responses
                    });
                }
            }
        }
        
        // Process retronasal
        for (const trialKey of Object.keys(state.answers.flavor)) {
            if (trialKey.includes('retronasal')) {
                const trialData = state.answers.flavor[trialKey];
                for (const stimulusKey of Object.keys(trialData)) {
                    const entry = trialData[stimulusKey];
                    output.results.flavor.retronasal.push({
                        trial: parseInt(trialKey.match(/trial_(\d+)_retronasal/)[1]),
                        stimulus: entry.stimulusId,
                        responses: entry.responses
                    });
                }
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
            await sendCommand(cmd.command_string);
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
        const connectBtn = document.getElementById('connect-device-btn');
        if (connectBtn) connectBtn.disabled = true;
    }
    
    const savedData = localStorage.getItem('flavourSyncAnswers');
    if (savedData) {
        try {
            state.answers = JSON.parse(savedData);
        } catch (e) {
            console.error('Error parsing saved data:', e);
        }
    }
    
    // Helper function to safely add event listeners
    function addEventListenerIfExists(elementId, event, handler) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(event, handler);
        }
    }
    
    addEventListenerIfExists('start-participant-btn', 'click', startParticipant);
    addEventListenerIfExists('connect-device-btn', 'click', connectToDevice);
    addEventListenerIfExists('start-experiment-btn', 'click', function() {
        showScreen('test-screen');
        updateTestInstructions();
        updateExperimentStatus();
    });
    addEventListenerIfExists('activate-btn', 'click', activateTest);
    addEventListenerIfExists('submit-survey-btn', 'click', handleSubmitSurvey);
    addEventListenerIfExists('skip-survey-btn', 'click', skipSurvey);
    addEventListenerIfExists('continue-btn', 'click', continueAfterBreak);
    addEventListenerIfExists('download-results-btn', 'click', downloadResults);
});