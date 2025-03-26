// Login logout
function showLogin() {
    document.getElementById("loginBox").classList.remove("hidden");
}

function hideLogin() {
    document.getElementById("loginBox").classList.add("hidden");
}

function login() {
    if (document.getElementById("username").value === "yoyo" && document.getElementById("email").value === "ssmidvacha@gmail.com" && document.getElementById("password").value === "1624") {
        localStorage.setItem("loggedIn", "true");
        updateUI();
    } else {
        document.getElementById("errorMsg").classList.remove("hidden");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    updateUI();
}

function updateUI() {
    let isLoggedIn = localStorage.getItem("loggedIn");
    document.getElementById("navLoginBtn").classList.toggle("hidden", isLoggedIn);
    document.getElementById("navLogoutBtn").classList.toggle("hidden", !isLoggedIn);
    hideLogin();
}

updateUI();