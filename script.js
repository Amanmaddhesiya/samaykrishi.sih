// ==========================================================
// SAMAY KRISHI - FINAL SCRIPT
// Login → Dashboard → Farmer Details → Procurement → Slot
// ==========================================================

const translations = {
    en: {
        welcomeTitle: "Welcome to Samay Krishi",
        welcomeText: "Direct connection between farmers and buyers. Transparent pricing. Fair trade.",
        selectRole: "Select Your Role",

        farmer: "Farmer",
        admin: "Procurement Admin",
        centre: "Procurement Centre",

        farmerDesc: "Sell your produce directly",
        adminDesc: "Manage procurement activities",
        centreDesc: "Manage collection centers",

        login: "Login",
        register: "Register",

        mobile: "Mobile Number (10 digits)",
        password: "Password",
        fullName: "Full Name",
        aadhaar: "Aadhaar Number (12 digits)",
        village: "Village Name",
        confirmPassword: "Confirm Password",
        passwordMin: "Password (min 8 characters)",

        dontHaveAccount: "Don't have an account?",
        registerHere: "Register here",
        haveAccount: "Already have an account?",
        loginHere: "Login here",

        continue: "Continue",

        mobileError: "Please enter a valid 10-digit mobile number.",
        aadhaarError: "Please enter a valid 12-digit Aadhaar number.",
        passwordError: "Password must be at least 8 characters.",
        passwordMismatch: "Passwords do not match.",
        nameRequired: "Please enter your full name.",
        villageRequired: "Please enter your village name.",
        fieldRequired: "This field is required.",

        loginSuccess: "Login Successful!",
        registrationSuccess: "Registration Successful!",

        welcomeMessage:
            "Welcome to Samay Krishi. Opening your farmer dashboard...",

        registrationComplete:
            "Your account has been created. Please login with your credentials.",

        invalidCredentials:
            "Invalid mobile number, password or selected role.",

        farmerDashboard: "Farmer Dashboard",
        welcomeBack: "Welcome back,",
        dashboardMessage:
            "Let's make your procurement hassle-free.",

        startProcurement: "Start Procurement",
        findSlot: "Find Best Slot",
        bestSlot: "Best Slot For You",
        confirmSlot: "Confirm This Slot",
        anotherSlot: "Choose Another Slot",

        slotConfirmed: "Slot Confirmed",
        registration: "Registration",
        inQueue: "In Queue",
        procurement: "Procurement",
        payment: "Payment"
    },

    hi: {
        welcomeTitle: "Samay Krishi में आपका स्वागत है",
        welcomeText:
            "किसानों और खरीदारों के बीच सीधा संबंध। पारदर्शी मूल्य। न्यायसंगत व्यापार।",
        selectRole: "अपनी भूमिका चुनें",

        farmer: "किसान",
        admin: "खरीद प्रशासक",
        centre: "खरीद केंद्र",

        farmerDesc: "अपनी उपज सीधे बेचें",
        adminDesc: "खरीद गतिविधियों का प्रबंधन करें",
        centreDesc: "संग्रहण केंद्रों का प्रबंधन करें",

        login: "लॉगिन",
        register: "पंजीकरण",

        mobile: "मोबाइल नंबर (10 अंक)",
        password: "पासवर्ड",
        fullName: "पूरा नाम",
        aadhaar: "आधार नंबर (12 अंक)",
        village: "गांव का नाम",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        passwordMin: "पासवर्ड (कम से कम 8 वर्ण)",

        dontHaveAccount: "खाता नहीं है?",
        registerHere: "यहां पंजीकरण करें",
        haveAccount: "पहले से खाता है?",
        loginHere: "यहां लॉगिन करें",

        continue: "जारी रखें",

        mobileError: "कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें।",
        aadhaarError: "कृपया सही 12-अंकीय आधार नंबर दर्ज करें।",
        passwordError: "पासवर्ड कम से कम 8 वर्ण का होना चाहिए।",
        passwordMismatch: "पासवर्ड मेल नहीं खाते।",
        nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
        villageRequired: "कृपया अपने गांव का नाम दर्ज करें।",
        fieldRequired: "यह क्षेत्र आवश्यक है।",

        loginSuccess: "लॉगिन सफल!",
        registrationSuccess: "पंजीकरण सफल!",

        welcomeMessage:
            "Samay Krishi में आपका स्वागत है। किसान डैशबोर्ड खोला जा रहा है...",

        registrationComplete:
            "आपका खाता बन गया है। कृपया अपने क्रेडेंशियल्स से लॉगिन करें।",

        invalidCredentials:
            "मोबाइल नंबर, पासवर्ड या चुनी गई भूमिका गलत है।",

        farmerDashboard: "किसान डैशबोर्ड",
        welcomeBack: "वापसी पर स्वागत है,",
        dashboardMessage:
            "आइए आपकी खरीद प्रक्रिया को आसान बनाएं।",

        startProcurement: "खरीद शुरू करें",
        findSlot: "सबसे अच्छा स्लॉट खोजें",
        bestSlot: "आपके लिए सबसे अच्छा स्लॉट",
        confirmSlot: "इस स्लॉट की पुष्टि करें",
        anotherSlot: "दूसरा स्लॉट चुनें",

        slotConfirmed: "स्लॉट की पुष्टि",
        registration: "पंजीकरण",
        inQueue: "कतार में",
        procurement: "खरीद",
        payment: "भुगतान"
    }
};


