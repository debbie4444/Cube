function toggleDropdown() {
    var dropdownContent = document.getElementById("sizeDropdown");
    dropdownContent.classList.toggle("show");
}


function selectOption(option) {
   
    console.log("Selected option: " + option);
}

window.onclick = function(event) {
    if (!event.target.matches('.toggleButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 

       