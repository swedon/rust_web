// Function to fetch data from the data.json file and update server information
async function fetchServerInfo() {
    try {
        const response = await fetch('https://api.battlemetrics.com/servers/28259573');
        if (response.ok) {
            const data = await response.json();
            // Extract and update the content with the desired information
            const serverInfo = data.data.attributes;

            // Update the server name
            const serverName = document.getElementById('server-name')
            serverName.textContent = serverInfo.name;
            serverName.classList.remove("server-offline");

            // Update the server name in the modal window.
            const modal_serverName = document.getElementById('modal-server-name')
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
            const playerProgressBar = document.getElementById('player-count-progressbar')
            playerProgressBar.style.width = `${playerProgress}%`;
            playerProgressBar.setAttribute('aria-valuenow', playerProgress);

            // Update steam connect buttons with server ip and port
            const steamConnect = `location.href='steam://connect/${serverInfo.ip}:${serverInfo.port}'`
            document.getElementById('steam-connect').setAttribute('onclick', steamConnect);
            document.getElementById('modal-steam-connect').setAttribute('onclick', steamConnect);
            document.getElementById('steam-connect').classList.remove('disabled');
            document.getElementById('modal-steam-connect').classList.remove('disabled');

            document.getElementById('player-count-progress').style.display = 'block';
            document.getElementById('server-tags').style.display = 'block';
            document.getElementById('server-players').style.display = 'block';

        } else {
            console.error('Error fetching data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
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

// Called wehn page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call the function to fetch and update server information
    fetchServerInfo();
});
