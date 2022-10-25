//common utilities

function getTextElementValue(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValue = parseInt(textElement.innerText);
    return textElementValue;
}

function getInputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseInt(inputField.value);
    return inputFieldValue;
}

function setTextElementValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}