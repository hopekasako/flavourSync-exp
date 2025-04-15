// Main experiment data
const experimentData = {
    sections: {
        section_1: [
            { experiment_id: 1, command_string: "1 1 5000" },
            { experiment_id: 2, command_string: "2 1 5000" },
            { experiment_id: 3, command_string: "3 1 5000" },
            { experiment_id: 4, command_string: "4 1 5000" },
            { experiment_id: 5, command_string: "5 1 5000" }
        ],
        section_2: [
            { experiment_id: 1, command_string: "1 1 5000 200" },
            { experiment_id: 2, command_string: "2 1 5000 200" },
            { experiment_id: 3, command_string: "3 1 5000 200" },
            { experiment_id: 4, command_string: "4 1 5000 200" },
            { experiment_id: 5, command_string: "5 1 5000 200" }
        ],
        section_3: [
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

// Questions data
const questionsData = {
    sections: {
        section_1: [
            {
                question_id: 1,
                question: "How much do you like this smell experiment? (1-10)",
                type: "slider",
                options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                question_id: 2,
                question: "What do you think the smell is from the following options?",
                type: "radio",
                options: ["Lemon", "Peach", "Starfruit", "Coffee", "Milk", "Orange", "Unable to perceive"]
            }
        ],
        section_2: [
            {
                question_id: 1,
                question: "How much do you like this taste experiment? (1-10)",
                type: "slider",
                options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                question_id: 2,
                question: "What are the characteristics of the taste you just experienced?",
                type: "radio",
                options: ["Sweet", "Sour", "Salty", "Bitter", "Umami"]
            },
            {
                question_id: 3,
                question: "How intense is it?",
                type: "radio",
                options: ["Little", "Medium", "Very"]
            }
        ],
        section_3: [
            {
                question_id: 1,
                question: "How much do you like this flavor experiment? (1-10)",
                type: "slider",
                options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                question_id: 2,
                question: "What does this scent remind you of?",
                type: "radio",
                options: ["Orange Juice", "Lemon Juice", "Milk", "Lychee Juice", "Coca-Cola"]
            }
        ]
    }
};

// App state
const state = {
    currentSection: 1,
    currentTest: 1,
    answers: {
        section_1: {},
        section_2: {},
        section_3: {}
    },
    port: null,
    writer: null,
    reader: null,
    testStarted: false
};

// Serial connection
async function connectToDevice() {
    try {
        state.port = await navigator.serial.requestPort();
        await state.port.open({ baudRate: 115200 });
        
        state.writer = state.port.writable.getWriter();
        state.reader = state.port.readable.getReader();
        
        document.getElementById('connection-status').textContent = 'Connected';
        document.getElementById('connection-status').classList.add('connected');
        document.getElementById('start-experiment-btn').disabled = false;
        
        // Start reading from the serial port
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
            if (done) {
                break;
            }
            // Process incoming data if needed
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
    // Hide all screens
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.add('hidden');
    document.getElementById('survey-screen').classList.add('hidden');
    document.getElementById('completed-screen').classList.add('hidden');
    
    // Show requested screen
    document.getElementById(screenId).classList.remove('hidden');
}

function updateProgress() {
    const totalSections = Object.keys(experimentData.sections).length;
    const testsInCurrentSection = experimentData.sections[`section_${state.currentSection}`].length;
    
    const overallProgress = ((state.currentSection - 1) / totalSections) + 
                            (state.currentTest / testsInCurrentSection / totalSections);
    
    document.getElementById('progress').style.width = `${overallProgress * 100}%`;
    document.getElementById('current-test').textContent = state.currentTest;
    document.getElementById('total-tests').textContent = testsInCurrentSection;
}

function updateTestInstructions() {
    const sectionKey = `section_${state.currentSection}`;
    let instructions = '';
    
    document.getElementById('section-title').textContent = `Section ${state.currentSection}: ${state.currentSection === 1 ? 'Smell' : state.currentSection === 2 ? 'Taste' : 'Flavor'}`;
    
    if (state.currentSection === 1) {
        instructions = "Put your nose near the device. Click the button to experience the smell when you are ready. The smell will be delivered in 5 seconds.";
    } else if (state.currentSection === 2) {
        instructions = "Put your mouth in the mouth piece. Click the button to experience the taste when you are ready. The taste will be delivered in 5 seconds.";
    } else if (state.currentSection === 3) {
        const test = experimentData.sections[sectionKey][state.currentTest - 1];
        if (test.part === "orthonasal") {
            instructions = "Orthonasal Test: Put your nose near the device and then your mouth in the mouth piece. Click when ready. You will smell and then taste.";
        } else {
            instructions = "Retronasal Test: Put your mouth in the mouth piece and your nose near the device. Click when ready. The flavor will be delivered simultaneously.";
        }
    }
    
    document.getElementById('test-instructions').textContent = instructions;
}

function createSurveyQuestions() {
    const sectionKey = `section_${state.currentSection}`;
    const surveyContainer = document.getElementById('survey-questions');
    surveyContainer.innerHTML = '';
    
    document.getElementById('survey-title').textContent = `Survey - Section ${state.currentSection}, Test ${state.currentTest}`;
    
    questionsData.sections[sectionKey].forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);
        
        if (question.type === 'slider') {
            const sliderContainer = document.createElement('div');
            sliderContainer.className = 'slider-container';
            
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = '1';
            slider.max = '10';
            slider.value = '5';
            slider.className = 'slider';
            slider.id = `question-${question.question_id}`;
            
            const sliderValue = document.createElement('div');
            sliderValue.className = 'slider-value';
            sliderValue.textContent = slider.value;
            
            slider.addEventListener('input', () => {
                sliderValue.textContent = slider.value;
            });
            
            sliderContainer.appendChild(slider);
            sliderContainer.appendChild(sliderValue);
            questionDiv.appendChild(sliderContainer);
        } else if (question.type === 'radio') {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'radio-options';
            
            question.options.forEach((option, index) => {
                const radioOption = document.createElement('label');
                radioOption.className = 'radio-option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${question.question_id}`;
                radio.value = option;
                radio.id = `question-${question.question_id}-option-${index}`;
                
                const optionText = document.createTextNode(` ${option}`);
                
                radioOption.appendChild(radio);
                radioOption.appendChild(optionText);
                optionsContainer.appendChild(radioOption);
            });
            
            questionDiv.appendChild(optionsContainer);
        }
        
        surveyContainer.appendChild(questionDiv);
    });
}

function validateSurveyAnswers() {
    const sectionKey = `section_${state.currentSection}`;
    const questions = questionsData.sections[sectionKey];
    let allAnswered = true;
    
    questions.forEach(question => {
        if (question.type === 'slider') {
            // Sliders are always answered because they have a default value
        } else if (question.type === 'radio') {
            const radios = document.getElementsByName(`question-${question.question_id}`);
            let radioChecked = false;
            
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    radioChecked = true;
                    break;
                }
            }
            
            if (!radioChecked) {
                allAnswered = false;
            }
        }
    });
    
    return allAnswered;
}

