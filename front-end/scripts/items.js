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
  
  async function gatherData(selection) {
    let requiredTables = []
    let results = []

    document.getElementsByClassName("header-title")[0].innerHTML = selection;
    // document.getElementById("content").innerHTML = selection;
    switch(selection){

        case "MSE":
        requiredTables = ["MSE"];
        results.push(["brand", "quantity"]);
        for (var i = 0; i < requiredTables.length; i++) {
            const rr = await fetchData(requiredTables[i])
            for (var y = 0; y < rr.length; y++){
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
            for (var y = 0; y < rr.length; y++){
                results.push(rr[y]);
                // results.push(`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${requiredTables[i]} available for checkout`)
            }
        }

        break;
            
        
        case "Ethernet":
            requiredTables = ["Ethernet"];
            results.push(["Is Long?", "quantity"]);
            for (var i = 0; i < requiredTables.length; i++) {
                const rr = await fetchData(requiredTables[i])
                for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
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
                    for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
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
                for (var y = 0; y < rr.length; y++){
                    results.push(rr[y]);
                    // results.push((`There are ${rr[y]['quantity']} ${rr[y]['brand']} ${rr[y]['name']}'s ${requiredTables[i]} available for checkout`))
                }
            } 
            
            break;
    }


    drawResults(results);
}


function drawResults(results){
    
    // Wiping content clean if anything already exists
    let target = document.getElementById("content") || document.getElementById("content-home") || document.getElementById("content-form");
    
    if (target.id !== "content") {
        // If target div id is not 'content', set it to 'content' for styling purposes
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
        headerItem.innerText = header
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

function checkout() {
    // POST request to /checkout
    const selectedCategory = document.getElementById('category').value;
    const subcategories = categoryToSubcategories[selectedCategory] || [];
    const selectedSubcategories = [];

    subcategories.forEach(subcategory => {
    selectedSubcategories.push(document.getElementById(subcategory.key).value);
});
    console.log(selectedSubcategories);
    fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify({
        "sub":selectedSubcategories, 
        "main": selectedCategory
       })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    .catch(error => console.error(error))
}