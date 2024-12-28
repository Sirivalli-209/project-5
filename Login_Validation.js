function loginValidation(){
    var uname=document.myform.username.value;
    var pass=document.myform.password.value;
    if(uname == null || uname == ""){
        alert("Name cant be blank");
        return false;
    }
    else if(pass.length <6){
        alert("Password must be atleast 6 characters long")
        return false;
    }
}