// ==========================================================
// GLOBAL VARIABLES
// ==========================================================

let currentLanguage =
    localStorage.getItem("samayKrishiLanguage") || "en";

let selectedRole = null;

let users =
    JSON.parse(localStorage.getItem("samayKrishiUsers")) || [];

let currentUser = null;

let procurementData = null;


// ==========================================================
// INITIALIZATION
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    setupLanguage();

    setupRoleCards();

    setupAuthentication();

    setupDashboard();

    setupProcurement();

    setupInputValidation();

    updateLanguageUI();

    checkExistingLogin();

});


// ==========================================================
// TRANSLATION HELPER
// ==========================================================

function t(key) {

    return (
        translations[currentLanguage][key] ||
        translations.en[key] ||
        key
    );

}


// ==========================================================
// LANGUAGE SYSTEM
// ==========================================================

function setupLanguage() {

    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            changeLanguage(btn.dataset.lang);

        });

    });


    const dashboardLang =
        document.getElementById("dashboardLangBtn");

    if (dashboardLang) {

        dashboardLang.addEventListener("click", () => {

            changeLanguage(
                currentLanguage === "en" ? "hi" : "en"
            );

        });

    }

}


function changeLanguage(lang) {

    if (!translations[lang]) return;

    currentLanguage = lang;

    localStorage.setItem(
        "samayKrishiLanguage",
        lang
    );

    updateLanguageUI();

}


function updateLanguageUI() {

    document.documentElement.lang =
        currentLanguage;

    document.querySelectorAll(
        "[data-en][data-hi]"
    ).forEach(element => {

        const value =
            element.getAttribute(
                `data-${currentLanguage}`
            );

        if (value) {

            element.textContent = value;

        }

    });


    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.classList.toggle(
            "active",
            btn.dataset.lang === currentLanguage
        );

    });


    updateRoleLabels();

    updateDashboardTexts();

}


// ==========================================================
// ROLE SYSTEM
// ==========================================================

function setupRoleCards() {

    document.querySelectorAll(".role-card").forEach(card => {

        card.addEventListener("click", () => {

            const role =
                card.dataset.role;

            openAuthModal(role);

        });

    });

}


function updateRoleLabels() {

    if (!selectedRole) return;

    const roleName =
        t(selectedRole);

    const roleLabel =
        document.getElementById("roleLabel");

    const registerRoleLabel =
        document.getElementById(
            "registerRoleLabel"
        );

    if (roleLabel) {

        roleLabel.textContent =
            `${t("login")} as ${roleName}`;

    }

    if (registerRoleLabel) {

        registerRoleLabel.textContent =
            `${t("register")} as ${roleName}`;

    }

}


