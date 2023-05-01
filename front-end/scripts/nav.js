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
  const dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.maxHeight === "0px" || dropdownContent.style.maxHeight === "") {
    const totalHeight = Array.from(dropdownContent.children).reduce((sum, child) => sum + child.offsetHeight, 0);
    dropdownContent.style.maxHeight = totalHeight + "px";
  } else {
    dropdownContent.style.maxHeight = "0px";
  }
  
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
  if (!event.target.matches(['.sidebar-link', '.sidebar-icon', '.middle-sidebar-list'])) {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.maxHeight = "0px";
    document.getElementById("sidebar-caret").src = "../images/icons8-chevron-down-30.png";

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
