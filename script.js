document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
});
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
                            <p class="header"><span>01</span> Pick your destination</p>
                            <img src="./assets/destination/image-moon.png" alt="moon" id="moon-image">
                            <img src="./assets/destination/image-mars.png" alt="mars" id="mars-image">
                            <img src="./assets/destination/image-europa.png" alt="europa" id="europa-image">
                            <img src="./assets/destination/image-titan.png" alt="titan" id="titan-image">
                        </div>
                        <div class="right-destination">
                            <div class="destination-links">
                                <a href="#" id="moon-link">Moon</a>
                                <a href="#" id="mars-link">Mars</a>
                                <a href="#" id="europa-link">Europa</a>
                                <a href="#" id="titan-link">Titan</a>
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
            document.getElementById('moon').style.display = 'block';
            document.getElementById('moon-image').style.display = 'block';
            document.getElementById('mars').style.display = 'none';
            document.getElementById('mars-image').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('europa-image').style.display = 'none';
            document.getElementById('titan').style.display = 'none';
            document.getElementById('titan-image').style.display = 'none';
            document.getElementById('moon-link').addEventListener('click', moonSection);
            document.getElementById('mars-link').addEventListener('click', marsSection);
            document.getElementById('europa-link').addEventListener('click', europaSection);
            document.getElementById('titan-link').addEventListener('click', titanSection);
            break;
            case 'crew':
                content.innerHTML = `
                <style>
                    body{
                        background: url('./assets/crew/background-crew-desktop.jpg')  no-repeat;
                        background-size: cover;
                    }
                </style>
                <section id="crew__section">
                    <div class="container">
                        <p class="header"><span>02</span> Meet your crew</p>
                        <div class="crew-members">

                            <!-- commander -->
                            <div class="member">
                                <div class="left">
                                    <p class="role">Commander</p>
                                    <h1>Dougles Hurley</h1>
                                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                                </div>
                                <div class="right">
                                    <img src="./assets/crew/image-douglas-hurley.png" alt="commander image">
                                </div>
                            </div>

                            <!-- pilot -->
                            <div class="member">
                                <div class="left">
                                    <p class="role">Pilot</p>
                                    <h1>Victor Glover</h1>
                                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                                </div>
                                <div class="right">
                                    <img src="./assets/crew/image-victor-glover.png" alt="victor glover image">
                                </div>
                            </div>

                            <!-- specialist -->
                            <div class="member">
                                <div class="left">
                                <p class="role">Mission Specialist</p>
                                <h1>Mark Shuttleworth</h1>
                                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                                </div>
                                <div class="right">
                                <img src="./assets/crew/image-mark-shuttleworth.png" alt="image-mark-shuttleworth">
                                </div>
                            </div>

                            <!-- engineer -->
                            <div class="member">
                                <div class="left">
                                    <p class="role">Flight Engineer</p>
                                    <h1>Anousheh Ansari</h1>
                                    <p>  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                                </div>
                                <div class="right">
                                    <img src="./assets/crew/image-anousheh-ansari.png" alt="image-anousheh-ansari">
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </section>
                `;
                setTimeout(startCrewSlider, 0);
            break
            case 'technology': 
                content.innerHTML =`
                <style>
                    body{
                        background: url('./assets/technology/background-technology-desktop.jpg')  no-repeat;
                        background-size: cover;
                    }
                </style>
                <section id="technology__section">
                    <div class="container">
                        <p class="header"><span>03</span> Space launch 101<p>
                        <div class="technology">
                            <!-- nav-numbers -->
                            <div class="nav-number">
                                <div class="number1"> 
                                    <a href="">1</a>
                                </div>
                                <div class="number2">
                                    <a href="">2</a>
                                </div>
                                <div class="number3">
                                    <a href="">3</a>
                                </div>
                            </div>

                            <!-- launch-venicle -->
                            <div class="vehicle">
                                <div class="left">
                                    <p>The terminology...</p>
                                    <h1>Launch vehicle</h1>
                                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                                </div>
                                <div class="right">
                                    <img src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="image-launch-vehicle-landscape">
                                </div>
                            </div>

                            <!-- capsule -->
                            <div class="capsule">
                                <div class="left">
                                    <p>The terminology...</p>
                                    <h1>Space Capsule</h1>
                                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                                </div>
                                <div class="right">
                                    <img src="./assets/technology/image-space-capsule-landscape.jpg" alt="image-space-capsule-landscape">
                                </div>
                            </div>

                            <!-- spaceport -->
                            <div class="spaceport">
                                <div class="left">
                                    <p>The terminology...</p>
                                    <h1>Spaceport</h1>
                                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                                </div>
                                <div class="right">
                                    <img src="./assets/technology/image-spaceport-landscape.jpg" alt="image-spaceport-landscape">
                                </div>
                            </div>   
                        </div>
                    </div>

                </section>
            
            `;
    }
}


