const categoryToSubcategories = {
  //**FUTURE PROJECT**
  //  If Kyle adds a new item, for example a new firewall with a different brand and name,
  //  it will add the item to the database, but not to the dropdown menus here. A project is to 
  //  make it so kyle can select other for any subcategory, and then enter the name himself to match the database to checkout or checkin.
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

function populateSubcategories() {

  const category = document.getElementById('category').value;
  const subcategories = categoryToSubcategories[category] || [];
  const subcategoriesDiv = document.getElementById('subcategories');
  subcategoriesDiv.innerHTML = '';
  const categoryElement = document.getElementById('category');
  categoryElement.addEventListener('change', () => {
    if (categoryElement.value === '') {
      const addBtn = document.getElementById('addItem');
      addBtn.disabled = true;
    }
  });
  subcategories.forEach(subcategory => {
    const label = document.createElement('label');
    label.setAttribute('for', subcategory.key);
    label.innerText = subcategory.label + ':';
    subcategoriesDiv.appendChild(label);

    const select = document.createElement('select');
    select.setAttribute('id', subcategory.key);
    select.setAttribute('name', subcategory.key);

    select.addEventListener('change', () => {
      validateForm();
      updateDependentOptions(subcategory.key);
    });

    const emptyOption = document.createElement('option');
    emptyOption.setAttribute('value', '');
    emptyOption.innerText = 'Select ' + subcategory.label;
    select.appendChild(emptyOption);

    // Check if the options are an object or an array
    const optionsArray = Array.isArray(subcategory.options) ? subcategory.options : Object.values(subcategory.options);

    optionsArray.forEach(optionValue => {
      const option = document.createElement('option');
      option.setAttribute('value', optionValue);
      option.innerText = optionValue;
      select.appendChild(option);
    });

    subcategoriesDiv.appendChild(select);
    subcategoriesDiv.appendChild(document.createElement('br'));
    subcategoriesDiv.classList.toggle('hidden', !category);


  if (subcategory.dependentOn) {
    // Hide the dependent subcategory until the subcategory it depends on has a value
    const dependentSubcategory = document.getElementById(subcategory.key);
    const dependentLabel = subcategoriesDiv.querySelector(`label[for="${subcategory.key}"]`);
    dependentLabel.classList.toggle('hidden', true);
    dependentSubcategory.classList.toggle('hidden', true);

    // Add event listener to the subcategory it depends on
    const dependentOnSubcategory = document.getElementById(subcategory.dependentOn);
    dependentOnSubcategory.addEventListener('change', () => {
      const selectedValue = dependentOnSubcategory.value;
      dependentSubcategory.classList.toggle('hidden', !selectedValue);

      // Show the label for the dependent subcategory if it is hidden and the parent subcategory has a value
      dependentLabel.classList.toggle('hidden', !selectedValue);
    });
  }
});
 
  validateForm();
}



function validateForm() {
const addBtn = document.getElementById('addItem');

const isValid = [...document.getElementById('subcategories').getElementsByTagName('select')].every(select => select.value !== '');

addBtn.disabled = !isValid;
}



function addItem(action) {
const selectedCategory = document.getElementById('category').value;
const subcategories = categoryToSubcategories[selectedCategory] || [];
const selectedSubcategories = {};

subcategories.forEach(subcategory => {
selectedSubcategories[subcategory.key] = document.getElementById(subcategory.key).value;
});

const addItemData = {
action: action,
category: selectedCategory,
subcategories: selectedSubcategories
};

//Open the are you sure(confirmation) modal
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const getSelectedItem = displaySelectedItem();

  if(action === 'add') {
    openConfModal('Are You Sure?', getSelectedItem);

    yesButton.onclick = function() {
      openSuccModal('Item Successfully Added!', getSelectedItem);
    };
    noButton.onclick = function() {
      closeConfModal();
    };
  }
  // Perform the required action with the checkInOutData
  // For example, you can send this data to the server for processing.
  console.log(addItemData);

}

function updateDependentOptions(selectedSubcategoryKey) {
const category = document.getElementById('category').value;
const subcategories = categoryToSubcategories[category] || [];

subcategories.forEach(subcategory => {
if (subcategory.dependentOn === selectedSubcategoryKey) {
  const select = document.getElementById(subcategory.key);
  const selectedValue = document.getElementById(selectedSubcategoryKey).value;
  const options = subcategory.options[selectedValue] || [];

  select.innerHTML = '';

  const emptyOption = document.createElement('option');
  emptyOption.setAttribute('value', '');
  emptyOption.innerText = 'Select ' + subcategory.label;
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
  const addBtn = document.getElementById('addItem');
  addBtn.disabled = true;

  const subcategories = document.getElementById("subcategories");
  subcategories.innerHTML = "";
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
  const selectedCategory = document.getElementById('category').value;
  const selectedCategoryName = document.getElementById('category').options[document.getElementById('category').selectedIndex].text;
  const subcategories = categoryToSubcategories[selectedCategory] || [];
  const selectedSubcategories = [];

  subcategories.forEach(subcategory => {
    selectedSubcategories.push(document.getElementById(subcategory.key).value);
  });

  return selectedCategoryName + ' | ' + selectedSubcategories.join(' | ');
}

function handleSubmit(event) {
  event.preventDefault(); // This line prevents the form from resetting
  addItem('add');
}