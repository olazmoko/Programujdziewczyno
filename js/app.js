'use strict';
document.addEventListener('DOMContentLoaded', function(){
   var forDropdown = document.querySelector('.for-dropdown');
    var Dropdown = document.querySelector('.dropdown');
    forDropdown.addEventListener('mouseover', function() {
        Dropdown.style.display = "block";
    });
    forDropdown.addEventListener('mouseout', function(){
        Dropdown.style.display = "none";
    });
});