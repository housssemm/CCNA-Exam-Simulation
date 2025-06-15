import { questionBank } from '../data/questions.js';

// Security variables
let examSession = {
    startTime: null,
    attempts: 0,
    lastActivity: null,
    tabSwitches: 0,
    fullscreen: false
};

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 75 * 60;
let timerInterval;
let userAnswers = [];
let examStarted = false;
let examEnded = false;

// Anti-cheating measures
function initializeSecurity() {
    // Prevent right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Prevent keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (
            e.key === 'c' || // Copy
            e.key === 'v' || // Paste
            e.key === 'p' || // Print
            e.key === 's' || // Save
            e.key === 'u'    // View source
        )) {
            e.preventDefault();
        }
    });

    // Monitor tab switching
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            examSession.tabSwitches++;
            if (examSession.tabSwitches > 2) {
                alert("Warning: Multiple tab switches detected. This may be considered cheating.");
            }
        }
    });

    // Monitor fullscreen
    document.addEventListener('fullscreenchange', () => {
        examSession.fullscreen = !!document.fullscreenElement;
    });

    // Prevent copy-paste
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());

    // Monitor inactivity
    setInterval(checkInactivity, 60000); // Check every minute
}

// Check for inactivity
function checkInactivity() {
    const now = new Date().getTime();
    if (examSession.lastActivity && (now - examSession.lastActivity > 300000)) { // 5 minutes
        alert("Warning: No activity detected for 5 minutes. The exam will end if no activity is detected.");
    }
}

// Update last activity
function updateActivity() {
    examSession.lastActivity = new Date().getTime();
}

// Generate random questions
function generateRandomQuestions() {
    // Shuffle the question bank
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    // Take first 60 questions
    questions = shuffled.slice(0, 60);
    // Initialize user answers array
    userAnswers = new Array(questions.length).fill(Array.isArray(questions[0].correct) ? [] : null);
}

// Add loading overlay to body
document.body.insertAdjacentHTML('afterbegin', `
    <div id="loading-overlay" class="loading-overlay" style="display: none;">
        <div class="loading-spinner"></div>
    </div>
    <div id="error-message" class="error-message"></div>
`);

// Show/hide loading state
function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Show error message
function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

// Check if browser is online
function checkOnlineStatus() {
    if (!navigator.onLine) {
        showError('You are currently offline. Some features may not work properly.');
    }
}

// Add offline/online event listeners
window.addEventListener('online', () => {
    showError('You are back online!');
});
window.addEventListener('offline', () => {
    showError('You are currently offline. Some features may not work properly.');
});

// Security features
function addSecurityFeatures() {
    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'p')) ||
            (e.key === 'F12') ||
            (e.key === 'PrintScreen')
        ) {
            e.preventDefault();
        }
    });

    // Monitor tab switching
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && examStarted) {
            alert('Please do not switch tabs during the exam!');
        }
    });
}

// Timer functions
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endExam();
        } else if (timeLeft <= 60) {
            document.getElementById('warning-message').style.display = 'block';
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Question display functions
function showQuestion(index) {
    try {
        if (!questions || questions.length === 0) {
            throw new Error('Questions not initialized');
        }

        const question = questions[index];
        if (!question) {
            throw new Error(`Question at index ${index} not found`);
        }

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        
        // Create question header
        const questionHeader = document.createElement('h3');
        questionHeader.textContent = `Question ${index + 1} of ${questions.length}`;
        questionElement.appendChild(questionHeader);
        
        // Create question text
        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionElement.appendChild(questionText);
        
        // Add image if exists
        if (question.image) {
            const img = document.createElement('img');
            img.src = question.image;
            img.alt = 'Question illustration';
            img.className = 'question-image';
            questionElement.appendChild(img);
        }
        
        // Create options container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options';
        
        // Handle both array and object formats for options
        const options = Array.isArray(question.options) ? question.options : Object.values(question.options);
        const optionKeys = Array.isArray(question.options) ? null : Object.keys(question.options);
        
        options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            let isSelected = false;
            const currentAnswerKey = optionKeys ? optionKeys[i] : i;

            if (Array.isArray(userAnswers[index])) {
                isSelected = userAnswers[index].includes(currentAnswerKey);
            } else {
                isSelected = userAnswers[index] === currentAnswerKey;
            }

            optionDiv.className = `option ${isSelected ? 'selected' : ''}`;
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectAnswer(index, currentAnswerKey);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionElement.appendChild(optionsContainer);
        
        // Add next/finish button
        const buttonContainer = document.createElement('div');
        buttonContainer.style.textAlign = 'right';
        buttonContainer.style.marginTop = '20px';
        
        const nextButton = document.createElement('button');
        nextButton.className = 'btn-netcad';
        nextButton.textContent = index === questions.length - 1 ? 'Finish Exam' : 'Next Question';
        nextButton.onclick = () => nextQuestion(index);
        buttonContainer.appendChild(nextButton);
        
        questionElement.appendChild(buttonContainer);

        // Update the container
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        container.appendChild(questionElement);
        
        // Update navigation
        updateNavigationButtons();
    } catch (error) {
        console.error('Error showing question:', error);
        const container = document.getElementById('questions-container');
        container.innerHTML = `<div class="error-message">Error loading question. Please try refreshing the page.</div>`;
    }
}

function updateNavigationButtons() {
    const navContainer = document.getElementById('question-nav');
    navContainer.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        const button = document.createElement('button');
        button.className = 'nav-btn';
        button.textContent = i + 1;
        
        if (i === currentQuestion) {
            button.classList.add('active');
        }
        // Check if answered
        if (Array.isArray(userAnswers[i])) {
            if (userAnswers[i].length > 0) {
                button.classList.add('answered');
            }
        } else if (userAnswers[i] !== null) {
            button.classList.add('answered');
        }
        
        button.onclick = () => showQuestion(i);
        navContainer.appendChild(button);
    }
}

