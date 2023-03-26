const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function submit_form(){
    alert("Login successfully");
}

function create_account(){
    var n = document.getElementById("n1").value;
    var e = document.getElementById("e1").value;
    var p = document.getElementById("p1").value;
    // var cp = document.getElementById("p2").value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(n==''||e==''||p==''){
        alert("Enter each details correctly");
    }
    else if(!letters.test(n)){
        alert('Name is incorrect! Must contain alphabets');
    }
    else if(!email_val.test(e)){
        alert('Invalid email format! Please enter valid email');
    }
    // else if(p!=cp){
    //     alert("Passwords not matching");
    // }
    else if(document.getElementById("p1").value.length > 12){
        alert("Password maximum length is 12");
    }
    else if(document.getElementById("p1").value.length < 6){
        alert("Password minimum length is 6");
    }
    else{
        alert("Your account has been created successfully...");
        // window.location="https://www.javatpoint.com/";
        // location.replace("https://www.w3schools.com");
    }
}