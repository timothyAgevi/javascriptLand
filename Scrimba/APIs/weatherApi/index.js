//fetch weter in nairobi and disolay in metric units
fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Nairobi&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))