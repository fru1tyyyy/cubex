document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contact");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const complains = document.getElementById("complains").value.trim();

        if(!username || !email || !complains){
            alert("Please enter all columns");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert('Please enter a valid email address');
            return;
        }

        alert("Message has sent, We will return to you and soon as possible !!!!");
        form.reset();
    })
})
