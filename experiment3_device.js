// Experiment 3: Flavour Device Test Configuration
const experimentConfig = {
    experimentType: "flavour_device",
    experimentName: "Experiment 3 - Flavour Device Test",
    phases: {
        flavour: {
            name: "Flavour Phase",
            parts: ["orthonasal", "retronasal"],
            stimuli: [
                { id: 1, name: "Lychee Tea", command: "FLAVOUR_1" },
                { id: 2, name: "Lemon Tea", command: "FLAVOUR_2" }
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
                }
            ]
        }
    }
};

// Base sequences for flavour phase (these will be randomized per participant)
const baseSequences = {
    flavour: [
        [1, 2], // Trial 1
        [2, 1], // Trial 2
        [1, 2]  // Trial 3
    ]
};

// Participant sequences (same as old version)
const participantSequences = {
    1: {
        smell: [[1,2,3,4,5], [2,3,1,5,4], [4,5,2,1,3]],
        taste: [[1,2,3,4,5], [2,3,1,5,4], [4,5,2,1,3]],
        flavour: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    2: {
        smell: [[2,3,4,5,1], [3,4,5,1,2], [5,1,2,3,4]],
        taste: [[2,3,4,5,1], [3,4,5,1,2], [5,1,2,3,4]],
        flavour: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[2,1], [1,2]]
        }
    },
    3: {
        smell: [[3,4,5,1,2], [4,5,1,2,3], [1,2,3,4,5]],
        taste: [[3,4,5,1,2], [4,5,1,2,3], [1,2,3,4,5]],
        flavour: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[2,1], [1,2]]
        }
    },
    4: {
        smell: [[4,5,1,2,3], [5,1,2,3,4], [2,3,4,5,1]],
        taste: [[4,5,1,2,3], [5,1,2,3,4], [2,3,4,5,1]],
        flavour: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[1,2], [2,1]]
        }
    },
    5: {
        smell: [[5,1,2,3,4], [1,2,3,4,5], [3,4,5,1,2]],
        taste: [[5,1,2,3,4], [1,2,3,4,5], [3,4,5,1,2]],
        flavour: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    6: {
        smell: [[1,3,5,2,4], [2,4,1,3,5], [3,5,2,4,1]],
        taste: [[1,3,5,2,4], [2,4,1,3,5], [3,5,2,4,1]],
        flavour: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[1,2], [1,2]]
        }
    },
    7: {
        smell: [[2,4,1,3,5], [3,5,2,4,1], [4,1,3,5,2]],
        taste: [[2,4,1,3,5], [3,5,2,4,1], [4,1,3,5,2]],
        flavour: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[2,1], [2,1]]
        }
    },
    8: {
        smell: [[3,5,2,4,1], [4,1,3,5,2], [5,2,4,1,3]],
        taste: [[3,5,2,4,1], [4,1,3,5,2], [5,2,4,1,3]],
        flavour: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[2,1], [1,2]]
        }
    },
    9: {
        smell: [[4,1,3,5,2], [5,2,4,1,3], [1,3,5,2,4]],
        taste: [[4,1,3,5,2], [5,2,4,1,3], [1,3,5,2,4]],
        flavour: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[1,2], [2,1]]
        }
    },
    10: {
        smell: [[5,2,4,1,3], [1,3,5,2,4], [2,4,1,3,5]],
        taste: [[5,2,4,1,3], [1,3,5,2,4], [2,4,1,3,5]],
        flavour: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    },
    11: {
        smell: [[1,4,2,5,3], [2,5,3,1,4], [3,1,4,2,5]],
        taste: [[1,4,2,5,3], [2,5,3,1,4], [3,1,4,2,5]],
        flavour: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[1,2], [1,2]]
        }
    },
    12: {
        smell: [[2,5,3,1,4], [3,1,4,2,5], [4,2,5,3,1]],
        taste: [[2,5,3,1,4], [3,1,4,2,5], [4,2,5,3,1]],
        flavour: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    },
    13: {
        smell: [[3,1,4,2,5], [4,2,5,3,1], [5,3,1,4,2]],
        taste: [[3,1,4,2,5], [4,2,5,3,1], [5,3,1,4,2]],
        flavour: {
            orthonasal: [[1,2], [2,1]],
            retronasal: [[2,1], [1,2]]
        }
    },
    14: {
        smell: [[4,2,5,3,1], [5,3,1,4,2], [1,4,2,5,3]],
        taste: [[4,2,5,3,1], [5,3,1,4,2], [1,4,2,5,3]],
        flavour: {
            orthonasal: [[2,1], [1,2]],
            retronasal: [[1,2], [2,1]]
        }
    },
    15: {
        smell: [[5,3,1,4,2], [1,4,2,5,3], [2,5,3,1,4]],
        taste: [[5,3,1,4,2], [1,4,2,5,3], [2,5,3,1,4]],
        flavour: {
            orthonasal: [[1,2], [1,2]],
            retronasal: [[1,2], [1,2]]
        }
    },
    16: {
        smell: [[1,5,4,3,2], [2,1,5,4,3], [3,2,1,5,4]],
        taste: [[1,5,4,3,2], [2,1,5,4,3], [3,2,1,5,4]],
        flavour: {
            orthonasal: [[2,1], [2,1]],
            retronasal: [[2,1], [2,1]]
        }
    }
};

