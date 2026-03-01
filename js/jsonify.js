/**
 * jsonify.js - JSON Generator for Questions and Answers
 * Handles form input, validation, and JSON output display
 */

/**
 * Attempts to parse answers input and fix invalid JSON
 * Handles comma-separated values and converts them to proper JSON array format
 * @param {string} input - Raw answer input
 * @returns {Array} Parsed answers array
 */
function parseAndFixAnswers(input) {
    input = input.trim();
    
    // Try parsing as JSON first
    try {
        const parsed = JSON.parse(input);
        if (Array.isArray(parsed)) {
            return parsed;
        }
    } catch (e) {
        // Not valid JSON, try manual parsing
    }
    
    // Split by lines to handle each answer group
    const lines = input
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    if (lines.length === 0) {
        throw new Error('No answers provided');
    }
    
    // Convert each line into an array of answers
    const answers = lines.map(line => {
        // Remove surrounding brackets if present
        let cleaned = line.replace(/^\[|\]$/g, '').trim();
        
        // Split by comma and clean each answer
        return cleaned
            .split(',')
            .map(answer => answer.trim().replace(/^"|"$/g, '')) // Remove quotes if present
            .filter(answer => answer.length > 0);
    });
    
    return answers;
}

/**
 * Generates JSON from user input and displays it
 */
function generateJSON() {
    // Get input values
    const questionsInput = document.getElementById('questionsInput').value.trim();
    const answersInput = document.getElementById('answersInput').value.trim();
    
    // Get output elements
    const outputSection = document.getElementById('jsonifyOutputSection');
    const errorSection = document.getElementById('jsonifyErrorSection');
    const jsonOutput = document.getElementById('jsonOutput');
    const errorMessage = document.getElementById('errorMessage');
    
    // Reset sections
    outputSection.style.display = 'none';
    errorSection.style.display = 'none';
    
    try {
        // Validate inputs exist
        if (!questionsInput) {
            throw new Error('Please enter at least one question');
        }
        if (!answersInput) {
            throw new Error('Please enter answers (one line of answers per question)');
        }
        
        // Parse questions (split by newline and filter empty lines)
        const questions = questionsInput
            .split('\n')
            .map(q => q.trim())
            .filter(q => q.length > 0);
        
        // Parse answers with auto-fix logic
        let answers;
        try {
            answers = parseAndFixAnswers(answersInput);
        } catch (e) {
            throw new Error('Failed to parse answers: ' + e.message);
        }
        
        // Validate that we have answers
        if (answers.length === 0) {
            throw new Error('No valid answer groups parsed');
        }
        
        // Validate all answer items are arrays
        if (!answers.every(item => Array.isArray(item) && item.length > 0)) {
            throw new Error('Each answer group must contain at least one answer');
        }
        
        // Validate lengths match
        if (questions.length !== answers.length) {
            throw new Error(
                `Array length mismatch: ${questions.length} questions but ${answers.length} answer groups. They must match!`
            );
        }
        
        // Create JSON object
        const jsonData = {
            questions: questions,
            answers: answers
        };
        
        // Display JSON with separated sections
        const questionsJson = JSON.stringify({ questions: questions }, null, 2);
        const answersJson = JSON.stringify({ answers: answers }, null, 2);
        const combinedJson = JSON.stringify(jsonData, null, 2);
        
        jsonOutput.textContent = combinedJson;
        outputSection.style.display = 'block';
        
        // Show success toast
        showPrimaryToast('✓ JSON generated successfully!');
        
    } catch (error) {
        // Display error
        errorMessage.textContent = `✗ ${error.message}`;
        errorSection.style.display = 'block';
        
        // Show error toast
        showErrorToast(error.message);
    }
}

/**
 * Copies the generated JSON to clipboard
 */
function copyToClipboard() {
    const jsonOutput = document.getElementById('jsonOutput');
    const jsonText = jsonOutput.textContent;
    
    // Use modern clipboard API
    if (navigator.clipboard) {
        navigator.clipboard.writeText(jsonText)
            .then(() => {
                showPrimaryToast('✓ Copied to clipboard!');
            })
            .catch(() => {
                // Fallback to older method
                fallbackCopyToClipboard(jsonText);
            });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(jsonText);
    }
}

/**
 * Fallback copy method for older browsers
 * @param {string} text - Text to copy
 */
function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showPrimaryToast('✓ Copied to clipboard!');
    } catch (err) {
        showErrorToast('Failed to copy to clipboard');
    }
    
    document.body.removeChild(textarea);
}

/**
 * Handle Enter key in textareas to generate JSON (Ctrl+Enter)
 */
document.addEventListener('DOMContentLoaded', () => {
    const questionsInput = document.getElementById('questionsInput');
    const answersInput = document.getElementById('answersInput');
    
    if (questionsInput) {
        questionsInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateJSON();
            }
        });
    }
    
    if (answersInput) {
        answersInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateJSON();
            }
        });
    }
});


/**
 * Copies the generated JSON to clipboard
 */
function copyToClipboard() {
    const jsonOutput = document.getElementById('jsonOutput');
    const jsonText = jsonOutput.textContent;
    
    // Use modern clipboard API
    if (navigator.clipboard) {
        navigator.clipboard.writeText(jsonText)
            .then(() => {
                showPrimaryToast('✓ Copied to clipboard!');
            })
            .catch(() => {
                // Fallback to older method
                fallbackCopyToClipboard(jsonText);
            });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(jsonText);
    }
}

/**
 * Fallback copy method for older browsers
 * @param {string} text - Text to copy
 */
function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showPrimaryToast('✓ Copied to clipboard!');
    } catch (err) {
        showErrorToast('Failed to copy to clipboard');
    }
    
    document.body.removeChild(textarea);
}

/**
 * Handle Enter key in textareas to generate JSON (Ctrl+Enter)
 */
document.addEventListener('DOMContentLoaded', () => {
    const questionsInput = document.getElementById('questionsInput');
    const answersInput = document.getElementById('answersInput');
    
    if (questionsInput) {
        questionsInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateJSON();
            }
        });
    }
    
    if (answersInput) {
        answersInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateJSON();
            }
        });
    }
});
