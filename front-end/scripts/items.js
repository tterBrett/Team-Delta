document.addEventListener("DOMContentLoaded", function (event) {
    let windowsLocation = window.location.href;

    requestedItemsList = windowsLocation.substring(window.location.href.lastIndexOf("/") + 1, windowsLocation.length - 5);

    console.log(`${requestedItemsList} page has finsihed loading.`)

});

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function fetchData(selection) {
    return fetch(`http://localhost:3000/api/tables/${selection}`)
        .then(function (response) {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()` or .text()) ;
            return response.json();
        }).then(function (data) {
            return data;

        });

}

async function gatherData(selection) {
    let requiredTables = []
    let results = []
    console.log("SELECTION", selection)

    //Similar to the items and attributes in the form object map, this object maps keys to title names, and makes them the header of the table page 
    const tableName = {
        MSE: 'Mouses',
        KeyB: 'Keyboards',
        PowerSupply: 'Power Supply',
        USB: 'USB',
        Ethernet: 'Ethernet Cables',
        Visual: 'Visual Cables',
        Switches: 'Switches',
        FireWall: 'Firewalls',
        Audio: 'Audio Cables',
        Other: 'Other',
    };

    document.getElementsByClassName("header-title")[0].innerHTML = tableName[selection];

    // document.getElementById("content").innerHTML = selection;
    switch (selection) {

        case "MSE":
            requiredTables = ["MSE"];
            results.push(["brand", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push(`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${requiredTables[i]} available for checkout`)
                }
            }

            break;

        case "KeyB":
            requiredTables = ["KeyB"];
            results.push(["brand", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push(`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${requiredTables[i]} available for checkout`)
                }
            }

            break;


        case "Ethernet":
            requiredTables = ["Ethernet"];
            results.push(["Length", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "USB":
            requiredTables = ["USB"];
            results.push(["Name", "connector", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push(`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${requiredTables[i]} available for checkout`)
                }
            }

            break;

        case "FireWall":
            requiredTables = ["FireWall"];
            results.push(["brand", "name", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "Switches":
            requiredTables = ["Switches"];
            results.push(["brand", "name", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "PowerSupply":
            requiredTables = ["PowerSupply"];
            results.push(["Name", "Device Type", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "Audio":
            requiredTables = ["Audio"];
            results.push(["Name", "Cable Type", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;

        case "Visual":
            requiredTables = ["Visuals"];
            results.push(["Name", "Cable Type", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;


        case "Other":
            requiredTables = ["Transaction"]
            results.push(["TimeStamp", "Name", "ItemID", "Table Origin", "Flow"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++) {
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            }

            break;
    }


    drawResults(results);
}

//Onclick of dropdown selection, this function creates a new URL path for the selection in items.html, with a hash with the name of the table
//This way it still executes the gatherData() function even on page reload
function loadResults(selection) {
    console.log("loadResults", selection)
    window.location.href = 'items.html#' + selection;
}


//This function actually handles the selection hash change. Referrer is used if the hash is loaded from an html that is not items.html
function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        gatherData(hash);
    } else {
        // Check if the page was loaded from a dropdown link on another page
        const referer = document.referrer;
        //referer misspelled for variable name so it does not actually use referrer from js
        if (referer) {
            const refererHash = new URL(referer).hash.slice(1);
            if (refererHash) {
                gatherData(refererHash);
                // Update the URL hash to match the selected table
                window.location.hash = refererHash;
            }
        }
    }
}


// Event listener for hash changes
window.addEventListener("hashchange", handleHashChange);

// Load the correct table based on the URL hash when the page is first loaded
window.addEventListener("DOMContentLoaded", handleHashChange);


function drawResults(results) {

    // Wiping content clean if anything already exists
    let target = document.getElementById("content") || document.getElementById("content-home") || document.getElementById("content-form");

    if (target.id !== "content") {
        // If target div id is not 'content', set it to 'content' for styling purposes for the tables
        target.id = "content";
    }

    target.innerText = "";


    let table_wrapper = document.createElement("div");
    table_wrapper.classList.add("item-select-wrapper");

    let table = document.createElement("table");
    table_wrapper.appendChild(table);
    let table_head = document.createElement("thead");
    table.appendChild(table_head);

    let table_head_row = document.createElement("tr");
    table_head.appendChild(table_head_row);

    // Table headers are in the first position of results aka results[0]. After this statement, they will be removed and stored in table_headers
    let table_headers = results.shift();

    // Setting the table headers
    table_headers.forEach(header => {
        let headerItem = document.createElement("th")
        headerItem.innerText = header.charAt(0).toUpperCase() + header.slice(1);
        table_head_row.appendChild(headerItem);
    });

    // Creating the table body
    let table_body = document.createElement("tbody");
    table.appendChild(table_body);

    // Setting the tbody content
    results.forEach(row => {
        let table_row = document.createElement("tr");
        table_body.appendChild(table_row);

        Object.keys(row).forEach(key => {
            let listItem = document.createElement("td")
            listItem.innerText = row[key];
            table_row.appendChild(listItem);
        });
    })

    target.appendChild(table_wrapper);

}