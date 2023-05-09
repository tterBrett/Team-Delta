//Code is owned by Sam Hill
//Personal Contact Info:
//Phone: 443-591-0103
//Email: hillsam38@gmail.com
const itemAndAttributes = {
  MSE: [{
    key: 'brand',
    label: 'Brand',
    options: ['Dell', 'Apple']
  }],
  KeyB: [{
    key: 'brand',
    label: 'Brand',
    options: ['Dell']
  }, ],

  PowerSupply: [{
      key: 'device_type',
      label: 'Type',
      options: ['Power Cable', 'Charger', 'Power Strip', 'Misc']
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        'Power Cable': ['PC Power Cable', 'Robotics Power Cable'],
        Charger: ['Lenovo Charger', 'HP65W Charger', 'Smart USB Charger'],
        Misc: ['Dell 7040 Mini', 'AC Adapter MS Surface', 'XP1S12', 'Heavy Duty Extension Cord', 'Surge Supressor', 'Altiva Extender', 'Orange Extension Cord', 'Extension Cord'],
        'Power Strip': ['Normal Power Strip', 'Small Power Strip', 'App Surge Strip']
      },
      dependentOn: 'device_type'
    }
  ],
  Firewall: [{
      key: 'brand',
      label: 'Brand',
      options: ['Cisco']
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        Cisco: ['pix501', 'pix515e']
      },
      dependentOn: 'brand'
    }
  ],
  Audio: [{
      key: 'cable_type',
      label: 'Type',
      options: ['Microphone', 'Connector', 'Aux', 'Misc']
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        Microphone: ['iRigMic', '3 Ring Extender', 'AWM Cable', 'Small Mic'],
        Connector: ['RWY Cables', 'rc59/uCable'],
        Aux: ['Apple Headphone Jack', 'RW Aux Splitter', 'USB mC to Aux Splitter', 'Yellow and White Splitter', 'Berkelin Table', 'Labtec Aux', 'Male To Female', 'Green and Red Aux',
          'Belkin Stereo Extender', '3.5mm Stereo Cable', 'Aux Splitter', 'Headset Aux Splitter',
        ],
        Misc: ['RYW Head Extender', '3AWM Cable', 'USB C to Audio Jack', 'Berlin Splitter', 'Green and Red Splitter', 'Wooded Voip Adapter', 'Headset Adapter']
      },
      dependentOn: 'cable_type'
    }
  ],
  Switches: [{
      key: 'brand',
      label: 'Brand',
      options: ['Cisco', 'Juniper'],
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        Juniper: ['srx210', 'ex2200c'],
        Cisco: ['3560', '3560G', '3560CG', '3750', '2950', '2960G', '1800', 'SG300-10', 'SR2024', 'Wifi Card', 'Wi-Spy']
      },
      dependentOn: 'brand'
    }
  ],
  Visuals: [{
      key: 'cable_type',
      label: 'Type',
      options: ['DVI', 'VGA', 'HDMI', 'Display Port', 'Misc']
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        DVI: ['DVI Cable', 'DVI to HDMI', 'DVI to VGA Adapter'],
        VGA: ['VGA Cable', 'VGA to DVI', 'Ethernet to VGA'],
        HDMI: ['HDMI Cable', 'IP5 to HDMI', 'Mini HDMI to HDMI', 'Mini HDMI to USB', 'Micro HDMI'],
        Misc: ['DocktoIpad', 'TouchMonitor'],
        'Display Port': ['Display to HDMI', 'Display to DVI', 'Display Port', 'Display to HDMI', 'Display to VGA', 'Display to Mini Display']
      },
      dependentOn: 'cable_type'
    }
  ],
  Ethernet: [{
    key: 'is_Long',
    label: 'Length',
    options: ['Long', 'Short']
  }],
  USB: [{
      key: 'connector',
      label: 'Connector',
      options: ['Extenders', 'USB C', 'Micro USB', 'Flash Drive', 'Type 3', 'Misc']
    },
    {
      key: 'name',
      label: 'Name',
      options: {
        Extenders: ['USBExt', 'USB2.0', 'USB3', 'USBA'],
        Misc: ['USB A to B', 'Fire Wire to MicroUSB', 'USB to Ethernet Adapter', 'Male A to Female A', 'Type A to Micro USB-B', 'USB to VGA', 'USB Block',
          'Fire Wire', 'USB C to Mini HDMI', 'USB C to Headphone Jack'
        ],
        'Micro USB': ['Micro USB', 'Micro USB to HDMI'],
        'Type 3': ['Usb to Type 3'],
        'USB C': ['USB C to MaleA', 'USB C to C', 'USB C to Female USB A', 'USB C to Type B', 'USB C to USB C', 'USB C to USB B'],
        'Flash Drive': ['16gb USB Flash Drive']
      },
      dependentOn: 'connector'
    }
  ]
};

