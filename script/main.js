// get seclection id
const input_box = document.querySelector("#input_box"),
display_section = document.querySelector("#display_section");

// get veriabal
let stuteData;

// fatch Data Api
const fetchData = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=196cf9ac955e46d92034a333bf4634c6`);
  stuteData = await response.json();
};

const showWeatherstutes = (stutes) => {
  let div = `

  <img draggable="false" class="w-[170px]" src="./image/${stutes.weather[0].main.toLowerCase()}.png" alt="image" />
  <h3 class="text-[5rem] leading-[50px] font-normal">${parseInt(stutes.main.temp)}°C </h3>
  <p class="text-[2rem] capitalize">${stutes.weather[0].description}</p>

  <div class="w-full flex justify-between mt-[50px]">
    <div class="flex items-center gap-3">
      <i class="bx bx-water text-[5rem]"></i>
      <span class="text-[1.5rem]">
        <h2>${stutes.main.humidity}%</h2>
        <p class="uppercase">humidity</p>
      </span>
    </div>

    <div class="flex items-center gap-3">
      <span class="text-[1.5rem]">
        <h2>${parseInt(stutes.wind.speed)}km/h</h2>
        <p class="uppercase">speed</p>
      </span>
      <i class="bx bx-cloud text-[5rem]"></i>
    </div>
  </div>

  `;
  display_section.innerHTML = div;
};



// click to enter button action
input_box.addEventListener("keydown", async (e) => {
  // get input value
  let location = e.target.value;

  if (e.key === "Enter") {
    display_section.innerHTML = `<img height="50px" width="50px" src="./image/Pulse-0.7s-231px.svg" alt="loading" >`;
    try {
      await fetchData(location);
      showWeatherstutes(stuteData);
    } catch (error) {
      display_section.innerHTML = `<img src="./image/404.png" alt="data not found">`;
    }
  }
});
