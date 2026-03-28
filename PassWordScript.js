const Username = document.getElementById("Username")
const Password = document.getElementById("Password")
const SubmitButton = document.getElementById("SubmitButton")
const LoginDenied = document.getElementById("LoginDenied")
let UserName = "";
let PassWord = "";

SubmitButton.onclick = function(){
    UserName = Username.value;
    PassWord = Password.value;
    if(UserName == "Hector Lopes" && PassWord == "Hector280798"){
        window.location.href = "MainPage.html"
        LoginDenied.textContent = "";
    } else {
        LoginDenied.textContent = "Invalid Login";
    }
}