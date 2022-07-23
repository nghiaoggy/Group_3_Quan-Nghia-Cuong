window.onscroll = function () { navbarChange() };




function navbarChange() {
    navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 200 || screen.width <992) {
        navbar.classList.add("bg-black");
        navbar.classList.remove("bg-transparent");
        document.getElementById("arrowUp").classList.remove("d-none")
        document.getElementById("")
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-transparent");
        document.getElementById("arrowUp").classList.add("d-none")
    }
}

function onTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ===============================================================
// User and Password Validation
// ===============================================================

function validate() {
    var username = document.getElementById("Username");
    var password = document.getElementById("Password");
    var btnSubmit = document.getElementById("login");
    var avatar = document.getElementById("user");

    if (username.value == "admin" && password.value == "admin") {
        btnSubmit.classList.add("d-none");
        avatar.classList.remove("d-none");
    } else {
        alert("Wrong username or password");
    }
}

function signOut() {
    var btnSubmit = document.getElementById("login");
    var avatar = document.getElementById("user");
    avatar.classList.add("d-none");
    btnSubmit.classList.remove("d-none");
}