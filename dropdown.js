
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */

$(document).ready(function () {
   
    $(".dropdown").click(function (event) {
        $(this).children(".dropdowncontent").toggle();
        
        event.stopPropagation();
    });
    
   
});


$(window).click(function () {
    
    $(".dropdowncontent").hide();
});

