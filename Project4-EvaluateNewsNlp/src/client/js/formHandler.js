function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const text = document.querySelector("#textStatement").value;

    if(!text) {
        return;
    }
    
    console.log(text);

    // Change URL below, check the Udacity Sass Video
    // fetch('/textEndpoint', {
    //     method: "POST",
    //     mode: "cors",
    //     credentials: "same-origin",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({text})
    // })
    // .then(res => res.json())
    // .then(function(data) {
    //     document.querySelector('#textPolarity').innerHTML =  data.polarity;
    //     document.querySelector('#textSubjectivity').innerHTML =  data.subjectivity;
    //     document.querySelector('#textPolarityConfidence').innerHTML =  data.polarity_confidence;
    //     document.querySelector('#textSubjectivityConfidence').innerHTML =  data.subjectivity_confidence;
                
    // })

    fetch('http://localhost:3030/textEndpoint', {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text})
    })
    .then(res => res.json())
    .then(function(data) {
        document.querySelector('#textPolarity').innerHTML =  data.polarity;
        document.querySelector('#textSubjectivity').innerHTML =  data.subjectivity;
        document.querySelector('#textPolarityConfidence').innerHTML =  data.polarity_confidence;
        document.querySelector('#textSubjectivityConfidence').innerHTML =  data.subjectivity_confidence;
                
    })
}

export { handleSubmit }
