// Function to update the server info UI based on the fetched data
async function fetchServerInfo() {
    try {
        const response = await fetch('https://api.battlemetrics.com/servers/28259573');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Error fetching server data:', error);
    }
}

function updateServerInfo(data) {
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
    document.getElementById('player-count-progress').style.display = 'block';

    // Update steam connect buttons with server IP and port
    const steamConnect = `location.href='steam://run/252490//connect%20${serverInfo.ip}:${serverInfo.port}'`;
    document.getElementById('steam-connect').setAttribute('onclick', steamConnect);
    document.getElementById('modal-steam-connect').setAttribute('onclick', steamConnect);
    document.getElementById('steam-connect').classList.remove('disabled');
    document.getElementById('modal-steam-connect').classList.remove('disabled');

    // Make the server tags and progress-bar visible
    document.getElementById('server-tags').style.display = 'block';
    document.getElementById("server-players").style.display = "block";
    document.getElementById("server-players").classList.remove("hidden");
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
