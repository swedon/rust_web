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
        "Starter Kit": {
          "Name": "Starter Kit",
          "Description": "",
          "RequiredPermission": "",
          "MaximumUses": 2,
          "RequiredAuth": 0,
          "Cooldown": 3600,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/items180/pistol.revolver.png",
          "MainItems": [
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 64,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [
            {
              "Shortname": "burlap.gloves.new",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "hat.wolf",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.poncho",
              "DisplayName": "Bone Armor Poncho",
              "Skin": 3268938859,
              "Amount": 1,
              "Condition": 250.0,
              "MaxCondition": 250.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "mask.bandana",
              "DisplayName": "Bone Armor Bandana",
              "Skin": 3268940492,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.pants",
              "DisplayName": "Pirate Hide Pants",
              "Skin": 2960205521,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.boots",
              "DisplayName": "Pirate Hide Shoes",
              "Skin": 2963367559,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.vest",
              "DisplayName": "Pirate Hide Shirt",
              "Skin": 2960204174,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "BeltItems": [
            {
              "Shortname": "pistol.revolver",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 4,
              "Ammotype": "ammo.pistol",
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": []
            },
            {
              "Shortname": "stone.pickaxe",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stonehatchet",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "bandage",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 6,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "syringe.medical",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "potato",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 20,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ]
        },
        "VIP Starter Kit": {
          "Name": "VIP Starter Kit",
          "Description": "",
          "RequiredPermission": "kits.vipstarter",
          "MaximumUses": 1,
          "RequiredAuth": 0,
          "Cooldown": 0,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/items180/pistol.semiauto.png",
          "MainItems": [
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "cupboard.tool.retro",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "door.hinged.metal",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "lock.key",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 4000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [
            {
              "Shortname": "burlap.gloves.new",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.poncho",
              "DisplayName": "Bone Armor Poncho",
              "Skin": 3268938859,
              "Amount": 1,
              "Condition": 250.0,
              "MaxCondition": 250.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.pants",
              "DisplayName": "Pirate Hide Pants",
              "Skin": 2960205521,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.boots",
              "DisplayName": "Pirate Hide Shoes",
              "Skin": 2963367559,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "attire.hide.vest",
              "DisplayName": "Pirate Hide Shirt",
              "Skin": 2960204174,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "hat.wolf",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "mask.bandana",
              "DisplayName": "Bone Armor Bandana",
              "Skin": 3268940492,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "BeltItems": [
            {
              "Shortname": "syringe.medical",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "bandage",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 6,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "potato",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 20,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 64,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "pistol.semiauto",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 4,
              "Ammotype": "ammo.pistol",
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": []
            }
          ]
        },
        "VIP Kit": {
          "Name": "VIP Kit",
          "Description": "",
          "RequiredPermission": "kits.vip",
          "MaximumUses": 0,
          "RequiredAuth": 0,
          "Cooldown": 86400,
          "Cost": 0,
          "IsHidden": false,
          "CopyPasteFile": "",
          "KitImage": "https://rustlabs.com/img/items180/smg.thompson.png",
          "MainItems": [
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 256,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 18,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [
            {
              "Shortname": "riot.helmet",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 150.0,
              "MaxCondition": 150.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "shoes.boots",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "hoodie",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "roadsign.jacket",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 500.0,
              "MaxCondition": 500.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "roadsign.gloves",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "roadsign.kilt",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 150.0,
              "MaxCondition": 150.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "pants",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "BeltItems": [
            {
              "Shortname": "smg.thompson",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": "ammo.pistol",
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": [
                {
                  "Shortname": "weapon.mod.extendedmags",
                  "DisplayName": null,
                  "Skin": 0,
                  "Amount": 1,
                  "Condition": 100.0,
                  "MaxCondition": 100.0,
                  "Ammo": 0,
                  "Ammotype": null,
                  "Position": 0,
                  "Frequency": -1,
                  "BlueprintShortname": null,
                  "Text": null,
                  "Contents": null
                },
                {
                  "Shortname": "weapon.mod.holosight",
                  "DisplayName": null,
                  "Skin": 0,
                  "Amount": 1,
                  "Condition": 300.0,
                  "MaxCondition": 300.0,
                  "Ammo": 0,
                  "Ammotype": null,
                  "Position": 1,
                  "Frequency": -1,
                  "BlueprintShortname": null,
                  "Text": null,
                  "Contents": null
                },
                {
                  "Shortname": "weapon.mod.flashlight",
                  "DisplayName": null,
                  "Skin": 0,
                  "Amount": 1,
                  "Condition": 300.0,
                  "MaxCondition": 300.0,
                  "Ammo": 0,
                  "Ammotype": null,
                  "Position": 2,
                  "Frequency": -1,
                  "BlueprintShortname": null,
                  "Text": null,
                  "Contents": null
                }
              ]
            },
            {
              "Shortname": "syringe.medical",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "icepick.salvaged",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 500.0,
              "MaxCondition": 500.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "axe.salvaged",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 500.0,
              "MaxCondition": 500.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "bandage",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 6,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "supply.signal",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ]
        },
        "Base Defense": {
          "Name": "Base Defense",
          "Description": "Be ready when the Scientists takes revenge!",
          "RequiredPermission": "kits.basedefense1",
          "MaximumUses": 1,
          "RequiredAuth": 0,
          "Cooldown": 0,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/items180/autoturret.png",
          "MainItems": [
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "pistol.python",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 6,
              "Ammotype": "ammo.pistol",
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": []
            }
          ],
          "WearItems": [],
          "BeltItems": [
            {
              "Shortname": "autoturret",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 2,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.combiner",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wiretool",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 4.0,
              "MaxCondition": 4.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electric.generator.small",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ]
        },
        "VIP Builder": {
          "Name": "VIP Builder",
          "Description": "",
          "RequiredPermission": "kits.build1",
          "MaximumUses": 0,
          "RequiredAuth": 0,
          "Cooldown": 86400,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/skins/180/22709.png",
          "MainItems": [
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.refined",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 250,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [],
          "BeltItems": []
        },
        "Base Defense II": {
          "Name": "Base Defense II",
          "Description": "Be ready when the Scientist take revenge!",
          "RequiredPermission": "kits.basedefense2",
          "MaximumUses": 1,
          "RequiredAuth": 0,
          "Cooldown": 0,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/items180/autoturret.png",
          "MainItems": [
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.pistol",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "pistol.python",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 6,
              "Ammotype": "ammo.pistol",
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": []
            }
          ],
          "WearItems": [],
          "BeltItems": [
            {
              "Shortname": "autoturret",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 2,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "samsite",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ]
        },
        "VIP Builder II": {
          "Name": "VIP Builder II",
          "Description": "",
          "RequiredPermission": "kits.build2",
          "MaximumUses": 0,
          "RequiredAuth": 0,
          "Cooldown": 86400,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/skins/180/25203.png",
          "MainItems": [
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 8,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 7,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 9,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 11,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.refined",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 500,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 10,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [],
          "BeltItems": []
        },
        "Base Defense III": {
          "Name": "Base Defense III",
          "Description": "",
          "RequiredPermission": "kits.basedefense3",
          "MaximumUses": 1,
          "RequiredAuth": 0,
          "Cooldown": 0,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/items180/autoturret.png",
          "MainItems": [
            {
              "Shortname": "autoturret",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 18,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "samsite",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 12,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "autoturret",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 12,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 19,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "rifle.m39",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 24,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 4,
              "Ammotype": "ammo.rifle",
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": []
            },
            {
              "Shortname": "ammo.rifle",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 512,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [],
          "BeltItems": [
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electric.generator.small",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 4,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wiretool",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1,
              "Condition": 4.0,
              "MaxCondition": 4.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.branch",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 10,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "electrical.combiner",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 3,
              "Condition": 100.0,
              "MaxCondition": 100.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ]
        },
        "VIP Builder III": {
          "Name": "VIP Builder III",
          "Description": "",
          "RequiredPermission": "kits.build3",
          "MaximumUses": 0,
          "RequiredAuth": 0,
          "Cooldown": 86400,
          "Cost": 0,
          "IsHidden": true,
          "CopyPasteFile": "",
          "KitImage": "https://wiki.rustclash.com/img/skins/180/44601.png",
          "MainItems": [
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 0,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 3,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 4,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 1,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 8,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 7,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 6,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 9,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 22,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 2,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 20,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 23,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 10,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 11,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 15,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 13,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 5,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.fragments",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 21,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 16,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 12,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 19,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "wood",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 18,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "metal.refined",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 1000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 17,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            },
            {
              "Shortname": "stones",
              "DisplayName": null,
              "Skin": 0,
              "Amount": 5000,
              "Condition": 0.0,
              "MaxCondition": 0.0,
              "Ammo": 0,
              "Ammotype": null,
              "Position": 14,
              "Frequency": -1,
              "BlueprintShortname": null,
              "Text": null,
              "Contents": null
            }
          ],
          "WearItems": [],
          "BeltItems": []
        }
    };

    const ranks = {
        bronze: ["VIP Starter Kit","VIP Kit","Base Defense","VIP Builder"],
        silver: ["VIP Starter Kit","VIP Kit","Base Defense II","VIP Builder II"],
        gold: ["VIP Starter Kit","VIP Kit","Base Defense III","VIP Builder III"]
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