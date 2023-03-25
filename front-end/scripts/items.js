document.addEventListener("DOMContentLoaded", function(event) { 
    let windowsLocation = window.location.href;

    requestedItemsList = windowsLocation.substring(window.location.href.lastIndexOf("/") + 1, windowsLocation.length - 5);

    console.log(`${requestedItemsList} page has finsihed loading.`)
        
});

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function fetchData(selection){
    return fetch(`http://localhost:3000/api/tables/${selection}`)
    .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()` or .text()) ;
        return response.json();
    }).then(function(data) {
        return data;
        
    });

}

async function gatherData(selection){
    let requiredTables = []
    let results = []

    document.getElementsByClassName("header-title")[0].innerHTML = selection;
    // document.getElementById("content").innerHTML = selection;
    console.log("SELECTION ", selection);
    switch(selection){
        
        case "Cales":
            requiredTables = ["Ethernet", "HDMI"];

            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++){
                    results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }
        
        case "Hardware":
            requiredTables = ["FireWall", "Switch"];

            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++){
                    results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "Peripherals":
            requiredTables = ["MSE", "KeyB"];

            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++){
                    results.push(`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${requiredTables[i]} available for checkout`)
                }
            }
            break;
        
        case "Other":
            requiredTables = []        
    }

    drawResults(results);

}

function drawResults(results){
    
    let target = document.getElementById("content");
    target.innerText = "";

    let wrapper = document.createElement("div");
    wrapper.classList.add("item-select-wrapper")

    results.forEach(element => {
        let listItem = document.createElement("p")
        listItem.innerText = element
        wrapper.appendChild(listItem);
    });
    target.appendChild(wrapper);

}