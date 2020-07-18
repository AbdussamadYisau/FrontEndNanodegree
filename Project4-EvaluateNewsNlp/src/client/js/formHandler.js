import { handleURL } from './validateURL';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.querySelector('#url').value
    
    if(!handleURL(formText)) {
        console.log('URL no dey valid');
        return 0;
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
    })
    .then(res => res.json())
    .then(function(res) {
        document.querySelector('#nlp-text').innerHTML = res.text;
        document.querySelector('#polarity').innerHTML = res.polarity;
        document.querySelector('#polarity_confidence').innerHTML = res.polarity_confidence;
        document.querySelector('#subjectivity').innerHTML = res.subjectivity;
        document.querySelector('#subjectivity_confidence').innerHTML = res.subjectivity_confidence;
    });
}

export { handleSubmit };
