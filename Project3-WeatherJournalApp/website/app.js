/* Global Variables */
const form = document.querySelector('.appForm');

// Base URL and API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=4c3d4cbc0699bd6b992b7ade198d09e2&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'-'+ d.getMonth()+'-'+ d.getFullYear();

//Event Listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', performAction);


// Function called by event listener

function performAction(event) {
    event.preventDefault();

    // Get user input values

    const newCity = document.querySelector('#city').value;
    const content = document.querySelector('#feelings').value;
    
    getData(baseURL, newCity, apiKey)
        .then(function(userData){
            //add data to POST request
            postData('/addData', {date: newDate, temp: userData.main.temp, content })
        }).then(function (newData){

            updateUI()
        })

        form.reset();
}


/* Function to GET Web API Data*/
const getData = async (baseURL, newCity, apiKey) => {
    const res = await fetch(`${baseURL}${newCity},${apiKey}`);
    try{
        const userData = await res.json();
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
      document.querySelector('#date').innerHTML = allData.date;
      document.querySelector('#temp').innerHTML = `${allData.temp} degrees celsius`;
      document.querySelector('#content').innerHTML = allData.content;
    }
    catch (error) {
      console.log(error);
    }
  };