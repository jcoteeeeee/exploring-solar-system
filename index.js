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
                const planNameLC = planet.name.toLowerCase() // this variable is to make the planet's names start with a lower case letter 
                // to be used to set the href value for each planet below (url doesn't work if planet's name starts with upper case letter) 
                planetName.href= `./${planNameLC}.html` 

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