const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real = document.getElementById('temp_real');
const data_hide = document.querySelector('.middle_layer');


const getInfo = async (event)=>{
    event.preventDefault()
    let cityval = cityName.value;
    if(cityval ===''){
        city_name.innerText = "Please write the city name before search";
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cecba9fae1f0b90a7a998d73d4a404c0`
            const response = await fetch(url);
            const data =  await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
           const tempmood = arrData[0].weather[0].main;

           if(tempmood == 'Clear'){
            temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i>"
        }
        else if(tempmood == "Clouds"){
               temp_status.innerHTML = "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempmood == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else{
               temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i>"

           }
           
           data_hide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = "Please Enter the city name Properly!!!";
            data_hide.classList.add('data_hide');
        }
        
    }
}
submitbtn.addEventListener('click',getInfo)