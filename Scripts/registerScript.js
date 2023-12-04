const registerForm = document.getElementById("register-form");

function numCheck(pass){
    for(let i = 0; i < pass.length; i++){
        if(isNaN(pass[i]) == false){
            return true;
        }
    }
    return false;
}

var username = document.getElementById("username").value;
var fullname = document.getElementById("fullname").value;
var email = document.getElementById("email").value;
var password1 = document.getElementById("password").value;
var password2 = document.getElementById("confirmPass").value;

var verified = 1;

function validateUsername(){
    if(username.length == 0){
        console.log("Username kosong");
        document.getElementById("usernameError").innerHTML = "Username should be filled";

        verified = 0;
    }else{
        if(username.length < 3 || username.length > 16){
            console.log("Username belum tepat");
            document.getElementById("usernameError").innerHTML = "Username should have 3 - 16 characters";

            verified = 0;
        }else{
            console.log("Username sudah tepat");
            document.getElementById("usernameError").innerHTML = "";
        }
    }
}

function validateFullname(){
    if(fullname.length == 0){
        console.log("Fullname kosong");
        document.getElementById("fullnameError").innerHTML = "Full name should be filled";

        verified = 0;
    }else{
        if(fullname.length < 5){
            console.log("Fullname belum tepat");
            document.getElementById("fullnameError").innerHTML = "Full name should atleast have 5 characters";

            verified = 0;
        }else{
            console.log("Fullname sudah tepat");
            document.getElementById("fullnameError").innerHTML = "";
        }
    }
}

function validateEmail(){
    if(email.length == 0){
        console.log("Email kosong");
        document.getElementById("emailError").innerHTML = 'Email should be filled';

        verified = 0;
    }else{
        if(email.includes('@')) {
            console.log("Email sudah tepat");
            document.getElementById("emailError").innerHTML = '';
        }else{
            console.log("Email belum tepat");
            document.getElementById("emailError").innerHTML = 'Email requires the "@" sign';

            verified = 0;
        }
    }
}

function validatePassword(){
    if(password1.length == 0 || password2.length == 0){
        console.log("Password kosong");
        document.getElementById("passwordError").innerHTML = "Password and it's confirmation should be filled";

        verified = 0;
    }else{
        if(numCheck(password1)) {
            if(password1 == password2){
                console.log("Password sudah tepat");
                document.getElementById("passwordError").innerHTML = '';
            }else{
                console.log("Konfirmasi password tidak sesuai");
                document.getElementById("passwordError").innerHTML = 'Password confirmation does not match';
                verified = 0;
            }
        }else{
            console.log("Password harus memiliki 1 angka");
            document.getElementById("passwordError").innerHTML = 'Password should atleast have 1 number';
            verified = 0;
        }
    }
}

registerForm.addEventListener("submit", function(submitAction){
    submitAction.preventDefault();

    username = document.getElementById("username").value;
    fullname = document.getElementById("fullname").value;
    email = document.getElementById("email").value;
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("confirmPass").value;

    verified = 1;

    validateUsername();
    validateFullname();
    validateEmail();
    validatePassword();

    if(verified == 1){
        alert("Registration Success, Returning to Home Page");
        window.open("index.html", "_self");
    }
}); 