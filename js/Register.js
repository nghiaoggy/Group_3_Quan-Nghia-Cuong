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
function userChange() {
    var x = document.getElementById("Selection").value;
    if (x==="other") {
        document.getElementById("demo").innerHTML = `<input class="form-control ml-3 mt-3" id="Certification" type="text" placeholder="Your Certification">`;
    }
    else document.getElementById("demo").innerHTML = ``;
}
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
