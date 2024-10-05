
function loadContent(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'home':
            content.innerHTML = `
                <style>
                    body{
                        background: url('./assets/home/background-home-desktop.jpg') center no-repeat;
                        background-size: cover;
                    }
                </style>        
            <section id="home__section">
                <div class="container">
                    <div class="intro">
                        <div class="left">
                            <p id="heading">So, you want to travel to</p>
                            <h1>SPACE</h1>
                            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <div class="right">
                            <div class="circle">
                            <h1>EXPLORE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `;
            break;
        case 'destination':
            content.innerHTML = `
                <style>
                    body{
                        background: url('./assets/destination/background-destination-desktop.jpg') center no-repeat;
                        background-size: cover;
                }
                </style>
                <section id="destination__section">
                    <div class="container">
                        <div class="left-destination">
                            <p><span>01</span> Pick your destination</p>
                            <img src="./assets/destination/image-moon.png" alt="moon" id="moon-image">
                            <img src="./assets/destination/image-mars.png" alt="mars" id="mars-image">
                            <img src="./assets/destination/image-europa.png" alt="europa" id="europa-image">
                            <img src="./assets/destination/image-titan.png" alt="titan" id="titan-image">
                        </div>
                        <div class="right-destination">
                            <div class="destination-links">
                                <a href="#moon" class="active">Moon</a>
                                <a href="#mars">Mars</a>
                                <a href="">Europa</a>
                                <a href="">Titan</a>
                            </div>

                            <div class="destination-info">
                                <!-- moon -->
                                <div id="moon">
                                    <h1>Moon</h1>
                                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                                    <hr>
                                    <div class="info">
                                        <div class="destination-distance">
                                            <p>Avg. distance</p>
                                            <h2>384,400 km</h2>
                                        </div>
                                        <div class="destination-time">
                                            <p>Est. travel time</p>
                                            <h2>3 days</h2>
                                        </div>
                                    </div>
                                    
                                </div>

                                <!-- mars -->
                                <div id="mars">
                                    <h1>Mars</h1>
                                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                                    <hr>
                                    <div class="info">
                                        <div class="destination-distance">
                                            <p>Avg. distance</p>
                                            <h2>225 mil. km</h2>
                                        </div>
                                        <div class="destination-time">
                                            <p>Est. travel time</p>
                                            <h2>9 months</h2>
                                        </div>
                                    </div>
                                </div>

                                <!-- europa -->
                                <div id="europa">
                                    <h1>Europa</h1>
                                    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                                    <hr>
                                    <div class="info">
                                        <div class="destination-distance">
                                            <p>Avg. distance</p>
                                            <h2>628 mil. km</h2>
                                        </div>
                                        <div class="destination-time">
                                            <p>Est. travel time</p>
                                            <h2>3 years</h2>
                                        </div>
                                    </div>    
                                </div>

                                <!-- titan -->
                                <div id="titan">
                                    <h1>Titan</h1>
                                    <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                                    <hr>
                                    <div class="info">
                                        <div class="destination-distance">
                                            <p>Avg. distance</p>
                                            <h2>1.6 bil. km</h2>
                                        </div>
                                        <div class="destination-time">
                                            <p>Est. travel time</p>
                                            <h2>7 years</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            break;
            case 'crew':
                content.innerHTML = `
                <style>
                    body{
                        background: url('./assets/crew/background-crew-desktop.jpg')  no-repeat;
                        background-size: cover;
                    }
                </style>

                `;
            break
            case 'technology': 
                content.innerHTML =`
                <style>
                    body{
                        background: url('./assets/technology/background-technology-desktop.jpg')  no-repeat;
                        background-size: cover;
                    }
                </style>
            
            `;
    }
}








function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('menu-open');
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
});