// ==========================================================
// AUTHENTICATION SETUP
// ==========================================================

function setupAuthentication() {

    const closeModal =
        document.getElementById("closeModal");

    const closeSuccess =
        document.getElementById("closeSuccess");

    const toRegister =
        document.getElementById("toRegister");

    const toLogin =
        document.getElementById("toLogin");

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeAuthModal
        );

    }


    if (closeSuccess) {

        closeSuccess.addEventListener(
            "click",
            closeSuccessModal
        );

    }


    if (toRegister) {

        toRegister.addEventListener("click", e => {

            e.preventDefault();

            switchAuthTab("register");

        });

    }


    if (toLogin) {

        toLogin.addEventListener("click", e => {

            e.preventDefault();

            switchAuthTab("login");

        });

    }


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            handleLogin
        );

    }


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            handleRegister
        );

    }


    const authModal =
        document.getElementById("authModal");

    if (authModal) {

        authModal.addEventListener("click", e => {

            if (e.target === authModal) {

                closeAuthModal();

            }

        });

    }

}


// ==========================================================
// AUTH MODAL
// ==========================================================

function openAuthModal(role) {

    selectedRole = role;

    const modal =
        document.getElementById("authModal");

    if (!modal) return;

    modal.classList.remove("hidden");

    switchAuthTab("login");

    updateRoleLabels();

    clearAllErrors();

}


function closeAuthModal() {

    const modal =
        document.getElementById("authModal");

    if (modal) {

        modal.classList.add("hidden");

    }

}


function switchAuthTab(tab) {

    document.querySelectorAll(".auth-tab")
        .forEach(el =>
            el.classList.remove("active")
        );


    if (tab === "login") {

        document.getElementById(
            "loginTab"
        )?.classList.add("active");

    } else {

        document.getElementById(
            "registerTab"
        )?.classList.add("active");

    }

    clearAllErrors();

}


// ==========================================================
// VALIDATION
// ==========================================================

function validateMobileNumber(value) {

    return /^[6-9][0-9]{9}$/.test(value);

}


function validateAadhaarNumber(value) {

    return /^[0-9]{12}$/.test(value);

}


function validatePassword(value) {

    return value.length >= 8;

}


function showError(id, message) {

    const input =
        document.getElementById(id);

    const error =
        document.getElementById(
            `${id}Error`
        );

    if (input) {

        input.classList.add("error");

    }

    if (error) {

        error.textContent = message;

    }

}


function clearError(id) {

    const input =
        document.getElementById(id);

    const error =
        document.getElementById(
            `${id}Error`
        );

    if (input) {

        input.classList.remove("error");

    }

    if (error) {

        error.textContent = "";

    }

}


function clearAllErrors() {

    document.querySelectorAll(
        ".error-message"
    ).forEach(el => {

        el.textContent = "";

    });


    document.querySelectorAll(
        ".form-input"
    ).forEach(el => {

        el.classList.remove("error");

    });

}


// ==========================================================
// LOGIN
// ==========================================================

function handleLogin(e) {

    e.preventDefault();

    clearAllErrors();


    const mobile =
        document.getElementById(
            "loginMobile"
        ).value.trim();

    const password =
        document.getElementById(
            "loginPassword"
        ).value;


    let valid = true;


    if (!validateMobileNumber(mobile)) {

        showError(
            "loginMobile",
            t("mobileError")
        );

        valid = false;

    }


    if (!password) {

        showError(
            "loginPassword",
            t("fieldRequired")
        );

        valid = false;

    }


    if (!valid) return;


    const user =
        users.find(u =>
            u.mobile === mobile &&
            u.password === password &&
            u.role === selectedRole
        );


    if (!user) {

        showNotification(
            t("invalidCredentials")
        );

        return;

    }


    // Save current user
    currentUser = user;

    localStorage.setItem(
        "samayKrishiLoggedInUser",
        JSON.stringify(user)
    );


    // Show success
    showSuccessModal(
        t("loginSuccess"),
        t("welcomeMessage")
    );


    // IMPORTANT:
    // After 1.5 sec open dashboard
    setTimeout(() => {

        closeAuthModal();

        closeSuccessModal();

        openDashboard(user);

    }, 1500);

}


