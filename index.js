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
                planetCard.className = 'planet-card'
                planetBios.append(planetCard) // created div 'planetCard' and gave it class name of 'planet-card' 

                const planetImg = document.createElement('img') 
                planetImg.src = planet.image 
                planetImg.className = 'planet-img' // created img tag 'planetImg' and gave it class name of 'planet-img' 

                const planetName = document.createElement('a') 
                planetName.textContent = planet.name 
                planetName.className = 'planet-name' // created a tag 'planetName' and gave it class name 'planet-name' 
                planetName.href= '' 

                const planetPar = document.createElement('p')  
                planetPar.textContent = planet.bio 
                planetPar.className = 'planet-par' // created p tag 'planetPar' and gave it class name 'planet-par' 

                planetCard.append(planetName, planetImg, planetPar)                
            })
        }
    } catch(error){
        console.log(error)  
    }
}  

request()  