// ==========================================================
// SAMAY KRISHI - COMPLETE WORKING DEMO
// Register → Login → Farmer Profile → Procurement Details
// → Smart Slot Recommendation → Confirmation → Status
// ==========================================================


// ==========================================================
// TRANSLATIONS
// ==========================================================

const translations = {

    en: {

        welcomeTitle: "Welcome to Samay Krishi",

        welcomeText:
            "Direct connection between farmers and buyers. Transparent pricing. Fair trade.",

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
        farmerName: "Farmer Name",

        aadhaar: "Aadhaar Number (12 digits)",
        village: "Village Name",

        confirmPassword: "Confirm Password",
        passwordMin: "Password (min 8 characters)",

        dontHaveAccount: "Don't have an account?",
        registerHere: "Register here",

        haveAccount: "Already have an account?",
        loginHere: "Login here",

        continue: "Continue",

        mobileError:
            "Please enter a valid 10-digit mobile number.",

        aadhaarError:
            "Please enter a valid 12-digit Aadhaar number.",

        passwordError:
            "Password must be at least 8 characters.",

        passwordMismatch:
            "Passwords do not match.",

        nameRequired:
            "Please enter your full name.",

        farmerNameRequired:
            "Please enter the farmer name.",

        villageRequired:
            "Please enter your village name.",

        fieldRequired:
            "This field is required.",

        loginSuccess:
            "Login Successful!",

        registrationSuccess:
            "Registration Successful!",

        welcomeMessage:
            "Welcome to Samay Krishi. Opening your farmer dashboard...",

        registrationComplete:
            "Your account has been created. Please login with your credentials.",

        invalidCredentials:
            "Invalid mobile number, password or selected role.",

        farmerDashboard:
            "Farmer Dashboard",

        welcomeBack:
            "Welcome back,",

        dashboardMessage:
            "Let's make your procurement hassle-free.",

        startProcurement:
            "Start Procurement",

        findSlot:
            "Find Best Slot",

        bestSlot:
            "Best Slot For You",

        confirmSlot:
            "Confirm This Slot",

        anotherSlot:
            "Choose Another Slot",

        slotConfirmed:
            "Slot Confirmed",

        registration:
            "Registration",

        inQueue:
            "In Queue",

        procurement:
            "Procurement",

        payment:
            "Payment"

    },


    hi: {

        welcomeTitle:
            "Samay Krishi में आपका स्वागत है",

        welcomeText:
            "किसानों और खरीदारों के बीच सीधा संबंध। पारदर्शी मूल्य। न्यायसंगत व्यापार।",

        selectRole:
            "अपनी भूमिका चुनें",

        farmer:
            "किसान",

        admin:
            "खरीद प्रशासक",

        centre:
            "खरीद केंद्र",

        farmerDesc:
            "अपनी उपज सीधे बेचें",

        adminDesc:
            "खरीद गतिविधियों का प्रबंधन करें",

        centreDesc:
            "संग्रहण केंद्रों का प्रबंधन करें",

        login:
            "लॉगिन",

        register:
            "पंजीकरण",

        mobile:
            "मोबाइल नंबर (10 अंक)",

        password:
            "पासवर्ड",

        fullName:
            "पूरा नाम",

        farmerName:
            "किसान का नाम",

        aadhaar:
            "आधार नंबर (12 अंक)",

        village:
            "गांव का नाम",

        confirmPassword:
            "पासवर्ड की पुष्टि करें",

        passwordMin:
            "पासवर्ड (कम से कम 8 वर्ण)",

        dontHaveAccount:
            "खाता नहीं है?",

        registerHere:
            "यहां पंजीकरण करें",

        haveAccount:
            "पहले से खाता है?",

        loginHere:
            "यहां लॉगिन करें",

        continue:
            "जारी रखें",

        mobileError:
            "कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें।",

        aadhaarError:
            "कृपया सही 12-अंकीय आधार नंबर दर्ज करें।",

        passwordError:
            "पासवर्ड कम से कम 8 वर्ण का होना चाहिए।",

        passwordMismatch:
            "पासवर्ड मेल नहीं खाते।",

        nameRequired:
            "कृपया अपना पूरा नाम दर्ज करें।",

        farmerNameRequired:
            "कृपया किसान का नाम दर्ज करें।",

        villageRequired:
            "कृपया अपने गांव का नाम दर्ज करें।",

        fieldRequired:
            "यह क्षेत्र आवश्यक है।",

        loginSuccess:
            "लॉगिन सफल!",

        registrationSuccess:
            "पंजीकरण सफल!",

        welcomeMessage:
            "Samay Krishi में आपका स्वागत है। किसान डैशबोर्ड खोला जा रहा है...",

        registrationComplete:
            "आपका खाता बन गया है। कृपया अपने क्रेडेंशियल्स से लॉगिन करें।",

        invalidCredentials:
            "मोबाइल नंबर, पासवर्ड या चुनी गई भूमिका गलत है।",

        farmerDashboard:
            "किसान डैशबोर्ड",

        welcomeBack:
            "वापसी पर स्वागत है,",

        dashboardMessage:
            "आइए आपकी खरीद प्रक्रिया को आसान बनाएं।",

        startProcurement:
            "खरीद शुरू करें",

        findSlot:
            "सबसे अच्छा स्लॉट खोजें",

        bestSlot:
            "आपके लिए सबसे अच्छा स्लॉट",

        confirmSlot:
            "इस स्लॉट की पुष्टि करें",

        anotherSlot:
            "दूसरा स्लॉट चुनें",

        slotConfirmed:
            "स्लॉट की पुष्टि",

        registration:
            "पंजीकरण",

        inQueue:
            "कतार में",

        procurement:
            "खरीद",

        payment:
            "भुगतान"

    }

};


