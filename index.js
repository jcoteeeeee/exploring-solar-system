console.log('hello')    

// GET request for planet bio section on hoomepage 
const request = async () => {
    const planetBios = document.querySelector('#planet-bios')
    try{
        const response = await fetch('http://localhost:3000/Planets')  
        if (response.ok){
            const jsonResp = await response.json() 
            jsonResp.forEach((planet) => { 
                const planetCard = document.createElement('div') 
                planetBios.append(planetCard)  
                const planetImg = document.createElement('img') 
                planetImg.src = planet.image 
                const planetName = document.createElement('a') 
                planetName.textContent = planet.name 
                planetBio = document.createElement('p')  
                planetBio.textContent = planet.bio 
                planetCard.append(planetImg, planetName, planetBio) 
            })
        }
    } catch(error){
        console.log(error)  
    }
}  

request()  