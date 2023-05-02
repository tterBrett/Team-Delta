function updateSubcategories() {
  var category = document.getElementById("category").value;
  var subcategories = document.getElementById("subcategories");

  // Clear the subcategories dropdowns
  subcategories.innerHTML = "";

  // Create new dropdowns for each category
  switch (category) {
    case "Mouse":
      createDropdown("Brand", ["Dell", "Apple"], subcategories);
    
      break;
    case "Power Supply":
      createDropdown("Type", ["t1", "t2", "t3"], subcategories);
  
      break;
    case "Firewalls":
      createDropdown("Brand", ["Brand 1", "brand2", "Brand3"], subcategories);
      createDropdown("Name", ["n1", "n2", "n3"], subcategories);
      break;
    case "Audio": 
      createDropdown("Cable Type", ["type1", "type2", "type3"], subcategories); 
      break; 
    case "Switches": 
      createDropdown("Brand", ["Brand 1", "brand2", "Brand3"], subcategories);
      createDropdown("Name", ["n1", "n2", "n3"], subcategories);
      break;
    case "Visual": 
      createDropdown("Cable Type", ["type1", "type2", "type3"], subcategories); 
      createDropdown("Name", ["n1", "n2", "n3"], subcategories);
      break; 
    case "Ethernet": 
      createDropdown("Length", ["Long", "Short"], subcategories);
      break; 
    case "USB": 
      createDropdown("Connector", ["con1", "con2", "con3"], subcategories); 
      createDropdown("Name", ["n1", "n2", "n3"], subcategories);
      break; 
    case "Keyboard":
      createDropdown("Brand", ["Dell", "Apple", "other"], subcategories);
      break; 
      
    default:
      break;
  }
}

function createDropdown(label, options, container) {
  // Create a new dropdown
  var dropdown = document.createElement("select");
  dropdown.name = label.toLowerCase();
  container.appendChild(document.createTextNode(label + ": "));
  container.appendChild(dropdown);
  container.appendChild(document.createElement("br"));

  // Add options to the dropdown
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    dropdown.appendChild(option);
  }
}