// ==========================================================
// GLOBAL STATE
// ==========================================================

let currentLanguage =
    localStorage.getItem("samayKrishiLanguage") || "en";

let selectedRole = null;

let users = [];

let currentUser = null;

let procurementData = null;

let recommendedSlots = [];

let currentSlotIndex = 0;


// ==========================================================
// LOAD USERS SAFELY
// ==========================================================

try {

    users =
        JSON.parse(
            localStorage.getItem("samayKrishiUsers")
        ) || [];

} catch (error) {

    users = [];

}


// ==========================================================
// INITIALIZATION
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupLanguage();

        setupRoleCards();

        setupAuthentication();

        setupDashboard();

        setupProcurement();

        setupInputValidation();

        setupHomepageRegister();

        updateLanguageUI();

        checkExistingLogin();

        console.log(
            "Samay Krishi loaded successfully."
        );

    }
);


// ==========================================================
// TRANSLATION HELPER
// ==========================================================

function t(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


// ==========================================================
// LANGUAGE
// ==========================================================

function setupLanguage() {

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeLanguage(
                        button.dataset.lang
                    );

                }
            );

        });


    const dashboardLang =
        document.getElementById(
            "dashboardLangBtn"
        );


    if (dashboardLang) {

        dashboardLang.addEventListener(
            "click",
            () => {

                changeLanguage(
                    currentLanguage === "en"
                        ? "hi"
                        : "en"
                );

            }
        );

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


    document
        .querySelectorAll(
            "[data-en][data-hi]"
        )
        .forEach(element => {

            const value =
                element.getAttribute(
                    `data-${currentLanguage}`
                );

            if (value !== null) {

                element.textContent =
                    value;

            }

        });


    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang ===
                currentLanguage
            );

        });


    updateRoleLabels();

    updateDashboardTexts();

}


// ==========================================================
// ROLE CARDS
// ==========================================================

function setupRoleCards() {

    document
        .querySelectorAll(".role-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const role =
                        card.dataset.role;

                    openAuthModal(role);

                }
            );

        });

}


// ==========================================================
// HOMEPAGE REGISTER BUTTON
// ==========================================================