function populateAttributes() {

  const item = document.getElementById('item').value;
  const attributes = itemAndAttributes[item] || [];
  const attributesDiv = document.getElementById('attributes');
  attributesDiv.innerHTML = '';
  attributes.forEach(attribute => {
    const label = document.createElement('label');
    label.setAttribute('for', attribute.key);
    label.innerText = attribute.label + ':';
    attributesDiv.appendChild(label);

    const select = document.createElement('select');
    select.setAttribute('id', attribute.key);
    select.setAttribute('name', attribute.key);

    select.addEventListener('change', () => {
      validateForm();
      updateDependentOptions(attribute.key);
    });

    const emptyOption = document.createElement('option');
    emptyOption.setAttribute('value', '');
    emptyOption.innerText = 'Select a ' + attribute.label;
    select.appendChild(emptyOption);

    // Check if the options are an object or an array
    const optionsArray = Array.isArray(attribute.options) ? attribute.options : Object.values(attribute.options);

    optionsArray.forEach(optionValue => {
      const option = document.createElement('option');
      option.setAttribute('value', optionValue);
      option.innerText = optionValue;
      select.appendChild(option);
    });

    attributesDiv.appendChild(select);
    attributesDiv.appendChild(document.createElement('br'));
    attributesDiv.classList.toggle('hidden', !item);


    if (attribute.dependentOn) {
      // Hide the dependent attribute until the attribute it depends on has a value
      const dependentAttribute = document.getElementById(attribute.key);
      const dependentLabel = attributesDiv.querySelector(`label[for="${attribute.key}"]`);
      dependentLabel.classList.toggle('hidden', true);
      dependentAttribute.classList.toggle('hidden', true);

      // Add event listener to the attribute it depends on
      const dependentOnAttribute = document.getElementById(attribute.dependentOn);
      dependentOnAttribute.addEventListener('change', () => {
        const selectedValue = dependentOnAttribute.value;
        dependentAttribute.classList.toggle('hidden', !selectedValue);

        // Show the label for the dependent attribute if it is hidden and the parent attribute has a value
        dependentLabel.classList.toggle('hidden', !selectedValue);

        //Make sure dependent option has Select a ___ instead of Select ____
        const dependentEmptyOption = dependentAttribute.querySelector('option[value=""]');
        dependentEmptyOption.innerText = selectedValue ? 'Select a ' + attribute.label : 'Select ' + attribute.label;
      });
    }
  });

  validateForm();
}


function validateForm() {
  const reqBtn = document.getElementById('reqBtn');

  const itemElement = document.getElementById('item');
  const areSelectsValid = [...document.getElementById('attributes').getElementsByTagName('select')].every(select => select.value !== '');
  const areItemsValid = itemElement.value != '';

  const isValid = areSelectsValid && areItemsValid;
  reqBtn.disabled = !isValid;

}

function updateDependentOptions(selectedAttributeKey) {
  const item = document.getElementById('item').value;
  const attributes = itemAndAttributes[item] || [];

  attributes.forEach(attribute => {
    if (attribute.dependentOn === selectedAttributeKey) {
      const select = document.getElementById(attribute.key);
      const selectedValue = document.getElementById(selectedAttributeKey).value;
      const options = attribute.options[selectedValue] || [];

      select.innerHTML = '';

      const emptyOption = document.createElement('option');
      emptyOption.setAttribute('value', '');
      emptyOption.innerText = 'Select ' + attribute.label;
      select.appendChild(emptyOption);

      options.forEach(optionValue => {
        const option = document.createElement('option');
        option.setAttribute('value', optionValue);
        option.innerText = optionValue;
        select.appendChild(option);
      });
    }
  });

  validateForm();
}


function resetForm() {
  // Reset the form
  const mainForm = document.getElementById("mainForm");
  mainForm.reset();

  // Reset the check in and check out buttons
  const reqBtn = document.getElementById('reqBtn');
  reqBtn.disabled = true;

  const attributes = document.getElementById("attributes");
  attributes.innerHTML = "";

  location.reload();
}


//This function will display the item and its attributes in the email
function emailSelectedItem() {
  const selectedItem = document.getElementById('item').value;
  const selectedItemName = document.getElementById('item').options[document.getElementById('item').selectedIndex].text;
  const attributes = itemAndAttributes[selectedItem] || [];
  const selectedAttributes = [];

  attributes.forEach(attribute => {
    selectedAttributes.push(document.getElementById(attribute.key).value);
  });

  return selectedItemName + ' | ' + selectedAttributes.join(' | ');
}

function handleSubmit(event) {
  event.preventDefault(); // This line prevents the form from resetting, which is the default for a form button since it acts as a submit button

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  window.location = 'mailto:jcummings@towson.edu?subject=' + encodeURIComponent('Requesting to Check Out an Item') +
    '&body=' + encodeURIComponent('Requesting: ' + emailSelectedItem()) + '%0A' + encodeURIComponent(' ');
}