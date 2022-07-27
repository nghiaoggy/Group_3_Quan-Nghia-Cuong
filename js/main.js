window.onscroll = function () { navbarChange() };




function navbarChange() {
    navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 200 || screen.width <992) {
        navbar.classList.add("bg-black");
        navbar.classList.remove("bg-transparent");
        document.getElementById("arrowUp").classList.remove("d-none")

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


<<<<<<< HEAD
function userChange() {
    var x = document.getElementById("Selection").value;
    if (x==="other") {
        document.getElementById("demo").innerHTML = `<input class="form-control ml-3 mt-3" id="Certification" type="text" placeholder="Your Certification">`;
    }
    else document.getElementById("demo").innerHTML = ``;
}
function open1(){
    var x = document.getElementById("Menu")
    x.style.display = 'none';
    x = document.getElementById("for_partner")
    x.style.display = 'block';
}
function open2(){
    var x = document.getElementById("Menu")
    x.style.display = 'none';
    x = document.getElementById("for_user")
    x.style.display = 'block';
}

function ktra(){
    let email = String(document.getElementById("disableEmail"))
}

function open1(){
    $('.helpother').css({"display": "none"})
    $('.supportmenu').css({"width": "100%", "display": "flex"})
    $('.menulistpos').css({"height" : "100%"})
}
=======
>>>>>>> pr/3
