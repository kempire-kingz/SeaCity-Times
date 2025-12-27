const Username = document.getElementById("Username")
const Password = document.getElementById("Password")
const SubmitButton = document.getElementById("SubmitButton")
const MainPageLink = document.getElementById("MainPageLink")
const LoginDenied = document.getElementById("LoginDenied")
let UserName = "";
let PassWord = "";

SubmitButton.onclick = function(){
    UserName = Username.value;
    PassWord = Password.value;
    if(UserName == "Hector Lopes" && PassWord == "Hector280798"){
        MainPageLink.textContent = "Login Accepted, click to continue";
        LoginDenied.textContent = "";
    } else {
        MainPageLink.textContent = "";
        LoginDenied.textContent = "Invalid Login";
    }
}