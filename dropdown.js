
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
//document.getElementById("issue50").addEventListener("click", myFunction);
$(document).ready(function () {
    $(".dropdown").click(function () {
        //$(this).hide();
        //$("this.dropdowncontent").show();
        $(this).children(".dropdowncontent").toggle();
        //alert("You entered p1!");
    });
});

/*
//need to hide dropdowncontent if clicked off
window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdowncontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/

/*
function myFunction() {
    
    document.getElementById("myDropdown").classList.toggle("show");
}
    
    // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/