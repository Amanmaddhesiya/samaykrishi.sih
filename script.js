/* ==========================================
   SAMAY KRISHI - FRONTEND DEMO
========================================== */

let selectedRole = "Farmer";
let currentLanguage = "en";
let users = [];

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";
    document.querySelector(".language-btn").textContent =
        currentLanguage === "en" ? "हिन्दी" : "English";
}

function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function openRegister() {
    document.getElementById("registerModal").classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

function selectRole(element, role) {
    document.querySelectorAll(".role").forEach(item => item.classList.remove("selected"));
    element.classList.add("selected");
    selectedRole = role;
}

function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const mobile = document.getElementById("regMobile").value.trim();
    const aadhaar = document.getElementById("regAadhaar").value.trim();
    const village = document.getElementById("regVillage").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    if (!/^\d{10}$/.test(mobile)) {
        showError("mobileError");
        return;
    }
    hideError("mobileError");

    if (!/^\d{12}$/.test(aadhaar)) {
        showError("aadhaarError");
        return;
    }
    hideError("aadhaarError");

    if (password !== confirmPassword) {
        showError("passwordError");
        return;
    }
    hideError("passwordError");

    if (users.some(user => user.mobile === mobile)) {
        showToast("This mobile number is already registered.");
        return;
    }

    users.push({
        name,
        mobile,
        village,
        password,
        role: "Farmer",
        slot: null,
        token: null
    });

    closeModal("registerModal");
    showToast("Registration successful! Please login.");
    event.target.reset();

    setTimeout(() => openLogin(), 900);
}

function handleLogin(event) {
    event.preventDefault();

    const mobile = document.getElementById("loginMobile").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!/^\d{10}$/.test(mobile)) {
        showError("loginMobileError");
        return;
    }
    hideError("loginMobileError");

    if (selectedRole === "Admin" && mobile === "9999999999" && password === "admin123") {
        closeModal("loginModal");
        showDashboard("Admin", "Procurement Admin");
        return;
    }

    if (selectedRole === "Centre" && mobile === "8888888888" && password === "centre123") {
        closeModal("loginModal");
        showDashboard("Centre", "Procurement Centre");
        return;
    }

    const user = users.find(item => item.mobile === mobile && item.password === password);

    if (!user) {
        showToast("Invalid mobile number or password.");
        return;
    }

    closeModal("loginModal");
    showDashboard("Farmer", user.name);
}

function showDashboard(role, name) {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("dashboard").classList.add("active");
    document.getElementById("dashboardUser").textContent = name;

    document.getElementById("farmerDashboard").style.display = role === "Farmer" ? "block" : "none";
    document.getElementById("adminDashboard").style.display = role === "Admin" ? "block" : "none";
    document.getElementById("centreDashboard").style.display = role === "Centre" ? "block" : "none";

    document.getElementById("avatar").textContent =
        role === "Farmer" ? "👨‍🌾" :
        role === "Admin" ? "🧑‍💼" : "🏢";
}

function openBooking() {
    document.getElementById("bookingModal").classList.add("active");
}

function bookSlot() {
    const centre = document.getElementById("centreSelect").value;
    const produce = document.getElementById("produceSelect").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("timeSlot").value;

    if (!centre || !produce || !date || !time) {
        showToast("Please fill all booking details.");
        return;
    }

    const token = "A-" + Math.floor(120 + Math.random() * 80);

    document.getElementById("slotStat").textContent = time.split(" - ")[0];
    document.getElementById("tokenStat").textContent = token;
    document.getElementById("queueToken").textContent = token;
    document.getElementById("queueSlot").textContent = time;

    closeModal("bookingModal");
    showToast("Slot booked successfully! Token: " + token);
}

function showQueue() {
    document.getElementById("queueModal").classList.add("active");
}

function showProcurement() {
    document.getElementById("procurementModal").classList.add("active");
}

function showPayment() {
    document.getElementById("paymentModal").classList.add("active");
}

function logout() {
    document.getElementById("dashboard").classList.remove("active");
    document.getElementById("landingPage").style.display = "block";
    showToast("Logged out successfully.");
}

function switchToRegister() {
    closeModal("loginModal");
    openRegister();
}

function switchToLogin() {
    closeModal("registerModal");
    openLogin();
}

function showError(id) {
    document.getElementById(id).style.display = "block";
}

function hideError(id) {
    document.getElementById(id).style.display = "none";
}

function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMessage").textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

document.querySelectorAll('input[inputmode="numeric"]').forEach(input => {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
});

document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});
