//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
  console.log(req.body.cityName);
  const querry = req.body.cityName;
  const key = "89e15301013198f3d03fdf007fab2980";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querry + "&appid=" + key + "&units=" + units + "";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on('data', function(data) {
      const dataWeather = JSON.parse(data);
      const weather = (dataWeather.weather[0].main);
      const temp = (dataWeather.main.temp);
      const cityName = dataWeather.name;
      const weatherIcon = dataWeather.weather[0].icon;
      res.write("<h1>Right now weather is " + weather + ".</h1>");
      res.write("The temperarture is currentlly : " + temp + "degree celcius<br>");
      res.write("City Name  : " + cityName + '<img style="background-color:  Periwinkle" src="http://openweathermap.org/img/wn/'+weatherIcon+'@2x.png" alt="">');

      res.send();

    });
  });
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
