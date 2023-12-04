const navlinks = document.querySelector('.nav-links')

function openNav(){
    navlinks.style.display = 'block';
}
function closeNav(){
    navlinks.style.display = 'none';
}


// Goto Top


 


// document.addEventListener("scroll", function() {
//     var scrollPosition = window.scrollY;
//     let navbar = document.getElementById("navBar");

//     if (scrollPosition > 200){

//         navbar.classList.add('sticky')
//     }
//     else {
//         navbar.classList.remove('sticky')     
//     }
//   });







function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modals when clicking outside the modal content
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};