// Main experiment data with command structure (same as old version)
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
        section_3_orthonasal: [ // Flavour Phase - Orthonasal
            { experiment_id: 1, commands: [
                { command_string: "6 1 6000", delay: 0 },
                { command_string: "6 1 3000 200", delay: 3000 }
            ]},
            { experiment_id: 2, commands: [
                { command_string: "5 1 6000", delay: 0 },
                { command_string: "5 1 3000 200", delay: 3000 }
            ]}
        ],
        section_3_retronasal: [ // Flavour Phase - Retronasal
            { experiment_id: 3, commands: [
                { command_string: "6 1 6000", delay: 0 },
                { command_string: "6 1 6000 200", delay: 0 }
            ]},
            { experiment_id: 4, commands: [
                { command_string: "5 1 6000", delay: 0 },
                { command_string: "5 1 6000 200", delay: 0 }
            ]}
        ]
    }
};

// Global variables
let currentParticipant = null;
let currentPhase = 'flavour';
let currentTrial = 0;
let currentStimulusIndex = 0;
let currentPart = 0; // 0 = orthonasal, 1 = retronasal
let trialSequences = {};
let currentQuestionIndex = 0;
let surveyAnswers = {};
let port = null;
let reader = null;
let deviceConnected = false;
let deviceData = [];
let shuffledQuestions = []; // Add shuffled questions array

// Initialize the experiment
document.addEventListener('DOMContentLoaded', function() {
    initializeExperiment();
});

function initializeExperiment() {
    // Set up event listeners
    addEventListenerIfExists('start-participant-btn', 'click', startParticipant);
    addEventListenerIfExists('start-experiment-btn', 'click', startExperiment);
    addEventListenerIfExists('activate-btn', 'click', activateTest);
    addEventListenerIfExists('continue-btn', 'click', continueAfterBreak);
    addEventListenerIfExists('download-results-btn', 'click', downloadResults);
    addEventListenerIfExists('connect-device-btn', 'click', connectToDevice);
    addEventListenerIfExists('skip-trial-btn', 'click', skipTrial);
    addEventListenerIfExists('skip-phase-btn', 'click', skipPhase);
    
    // Inject survey styles
    injectSurveyStylesOnce();
    
    // Show initial screen
    showScreen('participant-screen');
}

async function connectToDevice() {
    try {
        // Request port access
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        
        // Set up reader
        reader = port.readable.getReader();
        
        // Update UI
        deviceConnected = true;
        updateConnectionStatus();
        updateDeviceStatus();
        
        // Start reading data
        startReadingData();
        
        console.log('Device connected successfully');
    } catch (error) {
        console.error('Error connecting to device:', error);
        alert('Failed to connect to device. Please try again.');
    }
}

async function handleDisconnection() {
    deviceConnected = false;
    updateConnectionStatus();
    updateDeviceStatus();
    
    if (reader) {
        try {
            await reader.cancel();
        } catch (error) {
            console.error('Error canceling reader:', error);
        }
        reader = null;
    }
    
    if (port) {
        try {
            await port.close();
        } catch (error) {
            console.error('Error closing port:', error);
        }
        port = null;
    }
    
    // Pause the system and show disconnection popup
    showDisconnectionPopup();
}

function showDisconnectionPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'disconnection-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'bg-white rounded-lg p-8 max-w-md mx-4 text-center';
    
    popup.innerHTML = `
        <div class="mb-6">
            <div class="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Device Disconnected</h2>
            <p class="text-gray-600">Your device has been disconnected. Please choose an option:</p>
        </div>
        
        <div class="space-y-4">
            <button id="reconnect-device-btn" class="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Reconnect Device
            </button>
            
            <button id="download-current-btn" class="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Download Current Results
            </button>
            
            <button id="close-popup-btn" class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold">
                Close
            </button>
        </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add event listeners
    document.getElementById('reconnect-device-btn').onclick = async () => {
        document.body.removeChild(overlay);
        await connectToDevice();
        // After reconnection, rerun the current command if we're in the middle of a test
        if (deviceConnected && currentPhase && currentTrial !== undefined && currentStimulusIndex !== undefined) {
            console.log('Device reconnected, rerunning current command');
            setTimeout(() => {
                rerunCurrentCommand();
            }, 1000); // Small delay to ensure connection is stable
        }
    };
    
    document.getElementById('download-current-btn').onclick = () => {
        document.body.removeChild(overlay);
        downloadCurrentResults();
    };
    
    document.getElementById('close-popup-btn').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Prevent closing by clicking outside
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            // Don't close when clicking outside
        }
    };
}

function updateConnectionStatus() {
    const statusElement = document.getElementById('connection-status');
    const connectButton = document.getElementById('connect-device-btn');
    const startButton = document.getElementById('start-experiment-btn');
    
    if (deviceConnected) {
        statusElement.textContent = 'Connected';
        statusElement.className = 'px-3 py-1 text-sm rounded bg-green-100 text-green-600';
        connectButton.textContent = 'Disconnect';
        connectButton.onclick = handleDisconnection;
        startButton.disabled = false;
        startButton.className = 'px-6 py-3 bg-primary text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors';
    } else {
        statusElement.textContent = 'Disconnected';
        statusElement.className = 'px-3 py-1 text-sm rounded bg-red-100 text-red-600';
        connectButton.textContent = 'Connect Device';
        connectButton.onclick = connectToDevice;
        startButton.disabled = true;
        startButton.className = 'px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed';
        
        // Show download button when disconnected if there's data to save
        renderDownloadPreviousResultButton();
    }
}

function updateDeviceStatus() {
    const deviceStatus = document.getElementById('device-status');
    if (deviceConnected) {
        deviceStatus.textContent = 'Device connected and ready';
        deviceStatus.className = 'text-green-600';
    } else {
        deviceStatus.textContent = 'Please connect your device to begin';
        deviceStatus.className = 'text-purple-600';
    }
}

function renderDownloadPreviousResultButton() {
    // Check if there's any experiment data to save
    if (!experimentData || !experimentData.participant || !experimentData.phases || Object.keys(experimentData.phases).length === 0) {
        return; // No data to save
    }
    
    // Check if there are any responses in the data
    let hasResponses = false;
    for (const phaseKey in experimentData.phases) {
        const phase = experimentData.phases[phaseKey];
        if (phase.trials && phase.trials.length > 0) {
            for (const trial of phase.trials) {
                if (trial && trial.length > 0) {
                    for (const trialData of trial) {
                        if (trialData.responses && Object.keys(trialData.responses).length > 0) {
                            hasResponses = true;
                            break;
                        }
                    }
                }
            }
        }
    }
    
    if (!hasResponses) {
        return; // No responses to save
    }
    
    // Create or update the download button
    let downloadButton = document.getElementById('download-previous-results-btn');
    if (!downloadButton) {
        downloadButton = document.createElement('button');
        downloadButton.id = 'download-previous-results-btn';
        downloadButton.className = 'px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold mt-4';
        downloadButton.textContent = 'Download Current Results';
        downloadButton.onclick = downloadCurrentResults;
        
        // Add to the main container or a suitable location
        const mainContainer = document.querySelector('.container') || document.body;
        mainContainer.appendChild(downloadButton);
    }
    
    // Show the button
    downloadButton.style.display = 'block';
}

function downloadCurrentResults() {
    let dataToDownload = experimentData;
    
    // If no current experiment data, try to load from localStorage
    if (!dataToDownload || !dataToDownload.participant) {
        const savedData = localStorage.getItem('flavourSync_experiment_data');
        if (savedData) {
            try {
                dataToDownload = JSON.parse(savedData);
                console.log('Loaded data from localStorage:', dataToDownload);
            } catch (error) {
                console.error('Error parsing localStorage data:', error);
            }
        }
    }
    
    if (!dataToDownload || !dataToDownload.participant) {
        alert('No experiment data available to download.');
        return;
    }
    
    // Create data structure for download
    const startTime = new Date(dataToDownload.startTime);
    const endTime = new Date();
    const durationSeconds = Math.round((endTime - startTime) / 1000);
    
    const resultsData = {
        participant: dataToDownload.participant,
        startTime: dataToDownload.startTime,
        endTime: endTime.toISOString(),
        duration: durationSeconds,
        responses: []
    };
    
    // Gather responses from all trials
    if (dataToDownload.phases) {
        for (const phaseKey in dataToDownload.phases) {
            const phase = dataToDownload.phases[phaseKey];
            if (phase.trials) {
                phase.trials.forEach((trialArr, trialIndex) => {
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
        }
    }
    
    // Create download
    const dataStr = JSON.stringify(resultsData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `flavourSync_results_participant_${dataToDownload.participant}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('Current results downloaded successfully!');
}

