const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');
const languageSelect = document.getElementById('languageSelect');
const outputText = document.getElementById('outputText');

translateButton.addEventListener('click', () => {
    const input = inputText.value;
    const language = languageSelect.value;

    // Ici, vous pouvez utiliser une API de traduction ou ajouter votre propre logique de traduction en JavaScript

    // Exemple simple de traduction avec un objet de traduction
    const translations = {
        en: 'Hello',
        fr: 'Bonjour',
        es: 'Hola'
    };

    if (translations.hasOwnProperty(language)) {
        outputText.textContent = translations[language] + ': ' + input;
    } else {
        outputText.textContent = 'Langue non prise en charge';
    }
});