function setupHomepageRegister() {

    const registerButton =
        document.getElementById(
            "homepageRegisterBtn"
        );


    if (!registerButton) return;


    registerButton.addEventListener(
        "click",
        () => {

            openAuthModal("farmer");

            switchAuthTab("register");

        }
    );

}


// ==========================================================
// ROLE LABEL
// ==========================================================

function updateRoleLabels() {

    if (!selectedRole) return;


    const roleName =
        t(selectedRole);


    const loginLabel =
        document.getElementById(
            "roleLabel"
        );


    const registerLabel =
        document.getElementById(
            "registerRoleLabel"
        );


    if (loginLabel) {

        loginLabel.textContent =
            `${t("login")} as ${roleName}`;

    }


    if (registerLabel) {

        registerLabel.textContent =
            `${t("register")} as ${roleName}`;

    }

}


// ==========================================================
// AUTH SETUP
// ==========================================================

function setupAuthentication() {

    const closeModal =
        document.getElementById(
            "closeModal"
        );


    const closeSuccess =
        document.getElementById(
            "closeSuccess"
        );


    const toRegister =
        document.getElementById(
            "toRegister"
        );


    const toLogin =
        document.getElementById(
            "toLogin"
        );


    const loginForm =
        document.getElementById(
            "loginForm"
        );


    const registerForm =
        document.getElementById(
            "registerForm"
        );


    closeModal?.addEventListener(
        "click",
        closeAuthModal
    );


    closeSuccess?.addEventListener(
        "click",
        closeSuccessModal
    );


    toRegister?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            switchAuthTab("register");

        }
    );


    toLogin?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            switchAuthTab("login");

        }
    );


    loginForm?.addEventListener(
        "submit",
        handleLogin
    );


    registerForm?.addEventListener(
        "submit",
        handleRegister
    );


    const authModal =
        document.getElementById(
            "authModal"
        );


    authModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                authModal
            ) {

                closeAuthModal();

            }

        }
    );

}


// ==========================================================
// OPEN AUTH
// ==========================================================

function openAuthModal(role) {

    selectedRole = role;


    const modal =
        document.getElementById(
            "authModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "hidden"
    );


    switchAuthTab("login");

    updateRoleLabels();

    clearAllErrors();

}


// ==========================================================
// CLOSE AUTH
// ==========================================================

function closeAuthModal() {

    document
        .getElementById("authModal")
        ?.classList.add("hidden");

}


// ==========================================================
// SWITCH LOGIN / REGISTER
// ==========================================================

