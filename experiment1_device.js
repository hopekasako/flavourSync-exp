// Experiment 1: Smell Device Test Configuration
const experimentConfig = {
    experimentType: "smell_device",
    experimentName: "Experiment 1 - Smell Device Test",
    phases: {
        smell: {
            name: "Smell Phase",
            stimuli: [
                { id: 1, name: "Starfruit", command: "SMELL_1" },
                { id: 2, name: "Lemon", command: "SMELL_2" },
                { id: 3, name: "Vanilla", command: "SMELL_3" },
                { id: 4, name: "Coffee", command: "SMELL_4" },
                { id: 5, name: "Water", command: "SMELL_5" }
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

// Participant sequences (same as old version)
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

// Main experiment data with command structure (same as old version)
let experimentData = {
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
                { command_string: "6 1 6000", delay: 0 },
                { command_string: "6 1 3000 200", delay: 3000 }
            ]},
            { experiment_id: 2, commands: [
                { command_string: "5 1 6000", delay: 0 },
                { command_string: "5 1 3000 200", delay: 3000 }
            ]}
        ],
        section_3_retronasal: [ // Flavor Phase - Retronasal
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
let currentPhase = 'smell';
let currentTrial = 0;
let currentStimulusIndex = 0;
let currentFlavorPart = 'orthonasal';
let currentFlavorTrial = 1;
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
        await port.open({ baudRate: 115200 });
        
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
        startButton.className = 'px-6 py-3 bg-primary text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors';
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
        deviceStatus.className = 'text-blue-600';
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
    
    // Check if test was interrupted by disconnection
    if (!testInterruptedByDisconnection) {
        console.log('Test was not interrupted by disconnection, not rerunning command');
        return;
    }
    
    console.log('Rerunning command for current stage after disconnection');
    
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
        
        // Reset the interrupted flag
        testInterruptedByDisconnection = false;
        
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
    experimentData = {
        participant: currentParticipant,
        experimentType: experimentConfig.experimentType,
        experimentName: experimentConfig.experimentName,
        startTime: new Date().toISOString(),
        deviceData: [],
        phases: {},
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
                    { command_string: "6 1 6000", delay: 0 },
                    { command_string: "6 1 3000 200", delay: 3000 }
                ]},
                { experiment_id: 2, commands: [
                    { command_string: "5 1 6000", delay: 0 },
                    { command_string: "5 1 3000 200", delay: 3000 }
                ]}
            ],
            section_3_retronasal: [ // Flavor Phase - Retronasal
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
    
    // Initialize trial sequences
    initializeTrialSequences();
    
    // Update UI
    document.getElementById('participant-status').textContent = `Participant: ${currentParticipant}`;
    
    showScreen('welcome-screen');
}

function initializeTrialSequences() {
    const seq = getParticipantSequence();
    trialSequences = seq;
    // Reset flavor part/trial/stimulus
    currentFlavorPart = 'orthonasal';
    currentFlavorTrial = 1;
    currentStimulusIndex = 0;
}

function startExperiment() {
    if (!deviceConnected) {
        alert('Please connect your device before starting the experiment.');
        return;
    }
    
    currentTrial = 0;
    currentStimulusIndex = 0;
    currentPhase = 'smell';
    
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
    
    // Before showing the survey for a new trial:
    if (!experimentData.phases[currentPhase].trials[currentTrial]) {
        experimentData.phases[currentPhase].trials[currentTrial] = [];
    }
    experimentData.phases[currentPhase].trials[currentTrial].push({
        stimulus: getCurrentStimulus(),
        startTime: new Date().toISOString(),
        responses: {}
    });
}

function updateTestInstructions() {
    const currentStimulusId = trialSequences[currentPhase][currentTrial][currentStimulusIndex];
    const stimulus = experimentConfig.phases[currentPhase].stimuli.find(s => s.id === currentStimulusId);
    
    document.getElementById('section-title').textContent = `${experimentConfig.phases[currentPhase].name}`;
    document.getElementById('test-instructions').textContent = `Please position your nose near the device. Click the button when ready to experience the smell.`;
}

// Add global variable to track if a test was interrupted by disconnection
let testInterruptedByDisconnection = false;

async function activateTest() {
    document.getElementById('activate-btn').disabled = true;
    testInterruptedByDisconnection = false; // Reset flag
    
    // Log current phase, trial, stimulus, and sequence
    const phase = currentPhase;
    const trial = currentTrial;
    const stimulusIndex = currentStimulusIndex;
    let sequence;
    if (phase === 'smell') {
        sequence = trialSequences[phase][trial];
    } else if (phase === 'taste') {
        sequence = trialSequences[phase][trial];
    } else if (phase === 'flavor') {
        const part = currentFlavorPart;
        const flavorTrial = currentFlavorTrial - 1;
        sequence = trialSequences[phase][part][flavorTrial];
    }
    console.log('Current Phase:', phase);
    if (phase === 'flavor') {
        console.log('Current Part:', currentFlavorPart);
        console.log('Current Trial:', currentFlavorTrial);
    } else {
        console.log('Current Trial:', currentTrial + 1);
    }
    console.log('Full Sequence for this trial:', sequence);
    
    const stimulus = getCurrentStimulus();
    const commands = getCurrentCommand();
    
    // Show system running message
    const instructions = document.getElementById('test-instructions');
    const originalText = instructions.textContent;
    instructions.textContent = 'System is running... Please wait.';
    instructions.classList.add('text-primary', 'font-medium');
    
    try {
        if (Array.isArray(commands)) {
            // Handle flavor phase commands
            for (const cmd of commands) {
                // Check for disconnection before each command
                if (!deviceConnected) {
                    testInterruptedByDisconnection = true;
                    throw new Error('Device disconnected during command execution');
                }
                
                if (cmd.delay > 0) {
                    await new Promise(resolve => setTimeout(resolve, cmd.delay));
                }
                console.log('Command sent:', cmd.command_string);
                const success = await sendCommand(cmd.command_string);
                if (!success) {
                    testInterruptedByDisconnection = true;
                    throw new Error('Failed to send command: ' + cmd.command_string);
                }
            }
        } else if (commands) {
            // Check for disconnection before command
            if (!deviceConnected) {
                testInterruptedByDisconnection = true;
                throw new Error('Device disconnected during command execution');
            }
            
            // Handle smell and taste phase commands
            console.log('Command sent:', commands);
            const success = await sendCommand(commands);
            if (!success) {
                testInterruptedByDisconnection = true;
                throw new Error('Failed to send command: ' + commands);
            }
        } else {
            throw new Error('No commands available for current stimulus');
        }
        
        // Check for disconnection before waiting
        if (!deviceConnected) {
            testInterruptedByDisconnection = true;
            throw new Error('Device disconnected during command execution');
        }
        
        // Wait for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Final check for disconnection before proceeding
        if (!deviceConnected) {
            testInterruptedByDisconnection = true;
            throw new Error('Device disconnected during command execution');
        }
        
        // Restore original text
        instructions.textContent = originalText;
        instructions.classList.remove('text-primary', 'font-medium');
        
        document.getElementById('activate-btn').disabled = false;
        
        // Show survey
        showSurvey(stimulus);
    } catch (error) {
        console.error('Error in activateTest:', error);
        instructions.textContent = originalText;
        instructions.classList.remove('text-primary', 'font-medium');
        document.getElementById('activate-btn').disabled = false;
        
        if (testInterruptedByDisconnection) {
            console.log('Test was interrupted by disconnection, waiting for reconnection');
            // Don't show error popup, just wait for reconnection
        } else {
            handleErrorAndRetry();
        }
    }
}

function skipTrial() {
    currentTrial++;
    currentStimulusIndex = 0;
    moveToNextStep();
}

function skipPhase() {
    showScreen('completed-screen');
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
    const trialArr = experimentData.phases[currentPhase].trials[currentTrial];
    const currentTrialData = trialArr[trialArr.length - 1];
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
    link.download = `experiment1_smell_device_participant${currentParticipant}_${new Date().toISOString().split('T')[0]}.json`;
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
            background: #3b82f6;
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
            background: #3b82f6;
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
            background: #3b82f6;
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
            background: #3b82f6;
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

// Get participant sequence
function getParticipantSequence() {
    if (!currentParticipant || !participantSequences[currentParticipant]) {
        console.error('Invalid participant number or sequence not found');
        return participantSequences[1]; // Default to sequence 1 if not found
    }
    return participantSequences[currentParticipant];
}

// Get current stimulus based on trial sequence
function getCurrentStimulus() {
    const phase = currentPhase;
    if (phase === 'flavor') {
        const part = currentFlavorPart;
        const trial = currentFlavorTrial - 1;
        const stimulusIndex = currentStimulusIndex;
        const stimulusId = trialSequences[phase][part][trial][stimulusIndex];
        return experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
    } else {
        const trial = currentTrial;
        const stimulusIndex = currentStimulusIndex;
        const stimulusId = trialSequences[phase][trial][stimulusIndex];
        return experimentConfig.phases[phase].stimuli.find(s => s.id === stimulusId);
    }
}

// Get command for current stimulus (same as old version)
function getCurrentCommand() {
    const phase = currentPhase;
    const stimulus = getCurrentStimulus();
    if (phase === 'smell') {
        return experimentData.sections.section_1.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'taste') {
        return experimentData.sections.section_2.find(s => s.experiment_id === stimulus.id)?.command_string;
    } else if (phase === 'flavor') {
        const part = currentFlavorPart;
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