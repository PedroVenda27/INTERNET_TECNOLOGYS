const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});  


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



  function toggleDetails(id) {
    var row = document.getElementById(id);
    if (row.style.display === "none" || row.style.display === "") {
        row.style.display = "table-row";
    } else {
        row.style.display = "none";
    }
}