async function startReadingData() {
    if (!reader) return;
    
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            
            // Process incoming data
            const data = new TextDecoder().decode(value);
            deviceData.push({
                timestamp: new Date().toISOString(),
                data: data.trim()
            });
            
            console.log('Received device data:', data);
        }
    } catch (error) {
        console.error('Error reading from device:', error);
        handleDisconnection();
    }
}

function handleErrorAndRetry() {
    console.log('Handling error and retrying current stage');
    
    // Show error popup with retry option
    const overlay = document.createElement('div');
    overlay.id = 'error-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    const popup = document.createElement('div');
    popup.className = 'bg-white rounded-lg p-8 max-w-md mx-4 text-center';
    
    popup.innerHTML = `
        <div class="mb-6">
            <div class="text-red-500 text-6xl mb-4">❌</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Error Occurred</h2>
            <p class="text-gray-600">An error occurred during the experiment. Would you like to retry the current stage?</p>
        </div>
        
        <div class="space-y-4">
            <button id="retry-stage-btn" class="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Retry Current Stage
            </button>
            
            <button id="download-and-exit-btn" class="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Download Results & Exit
            </button>
            
            <button id="close-error-btn" class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold">
                Close
            </button>
        </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add event listeners
    document.getElementById('retry-stage-btn').onclick = () => {
        document.body.removeChild(overlay);
        retryCurrentStage();
    };
    
    document.getElementById('download-and-exit-btn').onclick = () => {
        document.body.removeChild(overlay);
        downloadCurrentResults();
    };
    
    document.getElementById('close-error-btn').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Prevent closing by clicking outside
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            // Don't close when clicking outside
        }
    };
}

function retryCurrentStage() {
    console.log('Retrying current stage - showing test screen');
    
    // Reset the current trial data to remove any partial responses
    if (experimentData.phases && experimentData.phases[currentPhase] && 
        experimentData.phases[currentPhase].trials && 
        experimentData.phases[currentPhase].trials[currentTrial]) {
        
        // Remove the last trial entry if it exists
        const currentTrialArray = experimentData.phases[currentPhase].trials[currentTrial];
        if (currentTrialArray && currentTrialArray.length > 0) {
            currentTrialArray.pop(); // Remove the last entry
        }
    }
    
    // Show the test screen again (the page before survey)
    updateTestInstructions();
    showScreen('test-screen');
}

async function rerunCurrentCommand() {
    console.log('Rerunning current command after reconnection');
    
    // Check if we're currently on the test screen
    const testScreen = document.getElementById('test-screen');
    if (!testScreen || testScreen.style.display === 'none') {
        console.log('Not on test screen, not rerunning command');
        return;
    }
    
    // Check if the activate button is disabled (indicating a test was in progress)
    const activateBtn = document.getElementById('activate-btn');
    if (!activateBtn || !activateBtn.disabled) {
        console.log('Activate button not disabled, not rerunning command');
        return;
    }
    
    console.log('Rerunning command for current stage');
    
    try {
        const commands = getCurrentCommand();
        const instructions = document.getElementById('test-instructions');
        
        if (Array.isArray(commands)) {
            for (const cmd of commands) {
                if (cmd.delay > 0) {
                    await new Promise(resolve => setTimeout(resolve, cmd.delay));
                }
                console.log('Reconnected - Command sent:', cmd.command_string);
                const success = await sendCommand(cmd.command_string);
                if (!success) {
                    throw new Error('Failed to send command after reconnection: ' + cmd.command_string);
                }
            }
        } else if (commands) {
            console.log('Reconnected - Command sent:', commands);
            const success = await sendCommand(commands);
            if (!success) {
                throw new Error('Failed to send command after reconnection: ' + commands);
            }
        } else {
            throw new Error('No commands available for current stimulus after reconnection');
        }
        
        // Wait for 5 seconds after command execution
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Show survey after successful command execution
        const stimulus = getCurrentStimulus();
        showSurvey(stimulus);
        
    } catch (error) {
        console.error('Error rerunning command after reconnection:', error);
        handleErrorAndRetry();
    }
}

async function sendCommand(command) {
    if (!port || !deviceConnected) {
        console.error('Device not connected');
        return false;
    }
    
    try {
        const writer = port.writable.getWriter();
        const encoder = new TextEncoder();
        const data = encoder.encode(command + '\n');
        await writer.write(data);
        writer.releaseLock();
        console.log('Sent command:', command);
        return true;
    } catch (error) {
        console.error('Error sending command:', error);
        return false;
    }
}

function startParticipant() {
    const participantNumber = document.getElementById('participant-number').value;
    
    if (!participantNumber || participantNumber < 1 || participantNumber > 16) {
        alert('Please enter a valid participant number (1-16)');
        return;
    }
    
    currentParticipant = parseInt(participantNumber);
    
    // Initialize experiment data
    experimentData.participant = currentParticipant;
    experimentData.experimentType = experimentConfig.experimentType;
    experimentData.experimentName = experimentConfig.experimentName;
    experimentData.startTime = new Date().toISOString();
    experimentData.deviceData = [];
    experimentData.phases = {};
    
    // Initialize trial sequences
    initializeTrialSequences();
    
    // Update UI
    document.getElementById('participant-status').textContent = `Participant: ${currentParticipant}`;
    
    showScreen('welcome-screen');
}

function initializeTrialSequences() {
    const seq = getParticipantSequence();
    trialSequences = seq;
    currentPart = 0;
    currentStimulusIndex = 0;
    currentTrial = 0;
    currentPhase = 'flavour';
}

function startExperiment() {
    if (!deviceConnected) {
        alert('Please connect your device before starting the experiment.');
        return;
    }
    console.log('startExperiment: currentPhase =', currentPhase);
    console.log('experimentConfig.phases =', experimentConfig.phases);
    if (!experimentConfig.phases[currentPhase]) {
        console.error('Phase config missing for', currentPhase, experimentConfig.phases);
        alert('Experiment configuration error: phase not found!');
        return;
    }
    currentTrial = 0;
    currentStimulusIndex = 0;
    currentPart = 0;
    currentPhase = 'flavour';
    // Initialize phase data
    experimentData.phases[currentPhase] = {
        name: experimentConfig.phases[currentPhase].name,
        trials: [],
        startTime: new Date().toISOString()
    };
    moveToNextStep();
}

function moveToNextStep() {
    console.log('moveToNextStep - currentTrial:', currentTrial, 'currentPart:', currentPart, 'currentStimulusIndex:', currentStimulusIndex);
    
    // For flavour phase, we have exactly 2 trials, each with 2 stimuli, each with orthonasal + retronasal
    // Total: 2 trials × 2 stimuli × 2 parts = 8 total experiences
    if (currentPhase === 'flavour') {
        // Check if we've completed all 8 experiences (2 trials × 2 stimuli × 2 parts)
        const totalExperiences = experimentData.phases[currentPhase].trials.reduce((total, trial) => total + trial.length, 0);
        console.log('Total experiences completed:', totalExperiences);
        
        if (totalExperiences >= 8) {
            console.log('All 8 experiences completed, showing completed screen');
            showScreen('completed-screen');
            return;
        }
    } else {
        if (currentTrial >= trialSequences[currentPhase].length) {
            showScreen('completed-screen');
            return;
        }
    }
    
    // Handle nested structure for 'flavour' phase
    let stimuliLength;
    if (currentPhase === 'flavour') {
        // Get the current trial sequence for the current part and trial
        const partName = currentPart === 0 ? 'orthonasal' : 'retronasal';
        const currentTrialSequence = trialSequences[currentPhase][partName][currentTrial];
        stimuliLength = currentTrialSequence ? currentTrialSequence.length : 0;
        console.log('Flavour phase - stimuliLength:', stimuliLength, 'for trial:', currentTrial, 'part:', partName);
    } else {
        stimuliLength = trialSequences[currentPhase][currentTrial].length;
    }
    
    if (currentStimulusIndex >= stimuliLength) {
        console.log('All stimuli completed for current trial/part');
        // All stimuli completed for current trial/part
        if (currentPhase === 'flavour' && currentPart === 0) {
            // Move to retronasal part for the same trial
            console.log('Moving from orthonasal to retronasal for trial:', currentTrial);
            currentPart = 1;
            currentStimulusIndex = 0;
        } else if (currentPhase === 'flavour' && currentPart === 1) {
            // Move to next trial (orthonasal)
            console.log('Moving to next trial:', currentTrial + 1);
            currentTrial++;
            currentStimulusIndex = 0;
            currentPart = 0;
            
            if (currentTrial < 2) {
                // Take a break between trials
                console.log('Taking break between trials');
                showScreen('break-screen');
                return;
            } else {
                // All trials completed
                console.log('All trials completed');
                showScreen('completed-screen');
                return;
            }
        } else {
            // For other phases, just move to next trial
            currentTrial++;
            currentStimulusIndex = 0;
            
            if (currentTrial < trialSequences[currentPhase].length) {
                showScreen('break-screen');
                return;
            } else {
                showScreen('completed-screen');
                return;
            }
        }
    }
    
    // Defensive: ensure trial array exists and push a new trial object before showing the survey
    if (!experimentData.phases[currentPhase].trials[currentTrial]) {
        experimentData.phases[currentPhase].trials[currentTrial] = [];
    }
    experimentData.phases[currentPhase].trials[currentTrial].push({
        stimulus: getCurrentStimulus(),
        startTime: new Date().toISOString(),
        responses: {}
    });
    
    if (trialSequences && trialSequences[currentPhase]) {
        if (currentPhase === 'flavour') {
            const partName = currentPart === 0 ? 'orthonasal' : 'retronasal';
            if (trialSequences[currentPhase][partName] && trialSequences[currentPhase][partName][currentTrial]) {
                updateTestInstructions();
            } else {
                console.error('Trial sequence not ready in moveToNextStep', trialSequences, currentPhase, currentTrial, partName);
                document.getElementById('test-instructions').textContent = 'Error: Sequence not ready!';
            }
        } else {
            if (trialSequences[currentPhase][currentTrial]) {
                updateTestInstructions();
            } else {
                console.error('Trial sequence not ready in moveToNextStep', trialSequences, currentPhase, currentTrial, currentPart);
                document.getElementById('test-instructions').textContent = 'Error: Sequence not ready!';
            }
        }
    } else {
        console.error('Trial sequence not ready in moveToNextStep', trialSequences, currentPhase, currentTrial, currentPart);
        document.getElementById('test-instructions').textContent = 'Error: Sequence not ready!';
    }
    showScreen('test-screen');
}

function updateTestInstructions() {
    const stimulus = getCurrentStimulus();
    if (!stimulus) {
        console.error('Stimulus is undefined for', currentPhase, currentTrial, currentStimulusIndex, 'Sequence:', trialSequences);
        document.getElementById('section-title').textContent = 'Error: Stimulus not found!';
        document.getElementById('test-instructions').textContent = 'Error: Stimulus not found!';
        return;
    }
    
    document.getElementById('section-title').textContent = `${experimentConfig.phases[currentPhase].name}`;
    document.getElementById('test-instructions').textContent = `Please position your nose near the device and place the mouthpiece in your mouth. Click the button when ready to experience the flavor.`;
}

async function activateTest() {
    document.getElementById('activate-btn').disabled = true;
    const phase = currentPhase;
    const trial = currentTrial;
    const stimulusIndex = currentStimulusIndex;
    let sequence;
    if (phase === 'smell') {
        sequence = trialSequences[phase][trial];
    } else if (phase === 'taste') {
        sequence = trialSequences[phase][trial];
    } else if (phase === 'flavour') {
        const partName = currentPart === 0 ? 'orthonasal' : 'retronasal';
        sequence = trialSequences[phase][partName][trial];
    }
    console.log('Current Phase:', phase);
    if (phase === 'flavour') {
        console.log('Current Part:', currentPart);
        console.log('Current Trial:', trial + 1);
    } else {
        console.log('Current Trial:', currentTrial + 1);
    }
    console.log('Full Sequence for this trial:', sequence);
    const stimulus = getCurrentStimulus();
    const commands = getCurrentCommand();
    const instructions = document.getElementById('test-instructions');
    const originalText = instructions.textContent;
    instructions.textContent = 'System is running... Please wait.';
    instructions.classList.add('text-primary', 'font-medium');
    
    try {
        if (Array.isArray(commands)) {
            for (const cmd of commands) {
                if (cmd.delay > 0) {
                    await new Promise(resolve => setTimeout(resolve, cmd.delay));
                }
                console.log('Command sent:', cmd.command_string);
                const success = await sendCommand(cmd.command_string);
                if (!success) {
                    throw new Error('Failed to send command: ' + cmd.command_string);
                }
            }
        } else if (commands) {
            console.log('Command sent:', commands);
            const success = await sendCommand(commands);
            if (!success) {
                throw new Error('Failed to send command: ' + commands);
            }
        } else {
            throw new Error('No commands available for current stimulus');
        }
        
        await new Promise(resolve => setTimeout(resolve, 5000));
        instructions.textContent = originalText;
        instructions.classList.remove('text-primary', 'font-medium');
        document.getElementById('activate-btn').disabled = false;
        showSurvey(stimulus);
    } catch (error) {
        console.error('Error in activateTest:', error);
        instructions.textContent = originalText;
        instructions.classList.remove('text-primary', 'font-medium');
        document.getElementById('activate-btn').disabled = false;
        handleErrorAndRetry();
    }
}

function skipTrial() {
    if (currentPhase === 'flavour') {
        // For flavour phase, we have only 2 trials
        if (currentTrial < 1) {
            currentTrial++;
            currentStimulusIndex = 0;
            currentPart = 0;
        } else {
            // If we're at the last trial, skip to completed
            showScreen('completed-screen');
            return;
        }
    } else {
        // For other phases, check if we're within bounds
        if (currentTrial < trialSequences[currentPhase].length - 1) {
            currentTrial++;
            currentStimulusIndex = 0;
        } else {
            // If we're at the last trial, skip to completed
            showScreen('completed-screen');
            return;
        }
    }
    moveToNextStep();
}

function skipPhase() {
    showScreen('completed-screen');
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
    console.log('submitSurvey - before: currentTrial:', currentTrial, 'currentPart:', currentPart, 'currentStimulusIndex:', currentStimulusIndex);
    
    const responses = surveyAnswers || {};
    
    // Defensive: ensure trial array exists
    if (!experimentData.phases[currentPhase].trials[currentTrial]) {
        experimentData.phases[currentPhase].trials[currentTrial] = [];
    }
    const trialArr = experimentData.phases[currentPhase].trials[currentTrial];
    const currentTrialData = trialArr[trialArr.length - 1];
    currentTrialData.responses = responses;
    currentTrialData.responseTime = new Date().toISOString();
    
    // Reset survey answers for next stimulus
    surveyAnswers = {};
    
    saveToLocalStorage();
    
    // Handle flavour phase progression (orthonasal -> retronasal -> next stimulus)
    if (currentPhase === 'flavour') {
        if (currentPart === 0) {
            // Move to retronasal for same stimulus
            console.log('Moving from orthonasal to retronasal for same stimulus');
            currentPart = 1;
            // Keep same stimulus index for retronasal
        } else if (currentPart === 1) {
            // Move to next stimulus (orthonasal)
            console.log('Moving to next stimulus (orthonasal)');
            currentPart = 0;
            currentStimulusIndex++;
        }
    } else {
        // For other phases, just increment stimulus index
        currentStimulusIndex++;
    }
    
    console.log('submitSurvey - after: currentTrial:', currentTrial, 'currentPart:', currentPart, 'currentStimulusIndex:', currentStimulusIndex);
    
    // Check if we've completed all experiences before calling moveToNextStep
    if (currentPhase === 'flavour') {
        const totalExperiences = experimentData.phases[currentPhase].trials.reduce((total, trial) => total + trial.length, 0);
        console.log('Total experiences after submitSurvey:', totalExperiences);
        
        if (totalExperiences >= 8) {
            console.log('All 8 experiences completed, showing completed screen');
            showScreen('completed-screen');
            return;
        }
    }
    
    moveToNextStep();
}

function continueAfterBreak() {
    moveToNextStep();
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
                trialArr.forEach((trialObj, stimulusIndex) => {
                    if (trialObj && trialObj.responses && trialObj.stimulus && trialObj.stimulus.id !== undefined) {
                        // Determine if this is orthonasal or retronasal based on position in trial array
                        // Even indices (0, 2, 4...) are orthonasal, odd indices (1, 3, 5...) are retronasal
                        const part = stimulusIndex % 2 === 0 ? 'orthonasal' : 'retronasal';
                        
                        resultsData.responses.push({
                            id: trialObj.stimulus.id,
                            name: trialObj.stimulus.name,
                            trial: trialIndex + 1,
                            part: part,
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
    link.download = `experiment3_flavour_device_participant${currentParticipant}_${new Date().toISOString().split('T')[0]}.json`;
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

function saveToLocalStorage() {
    localStorage.setItem('flavourSyncAnswers', JSON.stringify(experimentData));
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
            background: #8b5cf6;
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
            background: #8b5cf6;
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
            background: #8b5cf6;
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
            background: #8b5cf6;
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

function getParticipantSequence() {
    if (!currentParticipant || !participantSequences[currentParticipant]) {
        console.error('Invalid participant number or sequence not found');
        return participantSequences[1];
    }
    return participantSequences[currentParticipant];
}

function getCurrentStimulus() {
    const phase = currentPhase;
    const trial = currentTrial;
    const stimulusIndex = currentStimulusIndex;
    
    if (phase === 'flavour') {
        const partName = currentPart === 0 ? 'orthonasal' : 'retronasal';
        
        // Check if trial is within valid range (0-1 for flavour phase)
        if (trial > 1) {
            console.error('Trial index out of bounds for flavour phase:', trial, 'should be 0 or 1');
            return null;
        }
        
        if (!trialSequences[phase] || !trialSequences[phase][partName] || !trialSequences[phase][partName][trial]) {
            console.error('Trial sequence missing for', phase, partName, trial, trialSequences);
            return null;
        }
        const stimulusId = trialSequences[phase][partName][trial][stimulusIndex];
        const found = experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
        if (!found) {
            console.error('Stimulus not found for id', stimulusId, 'in', phase, partName, trial, stimulusIndex, trialSequences[phase][partName][trial]);
        }
        return found;
    } else {
        if (!trialSequences[phase] || !trialSequences[phase][trial]) {
            console.error('Trial sequence missing for', phase, trial, trialSequences);
            return null;
        }
        const stimulusId = trialSequences[phase][trial][stimulusIndex];
        const found = experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
        if (!found) {
            console.error('Stimulus not found for id', stimulusId, 'in', phase, trial, stimulusIndex, trialSequences[phase][trial]);
        }
        return found;
    }
}

function getCurrentCommand() {
    const phase = currentPhase;
    const stimulus = getCurrentStimulus();
    if (phase === 'smell') {
        return experimentData.sections.section_1.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'taste') {
        return experimentData.sections.section_2.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'flavour') {
        const part = currentPart;
        if (part === 0) {
            return experimentData.sections.section_3_orthonasal.find(s => s.experiment_id === stimulus.id)?.commands;
        } else {
            let retroId = stimulus.id === 1 ? 3 : 4;
            return experimentData.sections.section_3_retronasal.find(s => s.experiment_id === retroId)?.commands;
        }
    }
    return null;
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 