// ==========================================================
// REGISTRATION
// ==========================================================

function handleRegister(e) {

    e.preventDefault();

    clearAllErrors();


    const name =
        document.getElementById(
            "regName"
        ).value.trim();

    const mobile =
        document.getElementById(
            "regMobile"
        ).value.trim();

    const aadhaar =
        document.getElementById(
            "regAadhaar"
        ).value.trim();

    const village =
        document.getElementById(
            "regVillage"
        ).value.trim();

    const password =
        document.getElementById(
            "regPassword"
        ).value;

    const confirmPassword =
        document.getElementById(
            "regConfirmPassword"
        ).value;


    let valid = true;


    if (!name) {

        showError(
            "regName",
            t("nameRequired")
        );

        valid = false;

    }


    if (!validateMobileNumber(mobile)) {

        showError(
            "regMobile",
            t("mobileError")
        );

        valid = false;

    }


    if (
        users.some(
            u => u.mobile === mobile
        )
    ) {

        showError(
            "regMobile",
            "Mobile number already registered."
        );

        valid = false;

    }


    if (!validateAadhaarNumber(aadhaar)) {

        showError(
            "regAadhaar",
            t("aadhaarError")
        );

        valid = false;

    }


    if (!village) {

        showError(
            "regVillage",
            t("villageRequired")
        );

        valid = false;

    }


    if (!validatePassword(password)) {

        showError(
            "regPassword",
            t("passwordError")
        );

        valid = false;

    }


    if (password !== confirmPassword) {

        showError(
            "regConfirmPassword",
            t("passwordMismatch")
        );

        valid = false;

    }


    if (!valid) return;


    const newUser = {

        id: Date.now(),

        role: selectedRole,

        name: name,

        mobile: mobile,

        aadhaar: aadhaar,

        village: village,

        password: password,

        createdAt:
            new Date().toISOString(),

        procurement: null

    };


    users.push(newUser);


    localStorage.setItem(
        "samayKrishiUsers",
        JSON.stringify(users)
    );


    showSuccessModal(
        t("registrationSuccess"),
        t("registrationComplete")
    );


    setTimeout(() => {

        closeSuccessModal();

        switchAuthTab("login");

        document.getElementById(
            "loginMobile"
        ).value = mobile;

    }, 1800);

}


// ==========================================================
// SUCCESS MODAL
// ==========================================================

