const giveaways = document.getElementById("Giveaways");

// Fetching giveaways data
fetch("https://raw.githubusercontent.com/SarthakOnYt/giveaways/main/prizes.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // Iterate through the data and create elements for each giveaway
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const giveaway = data[key];
                
                // Access the prize name and subscribers needed correctly
                const prizeName = Object.keys(giveaway)[0]; // This gets the first key, which is the prize name
                const subsNeeded = giveaway.Subs; // Access subscribers directly

                // Create a new div for each giveaway
                const giveawayDiv = document.createElement("div");
                giveawayDiv.classList.add("giveaway-item");
                giveawayDiv.innerHTML = `<h2>${prizeName} Giveaway</h2><p>Subscribers Needed: ${subsNeeded}</p>`;
                giveaways.appendChild(giveawayDiv);
            }
        }
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });

// Fetching latest YouTube video
const apiKey = 'AIzaSyAClBtCfH8Kkc1mM0095C8hrZeBueBlxHk'; // Replace with your API key
const channelId = 'UC2YK6pldr70TyUEamxm6tJA'; // Replace with your YouTube channel ID
const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video`;

async function fetchLatestVideo() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            const videoTitle = data.items[0].snippet.title;

            // Display the video on the page
            const videoContainer = document.getElementById('latest-video');
            videoContainer.innerHTML = `
                <h2>Latest Video</h2>
                <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            `;
        } else {
            console.log('No videos found.');
        }
    } catch (error) {
        console.error("Error fetching video:", error);
    }
}

// Call the function to fetch the latest video
fetchLatestVideo();

// Webpage protection

let num = 0;
// Disable right-click and Ctrl + U
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (num < 1) {
        alert("Not allowed");
    } else {
        alert("Bruh Seriously, stop that.");
    }
    num++;
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("Nu Uh.");
    }
});

document.addEventListener('keydown', (e) => {
    // Disable Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker) and view source
    if (e.ctrlKey && e.shiftKey && ['U', 'I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        alert("Developer tools are disabled on this page.");
    }
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        alert("Developer tools are disabled on this page.");
    }
});