function switchAuthTab(tab) {

    document
        .querySelectorAll(".auth-tab")
        .forEach(element => {

            element.classList.remove(
                "active"
            );

        });


    if (tab === "login") {

        document
            .getElementById("loginTab")
            ?.classList.add("active");

    } else {

        document
            .getElementById("registerTab")
            ?.classList.add("active");

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


function showError(
    inputId,
    message
) {

    const input =
        document.getElementById(
            inputId
        );


    const error =
        document.getElementById(
            `${inputId}Error`
        );


    input?.classList.add("error");


    if (error) {

        error.textContent =
            message;

    }

}


function clearError(inputId) {

    const input =
        document.getElementById(
            inputId
        );


    const error =
        document.getElementById(
            `${inputId}Error`
        );


    input?.classList.remove("error");


    if (error) {

        error.textContent = "";

    }

}


function clearAllErrors() {

    document
        .querySelectorAll(
            ".error-message"
        )
        .forEach(element => {

            element.textContent = "";

        });


    document
        .querySelectorAll(
            ".form-input"
        )
        .forEach(element => {

            element.classList.remove(
                "error"
            );

        });

}


// ==========================================================
// LOGIN
// ==========================================================

function handleLogin(event) {

    event.preventDefault();

    clearAllErrors();


    const mobile =
        document.getElementById(
            "loginMobile"
        )?.value.trim() || "";


    const password =
        document.getElementById(
            "loginPassword"
        )?.value || "";


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
        users.find(
            item =>
                item.mobile === mobile &&
                item.password === password &&
                item.role === selectedRole
        );


    if (!user) {

        showNotification(
            t("invalidCredentials")
        );

        return;

    }


    currentUser = user;


    localStorage.setItem(
        "samayKrishiLoggedInUser",
        JSON.stringify(user)
    );


    showSuccessModal(
        t("loginSuccess"),
        t("welcomeMessage")
    );


    setTimeout(
        () => {

            closeAuthModal();

            closeSuccessModal();

            openDashboard(user);

        },
        1000
    );

}


// ==========================================================
// REGISTRATION
// ==========================================================

function handleRegister(event) {

    event.preventDefault();

    clearAllErrors();


    const name =
        document.getElementById(
            "regName"
        )?.value.trim() || "";


    const farmerName =
        document.getElementById(
            "regFarmerName"
        )?.value.trim() || "";


    const mobile =
        document.getElementById(
            "regMobile"
        )?.value.trim() || "";


    const aadhaar =
        document.getElementById(
            "regAadhaar"
        )?.value.trim() || "";


    const village =
        document.getElementById(
            "regVillage"
        )?.value.trim() || "";


    const password =
        document.getElementById(
            "regPassword"
        )?.value || "";


    const confirmPassword =
        document.getElementById(
            "regConfirmPassword"
        )?.value || "";


    let valid = true;


    if (!name) {

        showError(
            "regName",
            t("nameRequired")
        );

        valid = false;

    }


    if (!farmerName) {

        showError(
            "regFarmerName",
            t("farmerNameRequired")
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
            user =>
                user.mobile === mobile
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


    if (
        password !==
        confirmPassword
    ) {

        showError(
            "regConfirmPassword",
            t("passwordMismatch")
        );

        valid = false;

    }


    if (!valid) return;


    const newUser = {

        id:
            Date.now(),

        role:
            selectedRole || "farmer",

        name:
            name,

        farmerName:
            farmerName,

        mobile:
            mobile,

        aadhaar:
            aadhaar,

        village:
            village,

        password:
            password,

        createdAt:
            new Date().toISOString(),

        procurement:
            null

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


    setTimeout(
        () => {

            closeSuccessModal();

            switchAuthTab("login");


            const loginMobile =
                document.getElementById(
                    "loginMobile"
                );


            if (loginMobile) {

                loginMobile.value =
                    mobile;

            }


            const loginPassword =
                document.getElementById(
                    "loginPassword"
                );


            if (loginPassword) {

                loginPassword.value =
                    "";

            }

        },
        1300
    );

}


// ==========================================================
// SUCCESS MODAL
// ==========================================================

function showSuccessModal(
    title,
    message
) {

    setText(
        "successTitle",
        title
    );


    setText(
        "successMessage",
        message
    );


    document
        .getElementById("successModal")
        ?.classList.remove("hidden");

}


function closeSuccessModal() {

    document
        .getElementById("successModal")
        ?.classList.add("hidden");

}


// ==========================================================
// ERROR NOTIFICATION
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


    setTimeout(
        () => {

            notification.classList.add(
                "hidden"
            );

        },
        3500
    );

}


// ==========================================================
// DASHBOARD
// ==========================================================

function setupDashboard() {

    document
        .getElementById("logoutBtn")
        ?.addEventListener(
            "click",
            logoutUser
        );


    document
        .getElementById("startProcurementBtn")
        ?.addEventListener(
            "click",
            openProcurementModal
        );

}


function openDashboard(user) {

    if (!user) return;


    if (user.role !== "farmer") {

        showNotification(
            "Admin/Centre dashboard will be added separately."
        );

        return;

    }


    const container =
        document.querySelector(
            ".container"
        );


    const languageToggle =
        document.querySelector(
            ".language-toggle"
        );


    const dashboard =
        document.getElementById(
            "farmerDashboard"
        );


    container &&
        (container.style.display =
            "none");


    languageToggle &&
        (languageToggle.style.display =
            "none");


    dashboard?.classList.remove(
        "hidden"
    );


    dashboard?.classList.add(
        "dashboard-visible"
    );


    currentUser = user;


    fillFarmerProfile(user);

    updateDashboardTexts();

    loadProcurementStatus(user);

}


function closeDashboard() {

    document
        .getElementById(
            "farmerDashboard"
        )
        ?.classList.add("hidden");


    const container =
        document.querySelector(
            ".container"
        );


    const languageToggle =
        document.querySelector(
            ".language-toggle"
        );


    if (container) {

        container.style.display =
            "";

    }


    if (languageToggle) {

        languageToggle.style.display =
            "";

    }

}


// ==========================================================
// FARMER PROFILE
// ==========================================================

function fillFarmerProfile(user) {

    setText(
        "dashboardFarmerName",
        user.farmerName ||
        user.name ||
        "-"
    );


    setText(
        "profileName",
        user.name ||
        "-"
    );


    setText(
        "profileFarmerName",
        user.farmerName ||
        user.name ||
        "-"
    );


    setText(
        "profileMobile",
        user.mobile ||
        "-"
    );


    setText(
        "profileAadhaar",
        maskAadhaar(
            user.aadhaar
        )
    );


    setText(
        "profileVillage",
        user.village ||
        "-"
    );

}


function maskAadhaar(value) {

    if (!value) return "-";


    return (
        "XXXX XXXX " +
        value.slice(-4)
    );

}


function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value;

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

    recommendedSlots = [];

    currentSlotIndex = 0;


    closeDashboard();


    document
        .getElementById(
            "loginForm"
        )
        ?.reset();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================================
// PROCUREMENT
// ==========================================================

function setupProcurement() {

    document
        .getElementById(
            "closeProcurementModal"
        )
        ?.addEventListener(
            "click",
            closeProcurementModal
        );


    document
        .getElementById(
            "procurementForm"
        )
        ?.addEventListener(
            "submit",
            handleProcurementSubmit
        );


    document
        .getElementById(
            "confirmSlotBtn"
        )
        ?.addEventListener(
            "click",
            confirmSlot
        );


    document
        .getElementById(
            "changeSlotBtn"
        )
        ?.addEventListener(
            "click",
            chooseAnotherSlot
        );


    document
        .getElementById(
            "procurementModal"
        )
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target.id ===
                    "procurementModal"
                ) {

                    closeProcurementModal();

                }

            }
        );


    document
        .getElementById(
            "slotModal"
        )
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target.id ===
                    "slotModal"
                ) {

                    closeSlotModal();

                }

            }
        );

}