function selectAnswer(questionIndex, answer) {
    const question = questions[questionIndex];
    const isMultipleAnswer = typeof question.correct === 'string' && question.correct.includes(',');
    
    if (isMultipleAnswer) {
        // Initialize array if not already done
        if (!Array.isArray(userAnswers[questionIndex])) {
            userAnswers[questionIndex] = [];
        }
        
        // Toggle the selected answer
        const answerIndex = userAnswers[questionIndex].indexOf(answer);
        if (answerIndex === -1) {
            userAnswers[questionIndex].push(answer);
        } else {
            userAnswers[questionIndex].splice(answerIndex, 1);
        }
    } else {
        // Single answer question
        userAnswers[questionIndex] = answer;
    }
    
    // Update the UI
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (isMultipleAnswer) {
            const optionIndex = Array.from(options).indexOf(option);
            const optionKey = Object.keys(question.options)[optionIndex];
            option.classList.toggle('selected', userAnswers[questionIndex].includes(optionKey));
        } else {
            option.classList.toggle('selected', option.textContent === question.options[answer]);
        }
    });
    
    updateNavigationButtons();
}

function checkAnswer(questionIndex) {
    const question = questions[questionIndex];
    const userAnswer = userAnswers[questionIndex];
    
    if (typeof question.correct === 'string' && question.correct.includes(',')) {
        // Multiple answer question
        const correctAnswers = question.correct.split(',');
        return correctAnswers.every(ans => userAnswer.includes(ans)) && 
               userAnswer.length === correctAnswers.length;
    } else {
        // Single answer question
        return userAnswer === question.correct;
    }
}

function nextQuestion(currentIndex) {
    if (currentIndex < questions.length - 1) {
        showQuestion(currentIndex + 1);
    } else {
        endExam();
    }
}

// Exam control functions
function startExam() {
    try {
        // Initialize exam with random questions
        initializeExam();
        
        // Hide start screen and show exam screen
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('exam-screen').style.display = 'block';
        
        // Initialize exam state
        currentQuestion = 0;
        examStarted = true;
        
        // Start timer
        startTimer();
        
        // Show first question
        showQuestion(0);
        
        // Initialize navigation buttons
        updateNavigationButtons();
        
        // Add security features
        addSecurityFeatures();
    } catch (error) {
        console.error('Error starting exam:', error);
        alert('There was an error starting the exam. Please try refreshing the page.');
    }
}

function endExam() {
    clearInterval(timerInterval);
    examEnded = true;
    
    const unanswered = userAnswers.filter(answer => (Array.isArray(answer) ? answer.length === 0 : answer === null)).length;
    if (unanswered > 0 && timeLeft > 0) {
        document.getElementById('unanswered-warning').style.display = 'block';
        return;
    }
    
    showResults();
}

function showResults() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === null || 
            (Array.isArray(userAnswers[index]) && userAnswers[index].length === 0)) {
            unansweredCount++;
        } else if (checkAnswer(index)) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });
    
    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    document.getElementById('final-score').textContent = correctCount;
    document.getElementById('percentage-score').textContent = percentage;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('incorrect-answers').textContent = incorrectCount;
    document.getElementById('unanswered').textContent = unansweredCount;
    
    // Set performance message
    const performanceMessage = document.getElementById('performance-message');
    if (percentage >= 80) {
        performanceMessage.textContent = 'Excellent! You have a strong understanding of the material.';
        performanceMessage.style.backgroundColor = 'var(--success-color)';
    } else if (percentage >= 60) {
        performanceMessage.textContent = 'Good job! You have a solid understanding of the material.';
        performanceMessage.style.backgroundColor = 'var(--warning-color)';
    } else {
        performanceMessage.textContent = 'Keep studying! You need more practice with these concepts.';
        performanceMessage.style.backgroundColor = 'var(--danger-color)';
    }
    
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
}

function checkAllQuestionsAnswered() {
    const unanswered = userAnswers.filter(answer => (Array.isArray(answer) ? answer.length === 0 : answer === null)).length;
    if (unanswered === 0) {
        document.getElementById('unanswered-warning').style.display = 'none';
    }
}

