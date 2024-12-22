document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageBox = document.getElementById("message-box");

    // Yüklenme mesajını göster
    messageBox.textContent = "Logging in...";
    messageBox.className = "message info";
    messageBox.style.display = "block";

    try {
        const response = await apiFetch('/api/auth/login', 'POST', { username, password });

        if (response.token) {
            localStorage.setItem('authToken', response.token);
            window.location.href = '/index.html';
        } else {
            showMessage("error", "Login failed. Please try again.");
        }
    } catch (error) {
        showMessage("error", "An error occurred. Please try again.");
    }
});

function showMessage(type, message) {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
    messageBox.style.display = "block";
}