const itemAndAttributes = {
  MSE: [
      {
          key: 'brand',
          label: 'Brand',
          options: ['Dell', 'Apple']
      }
  ],
  KeyB: [
    {
        key: 'brand',
        label: 'Brand',
        options: ['Dell']
    },
  ],

  PowerSupply: [
      {
          key: 'device_type',
          label: 'Type',
          options: ['power', 'charg', 'strip','misc']
      },
      {
        key: 'name',
        label: 'Name',
        options: {
          power: ['PCPowerCable','RoboticsPowCable'],
          charg: ['LenovoCharger','HP65WCharger','SmartUSBCharger'],
          misc: ['Dell7040mini','ACAdapterMSSurface','XP1S12','HeavyDutyExtCord','SurgeSupressor','AltivaExtender','OrangeExtCord','ExtensionCord'],
          strip: ['NormalPowerStrip','SmallpowerStrip','AppSurgeStrip']
        },
        dependentOn: 'device_type'
      }
  ],
  Firewall: [
      {
          key: 'brand',
          label: 'Brand',
          options: ['Cisco']
      },
      {
          key: 'name',
          label: 'Name',
          options: {
            Cisco: ['pix501','pix515e']
          },
          dependentOn: 'brand'
      }
  ],
  Audio: [
      {
          key: 'cable_type',
          label: 'Type',
          options: ['mic','con','aux']
      }
  ],
  Switches: [
      {
          key: 'brand',
          label: 'Brand',
          options: ['Cisco','Juniper'],
      },
      {
          key: 'name',
          label: 'Name',
          options: {
              Juniper: ['srx210','ex2200c'],
              Cisco: ['3560', '3560G', '3560CG', '3750', '2950', '2960G', '1800', 'SG300-10', 'SR2024', 'Wifi Card', 'Wi-Spy']
          },
          dependentOn: 'brand'
      }
  ],
  Visuals: [
      {
          key: 'cable_type',
          label: 'Type',
          options: ['dvi','vga','hdmi','display','adapt','misc']
      },
      {
          key: 'name',
          label: 'Name',
          options: {
             dvi: ['DVIcable','DVItoHDMI','DVAtoVGAAdapt'],
             vga: ['VGAcable','VGAtoDVI','EthernettoVGA'],
             hdmi: ['HDMIcable','IP5toHDMI','miniHDMI to HDMI','miniHDMItoUSB','MicroHDMI'],
             misc: ['DocktoIpad','TouchMonitor'],
             display: ['DisplaytoHDMI','DisplaytoDVI','DisplayPort','DisplaytoHDMI','DisplaytoVGA','DisplaytoMiniDisplay']
          },
          dependentOn: 'cable_type'
      }   
  ],
  Ethernet: [
      {
          key: 'is_Long',
          label: 'Length',
          options: ['Long','Short']
      }
  ],
  // ext, usbC, adapt, micro, flash, atob, type3, misc
  USB: [
      {
          key: 'connector',
          label: 'Connector',
          options: ['ext','usbc','micro','flash','type3','misc']
      },
      {
          key: 'name',
          label: 'Name',
          options: {
              ext: ['USBExt', 'USB2.0', 'USB3', 'USBA'],
              misc: ['USBAtoB', 'FireWiretoMicroUSB', 'USBtoEthernetAdapter', 'MaleAtoFemaleA', 'TypeAtoMicroB', 'USBtoVGA', 'USBBlock',
                     'FireWire','USBCtominiHDMI','USBCtoHeadphoneJack'],
              micro: ['microUSB','MicrotoHDMI'],
              type3: ['usbtotype3'],
              usbc: ['USBCtoMaleA', 'USBCtoC', 'USBCtoFemaleA','USBCtoTypeB','USBCtoUSBC','USBCtoUSBB'],
              flash: ['16gbUSBDrive']
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



function reqItem(action) {
  const selectedItem = document.getElementById('item').value;
  const attributes = itemAndAttributes[selectedItem] || [];
  const selectedAttributes = {};
  
  attributes.forEach(attribute => {
  selectedAttributes[attribute.key] = document.getElementById(attribute.key).value;
  });

  const reqItemData = {
  action: action,
  item: selectedItem,
  attributes: selectedAttributes
  };

//Open the are you sure(confirmation) modal
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const getSelectedItem = displaySelectedItem();

  if(action === 'req') {
    openConfModal('Are You Sure?', getSelectedItem);

    yesButton.onclick = function() {
      openSuccModal('Your Request Has Submitted!', getSelectedItem);
    };
    noButton.onclick = function() {
      closeConfModal();
    };
  }
  //Use this log to test if the object keys are being processed
  // console.log(reqItemData);

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


function resetModal() {
  // Reset the form
  const mainForm = document.getElementById("mainForm");
  mainForm.reset();

  // Reset the check in and check out buttons
  const reqBtn = document.getElementById('reqBtn');
  reqBtn.disabled = true;

  const attributes = document.getElementById("attributes");
  attributes.innerHTML = "";
}

function openConfModal(message, itemName = '') {
  const confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "block";
  var modalMessage = document.getElementById("confModalMessage");
  modalMessage.innerHTML = itemName ? message + '<br>Item: ' + itemName : message;
}

function closeConfModal() {
  const confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "none";
}

function openSuccModal(message, itemName = '') {
  closeConfModal(); // Make sure confirmation modal is closed to avoid double stacking styling issues.
  var modalMessage = document.getElementById("succModalMessage");
  modalMessage.innerHTML = itemName ? message + '<br>Item: ' + itemName : message;
  const succModal = document.getElementById("successModal");
  succModal.style.display = "block";
}

function closeSuccModal() {
  const succModal = document.getElementById("successModal");
  closeConfModal();
  resetModal();
  succModal.style.display = "none";
}

//This function will display the item details in the successful modal
function displaySelectedItem() {
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
  reqItem('req');
}