var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("sidebar-caret").src = "../images/icons8-chevron-up-30.png";
  
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  console.log("in function")
  let shows = document.getElementsByClassName("show")
  let isShown = true ? shows === undefined || shows.length == 0 : false;
  if(isShown){
    document.getElementById("sidebar-caret").src = "../images/icons8-chevron-down-30.png";
  }
  else{
    document.getElementById("sidebar-caret").src = "../images/icons8-chevron-up-30.png";
  }
  if (!event.target.matches(['.sidebar-link', '.sidebar-icon', '#sidebar-caret'])) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    // let caret = document.getElementById("sidebar-caret").src = "../images/icons8-chevron-down-30.png";
    
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("sidebar-caret").src = "../images/icons8-chevron-up-30.png";
      }
    }
  } 
  
}

document.addEventListener("DOMContentLoaded", function() {
  const middleSidebarListItems = document.querySelectorAll(".middle-sidebar-list");

  middleSidebarListItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
      this.classList.add("middle-sidebar-list-hover");
    });

    item.addEventListener("mouseleave", function() {
      this.classList.remove("middle-sidebar-list-hover");
    });
  });
});
