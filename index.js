console.log('hello')    
// GET request for planet bio section on hoomepage 
const request = async () => {
    const planetBios = document.querySelector('#planet-bios')
    try{
        const response = await fetch('http://localhost:3000/planets')  
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

// GET request for mercury's gallery section 
const getMercury = async () => {  
    const mgContainer= document.querySelector('#mercury-gallery-container')
    try{
        const response = await fetch('http://localhost:3000/mercury-images')  
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(mercury => {
                const mercuryImg = document.createElement('img')  
                mercuryImg.src = mercury.image 
                mercuryImg.className = 'gallery-img' 
                mgContainer.append(mercuryImg) 
            })
        }
    } catch(error){
        console.log(error)  
    }
}  

getMercury() 

// GET request for venus' photo gallery 
const getVenus = async () => { 
    const vgContainer = document.querySelector('#venus-gallery-container')
    try{
        const response = await fetch('http://localhost:3000/venus-images') 
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(venus => {
                const venusImg = document.createElement('img') 
                venusImg.src = venus.image 
                venusImg.className = 'gallery-img' 
                vgContainer.append(venusImg)  
            })  
        }
    } catch(error){
        console.log(error)  
    }
} 

getVenus() 

// GET request for earth's photo gallery 
const getEarth = async () => {  
    const egContainer = document.querySelector('#earth-gallery-container')  
    try{
        const response = await fetch('http://localhost:3000/earth-images') 
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(earth => {
                const earthImg = document.createElement('img') 
                earthImg.src = earth.image  
                earthImg.className = 'gallery-img'  
                egContainer.append(earthImg) 
            })
        }
    } catch(error){
        console.log(error)  
    }
} 

getEarth() 

// GET request for mars photo gallery 
const getMars = async () => {  
    const mgContainer = document.querySelector('#mars-gallery-container')  
    try{
        const response = await fetch('http://localhost:3000/mars-images')  
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(mars => {
                marsImg = document.createElement('img')  
                marsImg.src = mars.image  
                marsImg.className = 'gallery-img'  
                mgContainer.append(marsImg)  
            })
        }
    } catch(error){
        console.log(error) 
    }
}   

getMars() 

// GET request for jupiter photo gallery 
const getJupiter = async () => {   
    const jgContainer = document.querySelector('#jupiter-gallery-container') 
    try{
        const response = await fetch('http://localhost:3000/jupiter-images')  
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(jupiter => {
                const jupiterImg = document.createElement('img')  
                jupiterImg.src = jupiter.image   
                jupiterImg.className = 'gallery-img' 
                jgContainer.append(jupiterImg)  
            })
        } 
    } catch(error){
        console.log(error)  
    }
} 

getJupiter() 

// GET request for saturn photo gallery 
const getSaturn = async () => {  
    const sgContainer = document.querySelector('#saturn-gallery-container')
    try{
        const response = await fetch('http://localhost:3000/saturn-images')  
        if (response.ok){
            const respJson = await response.json() 
            respJson.forEach(saturn => {
                const saturnImg = document.createElement('img') 
                saturnImg.src = saturn.image 
                saturnImg.className = 'gallery-img' 
                sgContainer.append(saturnImg)  
            })
        }
    } catch(error){
        console.log(error)
    }
}  

getSaturn() 

// GET request for uranus' photo gallery 

const getUranus = async () => {
    const ugContainer = document.querySelector('#uranus-gallery-container')
    try {
        const response = await fetch('http://localhost:3000/uranus-images')
        if (response.ok) {
            const respJson = await response.json()
            respJson.forEach(uranus => {
                const uranusImg = document.createElement('img')
                uranusImg.src = uranus.image 
                uranusImg.className = 'gallery-img' 
                ugContainer.append(uranusImg)
            })
        }
    } catch (error) {
        console.log(error)
    }
}

getUranus() 

// GET request for neptune 
const getNeptune = async () => {
    const ngContainer = document.querySelector('#neptune-gallery-container')
    try {
        const response = await fetch('http://localhost:3000/neptune-images')
        if (response.ok) {
            const respJson = await response.json()
            respJson.forEach(neptune => {
                const neptuneImg = document.createElement('img')
                neptuneImg.src = neptune.image  
                neptuneImg.className = 'gallery-img'  
                ngContainer.append(neptuneImg) 
            })
        }
    } catch (error) {
        console.log(error)
    }
}

getNeptune()  

// _______________________________________________________________________________________________________________ 

// adding event listener to mercuryForm to be able to add image to mercury gallery via POST request 
const mercuryForm = document.querySelector('#mercury-form')  
console.log(mercuryForm) 
if (mercuryForm){
    mercuryForm.addEventListener('submit', (e) => { 
        // e.preventDefault()   no need for e.preventDefault() here. Better to have page reload and have image be added right away 
        // e.preventDefault is more useful using react 
        const mercuryPost = async () => {
            try {
                const response = await fetch('http://localhost:3000/mercury-images', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        image: mercuryForm.image.value
                    })
                })
                if (response.ok) {
                    const respJson = await response.json()
                }
            } catch (error) {
                console.log(error)
            }
        }
        mercuryPost() 
    })   
}
 
// adding event listener to venusForm to be able to add image to venus gallery via POST request  
const venusForm = document.querySelector('#venus-form') 
console.log(venusForm) 

if (venusForm){ 
    venusForm.addEventListener('submit', () => {
        const venusPost = async () => {
            try {
                const response = await fetch('http://localhost:3000/venus-images', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        image: venusForm.image.value
                    })
                })
                if (response.ok) {
                    const respJson = await response.json()
                }
            } catch (error) {
                console.log(error)
            }
        }   
        venusPost() 
    })
}


// adding event listener to earthForm to be able to add image to earth gallery via POST request  
const earthForm = document.querySelector('#earth-form')  
if (earthForm){
    earthForm.addEventListener('submit', (e) => { 
        const postEarth = async () => {
            try{
                const response = await fetch('http://localhost:3000/earth-images', {
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify({
                        image: earthForm.image.value  
                    }) 
                })  
                if (response.ok){
                    const respJson = await response.json() 
                }
            } catch(error){
                console.log(error) 
            }
        } 
        postEarth() 
    })  
}