// ==========================================================
// OPEN PROCUREMENT
// ==========================================================

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


    const dateInput =
        document.getElementById(
            "sellingDate"
        );


    if (dateInput) {

        const today =
            getLocalDate();

        dateInput.min =
            today;

    }


    modal?.classList.remove(
        "hidden"
    );

}


// ==========================================================
// CLOSE PROCUREMENT
// ==========================================================

function closeProcurementModal() {

    document
        .getElementById(
            "procurementModal"
        )
        ?.classList.add("hidden");

}


// ==========================================================
// HANDLE PROCUREMENT
// ==========================================================

function handleProcurementSubmit(event) {

    event.preventDefault();


    const crop =
        document.getElementById(
            "cropType"
        )?.value || "";


    const date =
        document.getElementById(
            "sellingDate"
        )?.value || "";


    const weight =
        Number(
            document.getElementById(
                "cropWeight"
            )?.value || 0
        );


    const centre =
        document.getElementById(
            "preferredCentre"
        )?.value || "";


    if (
        !crop ||
        !date ||
        !weight ||
        !centre
    ) {

        showNotification(
            "Please complete all procurement details."
        );

        return;

    }


    if (weight <= 0) {

        showNotification(
            "Weight must be greater than 0 kg."
        );

        return;

    }


    procurementData = {

        crop:
            crop,

        date:
            date,

        weight:
            weight,

        centre:
            centre

    };


    recommendedSlots =
        generateSlotRecommendation(
            procurementData
        );


    currentSlotIndex = 0;


    displaySlotRecommendation(
        recommendedSlots[
            currentSlotIndex
        ]
    );


    closeProcurementModal();

}


