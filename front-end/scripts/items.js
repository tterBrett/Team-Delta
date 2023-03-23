document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(event)
    let windowsLocation = window.location.href;

    requestedItemsList = windowsLocation.substring(window.location.href.lastIndexOf("/") + 1, windowsLocation.length - 5);

    console.log(`${requestedItemsList} page has finsihed loading.`)
    
    nameTables = ["Visuals", "PowerSupply", "Firewall", "USB"]
    
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    fetch("http://localhost:3000/api/home")
    .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()` or .text() 
        return response.text();
    }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data);  
    });
});

function printMySelection(selection){
    fetch(`http://localhost:3000/api/tables/${selection}`)
    .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()` or .text() 
        return response.text();
    }).then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log("Data", data)
        document.getElementsByClassName("header-title")[0].innerHTML = selection;
        document.getElementById("content").innerHTML = data;
        
    });

}