var user=document.getElementById("id");
var pass=document.getElementById("pass");
var lgnbtn=document.getElementById("btn");
var form = document.getElementById("container");
var res=document.getElementById("result");

//Adding event listner 
lgnbtn.addEventListener("click",(e) => {
    e.preventDefault()



    //to prevent empty feilds
    if((user.value == "" || user.value == null) || (pass.value == "" || pass.value == null)){
        res.innerText = "Please Enter Details!!"
        res.style.color = "red"
    }

    //Checking the details with stored values
    else if (user.value == "spyder" && pass.value == "12345") {
        res.innerText = "Login Successful.."
        res.style.color = "green"
    }else {
        res.innerText = "Login Unsuccessful"
        res.style.color = "red";
    }
    
})