// ==========================================================
// SMART SLOT ENGINE
// ==========================================================

function generateSlotRecommendation(
    data
) {

    /*
        DEMO SMART SLOT ENGINE

        In the final production system,
        these slots should come from a backend
        containing real centre capacity,
        queue length and available timings.
    */


    const allSlots = [

        {
            time:
                "08:00 AM - 10:00 AM",

            queue:
                8
        },

        {
            time:
                "10:00 AM - 12:00 PM",

            queue:
                14
        },

        {
            time:
                "12:00 PM - 02:00 PM",

            queue:
                21
        },

        {
            time:
                "02:00 PM - 04:00 PM",

            queue:
                11
        },

        {
            time:
                "04:00 PM - 06:00 PM",

            queue:
                6
        }

    ];


    /*
        Small deterministic adjustment so
        different centres can show different
        queue estimates.
    */

    const centreOffset = {

        "Centre A":
            0,

        "Centre B":
            4,

        "Centre C":
            7

    };


    const offset =
        centreOffset[data.centre] || 0;


    const slots =
        allSlots.map(
            slot => ({

                time:
                    slot.time,

                queue:
                    slot.queue +
                    offset

            })
        );


    /*
        Heavier crop loads receive a slightly
        higher queue estimate in this demo.
    */

    if (data.weight > 1000) {

        slots.forEach(
            slot => {

                slot.queue += 3;

            }
        );

    }


    /*
        Lowest queue first.
    */

    slots.sort(
        (a, b) =>
            a.queue -
            b.queue
    );


    /*
        Return all available options so
        "Choose Another Slot" can work.
    */

    return slots.map(
        slot => ({

            date:
                data.date,

            time:
                slot.time,

            centre:
                data.centre,

            queue:
                slot.queue

        })
    );

}


// ==========================================================
// DISPLAY SLOT
// ==========================================================

function displaySlotRecommendation(
    recommendation
) {

    if (!recommendation) return;


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


    document
        .getElementById(
            "slotModal"
        )
        ?.classList.remove(
            "hidden"
        );

}


// ==========================================================
// CHOOSE ANOTHER SLOT
// ==========================================================

function chooseAnotherSlot() {

    if (
        !recommendedSlots.length
    ) {

        closeSlotModal();

        openProcurementModal();

        return;

    }


    currentSlotIndex++;


    if (
        currentSlotIndex >=
        recommendedSlots.length
    ) {

        currentSlotIndex = 0;

    }


    displaySlotRecommendation(
        recommendedSlots[
            currentSlotIndex
        ]
    );

}


// ==========================================================
// CLOSE SLOT
// ==========================================================

function closeSlotModal() {

    document
        .getElementById(
            "slotModal"
        )
        ?.classList.add("hidden");

}


// ==========================================================
// FORMAT DATE
// ==========================================================

function formatDate(
    dateString
) {

    if (!dateString) return "-";


    const date =
        new Date(
            `${dateString}T00:00:00`
        );


    return date.toLocaleDateString(
        currentLanguage === "hi"
            ? "hi-IN"
            : "en-IN",
        {

            day:
                "numeric",

            month:
                "short",

            year:
                "numeric"

        }
    );

}


// ==========================================================
// CONFIRM SLOT
// ==========================================================

function confirmSlot() {

    if (
        !currentUser ||
        !procurementData ||
        !recommendedSlots.length
    ) {

        return;

    }


    const selectedSlot =
        recommendedSlots[
            currentSlotIndex
        ];


    const finalData = {

        ...procurementData,

        recommendedTime:
            selectedSlot.time,

        queue:
            selectedSlot.queue,

        confirmedAt:
            new Date().toISOString(),

        status:
            "In Queue"

    };


    currentUser.procurement =
        finalData;


    /*
        Update user in users array.
    */

    users =
        users.map(
            user =>
                user.id ===
                currentUser.id
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


    procurementData =
        finalData;


    closeSlotModal();


    showProcurementStatus(
        finalData
    );


    setTimeout(
        () => {

            document
                .getElementById(
                    "procurementStatusSection"
                )
                ?.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

        },
        300
    );

}


// ==========================================================
// PROCUREMENT STATUS
// ==========================================================

function showProcurementStatus(
    data
) {

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
        data.status ||
        "In Queue"
    );


    updateStatusTimeline(
        data
    );

}


