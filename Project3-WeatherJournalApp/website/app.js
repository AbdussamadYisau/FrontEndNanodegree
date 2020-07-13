/* Global Variables */


// Base URL and API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=4c3d4cbc0699bd6b992b7ade198d09e2';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Event Listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', performAction);


// Function called by event listener

function performAction(event) {
    event.preventDefault();

    // Get user input values

    const newZip = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;
    
    getData(baseURL, newZip, apiKey)
        .then(function(userData){
            //add data to POST request
            postData('/addData', {date: newDate, temp: userData.main.temp, content })
        }).then(function (newData){

            updateUI()
        })


}


/* Function to GET Web API Data*/
const getData = async (baseURL, newZip, apiKey) => {
    const res = await fetch(`${baseURL}${newZip},${apiKey}`);
    // const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4c3d4cbc0699bd6b992b7ade198d09e2');
    console.log(res);
    try{
        const userData = await res.json();
        console.log(userData);
        return userData;
    } catch(error) {
        console.log(error);
    }
}
/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        content: data.content
      })
    })
  
    try {
      const newData = await req.json();
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };

  // Function to update UI

  const updateUI = async () => {
    const request = await fetch('/all');
    try {
      const allData = await request.json()
    
      // update new entry values
      document.querySelector('#date').innerHTML = allData[0].date;
      document.querySelector('#temp').innerHTML = allData[0].temp;
      document.querySelector('#content').innerHTML = allData[0].content;
    }
    catch (error) {
      console.log(error);
    }
  };