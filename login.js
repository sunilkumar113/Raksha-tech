document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var message = document.getElementById('message');

    if (!username || !password) {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        return;
    }

    if (username === "user" && password === "password") {
        message.textContent = "Login successful!";
        message.style.color = "green";
        window.location.href = "./dashboard.html";
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
});
