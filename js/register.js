var users = JSON.parse(localStorage.getItem("userList")) ? JSON.parse(localStorage.getItem("userList")) : [] ;


let registerBtn = document.querySelector("#registerBtn"); //register.html

registerBtn.addEventListener('click', registerUser); //register.html event listener
function registerUser(event) {
    //register.html
    let user = {
        //DOM declaration
        id: Number(new Date()),
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    
    //empty field validation and matching password verification
    if (user.fullName == "") {
        event.preventDefault(); //prevent redirect to the next page when true
        alert("Please enter full name.");
        return false;
    } else if (user.email == ""){
        event.preventDefault();
        alert("Please enter email");
        return false;
    } else if (user.password == "") {
        event.preventDefault();
        alert("Please enter password.");
        return false;
    } else if (document.getElementById("confirmPassword").value == "") {
        event.preventDefault();
        alert("Please enter password.");
        return false;
    } else if (user.password != document.getElementById("confirmPassword").value) {
        event.preventDefault();
        //matching password verification
        alert("Passwords does not match. Please try again.");
        return false;
    } else {
        /* successful registration */
        users.push(user);
        document.querySelector("#registerForm").reset();
        localStorage.setItem("userList", JSON.stringify(users));
        return true;
    }
}
/*
loginBtn.addEventListener('click', userLogin); //login.html event listener
var loginEmail = ""; //to save to localstorage if login is successfull

function userLogin(event) {
    //login.html
    let login = {
        //set DOM elements
        loginId: Number (new Date()),
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    
    let loginArray = new Array;
    loginArray = JSON.parse(localStorage.getItem("userList")); //convert string to object
 
    //empty field validation
    if ((login.email == "") || (login.password == "")) {
        event.preventDefault();
        alert("Incomplete login details. Please try again.");
        return false;
    }

    var compareEmail = "";
    var comparePassword = "";

    //login validation
    for (loopEmail = 0; loopEmail < loginArray.length; loopEmail++) {
        if (loginArray[loopEmail].email == login.email) {
            compareEmail = loginArray[loopEmail].email; //copy the value
            console.log("compareEmail: " + compareEmail);
            console.log("login.email: " + login.email);
            loopEmail = loginArray.length; //terminate loop
        } else {
            console.log("compareEmail: " + compareEmail);
            console.log("login.email: " + login.email);
        }
    }

    for (loopPassword = 0; loopPassword < loginArray.length; loopPassword++) {
        if (loginArray[loopPassword].password == login.password) {
            comparePassword = loginArray[loopPassword].password; //copy the value
            console.log("comparePassword: " + comparePassword);
            console.log("login.password: " + login.password);
            loopPassword = loginArray.length; //terminate loop
        } else {
            console.log("compareEmail: " + comparePassword);
            console.log("login.email: " + login.password);
        }
    }
    
    //compare
    if ((compareEmail == login.email) && (comparePassword == login.password)) {
        loginEmail = localStorage.setItem("UserLogin",login.email); //save to localstorage
        return true;
    } else {
        event.preventDefault(); //prevent redirect when false
        alert("Invalid login credentials. Please try again.");
    }
}

welcome.addEventListener('load', loginSuccess); //login-success.html event listener

function loginSuccess() {
    //login-success.html
    var email = localStorage.getItem("UserLogin"); //retrieve from local storage
    console.log(email);
    document.getElementById("displayEmail").innerHTML = "Welcome " + email + "!";
}
*/
//rewriting login-success.html
/* working. copied to login-success.js
const welcome = document.getElementById('welcome');
welcome.addEventListener('load', function (e) {
    const email = localStorage.getItem("UserLogin");
    console.log(email);
    document.getElementById('email').innerHTML = email;
});
*/

//rewriting the login.html function

/* copied to login.js
const userLogin = document.getElementById('userLogin');

userLogin.addEventListener('submit', function (e) {
    e.preventDefault(e);

    let login = {
        //set DOM elements
        loginId: Number (new Date()),
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    let loginArray = new Array;
    loginArray = JSON.parse(localStorage.getItem("userList")); //convert string to object
 
    //empty field validation
    if ((login.email == "") || (login.password == "")) {
        alert("Incomplete login details. Please try again.");
        return false;
    }

    var compareEmail = "";
    var comparePassword = "";

    //login validation
    for (loopEmail = 0; loopEmail < loginArray.length; loopEmail++) {
        if (loginArray[loopEmail].email == login.email) {
            compareEmail = loginArray[loopEmail].email; //copy the value
            console.log("compareEmail: " + compareEmail);
            console.log("login.email: " + login.email);
            loopEmail = loginArray.length; //terminate loop
        } else {
            console.log("compareEmail: " + compareEmail);
            console.log("login.email: " + login.email);
        }
    }

    for (loopPassword = 0; loopPassword < loginArray.length; loopPassword++) {
        if (loginArray[loopPassword].password == login.password) {
            comparePassword = loginArray[loopPassword].password; //copy the value
            console.log("comparePassword: " + comparePassword);
            console.log("login.password: " + login.password);
            loopPassword = loginArray.length; //terminate loop
        } else {
            console.log("compareEmail: " + comparePassword);
            console.log("login.email: " + login.password);
        }
    }
    
    //compare
    if ((compareEmail == login.email) && (comparePassword == login.password)) {
        loginEmail = localStorage.setItem("UserLogin",login.email); //save to localstorage
        window.location.href = "login-success.html";
        return true;
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});
*/
