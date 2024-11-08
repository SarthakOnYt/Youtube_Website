const giveaways = document.getElementById("Giveaways");

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



// Webpage protection




let num=0;
//disable right click ctrl + u
// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (num<1){
        alert("Not allowed");
    }
    else{
        alert("Bruh Seriously, stop that.")
    }
    num++;
});

// Disable Ctrl+U (View Source)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("Nu Uh.");
    }
});

document.addEventListener('keydown', (e) => {
    // Disable Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker) and view source
    if (e.ctrlKey && e.shiftKey && ['U','I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        alert("Developer tools are disabled on this page.");
    }
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        alert("Developer tools are disabled on this page.");
    }
});