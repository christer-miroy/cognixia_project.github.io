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
        window.location.href = "login-success.html"; // redirect to login-success.html
        return true;
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});