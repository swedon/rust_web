// Animation scripts
// Get all the member container elements
const memberContainers = document.querySelectorAll('.member-container');

// Loop through each member container and add the animation on mouseover
memberContainers.forEach(memberContainer => {
    // Remove the animation on mouseout
    memberContainer.addEventListener('mouseout', () => {
        memberContainer.classList.remove('animate__heartBeat');
    });

    memberContainer.addEventListener('mouseover', () => {
        memberContainer.classList.add('animate__heartBeat');
    });
});

// Set active link in navigation
// Get the container element
var btnContainer = document.getElementById("navbarMain");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// Change the background video to a random source
const backgroundVideo = document.getElementById("background-video");
const sourceElements = backgroundVideo.querySelectorAll("source");
const videoSources = Array.from(sourceElements).map(source => source.getAttribute("src"));
shuffleArray(videoSources);

let currentIndex = 0;
let isPlaying = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function playNextVideo() {
    if (isPlaying) {
        currentIndex = (currentIndex + 1) % videoSources.length;
    }
    backgroundVideo.src = videoSources[currentIndex];
    backgroundVideo.load();
    backgroundVideo.play().catch(error => {
        // Autoplay was prevented, you can handle this situation here.
        console.error("Autoplay prevented:", error);
    });
    isPlaying = true;
}

backgroundVideo.addEventListener("ended", playNextVideo);
if (!isPlaying) {
    playNextVideo();
}


// Change server header image src when a element is hovered
function changeImage(serverDiv, hover) {
    const logoImage = serverDiv.querySelector('.header-logo');
    if (hover) {
        logoImage.src = './images/logo_white_active.webp';
    } else {
        logoImage.src = './images/logo_white.webp';
    }
}

// Add server tags
async function fetchServerTags() {
    try {
        const response = await fetch('../data/server_tags.json');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('server-tags').innerHTML = "";
            data.forEach(tag => {
                document.getElementById('server-tags').innerHTML += `<span class="badge text-bg-primary">${tag}</span>`;
            })
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// Called wehn page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call the function to fetch and update server information
    fetchServerTags()
    if (!isPlaying) {
        playNextVideo();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const kitsData = {
        "VIP Builder I": {
            // Your JSON data here...
        },
        "VIP Builder II": {
            // Your JSON data here...
        },
        "VIP Builder III": {
            // Your JSON data here...
        }
    };

    const ranks = {
        bronze: ["VIP Builder I"],
        silver: ["VIP Builder II"],
        gold: ["VIP Builder III"]
    };

    function createKitCard(kit) {
        let mainItems = '';
        kit.MainItems.forEach(item => {
            const itemImage = `https://wiki.rustclash.com/img/items180/${item.Shortname}.png`;
            mainItems += `<img src="${itemImage}" alt="${item.Shortname}" title="${item.Shortname}" class="kit-item">`;
        });

        return `
            <div class="kit-card">
                <h3>${kit.Name}</h3>
                <div class="kit-items">
                    ${mainItems}
                </div>
            </div>
        `;
    }

    function populateKits(rank, containerId) {
        const container = document.getElementById(containerId);
        const kits = ranks[rank];
        container.innerHTML = '';
        kits.forEach(kitName => {
            const kit = kitsData[kitName];
            if (kit) {
                container.innerHTML += createKitCard(kit);
            }
        });
    }

    populateKits('bronze', 'bronzeKitsContainer');
    populateKits('silver', 'silverKitsContainer');
    populateKits('gold', 'goldKitsContainer');
});