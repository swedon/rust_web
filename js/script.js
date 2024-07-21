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

// Background video
const backgroundVideo = document.getElementById("background-video");
const sourceElements = backgroundVideo.querySelectorAll("source");
const videoSources = Array.from(sourceElements).map((source) =>
    source.getAttribute("src"),
);
let randomIndex = Math.floor(Math.random() * videoSources.length);
let selectedVideoSource = videoSources[randomIndex];

function playVideo() {
    backgroundVideo.src = selectedVideoSource;
    backgroundVideo.load();
    backgroundVideo.play().catch((error) => {
        // Autoplay was prevented, you can handle this situation here.
        console.error("Autoplay prevented:", error);
    });
}

// Add server tags
async function fetchServerTags() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/swedon/rustyrevenge/main/data/server_tags.json");
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function UpdateServerTags(data) {
    // Extract and update the content with the desired information
    const serverInfo = data;

    // Update the server tags
    const serverTags = document.getElementById("server-tags");
    serverTags.innerHTML = "";
    serverInfo.forEach((tag) => {
        serverTags.innerHTML += `<span class="badge text-bg-primary">${tag}</span>`;
    });
}

// Called wehn page is loaded
document.addEventListener("DOMContentLoaded", async function () {
    playVideo();
    // Call the function to fetch and update server tags
    const serverTags = await fetchServerTags();
    UpdateServerTags(serverTags);
    // Call the function to fetch and update server information
    const serverInfo = await fetchServerInfo();
    updateServerInfo(serverInfo);
});
