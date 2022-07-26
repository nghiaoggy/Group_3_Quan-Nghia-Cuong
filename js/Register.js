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