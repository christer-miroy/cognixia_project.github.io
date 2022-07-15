const email = localStorage.getItem("UserLogin");
console.log(email);
document.getElementById('email').innerHTML = email;

/*event listeners to the navigational tabs*/
// (1) Chat Tab
const chat = document.getElementById("chat");
chat.addEventListener('submit', function(e) {
    e.preventDefault(e);
    window.href="chat.html" //redirect to chat.html
});
//(2) Manage Users Tab
const user_list = document.getElementById("user-list");
user_list.addEventListener('submit', function(e) {
    e.preventDefault(e);
    window.href="user-list.html" //redirect to user-list.html
});