const city = document.getElementById('region')
city.addEventListener('click',()=>{getTemparature(city.value)})

async function getTemparature(place){
    const loadingElement = document.getElementById('loading')
    const temp = document.getElementById('temparature')
    loadingElement.style.display = 'flex'
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=JJFV8FYF2PW82QEWVSYC2SEAD&unitGroup=metric`,{mode:'cors'})
        console.log(response)
        const data = await response.json()
        console.log(data)
        temp.textContent = `Temparaturn in Celcius : ${data.currentConditions.temp}`
        
    } catch(error){
        console.error('error ftching region')
        regionDropDrown.innerHTML = '<option  value = "">--ERROR--</option>'
    } finally{
        loadingElement.style.display = "none"
    }
    
}

