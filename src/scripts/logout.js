function logout() {
    if (typeof localStorage !== 'undefined') {
        localStorage.clear();
    }
    window.location.href = "login.html";
}

document.querySelector('.logout-link').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});