function showSuccessModal(
    title,
    message
) {

    const titleElement =
        document.getElementById(
            "successTitle"
        );

    const messageElement =
        document.getElementById(
            "successMessage"
        );

    const modal =
        document.getElementById(
            "successModal"
        );


    if (titleElement) {

        titleElement.textContent = title;

    }

    if (messageElement) {

        messageElement.textContent =
            message;

    }

    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


function closeSuccessModal() {

    document.getElementById(
        "successModal"
    )?.classList.add("hidden");

}


// ==========================================================
// NOTIFICATION
// ==========================================================

function showNotification(message) {

    const notification =
        document.getElementById(
            "errorNotification"
        );

    if (!notification) return;

    notification.textContent =
        message;

    notification.classList.remove(
        "hidden"
    );


    setTimeout(() => {

        notification.classList.add(
            "hidden"
        );

    }, 3500);

}


// ==========================================================
// DASHBOARD
// ==========================================================

function openDashboard(user) {

    const dashboard =
        document.getElementById(
            "farmerDashboard"
        );

    const container =
        document.querySelector(
            ".container"
        );

    const languageToggle =
        document.querySelector(
            ".language-toggle"
        );


    // Currently dashboard is designed for farmer.
    // Admin/Centre can still login but dashboard
    // is only opened for farmer.
    if (user.role !== "farmer") {

        showNotification(
            "Admin/Centre dashboard will be added separately."
        );

        return;

    }


    if (container) {

        container.style.display =
            "none";

    }


    if (languageToggle) {

        languageToggle.style.display =
            "none";

    }


    if (dashboard) {

        dashboard.classList.remove(
            "hidden"
        );

        dashboard.classList.add(
            "dashboard-visible"
        );

    }


    currentUser = user;

    fillFarmerProfile(user);

    updateDashboardTexts();

    loadProcurementStatus(user);

}


function closeDashboard() {

    const dashboard =
        document.getElementById(
            "farmerDashboard"
        );

    const container =
        document.querySelector(
            ".container"
        );

    const languageToggle =
        document.querySelector(
            ".language-toggle"
        );


    if (dashboard) {

        dashboard.classList.add(
            "hidden"
        );

    }


    if (container) {

        container.style.display =
            "";

    }


    if (languageToggle) {

        languageToggle.style.display =
            "";

    }

}


function fillFarmerProfile(user) {

    const name =
        user.name || "-";

    // Existing HTML has both Name and Farmer Name.
    // We use the registered farmer name for both
    // without changing the HTML.
    setText(
        "dashboardFarmerName",
        name
    );

    setText(
        "profileName",
        name
    );

    setText(
        "profileFarmerName",
        name
    );

    setText(
        "profileMobile",
        user.mobile || "-"
    );

    setText(
        "profileAadhaar",
        maskAadhaar(
            user.aadhaar
        )
    );

    setText(
        "profileVillage",
        user.village || "-"
    );

}


function maskAadhaar(aadhaar) {

    if (!aadhaar) return "-";

    // Only last 4 digits visible
    return "XXXX XXXX " +
        aadhaar.slice(-4);

}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


// ==========================================================
// DASHBOARD BUTTONS
// ==========================================================

function setupDashboard() {

    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            logoutUser
        );

    }


    const startBtn =
        document.getElementById(
            "startProcurementBtn"
        );

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            openProcurementModal
        );

    }

}


// ==========================================================
// LOGOUT
// ==========================================================

function logoutUser() {

    localStorage.removeItem(
        "samayKrishiLoggedInUser"
    );

    currentUser = null;

    procurementData = null;

    closeDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================================
// PROCUREMENT MODAL
// ==========================================================

function setupProcurement() {

    const closeBtn =
        document.getElementById(
            "closeProcurementModal"
        );

    const procurementForm =
        document.getElementById(
            "procurementForm"
        );

    const confirmBtn =
        document.getElementById(
            "confirmSlotBtn"
        );

    const changeBtn =
        document.getElementById(
            "changeSlotBtn"
        );


    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closeProcurementModal
        );

    }


    if (procurementForm) {

        procurementForm.addEventListener(
            "submit",
            handleProcurementSubmit
        );

    }


    if (confirmBtn) {

        confirmBtn.addEventListener(
            "click",
            confirmSlot
        );

    }


    if (changeBtn) {

        changeBtn.addEventListener(
            "click",
            () => {

                closeSlotModal();

                openProcurementModal();

            }
        );

    }


    const procurementModal =
        document.getElementById(
            "procurementModal"
        );

    if (procurementModal) {

        procurementModal.addEventListener(
            "click",
            e => {

                if (
                    e.target ===
                    procurementModal
                ) {

                    closeProcurementModal();

                }

            }
        );

    }

}


function openProcurementModal() {

    if (!currentUser) {

        showNotification(
            "Please login first."
        );

        return;

    }


    const modal =
        document.getElementById(
            "procurementModal"
        );

    if (!modal) return;


    // Set minimum selling date to today
    const dateInput =
        document.getElementById(
            "sellingDate"
        );

    if (dateInput) {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        dateInput.min = today;

    }


    modal.classList.remove(
        "hidden"
    );

}


