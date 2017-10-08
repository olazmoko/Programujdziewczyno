'use strict';
//dropdown menu
document.addEventListener('DOMContentLoaded', function(){
   var forDropdown = document.querySelector('.for-dropdown');
    var Dropdown = document.querySelector('.dropdown');
    forDropdown.addEventListener('mouseover', function() {
        Dropdown.style.display = "block";
    });
    forDropdown.addEventListener('mouseout', function(){
        Dropdown.style.display = "none";
    });
   
    
    //przyciski
    var buttons = document.querySelectorAll('.read-more');
    
   
   
    function showHide () {
         var textArea = this.previousElementSibling;
      if (textArea.style.display == 'none' || textArea.style.display == '') {
          textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      }else{
          textArea.style.display = 'none';
          this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', showHide);
        }
       // buttons[0].addEventListener('click', showHide);
     
  // for (var i = 0; i < buttons.length; i++) {
      // buttons[i].addEventListener('click', showHide);
   
  // })
    
});