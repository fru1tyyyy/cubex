function saveUser(username, email, password){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.email === email);
    if(userExists){
        document.getElementById("message").innerText = "Email is already used";
        return false;
    }

    users.push({username, email, password});
    localStorage.setItem("users", JSON.stringify(users));
    return true;
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("signup-form").addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if(password.length < 6){
            document.getElementById("message").innerText = "At least 6 characters long";
            return;
        }

        if(password != confirmPassword){
            document.getElementById("message").innerText = "Password do not match";
            return;
        }

        const success = saveUser(username, email, password);
        if(success){
            document.getElementById("message").innerText = "";
            window.location.href = "login.html";
        }
    });
});
