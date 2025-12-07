function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
        return true; 
    } 
    else {
        return false; 
    }
}
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const success = loginUser(email, password);
    if (success) {
       window.location.href = "game.html";
    } 
    else {
        document.getElementById('login-message').innerText = "Invalid email or password.";
    }
});
