const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');
const languageSelect = document.getElementById('languageSelect');
const outputText = document.getElementById('outputText');

translateButton.addEventListener('click', () => {
    const input = inputText.value;
    const language = languageSelect.value;

    const key = "294d8833e2684e3dacc9c0b9c68285f7";
    const location = "francecentral";
    const endpoint = "https://api.cognitive.microsofttranslator.com";

    const path = '/translate';
    const constructed_url = endpoint + path;

    const params = {
        'api-version': '3.0',
        'from': 'fr',
        'to': [language]
    };

    const headers = {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
    };

    const body = [{
        'text': input
    }];

    fetch(constructed_url + '?' + new URLSearchParams(params), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            if (data[0] && data[0].translations && data[0].translations[0] && data[0].translations[0].text) {
                outputText.textContent = data[0].translations[0].text;
            } else {
                outputText.textContent = 'Erreur de traduction';
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
            outputText.textContent = 'Erreur de traduction';
        });
});