function closeProcurementModal() {

    document.getElementById(
        "procurementModal"
    )?.classList.add("hidden");

}


// ==========================================================
// PROCUREMENT FORM
// ==========================================================

function handleProcurementSubmit(e) {

    e.preventDefault();


    const crop =
        document.getElementById(
            "cropType"
        ).value;

    const date =
        document.getElementById(
            "sellingDate"
        ).value;

    const weight =
        document.getElementById(
            "cropWeight"
        ).value;

    const centre =
        document.getElementById(
            "preferredCentre"
        ).value;


    if (
        !crop ||
        !date ||
        !weight ||
        !centre
    ) {

        return;

    }


    // Save user's requirements
    procurementData = {

        crop: crop,

        date: date,

        weight: Number(weight),

        centre: centre

    };


    // Generate smart recommendation
    const recommendation =
        generateSlotRecommendation(
            procurementData
        );


    displaySlotRecommendation(
        recommendation
    );


    closeProcurementModal();

}


// ==========================================================
// SMART SLOT RECOMMENDATION
// ==========================================================

function generateSlotRecommendation(data) {

    /*
        Prototype smart recommendation engine.

        In a real SIH project this can later be
        connected to a backend/API containing:

        - centre capacity
        - current queue
        - farmer count
        - procurement timings
        - available slots
    */


    const slots = [

        {
            time: "08:00 AM - 10:00 AM",
            queue: 8
        },

        {
            time: "10:00 AM - 12:00 PM",
            queue: 14
        },

        {
            time: "12:00 PM - 02:00 PM",
            queue: 21
        },

        {
            time: "02:00 PM - 04:00 PM",
            queue: 11
        },

        {
            time: "04:00 PM - 06:00 PM",
            queue: 6
        }

    ];


    // Choose slot with lowest queue
    const bestSlot =
        slots.reduce(
            (best, current) =>
                current.queue <
                best.queue
                    ? current
                    : best
        );


    return {

        date: data.date,

        time: bestSlot.time,

        centre: data.centre,

        queue: bestSlot.queue

    };

}


// ==========================================================
// DISPLAY RECOMMENDED SLOT
// ==========================================================

function displaySlotRecommendation(
    recommendation
) {

    setText(
        "recommendedDate",
        formatDate(
            recommendation.date
        )
    );


    setText(
        "recommendedTime",
        recommendation.time
    );


    setText(
        "recommendedCentre",
        recommendation.centre
    );


    setText(
        "recommendedQueue",
        `${recommendation.queue} farmers`
    );


    const slotModal =
        document.getElementById(
            "slotModal"
        );

    if (slotModal) {

        slotModal.classList.remove(
            "hidden"
        );

    }

}


function closeSlotModal() {

    document.getElementById(
        "slotModal"
    )?.classList.add("hidden");

}


