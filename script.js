/* ==========================================
   SAMAY KRISHI
   FRONTEND DEMO JAVASCRIPT
========================================== */

let selectedRole = "Farmer";

let currentLanguage = "en";

let users = [];


/* ==========================================
   LANGUAGE
========================================== */

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en" ? "hi" : "en";

    const button =
        document.querySelector(".language-btn");

    button.textContent =
        currentLanguage === "en"
        ? "हिन्दी"
        : "English";

}


/* ==========================================
   MODALS
========================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function openRegister() {

    document
        .getElementById("registerModal")
        .classList.add("active");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");

}


/* ==========================================
   ROLE SELECTION
========================================== */

function selectRole(element, role) {

    document
        .querySelectorAll(".role")
        .forEach(item => {

            item.classList.remove("selected");

        });

    element.classList.add("selected");

    selectedRole = role;

}


/* ==========================================
   REGISTER
========================================== */

function handleRegister(event) {

    event.preventDefault();


    const name =
        document.getElementById("regName")
        .value.trim();


    const mobile =
        document.getElementById("regMobile")
        .value.trim();


    const aadhaar =
        document.getElementById("regAadhaar")
        .value.trim();


    const village =
        document.getElementById("regVillage")
        .value.trim();


    const password =
        document.getElementById("regPassword")
        .value;


    const confirmPassword =
        document.getElementById("regConfirmPassword")
        .value;


    /* MOBILE */

    if (!/^\d{10}$/.test(mobile)) {

        showError("mobileError");

        return;

    }

    hideError("mobileError");


    /* AADHAAR / FARMER ID */

    if (!/^\d{12}$/.test(aadhaar)) {

        showError("aadhaarError");

        return;

    }

    hideError("aadhaarError");


    /* PASSWORD */

    if (password !== confirmPassword) {

        showError("passwordError");

        return;

    }

    hideError("passwordError");


    /* DUPLICATE MOBILE */

    if (
        users.some(
            user => user.mobile === mobile
        )
    ) {

        showToast(
            "This mobile number is already registered."
        );

        return;

    }


    /*
       IMPORTANT:

       Aadhaar is NOT stored in this
       frontend demo.
    */

    users.push({

        name: name,

        mobile: mobile,

        village: village,

        password: password,

        role: "Farmer",

        slot: null,

        token: null

    });


    closeModal("registerModal");


    showToast(
        "Registration successful! Please login."
    );


    event.target.reset();


    setTimeout(() => {

        openLogin();

    }, 900);

}


/* ==========================================
   LOGIN
========================================== */

function handleLogin(event) {

    event.preventDefault();


    const mobile =
        document.getElementById("loginMobile")
        .value.trim();


    const password =
        document.getElementById("loginPassword")
        .value;


    /* MOBILE VALIDATION */

    if (!/^\d{10}$/.test(mobile)) {

        showError("loginMobileError");

        return;

    }

    hideError("loginMobileError");


    /* ADMIN DEMO LOGIN */

    if (
        selectedRole === "Admin" &&
        mobile === "9999999999" &&
        password === "admin123"
    ) {

        closeModal("loginModal");

        showDashboard(
            "Admin",
            "Procurement Admin"
        );

        return;

    }


    /* CENTRE DEMO LOGIN */

    if (
        selectedRole === "Centre" &&
        mobile === "8888888888" &&
        password === "centre123"
    ) {

        closeModal("loginModal");

        showDashboard(
            "Centre",
            "Procurement Centre"
        );

        return;

    }


    /* FARMER LOGIN */

    const user =
        users.find(
            item =>
                item.mobile === mobile &&
                item.password === password
        );


    if (!user) {

        showToast(
            "Invalid mobile number or password."
        );

        return;

    }


    closeModal("loginModal");


    showDashboard(
        "Farmer",
        user.name
    );

}


/* ==========================================
   SHOW DASHBOARD
========================================== */

function showDashboard(role, name) {

    document
        .getElementById("landingPage")
        .style.display = "none";


    document
        .getElementById("dashboard")
        .classList.add("active");


    document
        .getElementById("dashboardUser")
        .textContent = name;


    document
        .getElementById("farmerDashboard")
        .style.display =
        role === "Farmer"
        ? "block"
        : "none";


    document
        .getElementById("adminDashboard")
        .style.display =
        role === "Admin"
        ? "block"
        : "none";


    document
        .getElementById("centreDashboard")
        .style.display =
        role === "Centre"
        ? "block"
        : "none";


    if (role === "Farmer") {

        document
            .getElementById("avatar")
            .textContent = "👨‍🌾";

    }


    if (role === "Admin") {

        document
            .getElementById("avatar")
            .textContent = "🧑‍💼";

    }


    if (role === "Centre") {

        document
            .getElementById("avatar")
            .textContent = "🏢";

    }

}


/* ==========================================
   BOOK SLOT
========================================== */

function openBooking() {

    document
        .getElementById("bookingModal")
        .classList.add("active");

}


function bookSlot() {

    const centre =
        document.getElementById("centreSelect")
        .value;


    const produce =
        document.getElementById("produceSelect")
        .value;


    const date =
        document.getElementById("bookingDate")
        .value;


    const time =
        document.getElementById("timeSlot")
        .value;


    if (
        !centre ||
        !produce ||
        !date ||
        !time
    ) {

        showToast(
            "Please fill all booking details."
        );

        return;

    }


    /* TOKEN */

    const token =
        "A-" +
        Math.floor(
            120 + Math.random() * 80
        );


    document
        .getElementById("slotStat")
        .textContent =
        time.split(" - ")[0];


    document
        .getElementById("tokenStat")
        .textContent =
        token;


    document
        .getElementById("queueToken")
        .textContent =
        token;


    document
        .getElementById("queueSlot")
        .textContent =
        time;


    closeModal("bookingModal");


    showToast(
        "Slot booked successfully! Token: " +
        token
    );

}


/* ==========================================
   QUEUE
========================================== */

function showQueue() {

    document
        .getElementById("queueModal")
        .classList.add("active");

}


/* ==========================================
   PROCUREMENT
========================================== */

function showProcurement() {

    document
        .getElementById("procurementModal")
        .classList.add("active");

}


/* ==========================================
   PAYMENT
========================================== */

function showPayment() {

    document
        .getElementById("paymentModal")
        .classList.add("active");

}


/* ==========================================
   LOGOUT
========================================== */

function logout() {

    document
        .getElementById("dashboard")
        .classList.remove("active");


    document
        .getElementById("landingPage")
        .style.display = "block";


    showToast(
        "Logged out successfully."
    );

}


/* ==========================================
   SWITCH LOGIN / REGISTER
========================================== */

function switchToRegister() {

    closeModal("loginModal");

    openRegister();

}


function switchToLogin() {

    closeModal("registerModal");

    openLogin();

}


/* ==========================================
   ERROR
========================================== */

function showError(id) {

    document
        .getElementById(id)
        .style.display = "block";

}


function hideError(id) {

    document
        .getElementById(id)
        .style.display = "none";

}


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    document
        .getElementById("toastMessage")
        .textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* ==========================================
   ONLY NUMBERS IN MOBILE/AADHAAR
========================================== */

document
    .querySelectorAll(
        'input[inputmode="numeric"]'
    )
    .forEach(input => {

        input.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /\D/g,
                        ""
                    );

            }
        );

    });


/* ==========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================== */

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });
