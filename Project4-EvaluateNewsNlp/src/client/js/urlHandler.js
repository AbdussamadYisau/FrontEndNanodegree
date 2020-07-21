function handleSubmitArticle(event) {
    event.preventDefault();

    //Get input from form
    const url = document.querySelectorAll("input[name=testUrl]").value;
    
    //Verify that input is a valid url

    if (Client.validURL(JSON.parse(JSON.stringify(url[0].value)))) {

        console.log("Valid URL input");
        fetch("http://localhost:3030/urlEndpoint", {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: url[0].value })
        })
            .then(res => res.json())
            .then(data => {
            document.querySelector("#urlPolarity").innerHTML = data.polarity;
            document.querySelector("#urlSubjectivity").innerHTML = data.subjectivity;
            document.querySelector("#urlPolarityConfidence").innerHTML = data.polarity_confidence;
            document.querySelector("#urlSubjectivityConfidence").innerHTML = data.subjectivity_confidence;
            document.querySelector("#excerpt").innerHTML = data.text;
            });
    } 

}
export { handleSubmitArticle };