// Modified initExam function
function initExam() {
    try {
        showLoading();
        checkOnlineStatus();
        
        // Add event listener to start button
        document.getElementById('start-exam-btn').addEventListener('click', startExam);
        
        // Add event listeners for security
        document.addEventListener('mousemove', updateActivity);
        document.addEventListener('keypress', updateActivity);
        document.addEventListener('click', updateActivity);
        
        // Prevent leaving the page during exam
        window.addEventListener('beforeunload', (e) => {
            if (examStarted && !examEnded) {
                e.preventDefault();
                e.returnValue = '';
                return '';
            }
        });
        
        hideLoading();
    } catch (error) {
        console.error('Error initializing exam:', error);
        showError('There was an error initializing the exam. Please refresh the page.');
        hideLoading();
    }
}

// Review functions
function showReview() {
    const reviewQuestionsContainer = document.getElementById('review-questions');
    reviewQuestionsContainer.innerHTML = ''; // Clear previous review

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;

        if (Array.isArray(question.correct)) {
            // Multiple choice question
            if (Array.isArray(userAnswer) && userAnswer.length === question.correct.length &&
                question.correct.every(val => userAnswer.includes(val))) {
                isCorrect = true;
            }
        } else {
            // Single choice question
            isCorrect = (userAnswer === question.correct);
        }

        const questionDiv = document.createElement('div');
        questionDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
        
        // Question header
        const questionHeader = document.createElement('h4');
        questionHeader.textContent = `Question ${index + 1}: ${question.question}`;
        questionDiv.appendChild(questionHeader);

        // Add image if exists
        if (question.image) {
            const img = document.createElement('img');
            img.src = question.image;
            img.alt = 'Question illustration';
            img.className = 'question-image';
            questionDiv.appendChild(img);
        }

        // Options container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'review-options';

        // Handle both array and object formats for options
        const options = Array.isArray(question.options) ? question.options : Object.values(question.options);
        const optionKeys = Array.isArray(question.options) ? null : Object.keys(question.options);

        options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            const currentOptionKey = optionKeys ? optionKeys[i] : i;
            
            // Determine option classes
            let optionClass = 'review-option';
            const isCorrectOption = Array.isArray(question.correct) 
                ? question.correct.includes(currentOptionKey)
                : question.correct === currentOptionKey;
            const isUserSelected = Array.isArray(userAnswer)
                ? userAnswer.includes(currentOptionKey)
                : userAnswer === currentOptionKey;

            if (isCorrectOption) {
                optionClass += ' correct-answer';
            }
            if (isUserSelected && !isCorrectOption) {
                optionClass += ' incorrect-answer';
            } else if (isUserSelected && isCorrectOption) {
                optionClass += ' selected-correct';
            }

            optionDiv.className = optionClass;
            
            // Add option text and indicators
            const optionText = document.createElement('span');
            optionText.textContent = option;
            optionDiv.appendChild(optionText);

            if (isCorrectOption) {
                const checkmark = document.createElement('span');
                checkmark.className = 'checkmark';
                checkmark.textContent = ' ✓';
                optionDiv.appendChild(checkmark);
            }
            if (isUserSelected && !isCorrectOption) {
                const crossmark = document.createElement('span');
                crossmark.className = 'crossmark';
                crossmark.textContent = ' ✗';
                optionDiv.appendChild(crossmark);
            }

            optionsContainer.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsContainer);

        // Add explanation
        if (question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            questionDiv.appendChild(explanationDiv);
        }

        // Add status indicator
        const statusDiv = document.createElement('div');
        statusDiv.className = `question-status ${isCorrect ? 'correct' : 'incorrect'}`;
        statusDiv.textContent = isCorrect ? 'Correct' : 'Incorrect';
        questionDiv.appendChild(statusDiv);

        reviewQuestionsContainer.appendChild(questionDiv);
    });

    // Show review container and hide results
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('review-container').style.display = 'block';
}

// Event listeners
document.getElementById('restart-btn').addEventListener('click', () => {
    if (confirm("Are you sure you want to restart? This will reset your progress.")) {
        location.reload();
    }
});

document.getElementById('review-mistakes-btn').addEventListener('click', showReview);

document.getElementById('back-to-results').addEventListener('click', () => {
    document.getElementById('review-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
});

// Make functions available globally
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;

// Start the exam when the page loads
window.onload = initExam;

// Initialize exam with random questions
function initializeExam() {
    try {
        // Shuffle and select 60 questions
        questions = [...questionBank]
            .sort(() => Math.random() - 0.5)
            .slice(0, 60);
        
        // Initialize user answers array based on question type (single/multiple choice)
        userAnswers = questions.map(q => Array.isArray(q.correct) ? [] : null);
        
        // Validate questions format
        questions.forEach((q, index) => {
            if (!q.question || !q.options || q.correct === undefined) {
                throw new Error(`Invalid question format at index ${index}. Missing 'question', 'options', or 'correct' property.`);
            }
        });
    } catch (error) {
        console.error('Error initializing exam:', error);
        throw error;
    }
} 