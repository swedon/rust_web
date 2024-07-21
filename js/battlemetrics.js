async function fetchServerInfo() {
    try {
        const response = await fetch('https://api.battlemetrics.com/servers/28259573');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Update server info UI with fetched data
        updateServerInfo(data);

        // Extract and update the content with the desired information
        const serverInfo = data.data.attributes;

        // Update the server name
        const serverName = document.getElementById('server-name');
        serverName.textContent = serverInfo.name;
        serverName.classList.remove("server-offline");

        // Update the server name in the modal window.
        const modal_serverName = document.getElementById('modal-server-name');
        modal_serverName.textContent = serverInfo.name;
        modal_serverName.classList.remove("server-offline");

        // Update server info
        document.getElementById('server-info').textContent = serverInfo.details.map;
        document.getElementById('modal-server-info').textContent = `${serverInfo.details.map} - ${serverInfo.players}/${serverInfo.maxPlayers}`;

        // Update the server description with replaced characters
        document.getElementById('modal-server-description').innerHTML = replaceNewlinesAndTabs(serverInfo.details.rust_description);

        // Update the player count
        document.getElementById('player-count').innerHTML = `${serverInfo.players}<b>/</b><span class="player-count-max">${serverInfo.maxPlayers}</span>`;

        // Update the progress bar
        const playerProgress = (serverInfo.players / serverInfo.maxPlayers) * 100;
        const playerProgressBar = document.getElementById('player-count-progressbar');
        playerProgressBar.style.width = `${playerProgress}%`;
        playerProgressBar.setAttribute('aria-valuenow', playerProgress);

        // Update steam connect buttons with server IP and port
        const steamConnect = `location.href='steam://run/252490//connect%20${serverInfo.ip}:${serverInfo.port}'`;
        document.getElementById('steam-connect').setAttribute('onclick', steamConnect);
        document.getElementById('modal-steam-connect').setAttribute('onclick', steamConnect);
        document.getElementById('steam-connect').classList.remove('disabled');
        document.getElementById('modal-steam-connect').classList.remove('disabled');

        document.getElementById('player-count-progress').style.display = 'block';
        document.getElementById('server-tags').style.display = 'block';
        document.getElementById('server-players').style.display = 'block';

    } catch (error) {
        console.error('Error fetching server data:', error);
    }
}

// Function to update the server info UI based on the fetched data
function updateServerInfo(data) {
    if (!data || !data.data || !data.data.attributes) {
        console.error("Invalid data structure:", data);
        return;
    }

    const attributes = data.data.attributes;
    const players = attributes.players;
    const maxPlayers = attributes.maxPlayers;

    // Find the server players container
    const serverPlayers = document.getElementById("server-players");
    serverPlayers.classList.remove("hidden");

    // Update player count
    const playerCountElement = document.getElementById("player-count");
    playerCountElement.textContent = `${players}/${maxPlayers}`;

    // Calculate the fill percentage
    const fillPercentage = (players / maxPlayers) * 100;
    console.log("Fill Percentage:", fillPercentage); // Log fill percentage for debugging

    // Update the progress bar
    const progressBar = document.getElementById("player-count-progressbar");
    progressBar.style.width = fillPercentage + "%";
    progressBar.setAttribute("aria-valuenow", fillPercentage); // Ensure accessibility attributes are updated

    // Show the elements
    serverPlayers.style.display = "block";
    document.getElementById("player-count-progress").style.display = "block";
}

// Helper function to replace \n with <br> and \t with &emsp (tabb);
// This is a &nbsp; regular space.
// This is a &ensp; two spaces gap.
// This is a &emsp; four spaces gap.
function replaceNewlinesAndTabs(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/\\t/g, '&emsp;');
}

// Called when page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call the function to fetch and update server information
    fetchServerInfo();
});
