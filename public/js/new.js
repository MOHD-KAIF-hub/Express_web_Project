const btn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp_real=document.getElementById("temp_real");
const temp_status=document.getElementById("temp_status");
const data_hide=document.querySelector(".middle_layer");
const getinfo= async(event)=> {
event.preventDefault();

let cityvalue=cityname.value;
if(cityvalue==""){
city_name.innerText="Plz write Name before Search!";
data_hide.classList.add("data_hidden");
}
else{
    try{
   
    let url1=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=dd1584c067e23d2aad11ffa9fa3183d3`;

    const responce=await fetch(url1);
    const data= await responce.json();
    const arrdata=[data]; 
    city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
    temp_real.innerText=arrdata[0].main.temp;
    const store_status=arrdata[0].weather[0].main;
if(store_status==="Clear")
{
     temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>";
}
     else if(store_status==="Clouds")
    {
        temp_status.innerHTML="<i class='fas fa-cloud ' style='color:#0097e6'></i>";
    }
    else if(store_status==="Rain")
    {
        temp_status.innerHTML="<i class='fas fa-cloud-rain ' style='color:#a4b0be'></i>"
    }
    else
    {
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>";
    }
    data_hide.classList.remove("data_hidden");
    }
    catch
    {
        city_name.innerText="Plz Enter the Name Properly!";
        data_hide.classList.add("data_hidden");
       
    }
}
}
btn.addEventListener("click",getinfo);