function formatDate(dateString) {

    if (!dateString) return "-";


    const date =
        new Date(
            dateString +
            "T00:00:00"
        );


    return date.toLocaleDateString(
        currentLanguage === "hi"
            ? "hi-IN"
            : "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


// ==========================================================
// CONFIRM SLOT
// ==========================================================

function confirmSlot() {

    if (
        !currentUser ||
        !procurementData
    ) {

        return;

    }


    const recommendation =
        generateSlotRecommendation(
            procurementData
        );


    const finalData = {

        ...procurementData,

        recommendedTime:
            recommendation.time,

        queue:
            recommendation.queue,

        confirmedAt:
            new Date().toISOString(),

        status:
            "In Queue"

    };


    // Store inside current user
    currentUser.procurement =
        finalData;


    // Update users array
    users =
        users.map(user =>
            user.id === currentUser.id
                ? currentUser
                : user
        );


    localStorage.setItem(
        "samayKrishiUsers",
        JSON.stringify(users)
    );


    localStorage.setItem(
        "samayKrishiLoggedInUser",
        JSON.stringify(currentUser)
    );


    closeSlotModal();


    // Show procurement status
    showProcurementStatus(
        finalData
    );


    // Scroll to status section
    setTimeout(() => {

        document
            .getElementById(
                "procurementStatusSection"
            )
            ?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }, 300);

}


// ==========================================================
// PROCUREMENT STATUS
// ==========================================================

function showProcurementStatus(data) {

    const section =
        document.getElementById(
            "procurementStatusSection"
        );

    if (!section) return;


    section.classList.remove(
        "hidden"
    );


    setText(
        "confirmedSlotText",
        `${formatDate(data.date)} • ${data.recommendedTime}`
    );


    setText(
        "statusBadge",
        "In Queue"
    );


    updateStatusTimeline();

}


function updateStatusTimeline() {

    const section =
        document.getElementById(
            "procurementStatusSection"
        );

    if (!section) return;


    const steps =
        section.querySelectorAll(
            ".status-step"
        );


    // Registration
    if (steps[0]) {

        steps[0].classList.add(
            "completed"
        );

    }


    // Slot confirmed
    if (steps[1]) {

        steps[1].classList.add(
            "completed"
        );

    }


    // In queue
    if (steps[2]) {

        steps[2].classList.add(
            "active"
        );

    }

}


// ==========================================================
// LOAD PREVIOUS PROCUREMENT
// ==========================================================

function loadProcurementStatus(user) {

    if (
        !user ||
        !user.procurement
    ) {

        const section =
            document.getElementById(
                "procurementStatusSection"
            );

        if (section) {

            section.classList.add(
                "hidden"
            );

        }

        return;

    }


    procurementData =
        user.procurement;


    showProcurementStatus(
        user.procurement
    );

}


// ==========================================================
// INPUT RESTRICTIONS
// ==========================================================

function setupInputValidation() {

    const mobileInputs = [

        "loginMobile",
        "regMobile"

    ];


    mobileInputs.forEach(id => {

        const input =
            document.getElementById(id);

        if (!input) return;


        input.addEventListener(
            "input",
            () => {

                input.value =
                    input.value
                        .replace(
                            /[^0-9]/g,
                            ""
                        )
                        .slice(0, 10);

            }
        );

    });


    const aadhaar =
        document.getElementById(
            "regAadhaar"
        );


    if (aadhaar) {

        aadhaar.addEventListener(
            "input",
            () => {

                aadhaar.value =
                    aadhaar.value
                        .replace(
                            /[^0-9]/g,
                            ""
                        )
                        .slice(0, 12);

            }
        );

    }

}


// ==========================================================
// EXISTING LOGIN CHECK
// ==========================================================

function checkExistingLogin() {

    const saved =
        localStorage.getItem(
            "samayKrishiLoggedInUser"
        );


    if (!saved) return;


    try {

        const user =
            JSON.parse(saved);


        const actualUser =
            users.find(
                u => u.id === user.id
            );


        if (
            actualUser &&
            actualUser.role === "farmer"
        ) {

            currentUser =
                actualUser;

            // Don't instantly hide homepage on refresh
            // unless a real logged-in session exists.
            openDashboard(
                actualUser
            );

        }

    } catch (error) {

        console.error(
            "Login session error:",
            error
        );

    }

}


// ==========================================================
// DASHBOARD TEXT UPDATE
// ==========================================================

function updateDashboardTexts() {

    const dashboard =
        document.getElementById(
            "farmerDashboard"
        );

    if (!dashboard) return;


    dashboard
        .querySelectorAll(
            "[data-en][data-hi]"
        )
        .forEach(element => {

            const value =
                element.getAttribute(
                    `data-${currentLanguage}`
                );

            if (value) {

                element.textContent =
                    value;

            }

        });

}


// ==========================================================
// DEBUG INFO
// ==========================================================

console.log(
    "%c Samay Krishi Portal Loaded Successfully ",
    "background:#2ecc71;color:white;padding:6px;font-weight:bold;"
);

console.log(
    "Registered users:",
    users.length
);