function moonSection(){
    const moon = document.getElementById('moon')
    const mars = document.getElementById('mars')
    const europa = document.getElementById('europa')
    const titan = document.getElementById('titan')
    const moonImage = document.getElementById('moon-image')
    const marsImage = document.getElementById('mars-image')
    const europaImage = document.getElementById('europa-image')
    const titanImage = document.getElementById('titan-image')

    moon.style.display = 'block'
    moonImage.style.display = 'block'
    mars.style.display = 'none'
    marsImage.style.display = 'none'
    europa.style.display = 'none'
    europaImage.style.display = 'none'
    titan.style.display = 'none'
    titanImage.style.display = 'none'
}

function marsSection(){
    const moon = document.getElementById('moon')
    const mars = document.getElementById('mars')
    const europa = document.getElementById('europa')
    const titan = document.getElementById('titan')
    const moonImage = document.getElementById('moon-image')
    const marsImage = document.getElementById('mars-image')
    const europaImage = document.getElementById('europa-image')
    const titanImage = document.getElementById('titan-image')

    moon.style.display = 'none'
    moonImage.style.display = 'none'
    mars.style.display = 'block'
    marsImage.style.display = 'block'
    europa.style.display = 'none'
    europaImage.style.display = 'none'
    titan.style.display = 'none'
    titanImage.style.display = 'none'
}

function europaSection(){
    const moon = document.getElementById('moon')
    const mars = document.getElementById('mars')
    const europa = document.getElementById('europa')
    const titan = document.getElementById('titan')
    const moonImage = document.getElementById('moon-image')
    const marsImage = document.getElementById('mars-image')
    const europaImage = document.getElementById('europa-image')
    const titanImage = document.getElementById('titan-image')

    moon.style.display = 'none'
    moonImage.style.display = 'none'
    mars.style.display = 'none'
    marsImage.style.display = 'none'
    europa.style.display = 'block'
    europaImage.style.display = 'block'
    titan.style.display = 'none'
    titanImage.style.display = 'none'
}

function titanSection(){
    const moon = document.getElementById('moon')
    const mars = document.getElementById('mars')
    const europa = document.getElementById('europa')
    const titan = document.getElementById('titan')
    const moonImage = document.getElementById('moon-image')
    const marsImage = document.getElementById('mars-image')
    const europaImage = document.getElementById('europa-image')
    const titanImage = document.getElementById('titan-image')

    moon.style.display = 'none'
    moonImage.style.display = 'none'
    mars.style.display = 'none'
    marsImage.style.display = 'none'
    europa.style.display = 'none'
    europaImage.style.display = 'none'
    titan.style.display = 'block'
    titanImage.style.display = 'block'
}


const navLinks = document.querySelectorAll('.nav-links a');
const destinationLinks = document.querySelectorAll('.destination-links a')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('menu-open');
}

let currentMemberIndex = 0;
let crewMembers;

function startCrewSlider() {
    crewMembers = document.querySelectorAll('.crew-members .member');
    if (!crewMembers.length) {
        console.error('No crew members found.');
        return;
    }

    crewMembers.forEach((member, index) => {
        if (index !== currentMemberIndex) {
            member.style.display = 'none';
        } else {
            member.style.display = 'flex'; 
        }
    });

    setInterval(() => {
        crewMembers[currentMemberIndex].style.display = 'none';
        currentMemberIndex = (currentMemberIndex + 1) % crewMembers.length;
        crewMembers[currentMemberIndex].style.display = 'flex';
    }, 5000); 
}