// ==========================================================
// STATUS TIMELINE
// ==========================================================

function updateStatusTimeline(
    data
) {

    const section =
        document.getElementById(
            "procurementStatusSection"
        );


    if (!section) return;


    const steps =
        section.querySelectorAll(
            ".status-step"
        );


    const lines =
        section.querySelectorAll(
            ".timeline-line"
        );


    /*
        RESET
    */

    steps.forEach(
        step => {

            step.classList.remove(
                "completed",
                "active"
            );

        }
    );


    lines.forEach(
        line => {

            line.classList.remove(
                "completed-line"
            );

        }
    );


    /*
        Registration
    */

    if (steps[0]) {

        steps[0].classList.add(
            "completed"
        );

    }


    /*
        Slot Confirmed
    */

    if (steps[1]) {

        steps[1].classList.add(
            "completed"
        );

    }


    if (lines[0]) {

        lines[0].classList.add(
            "completed-line"
        );

    }


    /*
        In Queue
    */

    if (steps[2]) {

        steps[2].classList.add(
            "active"
        );

    }


    if (
        data &&
        data.status ===
        "Completed"
    ) {

        steps[2]?.classList.add(
            "completed"
        );

        steps[2]?.classList.remove(
            "active"
        );

        steps[3]?.classList.add(
            "completed"
        );

        steps[4]?.classList.add(
            "completed"
        );

        lines.forEach(
            line =>
                line.classList.add(
                    "completed-line"
                )
        );

    }

}


// ==========================================================
// LOAD PREVIOUS PROCUREMENT
// ==========================================================

function loadProcurementStatus(
    user
) {

    const section =
        document.getElementById(
            "procurementStatusSection"
        );


    if (
        !user ||
        !user.procurement
    ) {

        section?.classList.add(
            "hidden"
        );

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


    mobileInputs.forEach(
        id => {

            const input =
                document.getElementById(
                    id
                );


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
                            .slice(
                                0,
                                10
                            );

                }
            );

        }
    );


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
                        .slice(
                            0,
                            12
                        );

            }
        );

    }

}


// ==========================================================
// EXISTING LOGIN
// ==========================================================

function checkExistingLogin() {

    const saved =
        localStorage.getItem(
            "samayKrishiLoggedInUser"
        );


    if (!saved) return;


    try {

        const savedUser =
            JSON.parse(saved);


        const actualUser =
            users.find(
                user =>
                    user.id ===
                    savedUser.id
            );


        if (
            actualUser &&
            actualUser.role ===
            "farmer"
        ) {

            currentUser =
                actualUser;

            openDashboard(
                actualUser
            );

        } else {

            localStorage.removeItem(
                "samayKrishiLoggedInUser"
            );

        }

    } catch (error) {

        console.error(
            "Session error:",
            error
        );

        localStorage.removeItem(
            "samayKrishiLoggedInUser"
        );

    }

}


// ==========================================================
// DASHBOARD TEXT
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
        .forEach(
            element => {

                const value =
                    element.getAttribute(
                        `data-${currentLanguage}`
                    );


                if (value !== null) {

                    element.textContent =
                        value;

                }

            }
        );

}


// ==========================================================
// LOCAL DATE
// ==========================================================

function getLocalDate() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        `${year}-${month}-${day}`
    );

}


// ==========================================================
// FINAL DEBUG
// ==========================================================

console.log(
    "%c Samay Krishi Portal Ready ",
    "background:#2ecc71;color:white;padding:7px;font-weight:bold;border-radius:4px;"
);

console.log(
    "Registered users:",
    users.length
);
