function RegisterValidation(){
    var fname=document.myform.fname.value;
    var lname=document.myform.lname.value;
    var email = document.myform.email.value;
    var mobileno=document.myform.mobileno.value;
    if(fname == ""|| lname == "" || email == "" || createpassword == "" || confirmpassword == "" || mobileno == "") {
        alert("All required fields must be filled out");
        return false;
    }
}

