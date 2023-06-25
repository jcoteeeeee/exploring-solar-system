# Exploring the Solar System 

Exploring the Solar System is a multipage website that provides a description of the solar system and a profile of its eight planets. Each planet has its own dedicated page which contains its own bio and an image gallery, which users can contirbute to. 

# Installation 
If you do not have json-server installed, type this command into your terminal: 

    npm install json-server 
# Setup 
To get started, run your json-server by typing this command into your terminal: 

    json-server --watch db.json 

# Functionality 
All pages on the site contain a header which includes a navbar. The navbar consists of eight <a> elements, one for each planet. Each <a> element is linked to the page of its corresponding planet. So, if you clicked on Mercury, it will take you to the Mercury page. 

All pages on the site also contain a footer. The footer serves as another navbar. Each page has two <a> elements, except for the last page, which just has one. Each <a> element contains an arrow, the one on the left being a back arrow and the one on the right being a forward arrow. The back arrow's href attribute will be set to the prior planet (if a user is on the Venus page, then Mercury) and the forward arrow will be set to the next planet (if a user is on the Venus page, then Earth). There are two exceptions to this, the first being the home page. It does not have a prior planet, so instead it has an up arrow, which sends you to the top of the page by having its href attribute set the #home-header element. The second exception is the Neptune page, which only has a back arrow simply because it is the last planet. 

The homepage provides a quick snapshot on each planet contained in a "card." The card displays the planet name, image, and bio. When a user hovers over a card, the planet image in that card enlarges. This is done via a hover selector on the card. The ruleset includes the scale function of the transform property, which increases the size of the image. 

Each planet page, in addition to its bio, has an image gallery. The image gallery is user interactive. Users can add their own images to the gallery, which is done via a form and POST request. When users submit their image URL in the form, it gets added to the backend, and is then rendered on the page via a GET request (which was already in place to display the existing images). When viewing the image gallery, if the user hovers over an image, it will enlarge. This is again done via a hover selector. The ruleset includes the scale function of the transform property, which increases the size of the image. 
