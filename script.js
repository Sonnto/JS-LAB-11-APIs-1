window.onload = function () {
  let out_location = document.getElementById("location");
  let out_temp = document.getElementById("temperature");
  let out_conditions = document.getElementById("conditions");

  let city = "hongkong"; //enter city for weather
  const myAPIkey = "a872cb7b5249e6a6d62803363e229c48"; //weather api

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIkey}&units=metric`;

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = xhr.response;
        out_location.innerHTML = `Weather in: ${data.name}`;
        out_temp.innerHTML = `Temperature: ${data.main.temp} &#8451;`;
        out_conditions.innerHTML = `Conditions: ${data.weather[0].description}`;
      } else {
        out_location.innerHTML = "API call was unsuccessful";
        console.log(xhr.status);
      }
    }
  };
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send(null);
};