function collectSurveyAnswers() {
    const sectionKey = `section_${state.currentSection}`;
    const questions = questionsData.sections[sectionKey];
    const testKey = `test_${state.currentTest}`;
    
    // Initialize test object if it doesn't exist
    if (!state.answers[sectionKey][testKey]) {
        state.answers[sectionKey][testKey] = {};
    }
    
    questions.forEach(question => {
        if (question.type === 'slider') {
            const slider = document.getElementById(`question-${question.question_id}`);
            state.answers[sectionKey][testKey][`question_${question.question_id}`] = slider.value;
        } else if (question.type === 'radio') {
            const radios = document.getElementsByName(`question-${question.question_id}`);
            
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    state.answers[sectionKey][testKey][`question_${question.question_id}`] = radios[i].value;
                    break;
                }
            }
        }
    });
    
    // Save to localStorage
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('flavourSyncAnswers', JSON.stringify(state.answers));
}

function downloadResults() {
    const dataStr = JSON.stringify(state.answers, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'flavourSync_results.json';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

async function activateTest() {
    if (state.testStarted) return;
    state.testStarted = true;
    
    document.getElementById('activate-btn').disabled = true;
    const countdownElement = document.getElementById('countdown');
    countdownElement.classList.remove('hidden');
    
    const sectionKey = `section_${state.currentSection}`;
    const currentTest = experimentData.sections[sectionKey][state.currentTest - 1];
    
    // For flavor section (section 3)
    if (state.currentSection === 3) {
        const commands = currentTest.commands;
        
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            
            if (command.delay > 0) {
                setTimeout(() => {
                    sendCommand(command.command_string);
                }, command.delay);
            } else {
                sendCommand(command.command_string);
            }
        }
        
        // Calculate max time for countdown
        const maxDelay = Math.max(...commands.map(cmd => cmd.delay));
        const maxDuration = Math.max(...commands.map(cmd => {
            const parts = cmd.command_string.split(' ');
            return parseInt(parts[2]);
        }));
        
        const totalTime = Math.ceil((maxDelay + maxDuration) / 1000);
        
        // Countdown
        for (let i = totalTime; i > 0; i--) {
            countdownElement.textContent = i;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } else {
        // For smell and taste sections
        sendCommand(currentTest.command_string);
        
        // Extract timing from command
        const parts = currentTest.command_string.split(' ');
        const duration = parseInt(parts[2]);
        const countdownTime = Math.ceil(duration / 1000);
        
        // Countdown
        for (let i = countdownTime; i > 0; i--) {
            countdownElement.textContent = i;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    countdownElement.classList.add('hidden');
    document.getElementById('try-again-modal').classList.remove('hidden');
}

function tryAgain() {
    document.getElementById('try-again-modal').classList.add('hidden');
    document.getElementById('activate-btn').disabled = false;
    state.testStarted = false;
}

function moveToNextStep() {
    document.getElementById('try-again-modal').classList.add('hidden');
    state.testStarted = false;
    showScreen('survey-screen');
    createSurveyQuestions();
}

function handleSubmitSurvey() {
    if (!validateSurveyAnswers()) {
        alert('Please answer all questions before submitting.');
        return;
    }
    
    collectSurveyAnswers();
    
    const sectionKey = `section_${state.currentSection}`;
    const testsInSection = experimentData.sections[sectionKey].length;
    
    if (state.currentTest < testsInSection) {
        // Move to next test in current section
        state.currentTest++;
        showScreen('test-screen');
        updateTestInstructions();
        updateProgress();
        document.getElementById('activate-btn').disabled = false;
    } else if (state.currentSection < 3) {
        // Move to next section
        state.currentSection++;
        state.currentTest = 1;
        showScreen('test-screen');
        updateTestInstructions();
        updateProgress();
        document.getElementById('activate-btn').disabled = false;
    } else {
        // Experiment completed
        showScreen('completed-screen');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if Web Serial API is supported
    if (!('serial' in navigator)) {
        alert('Web Serial API is not supported in your browser. Please use Chrome or Edge.');
        document.getElementById('connect-device-btn').disabled = true;
    }
    
    // Load existing data from localStorage if available
    const savedData = localStorage.getItem('flavourSyncAnswers');
    if (savedData) {
        try {
            state.answers = JSON.parse(savedData);
        } catch (e) {
            console.error('Error parsing saved data:', e);
        }
    }
    
    // Setup event listeners
    document.getElementById('connect-device-btn').addEventListener('click', connectToDevice);
    document.getElementById('start-experiment-btn').addEventListener('click', function() {
        showScreen('test-screen');
        updateTestInstructions();
        updateProgress();
    });
    document.getElementById('activate-btn').addEventListener('click', activateTest);
    document.getElementById('try-again-btn').addEventListener('click', tryAgain);
    document.getElementById('next-btn').addEventListener('click', moveToNextStep);
    document.getElementById('submit-survey-btn').addEventListener('click', handleSubmitSurvey);
    document.getElementById('download-results-btn').addEventListener('click', downloadResults);
});