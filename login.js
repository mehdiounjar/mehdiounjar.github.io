function a()
{
    var u=document.getElementById('username').value;
    var p=document.getElementById('password').value;
    localStorage.setItem("user",u);
    localStorage.setItem("pass",p);
    window.location="index.html";
}
function validation()
{
var u=document.getElementById("username").value;
var p=document.getElementById("password").value;
if (u == window.localStorage.getItem("user") && p == window.localStorage.getItem("pass")) 
        {
           window.location="home.html";
        } else{
            alert("Wrong information");
             }      

}



function back()
{
    window.location="index.html";
}
function i()
{
    window.location="register.html";
}