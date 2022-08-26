// "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=31dcf092cb962ccfece0881c3b718721&units=metric";
// https://countriesnow.space/api/v0.1/countries
function getVal() {
  let val = document.querySelector('input').value;
  let apiKey = "31dcf092cb962ccfece0881c3b718721"
  let btn = document.getElementById("btn");
  btn.addEventListener("click", getData);
  function getData() {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}&units=metric`
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      let x = data.main;
      let a = data.main.temp;
      let b = data.main.feels_like;
      let c = data.main.temp_min;
      let d = data.main.temp_max;
      let e = data.main.humidity;
      let country=data.sys.country
      console.log(country)
      let city = document.getElementById("city").value;
      document.getElementById("card-title").innerHTML = city;
      document.getElementById("currenttemp").innerHTML = "current temperature" + ": " + a;
      document.getElementById("feeltemp").innerHTML = "feels like" + ": " + b;
      document.getElementById("maxmin").innerHTML = "min temp" + ":" + c + " " + "max temp" + ":" + d;
      document.getElementById("humidity").innerHTML = "Humidity" + ": " + e;
      document.getElementById("card-title").innerHTML= city+" "+","+country
    })
  }

  
}



